import React, {useEffect, useState} from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transaction, setTransaction] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
     .then((resp)=> resp.json())
     .then(data => setTransaction(data.transaction))
  })


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
