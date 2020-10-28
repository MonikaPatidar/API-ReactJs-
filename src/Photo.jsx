import React, { useEffect, useState } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import axios from 'axios';



const Photo=()=>{

    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
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
            <Card.Header>Photo</Card.Header>
            <Card.Body>
                <div>
                <table>
                <tr>
                <th>AlbumId</th>
                <th>Id</th>
                <th>Title</th>
                <th>url</th>
                <th>thumbnailUrl</th>
                </tr>
                {items.map(item => (
                    <>
                    <tr>O
                        <td> {item.albumId}</td>
                        <td> {item.id}</td>
                        <td> {item.title}</td>
                        <td> {item.url}</td>
                        <td> {item.thumbnailUrl}</td>
                        <td> <Button variant="link">Update</Button></td>
                        <td> <Button variant="Danger" href="/AddUpdate"><span style={{color:"red"}}>Delete</span></Button></td>

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
export default Photo;
