import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useReducer } from 'react';

import Greetings from './Greetings';


describe('Greetings Component', ()=>{

    test('renders "Hello World" as a text', () => {
        // Arrange 
        render(<Greetings />)
    
        // Act
    
    
        // Assert
        const helloWorldElement = screen.getByText("Hello World", {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders good to see you if the button was not clicked', ()=> {
        render(<Greetings />)

        const outputElement = screen.getByText("good to see you", {exact: false})
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed Text!!" if the button was clicked', ()=> {
        // Arrange 
        render(<Greetings />)

        // Act 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        // Assert   
        const outputElement = screen.getByText('Changed Text!')
        expect(outputElement).toBeInTheDocument();

    });

    test('does not render "good to see you" if the button was clicked', ()=> {
        render(<Greetings />)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElement = screen.queryByText('good to see you', {exact: false})
        expect(outputElement).toBeNull();
    })
})


