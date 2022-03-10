import React from 'react';



const ListofExpenses = (props) => {
    let list = props.expenseList.map((d,i) => {
        return (
            <li>
               <p>{d.description}</p> 
                <p>{d.price}</p>
                <p>{d.date}</p>
                <button onClick={() => props.removeFromExpenseList(i)}> Delete</button>
            </li>


        )
    })

    return (
        <div>
            <h2>Added Expenses</h2>
       <ul>
        {list}
       </ul>
        </div>
    );
};

export default ListofExpenses;