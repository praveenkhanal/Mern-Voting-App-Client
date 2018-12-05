import api from '../../services/api';
import { SET_POLLS, SET_CURRENT_POLL, SET_DELETE_POLL } from '../actionTypes';
import { addError, removeError } from './error';

export const setPolls = polls => ({
  type: SET_POLLS,
  polls,
});

export const setCurrentPoll = poll => ({
  type: SET_CURRENT_POLL,
  poll,
});

export const deletePolls = pollId => ({
  type: SET_DELETE_POLL,
  pollId,
});
export const getPolls = () => {
  return async dispatch => {
    try {
    const polls = await api.call('get', 'polls');
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
    };
  };

export const getUserPolls = () => {
  return async dispatch => {
    try {
      const polls = await api.call('get', 'polls/user');
      console.log('ACTION POLLS ', polls)
      dispatch(setPolls(polls));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const createPoll = data => {
  return async dispatch => {
    try {
      const poll = await api.call('post', 'polls', data);
      console.log('CREATE POLL ', poll)
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};

export const deletePollAPI = pollId => { 
  return async dispatch => {
    try { 
      const poll = await api.call('delete', 'polls/' + pollId);
      console.log('DELETE POLL ', poll);

      dispatch(DeletePoll(pollId));
      
      dispatch(removeError());
      } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
  }
};
};

export const getCurrentPoll = path => {
  return async dispatch => {
    try {
      const poll = await api.call('get', `polls/${path}`);
      console.log(poll)
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
export const vote =(path, data) => {
  return async dispatch => {
    try {
      const poll = await api.call('post', `polls/${path}`, data);
      dispatch(setCurrentPoll(poll));
      dispatch(removeError());
      }catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};


export const DeletePoll = pollId => { 
   return async dispatch => {
      try { 
        dispatch(deletePolls(pollId));
        
        dispatch(removeError());
        } catch (err) {
        const error = err.response.data;
        dispatch(addError(error.message));
    }
  };
};



