import React, { useEffect, useState } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
const Album=()=>{

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
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
            <Card.Header>Album</Card.Header>
            <Card.Body>
                <div>
                <table>
                <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                </tr>
                {items.map(item => (
                    <>
                    <tr>
                        <td> {item.userId}</td>
                        <td> {item.id}</td>
                        <td> {item.title}</td>
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
export default Album;
