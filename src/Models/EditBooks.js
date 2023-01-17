import axios from 'axios'
import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

const EditBooks = ({ show, setShow , updateData , callback }) => {

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        const formData = {
            name : event.target.name.value,
            quantity : event.target.quantity.value,
            price : event.target.price.value
        }


        const URL = `${process.env.REACT_APP_BASE_URL}/book/${updateData.id}`

        try {
            await axios({
                method: 'PUT',
                url: URL,
                data : formData
              })

              toast.success('data updated succesfully')
              callback()
        } catch (error) {
            toast.error(error.message)
        }

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
                className="color-black"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Books
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={updateData.name} name="name" type="text" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control defaultValue={updateData.quantity} name="quantity" type="number" placeholder="Enter quantity" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label>Price</Form.Label>
                            <Form.Control defaultValue={updateData.price} name="price" type="number" placeholder="Enter price" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>

            </Modal>
        </div>
    )
}

export default EditBooks