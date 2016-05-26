import mongoose from 'mongoose';

const LogicQuestionRule = mongoose.model('LogicQuestionRule', {
  level: Number,
  amount: Number,
  repo_id: String,
  template_id: String,
});

export default LogicQuestionRule;

