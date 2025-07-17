import './App.css';

import Alert from 'react-bootstrap/Alert';
import Header from "./MyComponents/header";
import Footer from "./MyComponents/footer";
import Todos from "./MyComponents/todos";
import Todo from "./MyComponents/todo";


function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <Todo/>
      <Footer/>
    </>
  );
}

export default App;
