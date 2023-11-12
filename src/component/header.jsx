'use client';
import { React, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from "@/api/firebase";
import User from './user';

export default function Header() {
  const [user, setUser] = useState(); 

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <div>
      <h1>How do I feel today?</h1>
      <div>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </div>
  );
}

