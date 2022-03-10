import React, { useState } from "react";
import './index.css';
import Form from "./Component/Form";
import ListofExpenses from "./Component/ListofExpenses";

function App() {
  const expenseArr =[{
    description: 'pencil',
    price: 1.99,
    date: '29/03/2021',

  }]

  const [expenseList, setExpenseList] = useState(expenseArr);

  const addToExpenseList = (newExpenseItem) => {
    setExpenseList([...expenseList, newExpenseItem]);

  };

  const removeFromExpenseList = index => {
    const expenseArr = expenseList.filter((d, i) => i !== index)
    setExpenseList(expenseArr)
  }


  return (
    <>
    <div className="App">
      <h1>My expense app</h1>
      <Form handleAddExpense={addToExpenseList}/>
      <ListofExpenses expenseList = {expenseList} removeFromExpenseList={removeFromExpenseList}/>
      </div>

    </>
  );
}

export default App;
