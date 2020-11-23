import React from 'react';
import './todo.scss';
import { Container,Col,Row,Navbar } from 'react-bootstrap';
import TodoForm from './form.js';
import TodoList from './list.js';
import {  useState, useEffect } from 'react';

function ToDo(props) {
  const [list, setList] = useState([]);

 const  addItem = (item) => {
     console.log(item)
    item._id = Math.random();
    item.complete = false;
  setList(  [...list, item])
  };
 const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let updateList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(updateList)
    }

  }
  
useEffect(() => {
        let list1 = [
        { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
        { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
        { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
        { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
        { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
      ];
  
    setList(list1);
  },[] );

  return (
    <>
     <Navbar bg="primary" variant="dark">
     <Navbar.Brand href="#home">HOME</Navbar.Brand>
     </Navbar>
     <Container fluid="md"> 
     <header>
        <Row> 
     < Col className="colfun">There are {list.filter(item => !item.complete).length} Items To Complete</Col>
    
     </Row>
    </header>
    <Row> 
     < Col ><Container className="todo">

<div>
  <TodoForm handleSubmit={addItem} />
</div>

<div>
  <TodoList
    list={list}
    handleComplete={toggleComplete}
  />
</div>
</Container></Col>
    
     </Row>
        </Container>

    </>
  );
}

export default ToDo;