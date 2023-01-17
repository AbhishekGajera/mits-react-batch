import React , { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

const AddBook = () => {

  useEffect(() => {
    toast.success('Hellooooooo worllllllddd' , {
      autoClose : 1000000000
    })
  }, [])
  

  const naviagate = useNavigate()

  const onSubmit = async (event) => {
    event.preventDefault()

    const bookDetail = {
      id: new Date().getTime(),
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value
    }

    const URL = `${process.env.REACT_APP_BASE_URL}/book`
    
    try {
       await axios({
        method: 'POST',
        url: URL,
        data: bookDetail
      })
      alert('Data submitted successfully')
    } catch (error) {
      console.info(error)
      alert(error.message)
    }


    naviagate('/book')

    console.log("bookDetail++ ", bookDetail)
  }
  return (
    <div className='col-md-12 d-flex flex-column align-items-center justify-content-center my-4'>
      <h2>Add Book</h2>
      <Form onSubmit={onSubmit} className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter book name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="Enter Quantity" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Enter Price" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default AddBook