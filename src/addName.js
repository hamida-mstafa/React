import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Container, FormGroup } from 'react-bootstrap';

function AddName(){
    const [name, setName] = useState({
        name:"",
        gender:"",
        origin:"",
        meaning: ""
    });

    const handleChange = (e) =>{
        console.log(e)
        setName({
            ...name,
            [e.target.name]:e.target.value            
        })
    };

    const handleSubmit = (e) =>{   
        e.preventDefault()
        fetch('http://localhost:9292/baby_names',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name : name.name,
                gender : name.gender,
                origin : name.origin,
                meaning : name.meaning
            })  
        }        
        )
        alert("Name added")

    }





    return(
        <>
            <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='poster'>
                    <Form.Control 
                        placeholder='Name'
                        name="name"
                        value={name.name}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className='poster'>
                    <Form.Control 
                        placeholder='Gender'
                        name="gender"
                        value={name.gender}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className='poster'>
                    <Form.Control 
                        placeholder='Origin'
                        name="origin"
                        value={name.origin}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className='poster'>
                    <Form.Control 
                        placeholder='Meaning'
                        name="meaning"
                        value={name.meaning}
                        onChange={handleChange} />
                </Form.Group>
                <Button className='poster' type='submit' variant="outline-dark">Add name</Button>
            </Form>
            </Container>
        </>
    )
}

export default AddName;