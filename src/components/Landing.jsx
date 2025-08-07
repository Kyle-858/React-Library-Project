import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <h1>America's most awarded online library platform</h1>
                    <h2>Find your dream book with <span>Library</span></h2>
                    <Link to="/books">
                        <button className="btn">Browse books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" className="img" />
                </figure>
            </header>
        </section>
    )
}

export default Landing