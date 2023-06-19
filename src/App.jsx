import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './component/expenses/expense_item/ExpenseItem'
import ExpenseList from './component/expenses/expense_list/ExpenseList'
import NewExpense from './component/new_expense/NewExpense'

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
   const [expenses,setExpenses]=useState(DUMMY_DATA);    
  
  const onNewExpenseSubmit=(new_expense)=>{
   
      fetch('http://localhost:3000/expense',{
        method:'POST',
        body:JSON.stringify(new_expense)
      }).then((res)=>{
        setExpenses((previous_expenses=>[new_expense,...previous_expenses]));
      })
}
  
  useEffect(()=>{
    fetch('http://localhost:3000/expense')
    .then((res)=>{
      res.json().then((json)=>{
        console.log(json)
        setExpenses(json)
      })
    })
  },[])

  return (
    <div className="App">
      <NewExpense onNewExpenseSave={onNewExpenseSubmit}></NewExpense>
     <ExpenseList expenses={expenses}></ExpenseList>
    </div>
  )
}


export default App
