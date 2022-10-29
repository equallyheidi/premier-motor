import { Outlet } from "react-router";
import { Fragment, useContext } from 'react';
import { Link } from "react-router-dom";
import './navigation.styles.scss';
import CartIcon  from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/logo4.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

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
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                        )   : ( <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link>
                        )
                    }
                   <CartIcon />
                </div>
                {isCartOpen && <CartDropDown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;