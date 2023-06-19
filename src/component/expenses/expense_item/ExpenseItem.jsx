import React, { useState } from "react"
import './ExpenseItem.css'
import ExpenseDate from "../expense_date/ExpenseDate";

const ExpenseItem=(props)=>{
      
      const {title,amount,date}=props; // from app.jsx
      let modify = title;
      
      return(
    <div className="expense-item">
           <ExpenseDate
           date={date}></ExpenseDate>
        
           <div className="expense-item__description">
               <h2>{modify}</h2>
               <div className="expense-item__price">${amount}</div>
           </div>
           
    </div>
      )
};
export default ExpenseItem;

//const[modify,setModifiedTitle]=useState(title) // modify title when click function executed

// put below code in return div
/*<button onClick={()=>{
                setModifiedTitle('update');
           }}>Update</button>
*/