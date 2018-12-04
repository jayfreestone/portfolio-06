import React from 'react';
import Link from 'next/link';
import H from './H';

const Header: React.FunctionComponent<HeaderProps> = ({ title, navItems }) => (
  <header className="site-header">
    <div className="site-header__inner">
      <H className="site-header__title">
        <Link
          href="/"
        >
          <a className="site-header__link">
            {title}
          </a>
        </Link>
      </H>
      <span className="site-header__contact">
        <a
          href="mailto:mail@jayfreestone.com"
          className="site-header__link"
        >
          mail@jayfreestone.com
        </a>
      </span>
      {navItems && (
        <nav className="site-header__nav">
          <ul>
            {navItems.map(({ link, label }) => (
              <li key={link}>
                <Link
                  href={link}
                >
                  <a className="site-header__link">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  </header>
);

export interface HeaderProps {
  title: string;
  navItems: {
    link: string,
    label: string,
  }[];
}

export default Header;
