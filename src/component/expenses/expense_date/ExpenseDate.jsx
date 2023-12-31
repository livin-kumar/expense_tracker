import React from "react"
import './ExpenseDate.css'

const ExpenseDate=(props)=>{
      
      const {date}=props; // from app.jsx -> ExpenseItem.jsx -> ExpenseDate.jsx
      const formattedDate = new Date(date)
      const month=formattedDate.toLocaleString('en-US',{month:'long'})
      const day=formattedDate.toLocaleString('en-US',{day:'numeric'})
      const year=formattedDate.getFullYear();
      
      return(
    <div className="expense-date">
         <div className="expense-date__month">{month}</div>  
         <div className="expense-date__day">{day}</div>  
         <div className="expense-date__year">{year}</div>    
    </div>
   )
};
export default ExpenseDate;