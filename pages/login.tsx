import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// Define the LoginPage component
const LoginPage = () => {
    // Define the username and password state variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    console.log(router); // Inspect the router object in your browser's console

    // Define the handleLogin function
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            // Make a POST request to the login endpoint
            const response = await axios.post('https://recruitment-api.vercel.app/login', {
                username,
                password
            });
            console.log('Login response:', response.data);
            console.log("username: ", username);
            // Check if the response contains a JWT token
            if (response.data.jwt) {
                localStorage.setItem('jwt', response.data.jwt);
                router.push('/dashboard'); 
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
        <div className="login">
        <form onSubmit={handleLogin}>
            <label>
                <input placeholder='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                <input placeholder='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">login</button>
        </form>
        </div>
        </div>
    );
};

export default LoginPage;
