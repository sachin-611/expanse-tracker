import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddExpenseForm from './components/AddExpenseForm';
import Expenses from './components/Expenses';
import {useState} from 'react';
import { Container, Navbar, Row, Col, Button } from 'react-bootstrap';

function App() {

  const [allExpenses, setAllExpenses] = useState(
    [
      { id : 'e1', title : 'Printer Cartridge', amount : 1200, date : new Date(2021, 3, 13) },
      { id : 'e2', title : 'Books', amount : 3100, date : new Date(2021, 3, 7) },
      { id : 'e3', title : 'Cold Drink', amount : 30, date : new Date(2021, 4, 23) },
      { id : 'e4', title : 'Mouse', amount : 350, date : new Date(2022, 5, 19) }

    ]);

  const submitHandler = (exp) => {
     console.log('in App.js')
     console.log(exp);

    //Here we are forming a new array that uses the array spread opeartor to 
    //include all the values of the old array followed by the new value. 
    setAllExpenses([...allExpenses, exp]);
    
  }

  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <AddExpenseForm onAdd = {submitHandler} />
              </Navbar.Text>
              </Navbar.Collapse>
    
              </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Expenses data = {allExpenses}/>
          </Col>
        </Row>
      </Container>
       
    </div>
  );
}

export default App;
