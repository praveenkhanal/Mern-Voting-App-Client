import React from 'react';
import Poll from '../components/Poll';
import ErrorMessage from '../components/ErrorMessage';
import { withRouter } from 'react-router-dom';
import CreatePoll from '../components/CreatePoll';
import Polls from '../components/Polls';
import Auth from '../components/Auth';


const TestPage = props => (
  <div>
   <h1> This is Praveen's React Polling App Testing Site</h1>
   <h2> Testing Error Component: </h2>
   <ErrorMessage />
   <hr />
   <h2> Testing Authentication component:</h2>
   <Auth />
   <hr />
   <h2> Testing Create Poll component:</h2>
   <CreatePoll />
   <hr />
   <h2> Testing Polls component: </h2>
   <Polls {...props} />
   <hr />
   <h2> Testing Poll component: </h2>
   <Poll />
   <hr />
  </div>
);

export default withRouter(TestPage);