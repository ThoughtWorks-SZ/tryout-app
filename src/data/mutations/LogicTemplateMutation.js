import {
  GraphQLID as ID,
} from 'graphql';

import LogicTemplateType from '../types/LogicTemplateType';
import LogicTemplate from '../mongo/models/LogicTemplate';

const LogicTemplateMutation = {
  addLogicTemplate: {
    type: LogicTemplateType,
    resolve() {
      const template = new LogicTemplate({});
      return template.save();
    },
  },
  deleteLogicTemplate: {
    type: LogicTemplateType,
    args: {
      id: {
        type: ID,
      },
    },
    resolve(root, { id }) {
      return LogicTemplate.findByIdAndRemove(id);
    },
  },
};

export default LogicTemplateMutation;
