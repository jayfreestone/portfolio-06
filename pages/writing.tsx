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
        {this.props.posts.map(post => (
          <Link
            as={post.route}
            href={post.route}
            key={post.route}
          >
            <a>
              {post.meta.title}
            </a>
          </Link>
        ))}
      </div>
    );
  }
}

interface WritingProps {
  posts: {
    route: string;
    meta: {
      path: string;
      title: string;
      date: string;
    };
  }[];
}

export default Writing;
