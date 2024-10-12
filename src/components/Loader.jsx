// Loader.js
import React from 'react';
import './Loader.css'; // Optional: Create a CSS file for styling

const Loader = () => {
    return (
        <div className="loader">
            {/* You can use an animated spinner or any loading indicator here */}
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
