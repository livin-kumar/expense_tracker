import React from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const NewExpense =(props)=>{
    const {onNewExpenseSave}=props;
    
    const onAddExpense=(new_expense)=>{
    const modified_expense={
        ...new_expense,
        id:Math.random()*10
    };
    onNewExpenseSave(modified_expense)
    console.log('New Expense',modified_expense)
   }
 
    return (
    <div className="new-expense">
      <NewExpenseForm save={onAddExpense}></NewExpenseForm>
    </div>
  );
}

export default NewExpense;