/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
//import s from './Navbar.scss';
import Link from '../../Link/Link';
    //return(
    //  <div className={cx(s.root, className)} role="navigation">
    //    <label>ThoughtWorks学院</label>
    //    <Link className={s.link} to="/login">登录</Link>
    //    <Link className={cx(s.link, s.highlight)} to="/register">注册</Link>
    //  </div>
    //);

function Navbar({loggedin}) {

  const forRegisteredUser = <div><Link to="/login">登录</Link><Link to="/register">注册</Link></div>;
  const forNonRegisteredUser = <div><label>欢迎来到ThoughtWorks学院</label><Link to="/logout">注销</Link></div>;

  const textOnTheRight = loggedin == "true" ? forRegisteredUser : forNonRegisteredUser;
  return (
    <div role="navigation">
      <label>ThoughtWorks学院</label>
      {textOnTheRight}
    </div>
  );
}

export default (Navbar);
//export default withStyles(s)(Navbar);
