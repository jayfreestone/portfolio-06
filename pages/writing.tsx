import React from 'react';
import Link from 'next/link';
import api from '../utils/api';

class Writing extends React.Component<WritingProps> {
  static async getInitialProps() {
    const posts = await api.getPosts();
    return { posts };
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.route}>
              <Link
                as={post.route}
                href={{
                  pathname: post.page,
                  query: post.query,
                }}
              >
                <a>
                  {post.meta.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

interface WritingProps {
  posts: {
    page: string;
    route: string;
    meta: {
      path: string;
      title: string;
      date: string;
    };
    query: {
      slug: string;
    };
  }[];
}

export default Writing;
