import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import { Navigate, useNavigate } from 'react-router'

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    } 

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    ) : (
                <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECkOUT</Button>
        </div>
    )
}

export default CartDropDown;