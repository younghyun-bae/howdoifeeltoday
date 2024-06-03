import Link from 'next/link';
import React from 'react';

const myShapes: React.FC = () => {
  return (
    <div>
      the stored shapes will be here
      <Link href='/'>Back to Home</Link>
    </div>
  );
}

export default myShapes;