import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { LinkProps } from 'next-server/link';
import { withRouter, WithRouterProps } from 'next/router';

const NavLink: React.FunctionComponent<NavLinkProps> = ({
  router,
  children,
  activeClassName,
  ...props
}) => {
  const child = React.Children.only(children);
  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: classNames(
          child.props.className || '',
          router
            ? `/${router.pathname.split('/')[1]}` === props.href ? activeClassName : null
            : null,
        ),
      })}
    </Link>
  );
};

NavLink.defaultProps = {
  activeClassName: 'active',
};

interface NavLinkProps extends LinkProps, WithRouterProps {
  activeClassName?: string;
}

export default withRouter(NavLink);
