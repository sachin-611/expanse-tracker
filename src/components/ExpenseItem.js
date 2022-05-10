import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) =>{
  

  return(
    <Card className="text-center mb-3">
        <Card.Body>
          <Card.Text>
            <Row>
              <Col><ExpenseDate dt = {props.expense.date} /></Col>
              <Col xs={6} md={6} lg={6}> {props.expense.title}</Col>
              <Col><Badge bg="info">₹ {props.expense.amount}</Badge></Col>
            </Row>
        
          </Card.Text>
      </Card.Body>
    </Card>
  );

};

export default ExpenseItem;