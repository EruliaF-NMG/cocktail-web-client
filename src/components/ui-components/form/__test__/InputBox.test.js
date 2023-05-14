import { render, screen, fireEvent } from '@testing-library/react';
import { InputBox } from '../InputBox';

const mockedFunction = jest.fn();

describe("<InputBox/>", () => {
    it('should render input element', () => {
        render(
            <InputBox 
                name={'search_text'}
                placeholder={'Search here!'}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search here!/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', () => {
        render(
            <InputBox 
                value='key word'
                name={'search_text'}
                placeholder={'Search here!'}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search here!/i);
        fireEvent.change(inputElement, { target: { value: "key word" } });
        expect(inputElement.value).toBe("key word");
    });
});