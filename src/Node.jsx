import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Node = (props) => {
  
  const deleteNote = () => {
    props.deleteIem(props.id);
  };
  
    return (
        <>
          <div className='note'>
            <h1> {props.title}</h1>    
             <br />
             <p> {props.content}</p>
             <button className='btn' onClick={deleteNote}>
             <DeleteIcon className='deleteIcon'/>
             </button>
          </div>  
        </>
    )
}

export default Node
