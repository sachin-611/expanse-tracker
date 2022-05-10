import { Card } from "react-bootstrap";
const ExpenseDate = (props) =>{
  const day = props.dt.toLocaleString("en-IN", {day: "2-digit"})
  const month = props.dt.toLocaleString("en-IN", {month: "short"})
  const year = props.dt.toLocaleString("en-IN", {year: "numeric"})

  return(

    <Card border="info" style={{ width: '6rem' }}>
      <Card.Header>{month}</Card.Header>
      <Card.Body>
        <Card.Title>{day}</Card.Title>
        <Card.Text>
          {year}
        </Card.Text>
      </Card.Body>
    </Card>

  )

};

export default ExpenseDate;