import './App.css';
import Homepage from './homepage';
import Navigation from './navbar';
import LandingPage from './landingPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"


function App() {
  return (
    <Container fluid className='application'>
        
        <Router>
          <Navigation/>
          <Routes>
          
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/names' element={<Homepage/>}/>
          </Routes>
        </Router>
           
    </Container>
    

    
  );
}

export default App;
