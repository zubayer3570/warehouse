import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/Items/ItemDetails/ItemDetails';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import MyItems from './components/MyItems/MyItems';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>
        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        <Route path='/add-item' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        route
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
