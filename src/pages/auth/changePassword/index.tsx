// src/ChangePassword.js

import { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const ChangePassword = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async (e) => {
    try {
      const token = await getAccessTokenSilently();

      const response = await axios.patch(
        `https://dev-yu54pv2xqmk1jjtx.au.auth0.com/api/v2/users/${user.sub}`,
        { password: newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('Password changed successfully');
    } catch (error) {
      setMessage('Error changing password: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleChangePassword}>
        <label>
          New Password:
          <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </label>
        <button type='submit'>Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
