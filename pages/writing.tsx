import React from 'react';
import api from '../utils/api';
import WritingPreview from '../components/WritingPreview';
import H from '../components/H';

class Writing extends React.Component<WritingProps> {
  static async getInitialProps() {
    const posts = await api.getPosts();
    return { posts };
  }

  render() {
    return (
      <div>
        <div>
          <H>Writing</H>
        </div>
        {this.props.posts && (
          <ul className="writing-grid">
            {this.props.posts.map(({ title, date, slug, excerpt }) => (
              <li key={slug}>
                <WritingPreview
                  title={title}
                  date={date}
                  slug={slug}
                  excerpt={excerpt}
                />
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
    excerpt: string;
  }[];
}

export default Writing;
