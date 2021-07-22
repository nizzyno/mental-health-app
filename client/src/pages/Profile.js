import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME, QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';

function Profile() {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (
    Auth.loggedIn() &&
    Auth.getProfile().data.username === userParam
  ) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return <div className="flex-column">
      <h2>Profile:</h2>
      <label></label>
  </div>;
}

export default Profile;
