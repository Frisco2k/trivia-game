import './nav.css';
import { Link } from 'react-router-dom';

function Nav({ text }) {
  return (
    <div className="bg-black text-pink-500 flex h-25 items-center justify-evenly">
      <div>
       <Link to="/">
      <img className="rounded-full h-20" src="/logo.jpg" alt="logo" />
      </Link>
      </div>
      <div className="text-3xl">
        <h1>{text}</h1>
      </div>
      <div className="text-2xl border-sky-500 border-b-2">
        <Link to="/">Play</Link>
      </div>
      <div className="text-2xl border-sky-500 border-b-2">
        <Link to="/how-to-play">How To Play</Link>
      </div>
      <div className="text-2xl border-sky-500 border-b-2">
        <Link to="/about">About</Link>
      </div>
      <div className="text-2xl border-sky-500 border-b-2">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Nav;