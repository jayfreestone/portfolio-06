import React from 'react';
import Link from 'next/link';
import api from '../utils/api';

class Writing extends React.Component<WritingProps> {
  static async getInitialProps() {
    const posts = await api.getPosts();
    return { posts };
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        {this.props.posts && (
          <ul>
            {this.props.posts.map(post => (
              <li key={post.slug}>
                <Link
                  href={{
                    pathname: post.slug,
                  }}
                >
                  <a>
                    {post.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

interface WritingProps {
  posts: {
    slug: string;
    title: string;
    date: string;
  }[];
}

export default Writing;
