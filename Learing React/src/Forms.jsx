import { useState } from 'react';

export default function ObjectStateForm() {
  let intitalState = { email:"",password:""}
  
  const [form, setForm] = useState(intitalState);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form State:", form);
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <lable>Email:</lable>
      <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} style={{ border: '1px solid black', display: 'block', marginBottom: '8px' }}/>
      <lable>Password:</lable>
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} style={{ border: '1px solid black', display: 'block', marginBottom: '8px' }}/>
      
      <button type="submit">Submit</button>
    
    </form>
  );
}
