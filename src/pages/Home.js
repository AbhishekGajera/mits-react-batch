import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const onClickButton = () => {
    navigate('/expense')
  }

  const onClickBookButton = () => {
    navigate('/book')
  }

  const onClickCounter = () => {
    navigate('/counter')
  }

  return (
    <div>
        <div className='w-100 d-flex flex-column align-items-center justify-content-center my-4'>
          <button className="button" onClick={onClickButton}>Expense List</button>
          <button className="button" onClick={onClickBookButton}>Book List</button>
          <button className="button" onClick={onClickCounter}>Counter</button>
        </div>
    </div>
  )
}

export default Home