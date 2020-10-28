import React, { useEffect, useState } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
const Todo=()=>{

    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
                        )
        }, [])

    return(
        <>
            <div className="AddDataButton">
             <Button variant="primary">Add</Button>
            </div>
            <div className="DataContainer">
            <Card>
            <Card.Header>Todo</Card.Header>
            <Card.Body>
                <div>
                <table>
                <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
                </tr>
                {items.map(item => (
                    <>
                    <tr>
                        <td> {item.userId}</td>
                        <td> {item.id}</td>
                        <td> {item.title}</td>
                        <td> {item.completed}</td>
                        <td> <Button variant="link">Update</Button></td>
                        <td> <Button variant="link"><span style={{color:"red"}}>Delete</span></Button></td>
                    </tr>
                    </>
                ))}  
                </table> 
                </div>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
           
        </>
    );
}
export default Todo;
