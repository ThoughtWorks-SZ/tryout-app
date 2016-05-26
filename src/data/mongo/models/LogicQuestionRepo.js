import mongoose from 'mongoose';

const LogicQuestionRepo = mongoose.model('LogicQuestionRepo', {
  name: String,
  url: String,
});

export default LogicQuestionRepo;
