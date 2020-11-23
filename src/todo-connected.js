
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import useajax from './ newajax.js';




const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {


 


  const [list, handleSubmitpost, handleSubmitput,handleSubmitdelete] = useajax();
  // console.log("bb",handleSubmitpost)
  console.log("gggg555",list)
  
  const _addItem = (item) => {
      console.log("gggg",item)

    handleSubmitpost('https://api-js401.herokuapp.com/api/v1/todo','post',item)
    // item.due = new Date();
    //  axios({
    //     method: 'post',
    //     url: 'https://api-js401.herokuapp.com/api/v1/todo',
    //     data: item,
    //     // headers: { 'content-type': 'application/x-www-form-urlencoded' }
    //   })
    //   .then(savedItem => {
    //     setList([...list, savedItem.data])
    //   })
    //   .catch(console.error);

  };

  const _toggleComplete = id => {
    

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;
         let url = `${todoAPI}/${id}`;
      console.log("ggggghhhg",id)
      handleSubmitput(`${url}`,'put',item)
    
     
      // axios({
      //   method: 'put',
      //   url: `${todoAPI}/${id}`,
      //   data: item,
      //   // headers: { 'content-type': 'application/x-www-form-urlencoded' }
      // })
      // .then(savedItem => {
      //     setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
      //   })
      //   .catch(console.error);

    }
  };
  const _toggledelete = (id) => {
    console.log("gggg",id)
    let item = list.filter(i => i._id === id)[0] || {};
    let url = `${todoAPI}/${id}`;
  handleSubmitdelete(`${url}`,'delete')
  // item.due = new Date();
  //  axios({
  //     method: 'post',
  //     url: 'https://api-js401.herokuapp.com/api/v1/todo',
  //     data: item,
  //     // headers: { 'content-type': 'application/x-www-form-urlencoded' }
  //   })
  //   .then(savedItem => {
  //     setList([...list, savedItem.data])
  //   })
  //   .catch(console.error);

};

  const _getTodoItems = (item) => {
  
    return !item.complete
  
  }


  return (
    <>
      <header>
        <h2>
          There are {list.filter(_getTodoItems).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          {console.log("ggggss",useajax()[0])}
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
