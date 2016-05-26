/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Tabs from '../../components/Widget/Tabs/Tabs';
import s from './Home.scss';

const title = 'React Starter Kit';

function Home({}, context) {
  context.setTitle(title);
  return (
    <Tabs tabs={['全部', '未发布', '已发布']} data={['全部', '未发布', '已发布']} />
  );
}

Home.propTypes = {
  columnNames: PropTypes.array.isRequired,
  columnData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastModifyData: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    operation: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
