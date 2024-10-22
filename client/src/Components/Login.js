// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true); 
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState(''); // Email is used only for registration
  
//   const handleAuthAction = () => {
//     if (isLogin) {
//       // Login logic
//       if (username === 'user' && password === 'password') {
//         alert('Logged in successfully!');
//       } else {
//         alert('Invalid credentials');
//       }
//     } else {
//       // Registration logic
//       if (username && password && email) {
//         alert('Registration successful!');
//         setIsLogin(true); // Switch to login mode after registration
//       } else {
//         alert('Please fill in all fields');
//       }
//     }
//   };

//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     setUsername('');
//     setPassword('');
//     setEmail(''); // Reset email field when toggling modes
//   };

//   return (
//     <div className="auth-container">
//       <h2>{isLogin ? 'Login' : 'Register'}</h2>
//       <div className="input-group">
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       {!isLogin && ( // Only show the email field if in registration mode
//         <div className="input-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//       )}
//       <div className="input-group">
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button onClick={handleAuthAction}>{isLogin ? 'Log In' : 'Register'}</button>
//       <button onClick={toggleAuthMode} className="toggle-btn">
//         {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
//       </button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleAuthAction = () => {
    if (isLogin) {
      // Login logic
      if (username === 'user' && password === 'password') {
        alert('Logged in successfully!');
      } else {
        alert('Invalid credentials');
      }
    } else {
      // Registration logic
      if (username && password && email) {
        fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
        })
          .then(response => response.json())
          .then(data => {
            if (data.message === 'Registration successful') {
              alert(data.message);
              setIsLogin(true); // Switch to login mode after successful registration
            } else {
              alert(data.message);
            }
          })
          .catch(error => {
            alert('Error: ' + error.message);
          });
      } else {
        alert('Please fill in all fields');
      }
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <div className="input-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {!isLogin && (
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleAuthAction}>{isLogin ? 'Log In' : 'Register'}</button>
      <button onClick={toggleAuthMode} className="toggle-btn">
        {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default Login;
