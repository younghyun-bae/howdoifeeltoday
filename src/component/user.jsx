import React from 'react';
import Image from 'next/image';

export default function User({ user: { photoURL, displayName } }) {
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

