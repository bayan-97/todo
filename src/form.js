
import { Button,Form } from 'react-bootstrap';
import useForm from './useform';


function TodoForm(props) {

const [ handleInputChange, handleSubmit] = useForm(props);


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
  

    </>
  );
}

export default TodoForm;