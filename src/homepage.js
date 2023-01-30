import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import Pagination from './pagination';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Search from './search';
import AddName from './addName'
import Form from 'react-bootstrap/Form'
import { FormGroup } from 'react-bootstrap';

function Homepage() {
  const [names, setNames] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  // State for collaps
  const [open, setOpen] = useState(false)
  // Search
  const [loading, setLoading] = useState(false);
  const [search, setSearchVal] = useState('')


  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:9292/baby_names')
      .then((res) => res.json())
      .then((data) => setNames(data))
    setLoading(false)
  }, [])

  // fetch(`http://localhost:9292/baby_names/${id}`,{
  //   method:"PATCH",
  //   headers:{
  //     "Content-Type":"Application/json"
  //   },
  //   body:{

  //   }
  // })

  // Get the current page
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentNames = names.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

  return (
    <Container fluid className="homepage">
      <Row className='searching'>
        <Col lg="2">
        </Col>
        <Col lg="6">
          <input
            className='input'
            type="text"
            placeholder='Search for a name...'
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </Col>
        <Col lg="2">
        </Col>
      </Row>
      <Row>
        <Col xs lg="8">
          {loading ? (
            <h1>LOADING...</h1>
          ) : (
            names.filter((value) => {
              if (search === "") {
                return value
              } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                return value
              }
            })
            .map((item)=>(
              <li key={item.id} className='names'>
              <Container>
                  <Row>
                      <Col lg="8">
                          <p id='single'>{item.name}</p>
                          <p>Gender: {item.gender}</p>
                      </Col>
                      <Col >
                         <Button 
                            onClick={()=>setOpen(!open)} 
                            aria-controls="control" 
                            aria-expanded={open} 
                            variant='outline-dark'>
                              Meaning</Button>
                            <Collapse in={open}>
                                <div id='control'>
                                    <h6 className="each">Origin: {item.origin}</h6>
                                    <h6 className='each'>Meaning: {item.meaning}</h6>
                                </div>
                            </Collapse>
                      </Col>
                  </Row>
              </Container>
          </li>
            ))
          )}
          <Pagination postsPerPage={postsPerPage} totalPosts={names.length} paginate={paginate} />
        </Col>
        <Col className='add'>
          ADD A NAME
          <AddName />
        </Col>

      </Row>
    </Container>
  )
}

export default Homepage;

{/* <ul>
{currentNames.map((name) =>(
  <li key={name.id} className='names'>
      <Container>
          <Row>
              <Col lg="8">
                  <p id='single'>{name.name}</p>
                  <p>Gender: {name.gender}</p>
              </Col>
              <Col >
                 <Button 
                    onClick={()=>setOpen(!open)} 
                    aria-controls="control" 
                    aria-expanded={open} 
                    variant='outline-dark'>
                      Meaning</Button>
                    <Collapse in={open}>
                        <div id='control'>
                            <h6 className="each">Origin: {name.origin}</h6>
                            <h6 className='each'>Meaning: {name.meaning}</h6>
                        </div>
                    </Collapse>
              </Col>
          </Row>
      </Container>
  </li>
))}
</ul> */}