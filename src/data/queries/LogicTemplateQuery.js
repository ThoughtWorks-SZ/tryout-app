/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import LogicTemplateType from '../types/LogicTemplateType';
import LogicTemplate from '../mongo/models/LogicTemplate';

const LogicTemplateQuery = {
  logicTemplates: {
    type: new List(LogicTemplateType),
    resolve() {
      return LogicTemplate.find();
    },
  },
};

export default LogicTemplateQuery;
