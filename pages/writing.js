import React from 'react';
import Link from 'next/link';
import api from '../utils/api';
import BaseLayout from '../components/layouts/BaseLayout';

class Writing extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await api.getPosts(req);
    return { posts };
  }

  render() {
    return (
      <BaseLayout>
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
      </BaseLayout>
    );
  }
}

export default Writing;

