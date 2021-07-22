import React, { useState } from 'react';
import './Signin.css';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignIn = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData }
      });

      Auth.login(data.login.token);

      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }
  };


  return <div className="container"></div>;

};


export default SignIn;
