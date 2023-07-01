import React from "react"
import Card from "../Card/Card"
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://static.wixstatic.com/media/81c1ae_5fd532ab823746198b7f28dff37cd470~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_5fd532ab823746198b7f28dff37cd470~mv2.jpg",
            img2: "https://static.wixstatic.com/media/81c1ae_74498b5d957e48a8904fc4994f0e45f7~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_74498b5d957e48a8904fc4994f0e45f7~mv2.jpg",
            title: "SKIRT",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://static.wixstatic.com/media/81c1ae_01110a10f24e4cff8b30932e86c73b42~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_01110a10f24e4cff8b30932e86c73b42~mv2.jpg",
            img2: "https://static.wixstatic.com/media/81c1ae_ad846866e8f640f9b7c2c80eae511218~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_ad846866e8f640f9b7c2c80eae511218~mv2.jpg",
            title: "COAT",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://static.wixstatic.com/media/81c1ae_5da2372d4bd5441f83069eb4d2a1942d~mv2.jpg/v1/fill/w_733,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_5da2372d4bd5441f83069eb4d2a1942d~mv2.jpg",
            img2: "https://static.wixstatic.com/media/81c1ae_d44ab97962cb47d183b413e7d2a34b1d~mv2.jpg/v1/fill/w_733,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_d44ab97962cb47d183b413e7d2a34b1d~mv2.jpg",
            title: "HAT",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://static.wixstatic.com/media/81c1ae_edf83b66b5b949b4bfc047eeb64bee84~mv2.jpg/v1/fill/w_829,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_edf83b66b5b949b4bfc047eeb64bee84~mv2.jpg",
            img2: "https://static.wixstatic.com/media/81c1ae_1c3d7a2c664a41a083cd941da97d9615~mv2.jpg/v1/fill/w_619,h_1102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81c1ae_1c3d7a2c664a41a083cd941da97d9615~mv2.jpg",
            title: "TOP",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ]

    return(
        <div className="FeaturedProducts">
            <div className="top">
                <h1>{type} products</h1> 
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                {data.map(item =>(
                    <Card item = {item} key ={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;