import React from 'react';
import image from '../background.jpg';
import './home.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Scholar Sportsman'],
    });
  }, []);

  return (
    <main className='intro'>
      <img
        src={image}
        alt='mountains'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex-col justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl font-bold cursive leading-none lg:leading-snug home-name'>
          Hello. I'm Jeffery
        </h1>
        <h3 id='home-h3'>
          <span ref={textRef}></span>
        </h3>
      </section>
    </main>
  );
}

export default Home;
