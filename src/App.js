import './App.css';
import Emailjs from '@emailjs/browser';
import React, {useRef} from 'react';

function App(prop) {
 
  const form=useRef();


  function Form(e){
e.preventDefault();
alert('Hi, you are using emailjs to send your inquiry');
    
Emailjs.sendForm('service_id','templateemailjs',usehook,'userid').then(function(){

console.log('Suscess')


}, function(err){

  console.log(err,'Check your email configuration');
})}

  return (
   
<div class="box">
<form ref={form} onSubmit={Form}>
<div>
<label>
Name
</label>
</div>
<input type="test" name="name"/>
<div>
<label>
Email
</label>
</div>
<input type="test" name="email"/>
<div>
<label>
Comments
</label>
</div>
<textarea cols="25" rows="5" name="message"></textarea>
<div>
<input type="submit" value="Submit" />
</div>
<p>{prop.name}</p>
<a href="https://www.emailjs.com/" target="blank">EmailJS more info</a>
</form>
</div>

  )

  
}

export default App;
