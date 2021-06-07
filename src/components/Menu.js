import './menu.scss';
import { Link } from 'react-router-dom';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li>
          <Link to='/' onClick={() => setMenuOpen(false)}>
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to='/post' onClick={() => setMenuOpen(false)}>
            <button>Posts</button>
          </Link>
        </li>
        <li>
          <Link to='/project' onClick={() => setMenuOpen(false)}>
            <button>Projects</button>
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => setMenuOpen(false)}>
            <button>About</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
