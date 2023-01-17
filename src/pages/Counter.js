import React , { useState , useEffect } from 'react'

const Counter = () => {

    const [count, setcount] = useState(0);


    useEffect(() => {
    }, [count]) // update
    


    const onClickPlus = () => {
        setcount( count + 1 )
    }

    const onClickMinus = () => {

        if(count > 0){
            setcount( count - 1 )
        }
    }

  return (
    <div className='d-flex justify-content-center'>
        <div className='mt-4 d-flex'>

            <button className='btn btn-info' onClick={onClickPlus}>+</button>

            <div className='p-2'>{ count }</div>

            <button className='btn btn-info' onClick={onClickMinus}>-</button>

        </div>
    </div>
  )
}

export default Counter