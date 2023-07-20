import React from "react"
import "./Cart.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import {useSelector} from "react-redux"
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

const Cart= () =>{
    const products = useSelector(state => state.cart.products)
    const totalPrice = ()=>{
        let totalPrice = 0;
        products.forEach(item => {
            totalPrice += item.quantity*item.price
        });
        return totalPrice.toFixed(2)
    }
    const dispatch = useDispatch()

    const stripePromise = loadStripe('pk_test_51M2YMAGtOc9LHRHIj6nTUtcMq7UktcAKjw1iPfr7bvHwSGmYZoRNnPtrUtPhz1dTUJiePlAFHowGd4m2LEgCzqFI00HDDn3ILo');
    const handlePayment = async() =>{
        try {
           const stripe = await stripePromise;

           const res = await makeRequest.post("/orders", {
            products,
           })

           await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
           })
        } catch (error) {
            console.log(error)
        }
    
    }

    return(
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key ={item.id}>
                    <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL +item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="pri">
                           ${item.quantity} x ${item.price}
                        </div>
                        <DeleteIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}


export default Cart