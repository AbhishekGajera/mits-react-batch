import './form.css'

const ExpenseForm = (props) => {


    // uncontrolled from
    const onSubmitHandler = (event) => {
        event.preventDefault()

        const expense = {
            title: event.target.title.value,
            amount: event.target.amount.value,
            date: event.target.date.value
        }

        props.setList([...props.list, expense])

        event.target.reset()

    }

    return (
        <div>
            <h1 class="title">Expense Tracker App ( uncontrolled )</h1>
            <section class="content">
                <h3 class="secondTitle">Add a new item: </h3>
                <div class="form">
                    <form id="expForm" onSubmit={onSubmitHandler}>
                        <div class="formLine left">
                            <span for="type">Title:</span>
                            <input type="text" name="title" placeholder="title" />
                        </div>
                        <div class="formLine right">
                            <span for="name">Amount:</span>
                            <input type="number" name="amount" placeholder="amount" />
                        </div>

                        <div class="formLine left">
                            <span for="date">Date:</span>
                            <input type="date" name="date" placeholder="date" />
                        </div>
                        <button type="submit" class="buttonSave">Add a new expense</button>
                    </form>
                </div>
            </section>
        </div>
    )
}


export default ExpenseForm