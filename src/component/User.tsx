import React from 'react';
import Image from 'next/image';

interface UserProps {
  user: {
    photoURL: string;
    displayName: string;
  }
}

export default function User({ user: { photoURL, displayName } }: UserProps) {
  return (
    <div>
      <Image 
        src={photoURL} 
        alt={displayName}
        width={30}
        height={30} 
        priority={false}
      />
      <span>{displayName}</span>
    </div>
  );
}

