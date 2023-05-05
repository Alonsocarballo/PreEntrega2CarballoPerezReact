
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemlistContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar/> 
      <ItemCount initial={1} stock={10}   onAdd={(quantity) => console.log ('Cantidad Agregada', quantity)} />
          <Routes>
            <Route path='/' element ={<ItemListContainer/>}   />
            <Route path='/category/categoryid' element={ <ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/category/celular' element={<ItemListContainer category='celular'/>} />
            <Route path='/category/Tablets' element={<ItemListContainer category='Tablets'/>} />
            <Route path='/category/Notebook' element={<ItemListContainer category='Notebook'/>} />

            
            

            <Route path='*' element={<h1>404 NOT FOUND </h1>}/>

                     
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
