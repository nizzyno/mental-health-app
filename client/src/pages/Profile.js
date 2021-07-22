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


  const handleKeyDown = e => {
    const inputName = e.target.getAttribute("name");
    const errorBox = document.querySelector("#profileErrorBox");
    let errorMessage = "";

    switch(inputName){
      case "profileUsername":
        if(e.target.value.length === 0)
          errorMessage = "Your username must be at least 1 character long."
        break;
      
      case "profileEmail":
        if(!e.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
          errorMessage = "Your email must be in an email format"
          break;

      case "profilePassword":
        if(!e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/))
          errorMessage = "Your password must be between 8 and 15 characters long containing one upper and lowercase letters, number, and special character."
        break;

      default: return;

      if(errorMessage)
        errorBox.innerText = errorMessage
    }
  }

  return (
  
  <div className="flex-column">
      <div id="profileErrorBox"></div>
      <h2>Profile:</h2>
      <form onSubmit={handleSubmit}>
        <div hidden="hidden" data-attribute={"" + user._id}></div>
        <label name="profileUsername">Username: </label>
        <input type="text" name="profileUsername" id="profileUsername" value={user.username} onKeyDown={handleKeyDown}></input>
        <label name="profileEmail">Email: </label>
        <input type="text" name="profileEmail" id="profileEmail" value={user.email} onKeyDown={handleKeyDown}></input>
        <label name="profilePassword">Password: </label>
        <input type="text" name="profilePassword" id="profilePassword" value={user.password} onKeyDown={handleKeyDown}></input>
        <button type="button" id="profileSubmitButton">Save</button>
      </form>
  </div>
  
  );
}

export default Profile;
