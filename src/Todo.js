import React, { useState } from 'react';
import { List, ListItem, ListItemText, Modal, Button  } from "@material-ui/core";
import db from "./firebase";
import DeleteForever from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);

    const handleOpen=()=> {
        setOpen(true);
    }

    const updateTodo=()=> {
        db.collection("todos").doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false)
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e=> setOpen(false)}
            >
                <div className="modal">
                    <h1>Update Your Todo</h1>
                    <input value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <Button onClick={updateTodo} color="secondary" variant="contained">Close</Button>
                </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                
                <ListItemText primary={props.todo.todo} secondary={"Date"}/>
            </ListItem> 
            <EditIcon onClick={handleOpen}></EditIcon>
            <DeleteForever style={{color: "red"}} onClick={e=> db.collection("todos").doc(props.todo.id).delete()}></DeleteForever>
        </List>
        </>
      
    )
}

export default Todo
