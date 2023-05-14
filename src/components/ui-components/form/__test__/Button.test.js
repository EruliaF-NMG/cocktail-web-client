import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

const mockedFunction = jest.fn();

describe("<Button/>", () => {
    it('should render button element', () => {
        render(
            <Button 
                id="click_btn"
                className={"css_class"}
                children={"Click Me"}
                onClick={mockedFunction}
            />
        );
        const inputBtn = screen.getByRole('button',{name:'Click Me'});
        expect(inputBtn).toBeInTheDocument();
    });
});