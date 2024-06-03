import React from 'react';
import Header from '@/component/Header'
// import Link from 'next/link';
import Journal from '@/component/Journal';

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Journal />
    </main>
  )
}

export default Home;