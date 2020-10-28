import React, { useEffect, useState } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
const Comment=()=>{

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
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
            <Card.Header>Comment</Card.Header>
            <Card.Body>
                <div>
                <table>
                <tr>
                <th>PostId</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
                </tr>
                {items.map(item => (
                    <>
                    <tr>
                        <td> {item.postId}</td>
                        <td> {item.id}</td>
                        <td> {item.name}</td>
                        <td> {item.email}</td>
                        <td> {item.body}</td>
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
export default Comment;
