import { render, screen } from '@testing-library/react';
import { IterateData } from '../IterateData';

const mockedChild = (value,index) =>{
    return (
        <div key={index} data-testid={`item_${index}`}>value</div>
    )
}

describe("<IterateData/>", () => {
    it('should render iterate list element', () => {
        render(
            <IterateData 
                array ={["first","second"]}
                elementWhenEmpty='No Data Found.'
                callBackElement = {(value,index)=>mockedChild(value,index)}
            />
        );
        const divElements = screen.getAllByTestId(/item_/i);
        expect(divElements.length).toBe(2)
    });
    it('should render spinner when result is not set', () => {
        render(
            <IterateData 
                array={null}
                elementWhenEmpty='No Data Found.'
                callBackElement = {(value,index)=>mockedChild(value,index)}
            />
        );
        const divElements = screen.getByTestId('set-spinner')
        expect(divElements).toBeInTheDocument();
    });
    it('should render error message when data is empty', () => {
        render(
            <IterateData 
                array={[]}
                elementWhenEmpty='No Data Found.'
                callBackElement = {(value,index)=>mockedChild(value,index)}
            />
        );
        const divElements = screen.getByText('No Data Found.')
        expect(divElements).toBeInTheDocument();
    });
});