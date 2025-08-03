import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} alt="" classname="logo"/>
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className="nav__link">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                        <span className="cart__length">2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link">Home</a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">Books</a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav