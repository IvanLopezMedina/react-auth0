import React, {useState, useEffect} from 'react';

const Private = ({auth}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/private', {
      headers: {Authorization: `Bearer ${auth.getAccessToken()}`},
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Network  response was not ok');
      })
      .then((response) => setMessage(response.message))
      .catch((error) => setMessage(error.message));
  }, [auth, message]);
  return <div>{message}</div>;
};

export default Private;
