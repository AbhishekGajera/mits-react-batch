import React , { useState } from 'react'
import ExpenseFormControlled from '../components/ExpenseFormControlled'
import { ExpenseList } from '../components/ExpenseList'

const Expense = () => {
    const [list , setList ] = useState([])

  return (
    <div>
                    {/* <ExpenseForm list={list} setList={setList} /> */}

            <ExpenseFormControlled list={list} setList={setList} />
            <ExpenseList list={list} setList={setList} />
    </div>
  )
}

export default Expense