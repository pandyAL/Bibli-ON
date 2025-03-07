import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

function BookCard({ book }) {
    return(
        <div className="book-card">
            <h3 className="book-card__title">{book.title}</h3>
            <img src={book.cover} alt={book.title} className="book-card__cover" />
            <p className="book-card__author">Autor: {book.author}</p>
            <p className="book-card__year">Año: {book.year}</p>
            <button className="btn btn-primary book-card__button">Alquilar</button>
        </div>
    );
}

export default BookCard;