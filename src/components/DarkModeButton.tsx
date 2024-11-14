import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../app/context/DarkModeContext";
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeButton = () => {
    const { darkMode: isDarkMode, setDarkMode: setIsDarkMode } = useContext(DarkModeContext);

    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    return (
        <button 
        type="button" 
        onClick={handleClick} 
        className="p-2">
            {isDarkMode ? (
                <FaSun className="text-white text-2xl" />
            ) : (
                <FaMoon className="text-black text-2xl" />
            )}
        </button>
    );
};

export default DarkModeButton;
