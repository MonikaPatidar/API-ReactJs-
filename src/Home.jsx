import React, { useEffect, useState } from 'react';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Home=()=>{

    /**Add Modal */ 
    const [ModalOpen, setModalOpen] = useState(false);
    /** End Add Modal */ 

    const [btnName, setbtnName] = useState("Submit");

    const [formVal, setformVal] = useState(" ");

    const setformValdata=(item)=>{
        setformVal(item.userId)
    }

  /**Value Fatch From API */  
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
                        )
        }, [])
    /** End Value Fatch From API */ 


    return(
        <>
{/* Add Modal */}        
            <div className="AddDataButton">
             <Button variant="primary" onClick={()=>{setModalOpen(true); setbtnName("Submit")}}>Add</Button>
            </div>

{/* Fatch API Data */}            
            <div className="DataContainer">
            <Card>
            <Card.Header>Home</Card.Header>
            <Card.Body>
            <div>
                <table>
                <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
                {items.map(item => (
                    <>
                    <tr>
                        <td> {item.userId}</td>
                        <td> {item.id}</td>
                        <td> {item.title}</td>
                        <td> {item.body}</td>
                        <td> <Button variant="" onClick={()=>{setModalOpen(true); setbtnName("Update"); setformValdata(item)}}>Update</Button></td>
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
            <div>
{/* End Fatch API Data */}

{/* Add Modal */}
            <Modal isOpen={ModalOpen} onRequestClose={()=>{setModalOpen(false)}}>
            
            {/* Add Form */}
            <form className="SignUp">

            <nav class="navbar navbar-light bg-light" className="AddDataHdng">
            <a class="navbar-brand" >Add Your Data</a>
            </nav>
                
            <div class="form-group">
            <label for="exampleInputEmail1">UserId</label>
            <input type="text" class="form-control" id="" name="name" defaultValue={formVal}></input>
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">Id</label>
            <input type="text" class="form-control" id=""  defaultValue={formVal}></input>
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control" id=""  defaultValue={formVal}></input>
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">Body</label>
            <input type="text" class="form-control" id=""  defaultValue={formVal}></input>
            </div>

            <button type="submit" class="btn btn-primary" onClick={()=>{setModalOpen(false)}}>{btnName}</button>

            </form>
            {/* End Add Form */}
{/* 
            <button onClick={()=>{setModalOpen(false)}}>close</button> */}
           </Modal> 
           </div>
{/*End Add Modal */}
        </>
    );
}
export default Home;
