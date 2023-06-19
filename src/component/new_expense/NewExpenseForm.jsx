import React,{useState} from "react";
import './NewExpenseForm.css'

const NewExpenseForm=(props)=>{
 
    const {save}=props;
    let [title,setTitle]=useState('');
    let [amount,setAmount]=useState('');
    let [date,setDate]=useState('');

    const onTitleChangeHandler=(event)=>{
        setTitle(event.target.value);
     }

     const onAmountChangeHandler=(event)=>{
        setAmount(event.target.value);
     }
   
     const onDateChangeHandler=(event)=>{
        setDate(event.target.value);
     }
     
  const onFormSubmitHandler=(event)=>{
    event.preventDefault();
    const new_expense={
        title,amount,date: new Date(date)
    }
    save(new_expense);
    setTitle('')
    setDate('')
    setAmount('')
    console.log(title,amount,date)
  }

    return (
    <form onSubmit={onFormSubmitHandler}>
    <div className="new-expense__controls ">
        <div className="new-expense__control">
            <lable htmlFor="expense_title">Title</lable>
            <input type="text" id="expense_title" name="title" value={title} onChange={onTitleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <lable htmlFor="expense_amount">Amount</lable>
            <input type="number" id="expense_amount" min="0" max="100000" name="amount" value={amount}  onChange={onAmountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
            <lable htmlFor="expense_date">Date</lable>
            <input type="date" id="expense_date" name="date"value={date} onChange={onDateChangeHandler}></input>
        </div>
    </div>
     <div className="new-expense__actions">
        <button>Cancel</button>
        <button>Add Expense</button>
    </div>
</form>
   
    
    
 );
}

export default NewExpenseForm;