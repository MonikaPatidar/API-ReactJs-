import React, { useEffect, useState } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
const User=()=>{
// Data Table Code
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
                        )
        }, [])
    // async function getdata()
    // {
    //     const response= await fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const data= await response.json();
    //     var obj = JSON.stringify(data);
    //     document.getElementById('p').innerHTML=obj;
    // }
    // getdata();

    return(
        <>
            <div className="AddDataButton">
             <Button variant="primary">Add</Button>
            </div>
            <div className="DataContainer">
            <Card>
            <Card.Header>User</Card.Header>
            <Card.Body>
                <div>
                <table>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>address
                  <th>Street</th>
                  <th>city</th>
                </th>
                </tr>
                {items.map(item => (
                    <>
                    <tr>
                        <td> {item.id}</td>
                        <td> {item.name}</td>
                        <td> {item.username}</td>
                        <td> {item.email}</td>
                        <td> {item.address.street}</td>
                        <td> {item.address.city}</td>
                        <td> <Button variant="link">Update</Button></td>
                        <td> <Button variant="link"><span style={{color:"red"}}>Delete</span></Button></td>
                    </tr>
                    </>
                ))}  
                </table>      
                {/* <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul> */}
                
                </div>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
            <div id="AddContainer">
      
            </div>
        </>
    );
            }

            



export default User;
