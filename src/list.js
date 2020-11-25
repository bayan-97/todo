/* eslint-disable no-lone-blocks */
import React, { useContext ,useState } from 'react';
import { SettingsContext } from './setteing';
       
 import { ListGroup,Modal,ButtonGroup,Button } from 'react-bootstrap';


function TodoList(props) {
  const context = useContext(SettingsContext);
  const [ itemsDisplay, setItemsDisplay ] = useState([]);
  
  // setItemsDisplay([props.list[0],props.list[1],props.list[2]])
  let numberOfPages = Math.ceil(props.list.length / context.itemsDisplay1);
  let numberOfPagesArr = [];
  for (let i = 0; i < numberOfPages; i++) {
    numberOfPagesArr[i] = i;
  }
  props.list.sort(function(a, b) {
    let sort=context.sort

    if (a[sort]< b[sort]) {
      return -1;
    }
    if (a[sort] > b[sort]) {
      return 1;
    }
  
    // names must be equal
    return 0;
  })
  let count;
  let eachPage=[]

  

  
function handle(i){
  console.log(i)
  if(i<numberOfPagesArr.length){
     i++
 
      count=i*context.itemsDisplay1
      for(let c=count-3;c<count;c++){
        console.log(i,count,count-3)
         if(props.list[c]){
    
           eachPage.push(props.list[c])
         }
       }
     setItemsDisplay(eachPage)
       console.log("page22",eachPage)
    // }
  // console.log("page",context.setItemsDisplay(eachPage))
       
  }
}
function handle2(i){

    let item = itemsDisplay.filter(item =>item.complete );

 
     setItemsDisplay(item)
       console.log("page22",item)
    // }
  // console.log("page",context.setItemsDisplay(eachPage))
       
  }

console.log("pageff",eachPage,context)



  // let i;


 


  

	return (
        <>
        <ul> 



        

   
            {
  
          itemsDisplay.map((item) => (
      

                    <Modal.Dialog>
                  <ListGroup.Item action   key={item._id} fluid="md">
             
               <Modal.Header closeButton  onClick = {() => props.handledelete(item._id)}>
                 
                 <Modal.Title>assigne: {item.assignee }</Modal.Title>
               
               </Modal.Header>
             
                
                
               <Modal.Body>
            
               <Modal.Title onClick = {() => props.handleComplete(item._id)}> {item.complete?"complete":"pending" }</Modal.Title>
               {item.text}
                     
               </Modal.Body>
               <Modal.Footer>
               difelecty: {item.difficulty }
 
  </Modal.Footer>
                     </ListGroup.Item>
                     </Modal.Dialog>
                    
     
          ))}
          <ButtonGroup aria-label="Third group">

             {numberOfPagesArr.map((item)=> <Button  onClick = {() =>handle(`${item}`)}  id={`${item+1}`} >
           
               {`${item+1}`}
               { console.log("bbbo",`${item+1}`)}
 
               </Button> )}
               <Button  onClick = {handle2} >filter our item
 
               </Button> )
        


  </ButtonGroup>

                
      </ul> 
     
        </>

        
	);
}

export default TodoList;
