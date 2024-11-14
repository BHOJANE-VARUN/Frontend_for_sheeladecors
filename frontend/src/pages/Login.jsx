// import React, { useState } from 'react';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Sign up');
  
//   return (
//     <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
//       </div>
//       {currentState==='Login'?'':<input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
//       <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='email' required/>
//       <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='password' required/>
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forget your password?</p>
//         {
//           currentState==='Login'
//           ?<p onClick={()=>setCurrentState('Sign up')} className='cursor-pointer'>Create account</p>
//           :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login here</p>
//         }
//       </div>
//        <button className='bg-black text-white font-light px-8 py-2 pt-4'>{currentState==='Login'?'Sign in':'Sign up'}</button>
//     </form>  
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [currentState, setCurrentState] = useState('Sign up');
  const [name, setName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission

    const data = {
      name: name,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    // Sending data to the servlet using POST
    
    fetch('http://localhost:3001/' + (currentState=='Sign up'?"signup":"signin"), {
      method: 'POST',  // Make sure it's POST method, not GET
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  // Send data as JSON string
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if(data.id==-1 && currentState=='Login')
        {
          alert("User not found");
        }
        else if(data.id==-1){
           alert("invalid email or password");
        }
        else{
          navigate("/cart");
        }
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState !== 'Login' && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        name="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign up')} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer">
            Login here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 pt-4">
        {currentState === 'Login' ? 'Sign in' : 'Sign up'}
      </button>
    </form>
  );
};

export default Login;
