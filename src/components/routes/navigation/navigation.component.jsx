import { Outlet } from "react-router";
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import './navigation.styles.scss';

import { ReactComponent as Logo } from "../../../assets/logo4.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>     
                    <Logo className='logo' />
                </Link>
                <div className='nav-link-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;