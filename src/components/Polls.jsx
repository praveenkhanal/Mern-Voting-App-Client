import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPolls, getUserPolls, deletePollAPI } from '../store/actions';

class Polls extends Component {
  constructor(props) { 
    super(props); 
    this.handleSelect = this.handleSelect.bind(this);
    }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
    }

    handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
    }
    handleDeletePoll(pollId) {
      this.props.deletePollAPI(pollId);
    }
    render() {
      const { auth, getPolls, getUserPolls } = this.props;
      const polls = this.props.polls.map(poll => (
        <li key={poll._id}>
          {poll.question}
         <button className='button' onClick={() => this.handleSelect(poll._id)} key={poll._id}>View</button>
         <button className='button' onClick={() => this.handleDeletePoll(poll._id)} key={poll._id + 1}>Delete</button>
        </li>
      ));
      return(
      <Fragment>
        {auth.isAuthenticated && (
          <div className='button_center'>
            <button className='button_polls' onClick={getPolls}>All polls</button>
            <button className='button_polls' onClick={getUserPolls}>My polls</button>
          </div>
        )}
        <ul className='polls' >{polls}</ul>
      </Fragment>
        );
      };
   }
export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls,
    }),
    { getPolls, getUserPolls, deletePollAPI },
  )(Polls);


  