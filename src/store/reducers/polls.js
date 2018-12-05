import { SET_POLLS, SET_CURRENT_POLL, SET_DELETE_POLL } from '../actionTypes';

export const polls = (state = [], action) => {
  switch (action.type) {
    case SET_POLLS:
      const updatedState = [
        ...action.polls
      ];
      return updatedState;
    case SET_DELETE_POLL:
      const filteredState = state.filter((poll) =>poll._id !== action.pollId);
      return filteredState;
  default:
    return state;
  }
};

export const currentPoll = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_POLL:
    return action.poll;
  default:
    return state;
  }
};

  
