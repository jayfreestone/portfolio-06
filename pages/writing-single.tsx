import React from 'react';
import Link from 'next/link';
import api from '../utils/api';
import H from '../components/H';
import Section from '../components/Section';
import Html from '../components/Html';

class WritingSingle extends React.Component<WritingSingleProps> {
  static async getInitialProps({ query }) {
    const slug = query.slug;
    const post = await api.getPost(slug);
    return { post };
  }

  render() {
    const { meta, content } = this.props.post;
    return (
      <Section>
        <H>{meta.title}</H>
        <Html html={content} />
      </Section>
    );
  }
}

interface WritingSingleProps {
  post: {
    route: string;
    content: string;
    meta: {
      path: string;
      title: string;
      date: string;
    };
  };
}

export default WritingSingle;
