import { render, screen, fireEvent } from '@testing-library/react';
import { ItemSearchANDRefresh } from '../ItemSearchANDRefresh';

const mockedFunction = jest.fn();

describe("<ItemSearchANDRefresh/>", () => {
    it('should render item search and refresh element', () => {
        render(
            <ItemSearchANDRefresh 
                onRefresh={mockedFunction}
                onSearch={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search hera/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', () => {
        render(
            <ItemSearchANDRefresh 
                onRefresh={mockedFunction}
                onSearch={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search hera/i);
        fireEvent.change(inputElement, { target: { value: "key word" } });
    });

    it('should empty input filed when click refresh btn', () => {
        render(
            <ItemSearchANDRefresh 
                onRefresh={mockedFunction}
                onSearch={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search hera/i);
        fireEvent.change(inputElement, { target: { value: "key word" } });
        const buttonElement = screen.getByRole("button", { name: 'Refresh'});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });
});