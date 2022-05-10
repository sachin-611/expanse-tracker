import { useState } from "react";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

const AddExpenseForm = (props) =>{

  const [formVisible, setFormVisible] = useState(false);

  const displayForm = () =>{
      setFormVisible(true);

  }

  const hideForm = () =>{
      setFormVisible(false);

  }

  const saveExpense = (event) =>{
    event.preventDefault();
    console.log('save expense called');
    console.log(event);

    let enteredTitle = event.target[1].value;
    let enteredAmount = event.target[2].value;
    let enteredDate = new Date(event.target[3].value);
  

    //  let enteredTitle = "Apple";
    //  let enteredAmount = 100;
    //  let enteredDate = new Date("2022-05-15");
  

    let exp = {
      id : Math.random,
      title : enteredTitle,
      amount : enteredAmount,
      date : enteredDate
    }

    props.onAdd(exp);
    hideForm();
  }

  return (
    <>
      <Button variant="primary" onClick={displayForm}>
        Add Expense
      </Button>
    
      <Modal show={formVisible}  onHide={hideForm} >
        <Form onSubmit={saveExpense}>
          <Modal.Header closeButton>
            <Modal.Title>Add Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type = "text" placeholder="...Fruits" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number" min = "1" placeholder="...250" />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date"  min = "2020-01-01" max = "2022-12-31"/>
                </Form.Group>
              </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideForm}> Close </Button>
            <Button variant="primary" type= "submit" > Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
      
    </>
  );
  
};

export default AddExpenseForm;