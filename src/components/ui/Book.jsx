import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState, useEffect } from 'react'
import Rating from './Rating.jsx'
import {Link} from "react-router-dom"

const Book = ({ book }) => {
    const [img, setImg] = useState()

    useEffect (() => {
        const image = new Image()
        image.src = book.url
        image.onload = () => {
            setTimeout(() => {
                setImg(image)
            }, 300)
        }
    }, [book.url])

    return (
        <div className="book">
            {img ? ( 
            <>
                <Link to={`/books/${book.id}`}>
                    <figure className="book__img--wrapper">
                        <img src={img.src} alt="" className="book__img"/>
                    </figure>
                </Link>
                <div className="book__title">
                    <Link to={`/books/${book.id}`} className="book__title--link">{book.title}</Link>
                </div>
                <Rating rating={book.rating}/>
                <div className="book__price">
                    {book.salePrice ? (
                        <>
                            <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                            {book.salePrice.toFixed(2)}
                        </>
                    ) : (
                        <>${book.originalPrice.toFixed(2)}</>
                    )}
                </div> 
            </>
            ) : (
            <>
                <div className="book__img--skeleton"></div>
                <div className="skeleton book__title--skeleton"></div>
                <div className="skeleton book__rating--skeleton"></div>
                <div className="skeleton book__price--skeleton"></div>
            </>
            )}
        </div>
    )
}

export default Book