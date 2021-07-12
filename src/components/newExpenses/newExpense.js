import React from 'react'
import './newExpense.css'
import ExpenseForm from './expenseForm'

const NewExpense =()=>{
    return(
        <div className='new-expense'>
            <form action="">
                <ExpenseForm/>
            </form>
        </div>
    )
};

export default NewExpense;