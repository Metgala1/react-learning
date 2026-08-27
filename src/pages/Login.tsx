import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../context/AuthContext';

import type { User } from '../context/AuthContext';

interface LoginResponse {
    token: string;
    user: User;
    message?: string;
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Added loading state
    
    const { login  } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data: LoginResponse = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed. Please check your credentials.');
            }

            // Pass both token and user to the context login function
            login(data.token, data.user);

            // Redirect to products page
            navigate('/products'); 

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false); // Always reset loading state
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Login;
