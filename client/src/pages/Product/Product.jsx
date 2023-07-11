import React, { useState } from "react"
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://as1.ftcdn.net/v2/jpg/04/23/44/52/1000_F_423445270_Bd90Dwnn79rdCM0ABVPw1hhuVsVKbKqc.jpg",
        "https://as1.ftcdn.net/v2/jpg/04/23/44/52/1000_F_423445210_BNYnMSgGDsTyabMcq6UPTuUOj5RGJOfL.jpg"   
    ]

    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e)=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={(e)=>setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>Full cashmere jumper, a 100% cashmere fabric with a rare annual production, softer, lighter and warmer, with a flattering fit and a simple style in a popular brown colour, a versatile underwear piece.</p>
                <div className="quantity">
                    <button onClick={()=>setQuantity(prev=>prev===1? 1: prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product