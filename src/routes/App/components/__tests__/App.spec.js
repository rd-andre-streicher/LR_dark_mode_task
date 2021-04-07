import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App component', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByText('Dark Mode Challenge')).toBeInTheDocument();
    });
});

