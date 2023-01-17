import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Expense from './pages/ExpenseList';
import Home from './pages/Home';
import Header from './components/Header';
import Wheather from './pages/Wheather';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import Protected from './privateRoutes/Protected';
import Counter from './pages/Counter';


const App = () => {

    const [isLoggedIn, setisLoggedIn] = React.useState(false)

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
                <Header isLoggedIn={isLoggedIn} />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/expense' element={<Protected> <Expense /> </Protected>} />
                    <Route path='/wheather' element={<Wheather />} />
                    <Route path='/login' element={<Login setisLoggedIn={setisLoggedIn} />} />
                    <Route path='/book' element={<BookList />} />
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/addBook' element={<Protected> <AddBook /> </Protected>} />
                </Routes>
        </div>
    )
}

export default App;