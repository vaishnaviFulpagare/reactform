import './App.css';
import {useState} from "react";

function App() {

  const[values,setValue]=useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    contact:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  })

  const handleChanges =(e)=>{
       setValue({...values,[e.target.name]:[e.target.value]})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values)
  }

  const ResetFun=()=>{
    setValue({firstname:'',lastname:'',email:''})
  }
  return (
    <div className="container">
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
       <label htmlfor="first name">First Name</label>
       <input type="text" placeholder="enter first name" name="first"
       onChange={(e)=> handleChanges(e)} required value={values.firstname}/>

       <label htmlfor="last name">Last name</label>
       <input type="text" placeholder="enter last name" name="last"  onChange={(e)=> handleChanges(e)} requiredvalue={values.lastname}/>

       <label htmlfor="email">Email</label>
       <input  type="email" placeholder="enter your mail" name="email"  onChange={(e)=> handleChanges(e)} required value={values.email}/>

       <label htmlfor="contact">Contact</label>
       <input type="text" placeholder="enter number" name="contact"  onChange={(e)=> handleChanges(e)}/>
       
      <label htmlfor="gender">Gender</label>
   <input type="radio" name="gender" onChange={(e)=> handleChanges(e)}/>male
   <input type="radio" name="gender" onChange={(e)=> handleChanges(e)}/>female
   <input type="radio" name="gender" onChange={(e)=> handleChanges(e)}/>other

<label htmlfor="subject">Subject</label>
<select name ="subject" id="subject" onChange={(e)=> handleChanges(e)}>
  <option value="math">Math</option>
  <option value="physics">Physics</option>
  <option value="english">English</option>
</select>

<label htmlfor="resume">Resume</label>
<input type="file" placeholder="enter resume" name="resume" onChange={(e)=> handleChanges(e)}/>

<label htmlfor="url">URL</label>
<input type="text" name="url" placeholder="enter image url" onChange={(e)=> handleChanges(e)}/>

<label htmlfor="about">About</label>
<textarea name="about" id="about" cols="30" rows="10"  onChange={(e)=> handleChanges(e)}placeholder="enter description"></textarea>

<button type="button" onClick={ResetFun}>Reset</button>
<button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
