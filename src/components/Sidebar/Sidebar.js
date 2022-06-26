import React, { useState, Fragments } from 'react';
import './index.css'
import { Link } from 'react-router-dom';

import NewStepForm from '../NewStepForm';
import StepList from '../StepList';

const Sidebar = () => {

  const [showw, setShoww] = useState(false)
  const [refresh, setRefresh] = useState(false);

  return (
    <main className={showw ? 'space-toggle' : null}>

      <header className={`header ${showw ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShoww(!showw)}>
          <i className="fas fa-bars fabars"></i>
        </div>
        <i className="app_title">Casino Steps</i>
        {/* <div></div> Added to leave hamburger menu on left and title on center */}
      </header>

      <aside className={`sidebar ${showw ? 'showw' : null}`}>
        <nav className='nav'>
          <div>
            <Link to="/" className="nav-link">
              <i className="fas fa-home-alt nav-link-icon"></i>
              <span className='nav-link-name'>Home</span>
            </Link>

            <div className='nav-list'>
              <Link to="/" className="nav-link">
                <i className="fas fa-shoe-prints nav-link-icon"></i>
                <span className='nav-link-name'>All steps</span>
              </Link>

              <Link to="/beginners" className="nav-link">
                <i className="fa-solid fa-b nav-link-icon"></i>
                <span className="nav-link-name">Beginners</span>
              </Link>

              <Link to="/intermediate" className="nav-link">
                <i className="fa-solid fa-i nav-link-icon"></i>
                <span className="nav-link-name">Intermediate</span>
              </Link>

              <Link to="/advanced" className="nav-link">
                <i className="fa-solid fa-a nav-link-icon"></i>
                <span className="nav-link-name">Advanced</span>
              </Link>

              <Link to="/hardcore" className="nav-link">
                <i className="fa-solid fa-h nav-link-icon"></i>
                <span className="nav-link-name">Hardcore</span>
              </Link>

              <Link to="/search" className="nav-link"> {/*Don't want a link, just a search bar*/}
                <i className="fa-solid fa-magnifying-glass nav-link-icon"></i>
                <span className="nav-link-name">Search</span>
              </Link>

              <Link to="/favourites" className="nav-link">
                <i className="fa-solid fa-heart nav-link-icon"></i>
                <span className="nav-link-name">Favourites</span>
              </Link>

              <Link to="/profile" className="nav-link">
                <i className="fa-solid fa-user nav-link-icon"></i>
                <span className="nav-link-name">Profile</span>
              </Link>

              <Link to="/login" className="nav-link">
                <i className="fa-solid fa-arrow-right-to-bracket nav-link-icon"></i>
                <span className="nav-link-name">Login</span>
              </Link>

              <Link to="/login" className="nav-link"> {/*Don't want a link, just a title*/}
                <i className="fa-solid fa-gear nav-link-icon"></i>
                <span className="nav-link-name">Administration</span>
              </Link>

              <Link to="/editsteps" className="nav-link active">
                <i className="fas fa-shoe-prints nav-link-icon"></i>
                <span className="nav-link-name">Steps</span>
              </Link>

              <Link to="/levels" className="nav-link">
                <i className="fa-solid fa-arrow-up-short-wide nav-link-icon"></i>
                <span className="nav-link-name">Levels</span>
              </Link>

              <Link to="/users" className="nav-link">
                <i className="fa-solid fa-people-group nav-link-icon"></i>
                <span className="nav-link-name">Users</span>
              </Link>

            </div> {/*enddiv classname nav-list*/}

          </div> {/*enddiv empty*/}

          <Link to="/login" className="nav-link">
            <i className="fa-solid fa-arrow-right-from-bracket nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>

        </nav>{/*enddiv classname nav*/}
      </aside>

      <NewStepForm refresh={refresh} setRefresh={setRefresh} />
      <StepList refresh={refresh} setRefresh={setRefresh} />


    </main>
  );
};


export default Sidebar