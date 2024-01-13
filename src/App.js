import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Pages/View';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<View/>}></Route>
          <Route path='/AddRecord' element = {<Add/>}></Route>
          <Route path='/EditRecord/:id' element = {<Edit/>}></Route>          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
