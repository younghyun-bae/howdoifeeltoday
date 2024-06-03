import React from 'react';

interface ButtonProps {
  text: String;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

