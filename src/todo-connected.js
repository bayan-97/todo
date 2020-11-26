import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import useajax from './ newajax.js';
import Auth from './authcontext.js';
import {  Row,Col,Container } from 'react-bootstrap';




const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = (props) => {


 

  const [list, handleSubmitpost, handleSubmitput,handleSubmitdelete] = useajax();

  console.log("props",props.condition)
  
  const _addItem = (item) => {
      console.log("gggg",item)

    handleSubmitpost('https://api-js401.herokuapp.com/api/v1/todo','post',item)


  };

  const _toggleComplete = id => {
    

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;
         let url = `${todoAPI}/${id}`;
      console.log("ggggghhhg",id)
     
      handleSubmitput(`${url}`,'put',item)


    }
  };
  
  const _toggledelete = (id) => {
  
    let url = `${todoAPI}/${id}`;
  handleSubmitdelete(`${url}`,'delete')


};

  const _getTodoItems = (item) => {
  
    return !item.complete
  
  }


  return (
    <>
      <Container collapseOnSelect expand="lg" variant="dark" fluid='md'>
      <Row>
     
     <Row>
  <Col  variant="dark" ><p>There are {list.filter(_getTodoItems).length} Items To Complete</p></Col>
          
      
     </Row>
    
    
      </Row>
     </Container>


    
   
    { console.log("props",props.condition)}
    
    
     
      <section className="todo">
      <Auth capability="create">
      <section className="todo">

     <div>
          <TodoForm handleSubmit={_addItem} />
        </div>
      </section>
       </Auth> 
      

     <div>
     <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handledelete={_toggledelete}
          />
        </div>
      </section>
    





    </>
  );
};

export default ToDo;
