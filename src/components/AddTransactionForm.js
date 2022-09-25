import React from "react";
import Transaction from "./Transaction";

function AddTransactionForm() {
  function handleSubmit(e){
  e.preventDefault();
  console.log(Transaction);
  }

  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input onChange={handleSubmit} type="date" name="date" />
          <input onChange={handleSubmit} type="text" name="description" placeholder="Description" />
          <input onChange={handleSubmit} type="text" name="category" placeholder="Category" />
          <input onChange={handleSubmit} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
