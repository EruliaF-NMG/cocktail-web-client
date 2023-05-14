
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import { CocktailItem } from '../CocktailItem';

const mockedFunction = jest.fn();
const MockComponent = ({
    image='',
    name='',
    category='',
    itemId='',
    showAddBtn=true,
    showRemoveBtn=true,
    currentWishList=[],
    onAddWishList=mockedFunction,
    onRemoveWishList=mockedFunction
}) => {
    const history = createMemoryHistory();
    return (
        <Router location={history.location} navigator={history} >
            <CocktailItem 
                image={image}
                name={name}
                category={category}
                itemId={itemId}
                showAddBtn={showAddBtn}
                showRemoveBtn={showRemoveBtn}
                currentWishList={currentWishList}
                onAddWishList={onAddWishList}
                onRemoveWishList={onRemoveWishList}
            />
        </Router>
    );
}


describe("<CocktailItem/>", () => {
    it('should render cocktailItem element', () => {
        render(
            <MockComponent 
                image={'https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg'}
                name='Item Name'
                category='Item Category'
                itemId='101'
            />
        );
        const divElements = screen.getByText(/Item Name/i);
        expect(divElements).toBeInTheDocument();
    });
    it('should render add to wish list button and hide remove form wish list when itemId not available in current list', () => {
        render(
            <MockComponent 
                image='https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg'
                name='Item Name'
                category='Item Category'
                itemId='101'
                showAddBtn={true}
                showRemoveBtn={true}
                currentWishList={['102','103','106']}
                onAddWishList={mockedFunction}
                onRemoveWishList={mockedFunction}
            />
        );
        const addBtnElements = screen.getByRole('button',{name:"Add To WishList"})
        expect(addBtnElements).toBeInTheDocument();
        const removeBtnElements = screen.queryByRole('button',{name:"Remove"})
        expect(removeBtnElements).not.toBeInTheDocument();
    });
    it('should render remove form wish list button and hide add to wish list button when itemId already exist in current list', () => {
        render(
            <MockComponent 
                image='https://www.thecocktaildb.com/images/media/drink/ft8ed01485620930.jpg'
                name='Item Name'
                category='Item Category'
                itemId='101'
                showAddBtn={true}
                showRemoveBtn={true}
                currentWishList={['102','101','106']}
                onAddWishList={mockedFunction}
                onRemoveWishList={mockedFunction}
            />
        );
        const removeBtnElements = screen.queryByRole('button',{name:"Remove"})
        expect(removeBtnElements).toBeInTheDocument();
        const addBtnElements = screen.queryByRole('button',{name:"Add To WishList"})
        expect(addBtnElements).not.toBeInTheDocument();
    });
});