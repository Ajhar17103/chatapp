import { useState } from 'react';
import axios from 'axios';

let projectID = '4ed65356-523b-43ef-9d91-93b122cd20bf';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      
      <div className="form">
        <div className="title"> 
        <h1 className='h1'>Real Time Chat App</h1>
        <span>Develop By Azharul Islam</span>
        <hr className=' text-center bg-danger'/>
        </div>
   
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="btn btn-success w-75">
               Start chatting 
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      
      </div>
      
    </div>

  );
};

export default Modal;
