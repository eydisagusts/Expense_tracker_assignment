import { LoginContext } from '../app/context/LoginContext';
import { useContext, useState } from 'react';
import React from 'react';

const LoginButton = () => {
    const { login, setLogin } = useContext(LoginContext);
    const [username, setUsername] = useState('');

    const handleClick = () => {
        if (!login) {
            if (!username) {
                alert('Please enter a username');
                return;
            }
            setLogin(true);
        } else {
            setLogin(false);
            setUsername('');
        }
    };

    return (
        <div className="flex items-center justify-end space-x-2">
            {login ? (
                <p className="font-semibold text-blue-400 dark:text-gray-500">You are logged in as {username}</p>
            ) : (
                <input
                    type="text"
                    placeholder="Enter Your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border border-gray-300 rounded text-black text-sm dark:bg-gray-400 dark:placeholder-black"
                />
            )}
            <button
                type="button"
                className={`font-bold py-2 px-4 rounded-lg dark:bg-gray-400 dark:text-black ${login ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} text-white`}
                onClick={handleClick}
            >
                {login ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default LoginButton;
