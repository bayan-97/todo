import React from 'react';
       
 import { ListGroup,Modal } from 'react-bootstrap';


function TodoList(props) {
	return (
        <>
        <ul> 
          {console.log("vvvd",props.list)}
            {props.list.map((item) => (
      

                    <Modal.Dialog>
                  <ListGroup.Item action   key={item._id} fluid="md">
             
               <Modal.Header closeButton  onClick = {() => props.handledelete(item._id)}>
                 
                 <Modal.Title>assigne: {item.assignee }</Modal.Title>
               
               </Modal.Header>
             
                
                
               <Modal.Body>
               <Modal.Title onClick = {() => props.handleComplete(item._id)}> {item.complete?"complete":"working" }</Modal.Title>
               {item.text}
                     
               </Modal.Body>
               <Modal.Footer>
               difelecty: {item.difficulty }
 
  </Modal.Footer>
                     </ListGroup.Item>
                     </Modal.Dialog>
                    
     
          ))}
                
      </ul> 
     
        </>
	);
}

export default TodoList;
