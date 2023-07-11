import React from "react"
import "./Cart.scss"
import DeleteIcon from '@mui/icons-material/Delete';

const Cart= () =>{
    const data =[
        {
            id: 1,
            img: "https://static.wixstatic.com/media/81c1ae_5fd532ab823746198b7f28dff37cd470~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_5fd532ab823746198b7f28dff37cd470~mv2.jpg",
            img2: "https://static.wixstatic.com/media/81c1ae_74498b5d957e48a8904fc4994f0e45f7~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_74498b5d957e48a8904fc4994f0e45f7~mv2.jpg",
            title: "SKIRT",
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: "Full cashmere jumper, a 100% cashmere fabric with a rare annual production, softer, lighter and warmer, with a flattering fit and a simple style in a popular brown colour, a versatile underwear piece.",
        },
        {
            id: 2,
            img: "https://static.wixstatic.com/media/81c1ae_01110a10f24e4cff8b30932e86c73b42~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_01110a10f24e4cff8b30932e86c73b42~mv2.jpg",
            img2: "https://static.wixstatic.com/media/81c1ae_ad846866e8f640f9b7c2c80eae511218~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_ad846866e8f640f9b7c2c80eae511218~mv2.jpg",
            title: "COAT",
            isNew: false,
            oldPrice: 19,
            price: 12,
            desc: "Full cashmere jumper, a 100% cashmere fabric with a rare annual production, softer, lighter and warmer, with a flattering fit and a simple style in a popular brown colour, a versatile underwear piece.",
        },
    ];
    return(
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key ={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="pri">
                           1 x ${item.price}
                        </div>
                        <DeleteIcon className="delete"/>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}


export default Cart