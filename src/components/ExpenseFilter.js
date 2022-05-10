import { Form } from "react-bootstrap";

const ExpenseFilter = (props)=>{
  return(
  <Form.Select value = {props.filterYear} onChange={props.updateFilterYear}>
    <option value="2020">2020 </option>
    <option value="2021">2021</option>
    <option value="2022" > 2022</option>
  </Form.Select>

  )


}

export default ExpenseFilter;