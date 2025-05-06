import React from 'react';

import styles from './Header.css';

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <a href="index.php" className="logo d-flex">
            <i className="fa-solid fa-handshake"></i>
            <span className="logo-texto">ConectaCaiçara</span>
          </a>

          <i className="fas fa-bars" id="btn-menu"></i>

          <ul className="menu" id="menu-mobile">
            <li>
              <a className="nav-link" href="index.php">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="nos.php">
                Sobre
              </a>
            </li>
            <li>
              <a className="nav-link" href="services.php">
                Serviços
              </a>
            </li>
            <li>
              <a className="nav-link" href="portfolio.php">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="blog.php">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-link" href="login.php">
                <i className="fa-solid fa-user"></i>
                <span>Login</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
