import logo from './logo.svg';
import './App.css';
import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';
import List from './list';

const style = {
  height: 20,
  border: "1px solid green",
  margin: 6,
  padding: 8
};


function App() {
  const arr = [];
  const [start,setStart] = useState(1);
  const [end,setEnd] = useState(25);
  console.log('arr:', arr)
  const [items,setItems] = useState(new Array(25).fill(0));


  console.log('items:', items)

  const loadFunc = () => {
    console.log("Hi")
    setTimeout(() => {
      
    setItems(items.push(new Array(25)));  
    setStart(start)
    }, 1000);
  };

  return (
    <div className="App">
        <div className="container">
        <div className="row">
          <div className="col-6 justify-content-center my-5">
          <List/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;