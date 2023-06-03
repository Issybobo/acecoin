import React from 'react';
import { FaCcMastercard } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

    
import myImage from "./images/atm_image-removebg-preview.png";

const App = () => {

    
  return (
    <div style={{ display: '' }}>
    
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5rem'  }}>
    <img src={myImage} alt="My Image" style={{ maxWidth: '50px', marginRight: '1rem' }} />
    <h1><strong>AceCoin</strong>Pay</h1>


    <div style={{ display: "flex", justifyContent: "flex-end" }}>
  <div style={{ backgroundColor: "black", color: "white", width: "30px", height: "30px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" , left: "260px" }}>
    <span>0</span>
  </div>
  <div style={{ backgroundColor: "black", color: "white", width: "30px", height: "30px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" , position: "relative" , left: "260px" }}>
    <span>1</span>
  </div>
  <h1 style={{ margin: "0 5px" , width: "5px" , position: "relative" , left: "260px"  }}>:</h1>
  <div style={{ backgroundColor: "black", color: "white", width: "30px", height: "30px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" , position: "relative" , left: "260px" }}>
    <span>1</span>
  </div>
  <div style={{ backgroundColor: "black", color: "white", width: "30px", height: "30px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" , position: "relative" , left: "260px" }}>
    <span>9</span>
  </div>
</div>





  </div>
  
  

  <br />
    <br />

  <div style={{ marginLeft: '5rem' }}>

  <div>
      <h1>
        <strong>Card Number</strong>
        <AiOutlineEdit size={30} color="blue" style={{ marginLeft: '10px', position: "absolute", left: "600px", bottom : "530px" }} ></AiOutlineEdit>
        
      </h1>
      <p>Enter the 16-digit card number on the card</p>
    </div>
      <br></br>


      <form style={{ width: "580px" }}>
  <div style={{ display: "flex", alignItems: "center" }}>
    <FaCcMastercard size={50} style={{ marginRight: "10px", marginLeft: "5px" }} />
    <input
      type="text"
      name="name"
      // Add other attributes or event handlers as needed
    />
    <FontAwesomeIcon icon={faCheckCircle} style={{ color: "blue", marginLeft: "10px" }} />
  </div>
</form>






      <div style={{ flex: 1, padding: '10px', border: '0px solid black', width: '10px' , position: 'absolute', left : "700px"}}>
        
        <div>
      <div
        style={{
          width: '400px',
          height: '420px',
          backgroundColor: 'lightgrey',
          border: '1px solid grey', borderRadius:  '20px' 
        }}
      >
      <br/><br/>
      <br/>
      <div style={{display: "flex"}}>
       
        <p style={{ position: "absolute" , left: "30px"}}>Company</p>
        <p style={{ position: "absolute" , left: "280px"}}><strong >Apple</strong></p>
      </div>
      <br/>
      <br/>
      <br/>
      <div style={{display: "flex"}}>
      <p style={{ position: "absolute" , left: "30px"}}>Order Number</p>
        <p style={{ position: "absolute" , left: "280px"}}><strong >1266201</strong></p>
      </div>
        <br>

        </br>
        <br></br>
        <br></br>
        <div style={{display: "flex"}}>
      <p style={{ position: "absolute" , left: "30px"}}>Product </p>
        <p style={{ position: "absolute" , left: "280px"}}><strong >Mackbook Air</strong></p>
      </div>
      <br>
      
</br>
<br></br>
<br></br>
<div style={{display: "flex"}}>
      <p style={{ position: "absolute" , left: "30px"}}>VAT (20%)</p>
        <p style={{ position: "absolute" , left: "280px"}}><strong >$100.00</strong></p>
      </div>
      
      <br/>
      <br/>
      <hr style={{height: "5px"}}></hr>
      <br/>

      <div style={{display: "flex", justifyContent: "center"}}>
  <p style={{position: "relative", right: "30px"}}>You have to Pay</p>
  <p style={{position: "relative", left: "30px"}}><strong>549.99 USD</strong></p>
</div> 

      </div>
  </div>
  </div>
      <br/>
      <br/>
    </div>

  
    <div style={{ marginLeft: '5rem', display: "flex" }}>
      <div>
        <h1><strong>CVV Number</strong></h1>
        <p>Enter the 3 or 4 digit number on the card</p>
      </div>
      <form style={{ width: "225px", margin: '10px', position: "relative" }}>
        <input
          type="text"
          name="name"
        />
        <AiOutlineMenu size={30} style={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)" }} />
      </form>
    
     <br/>
     <br/>

     </div>
     
     <br/>
     <br/>
    
    <div style={{ marginLeft: '5rem', display: "flex" }}>
    <div>
      <h1><strong>Expiry Date </strong></h1>
      <p>Enter the expiration date of   the card</p>
    </div>
    <form style={{ width: "255px" , margin: '10px'}}>
      <input
        type="text"
        name="name"
      />
    </form>
    </div>
     <br/>
     <br/>
      
    
     <div style={{ marginLeft: '5rem', display: "flex" }}>
      <div>
        <h1><strong>Password</strong></h1>
        <p>Enter your dynamic Password</p>
      </div>
      
      <form style={{ width: "310px", margin: '10px', position: "relative" }}>
        <input
          type="text"
          name="name"
        />
        <AiOutlineMenu size={30} style={{ position: "absolute", top: "50%", right: "5px", transform: "translateY(-50%)" }}/>
      </form>
    </div>
      <br></br>

     <div  style={{ marginLeft: '5rem' }}>
     <button
      style={{
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '20px',
        padding: '10px 230px',
        border: '',
        borderRadius: '4px',
      }}
    >
      Pay Now
    </button>
  </div>

  </div>
  
  )
}

export default App
