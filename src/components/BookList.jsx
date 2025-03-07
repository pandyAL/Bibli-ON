import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import "./BookList.css";

function BookList() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    <SearchBar />
    useEffect(() => {
        const fakeApiData = [
            { 
                id: 1,
                title: "El Principito",
                author: "Antoine de Saint-Exupéry",
                year: 1943,
                isbn10: "1234567890",
                isbn13: "1234567890123",
                cover: "https://via.placeholder.com/150",
                synopsis: "Un clásico de la literatura infantil.",
                reviews: ["Excelente libro", "Muy recomendado"],
            },

            { 
                id: 2, 
                title: "Cien Años de Soledad", 
                author: "Gabriel García Márquez" 
            },
            { 
                id: 3, 
                title: "1984",
                author: "George Orwell" 
            },
        ];
        setBooks(fakeApiData);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );


    return (
        <div className="book-list">
            <h2 className="book-list__title">Libros Disponibles</h2>
                <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
            <div className="book-list__grid">
                {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default BookList;