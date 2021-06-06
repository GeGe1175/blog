import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
  return (
    <header className='bg-blue-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            className='inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest'
          >
            Jeffery
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
          >
            Posts
          </NavLink>
          <NavLink
            to='/project'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://open.spotify.com/user/22aesxj5i6n5osxpg3j7f4kty?si=f32cfa4f6d344455'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.instagram.com/gege_1175/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://github.com/GeGe1175'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
