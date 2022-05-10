import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import { useState } from "react";

const Expenses = (props) =>{
  const [filterYear, setFilterYear] = useState(2022);

  const fxExpense = (anExpense)=>{
  
    
    if(anExpense.date.getYear()+1900 == filterYear)
    {

      return(
        <ExpenseItem expense = {anExpense} />
      );
    }
    else{
        return (<div></div>)

    }
  }

  const updateFilterYear = (event) => {
    
    setFilterYear(event.target.value);
  };
  return(
    <div>

     <div> <ExpenseFilter filterYear={filterYear} updateFilterYear = {updateFilterYear} /> </div>
     <div>{props.data.map(fxExpense)}</div>
      

    </div>
  );

};

export default Expenses;