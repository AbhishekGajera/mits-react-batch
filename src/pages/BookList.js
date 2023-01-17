import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import EditBooks from '../Models/EditBooks'
import { toast } from 'react-toastify'

// mounting
// updating
// unmounting

const BookList = () => {

  const [books, setBooks] = useState([])
  const [show, setShow] = useState(false)
  const [data, setdata] = useState({})

  useEffect(() => { // mounting
    getData()
    toast.success('user entered in book list component')

    return () => {
      toast.error('user leaved book list component') // unmounting
    }
  }, [])

  const getData = async () => {

    const URL = `${process.env.REACT_APP_BASE_URL}/book`

    const data = await axios({
      method: 'GET',
      url: URL
    })

    setBooks(data.data)
  }


  const navigate = useNavigate()

  const onClickBook = () => {
    navigate('/addBook')
  }

  const onClickDelete = async (id) => {
    const URL = `${process.env.REACT_APP_BASE_URL}/book/${id}`

    await axios({
      method: 'DELETE',
      url: URL
    })

    getData()
  }

  const onClickEdit = (values) => {
    setShow(true)
    setdata(values)
  }

  const callback = () => {
    getData()
  }

  return (
    <div className='book-table'>

      <EditBooks
        show={show}
        setShow={setShow}
        updateData={data}
        callback={callback}
      />

      <div className='d-flex justify-content-center'>
        <button className="button" onClick={onClickBook}>Add book</button>
      </div>

      List of book

      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>delete / Edit</th>
        </tr>
        {books.map((book) => {
          return (
            <tr>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.quantity}</td>
              <td>{book.price}</td>
              <td>
                <button className='btn btn-success w-25 book-btn' onClick={() => onClickEdit(book)}>Edit</button>
                <button className='btn btn-danger w-25 book-btn' onClick={() => onClickDelete(book.id)}>Delete</button>
              </td>
            </tr>
          )
        })

        }
      </table>
    </div>
  )
}

export default BookList