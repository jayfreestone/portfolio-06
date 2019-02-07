import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import getConfig from 'next/config';
import H from '../H';
import Section from '../Section';
import Prose from '../Prose';
import Image from '../Image';
import formatWritingDate from './../../utils/formatWritingDate';

const { publicRuntimeConfig: { URL } } = getConfig();

const WritingSingle: React.FunctionComponent<WritingSingleProps> = ({
  children,
  meta,
}) => (
  <div className="container">
    <div className="writing-single">
      <Head>
        <title>{meta.title} | Jay Freestone</title>
        <meta
          name="description"
          content={meta.excerpt}
        />
        <meta
          name="twitter:title"
          key="twitter:title"
          property="og:title"
          content={`${meta.title} | Jay Freestone`}
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={meta.excerpt}
        />
        <meta
          property="og:title"
          key="og:title"
          content={`${meta.title} | Jay Freestone`}
        />
        {meta.previewImage && (
          <Fragment>
            <meta
              name="twitter:image"
              key="twitter:image"
              content={`${URL}${meta.previewImage}`}
            />
            <meta
              property="og:image"
              key="og:image"
              content={`${URL}${meta.previewImage}`}
            />
          </Fragment>
        )}
      </Head>
      <article>
        <header className="writing-single__header">
          <H>{meta.title}</H>
          <div className="writing-single__meta">
            <time dateTime={meta.date}>
              Published {formatWritingDate(meta.date)}
            </time>
          </div>
        </header>
        <Section>
          <Prose>
            {children}
          </Prose>
        </Section>
      </article>
      <div className="writing-single__author">
        <div className="authorship">
        <Prose>
          <h3 className="authorship__title">About Jay</h3>
          <Image
            className="authorship__image"
            src="/static/img/jay-freestone-avatar.jpg"
            alt="Jay Freestone in Basel"
            width={100}
            height={100}
          />
          <div className="authorship__copy">
            <p>
              I'm a front end developer living and working in East London. Currently building enterprise web-apps at Browser London. <Link href={{ pathname: '/' }}><a>Read full bio.</a></Link>
            </p>
          </div>
        </Prose>
        </div>
      </div>
    </div>
  </div>
);

interface WritingSingleProps {
  meta: {
    title: string;
    date: string;
    excerpt: string;
    previewImage: string;
  };
}

export default WritingSingle;
