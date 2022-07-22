import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import Addtodo from "./Components/Addtodo";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { useState, useEffect } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo) => {
    console.log("I am delted", todo);
    setTodos(todos.filter((e) => {
        return e !== todo;
      }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={
      <>
        <Addtodo addTodo={addTodo} />
        <Todo todos={todos} onDelete={onDelete} />
      </>}/> 
      <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
