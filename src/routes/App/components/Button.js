import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';

function Button() {
    return (
        <button className="app__dark-mode-btn icon level-right">
            <FontAwesomeIcon icon={faMoon} />
        </button>
    );
}

export default Button;
