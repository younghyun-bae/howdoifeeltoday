'use client';
import React, { useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from "@/api/firebase";
import User from './User';
import Button from './Button';
import Link from 'next/link';
import { PiShapes } from "react-icons/pi";

interface UserType {
  uid: string;
  email: string;
  photoURL: any;
  displayName: any;
  // user properties
}

export default function Header() {
  const [user, setUser] = useState<UserType | null>(null); 

  useEffect(() => {
    onUserStateChange((user: UserType | null) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <div>
      <Link key='main page' href='/'>
        <h1>How do I feel today?</h1>
      </Link>
      <div>
        {}
        <Link key='user shapes' href='/myshapes'>
          <PiShapes />
        </Link>
        {user && <User user={user} />}
        {!user && <Button text={'login'} onClick={login} />}
        {user && <Button text={'logout'} onClick={logout} />}
      </div>
    </div>
  );
}

