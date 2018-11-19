import React from 'react';
import { Link } from 'gatsby';
import H from './H';

const Header: React.SFC<HeaderProps> = ({
  title,
  navItems,
}) => (
  <header className="site-header">
    <div className="site-header__inner">
      <H className="site-header__title">
        <Link
          to="/"
          className="site-header__link"
        >
          {title}
        </Link>
      </H>
      <nav className="site-header__nav">
        <ul>
          {navItems.map(({ link, label }) => (
            <li key={link}>
              <Link
                to={link}
                className="site-header__link"
                activeClassName="site-header__link--is-active"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span className="site-header__contact">
        <a
          href="mailto:mail@jayfreestone.com"
          className="site-header__link"
        >
          mail@jayfreestone.com
        </a>
      </span>
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
