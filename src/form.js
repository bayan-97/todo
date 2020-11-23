
import { Button,Form } from 'react-bootstrap';
import useForm from './useform';


function TodoForm(props) {
//   const [item, setItem] = useState({});
//  const handleInputChange = e => {
//      console.log("vv",e.target)
//     setItem({...item, [e.target.name]: e.target.value } )
//     console.log("vv",item)
//   };
const [item, handleInputChange, handleSubmit] = useForm(props);

// const  handleSubmit = (e) => {
//     e.preventDefault();
//     e.target.reset();
//     console.log("itemform",item)
//    props.handleSubmit(item);
//     const item1 = {};
//     setItem({item:item1})
//   };
  return (
    <>
    <form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicEmail" fluid="md">
    <Form.Label><span>To Do Item</span>
    <Form.Control name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange} />
    </Form.Label>
    <Form.Label><span>Difficulty Rating</span>
    <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange}  />
    </Form.Label>
    <Form.Label><span>Assigned To</span>
    <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}  />
    </Form.Label>
    <Button variant="primary" type="submit">
    Add Item
  </Button>
  </Form.Group>
  </form>
  
       {/* <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <button>Add Item</button>
        </form> */}
    </>
  );
}

export default TodoForm;