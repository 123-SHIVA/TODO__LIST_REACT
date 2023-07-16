import React, { useState } from "react";
import './Todolist.css'


function Todolist () {

    const[input,setInput]=useState("");
    const [item,setItem]=useState([])

    const addItem=(e)=>{
        e.preventDefault();
        setInput(e.target.value)
        console.log(input)
    }

    const addTodo=()=>{
        setItem((oldItems)=>{ 
            return[...oldItems,input];
             console.log([...oldItems,input])
            
        })
    }
    

    const removeTodo=(i)=>{
        
        
            const arr = item.filter((item, index)=>{
                return index!=i;
           
        })
        setItem(arr); 
    }

    

    return(

        <div >

            <h2>My ToDo</h2>
            <div className="todo-add">
                <input id="todo-input"  type="text" placeholder="Enter task here"   onChange={addItem} />
                <button id="add-todo" onClick={addTodo}>Add Todo</button>
            </div>
        
        <div className="todo-list-container">    
            
            {
                item.map((newItem, index)=>{
                    return(
                        <div className="todo-card">
                             <p>{index+1}. {newItem}</p> chalo ho gaya na aur kuchh hai
                            <p>status: </p>
                        <div>
    
                            <button id="edit">Change Status</button>
                            <button id="remove" onClick={()=>{removeTodo(index)}}>remove</button>
                        </div>
                        </div>
                        )
                

                })
            }
        </div>

        </div>
    );

}

export default Todolist;