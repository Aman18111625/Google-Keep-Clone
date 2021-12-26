import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Node from './Node';

const App = () => {
  const [addItem , setAddItem] = useState([]);
  const addNote = (note) => {
  //  alert('I am Clicked');
      setAddItem((prevData)=>{
        return [...prevData, note];
      });
    //  console.log(note);
  };


  const onDelete= (id) => {
    setAddItem((olddata) => 
      olddata.filter((currdata,idx) => {
          return idx !== id;
      })
    );
  };

  return (
  <>
    <Header/>
    <CreateNote passNote={addNote} />
     {
       addItem.map((val,index) => {
         return (
           <Node 
             key={index}
             id={index}
             title={val.title}
             content={val.content}
             deleteIem={onDelete}
           />
         );
       })}
    <Footer/>
  </>
);
};

export default App;