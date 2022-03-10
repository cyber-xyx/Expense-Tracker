import React, { useState } from 'react';

const Form = ({handleAddExpense}) => {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    const handleDescriptionAdd = (event) => {
        setDescription(event.target.value) 
    }

    const handlePriceAdd = (event) => {
        setPrice(event.target.value) 
    }

    const handleDateAdd = (event) => {
        setDate(event.target.value) 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newExpenseItem = {
            description,
            price,
            date};
        handleAddExpense(newExpenseItem);
        };

    return (
        <>
        <form className = "container" onSubmit={handleSubmit}>
        <input value={description} placeholder="description" type="text" onChange={handleDescriptionAdd} />
        <p><input value={price} placeholder="Price" type="number" onChange={handlePriceAdd}/></p>
        <p><input value={date} placeholder="Date" type="date" onChange={handleDateAdd}/></p>
        <button type="submit">Add</button>
        </form>
        </>
    );
};

export default Form;