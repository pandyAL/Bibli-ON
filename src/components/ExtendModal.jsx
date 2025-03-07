import React, { useState } from "react";
import "./ExtendModal.css";


function ExtendModal({ book, onClose, onExtendRental }) {
    const [newDueDate, setNewDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onExtendRental(book.id, newDueDate);
    };

    return (
        <div className="extend-modal">
            <div className="extend-modal__content">
                <h3 className="extend-modal__title">Extender plazo para {book.title}</h3>
                <form onSubmit={handleSubmit} className="extend-modal__form">
                    <input 
                        type="date"
                        value={newDueDate}
                        onChange={(e) => setNewDueDate(e.target.value)}
                        className="extend-modal__input"
                        required
                    />
                    <button type="submit" className="extend-modal__button">
                        Extender
                    </button>
                </form>
                <button onClick={onClose} className="extend-modal__button">
                    Cancelar
                </button>
            </div>
        </div>
    );    
}

export default ExtendModal;