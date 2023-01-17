import { useState } from 'react';
import './form.css'

const ExpenseFormControlled = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(null)
    const [date, setDate] = useState('')


    // controlled from

    const onClickHandler = () => {
        const list = {
            id : Math.floor((Math.random() * 1000000)),
            title ,
            amount,
            date
        }

        props.setList([ ...props.list , list])

        setTitle('')
        setAmount('')
        setDate('')
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onChangeDate = (event) => {
        setDate(event.target.value)
    }

    return (
        <div>
            <h1 class="title">Expense Tracker App ( controlled )</h1>
            <section class="content">
                <h3 class="secondTitle">Add a new item: </h3>
                <div class="form">
                    <form id="expForm">
                        <div class="formLine left">
                            <span for="type">Title:</span>
                            <input type="text" name="title" placeholder="title" value={title} onChange={onChangeTitle} />
                        </div>
                        <div class="formLine right">
                            <span for="name">Amount:</span>
                            <input type="number" name="amount" placeholder="amount" value={amount} onChange={onChangeAmount} />
                        </div>

                        <div class="formLine left">
                            <span for="date">Date:</span>
                            <input type="date" name="date" placeholder="date" value={date} onChange={onChangeDate} />
                        </div>
                        <br />
                        <button type="button" onClick={onClickHandler} class="buttonSave">Add a new expense</button>
                    </form>
                </div>
            </section>
        </div>
    )
}


export default ExpenseFormControlled