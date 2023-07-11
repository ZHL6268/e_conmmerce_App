import React, { useState } from "react"
import List from "../../components/List/List"
import { useParams } from "react-router-dom"
import "./Products.scss"
import useFetch from "../../hooks/useFetch"

const Products = () => {
    const catId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    const [selectedSubCats, setSelectedSubCats] = useState([])

    const {data, loadiing, error} = useFetch(`sub-categories?filters[categories][id][$eq]=${catId}`)


    const handleChange = (e)=>{
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(isChecked? [...selectedSubCats, value] : selectedSubCats.filter((item) => item!==value));
    }

    return(
        <div className="products">
            <div className="left">
                <div className="fiilterItem">
                    <h2>Product Categories</h2>
                    {
                        data?.map((item)=> (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
                            <label htmlFor={item.id}>{item.attributes.title}</label> 
                        </div>
                        ))
                    }  
                </div>
                <div className="fiilterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="fiilterItem">
                    <h2>Sort By</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc"  value="asc" name="price" onChange= {(e)=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc"  value="desc" name="price" onChange= {(e)=>setSort("desc")} />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img 
                className="catImg"
                src="https://as1.ftcdn.net/v2/jpg/03/33/81/02/1000_F_333810258_5gP2SBYroH0jtgAtI2ANibRRDe2YY7dU.jpg" 
                alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCats={selectedSubCats}/>
            </div>
        </div>
    )
}

export default Products