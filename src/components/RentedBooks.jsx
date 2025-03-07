import React, { useState } from "react";
import ExtentModal from "./ExtendModal";
import "./RentedBooks.css";


function RentedBooks() {
    const [rentedBooks, setRentedBooks] = useState([
        { id: 1, title: "El Principito", dueDate: "2023-12-01" },
    ]);
    const [selectedBook, setSelectedBook] = useState(null);

    const extendRental = (bookId, newDueDate) => {
        setRentedBooks(
            rentedBooks.map((book) => 
                book.id === bookId ? { ...book, dueDate: newDueDate } : book
            )
        );
        setSelectedBook(null);
    };

    return (
        <div className="rented-books">
            <h2 className="rented-books__title">LibroS Alquilados</h2>
            {rentedBooks.map((book) => (
                <div key={book.id} className="rented-books__item">
                    <h3 className="rented-books__title">{book.title}</h3>
                    <p className="rented-books__due-date">Fecha de entrega: {book.dueDate}</p>
                    <button
                        className="rented-books__button"
                        onClick={() => setSelectedBook(book)}
                    >
                    Extender plazo
                    </button>
                </div>
            ))}
        
        {selectedBook && (
        <ExtentModal
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
            onExtendRental={extendRental}
        />
        )}     
        </div>
    );
}

export default RentedBooks;