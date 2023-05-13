import { NavLink } from 'react-router-dom';
import { useEffect, useState,useSyncExternalStore } from 'react';

import { Button } from '../form/Button';

const NavBar = () => {

    const [isShowMenu, setMenuStatus] = useState(false);
    
    const width = useSyncExternalStore((callback) => {
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    },()=>window.innerWidth);

    useEffect(()=>{
        if(width >= 768) setMenuStatus(false);
    },[width]);

    const setNavBarMenuStyle=()=>{
        if(width >= 768) return 'navbar-menu-wrapper';
        else if(isShowMenu) return 'navbar-menu-wrapper';
        else if(!isShowMenu) return 'navbar-menu-wrapper hidden';
    }


    return (
        <nav className='navbar-wrapper'>
            <div className='navbar-sub-wrapper'>
                <NavLink
                    to='/'
                    className={() => 'flex items-center'}   
                >
                    <img src='https://www.thecocktaildb.com/images/logo.png' className='h-8 mr-3' alt='Logo' />
                </NavLink>
                <Button className={isShowMenu ? 'navbar-toggle-btn-active' : 'navbar-toggle-btn'} onClick={()=>setMenuStatus(!isShowMenu)}>
                    <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
                </Button>
                <div className={ setNavBarMenuStyle() }>
                    <ul className='navbar-menu-options' >
                        <li>
                            <NavLink
                                to='/'
                                className={({isActive}) => isActive ? 'navbar-menu-link navbar-menu-link-active' : 'navbar-menu-link'}   
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/wish-list'
                                className={({isActive}) => isActive ? 'navbar-menu-link navbar-menu-link-active' : 'navbar-menu-link'}   
                            >
                                Wish List
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export {
    NavBar
}