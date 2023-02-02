import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'

import {
    CartDropDownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles.jsx'

import CartItem from '../cart-item/cart-item.component'
import { useNavigate } from 'react-router'

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    } 

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))
                    ) : (
                <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECkOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown;