
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ExpenseList = ({ list, setList }) => {

    const [show, setShow] = useState(false)
    const [updateData, setupdateData] = useState({
        id: '',
        title: '',
        date: '',
        amount: ''
    })

    const onClickDelete = (id) => {
        const filter = list.filter((i) => i.id !== id)
        setList(filter)
    }

    const onClickUpdate = (data) => {
        setupdateData(data)
        setShow(true)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()

        const expense = {
            id : updateData.id,
            title: event.target.title.value,
            amount: event.target.amount.value,
            date: event.target.date.value
        }

        const data = list.map((i) => {
            if(i.id === updateData.id){
                i = expense
            }

            return i
        })


        setList(data)
        setShow(false)

    }

    return (
        <div>

            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Expense
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control defaultValue={updateData.title} name="title" type="text" placeholder="Enter titile" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control defaultValue={updateData.amount} name="amount" type="number" placeholder="Enter amount" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label>Date</Form.Label>
                            <Form.Control defaultValue={updateData.date} name="date" type="date" placeholder="Enter Date" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>

            </Modal>

            <section class="content">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody id="expenseTable">
                        {
                            list.map((i, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{i.id}</td>
                                        <td>{i.title}</td>
                                        <td>{i.date}</td>
                                        <td>{i.amount}</td>
                                        <td>
                                            <button className="deleteButton" onClick={() => onClickDelete(i.id)}>Delete</button>
                                            <button className="updateButton" onClick={() => onClickUpdate(i)}>Update</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>



        </div>
    )
}

export { ExpenseList }

