import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <h1 className='logo'>Ge</h1>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+61406568829</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>jeffery.ge1234@gmail.com</span>
          </div>
          <div className='itemContainer'>
            <a
              href='https://github.com/GeGe1175'
              rel='noopener noreferrer'
              target='_blank'
            >
              <GitHubIcon className='icon' />
            </a>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
}
