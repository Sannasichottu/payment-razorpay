import './App.css';
import React, { useState } from 'react';



function App() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(amount === ""){
      alert("please enter amount");
    }else {
      var options = {
        key:"rzp_test_IZ9tQ0mkNtPcTU",
        key_secret: "pvqpsP19ExTxinTKun9cUKyp",
        amount: amount * 100,
        currency:"INR",
        name:"chottu",
        description:"pratice purpose",
        handler : function(response){
          alert(response.razorpay_payment_id)
        },
        prefill: {
          name:"sannasi",
          email:"sannasichottu@gmail.com",
          contact:"7272076763"
        },
        notes: {
          address:"xxx yyy zzz"
        },
        theme:{
          color : "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
     }
  }
  return (
    <div className="App">
      <h2>Razorpay payment</h2>
      <br />
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <br /><br/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
