import React from "react"
import "./Categories.scss"
import { Link } from "react-router-dom";

const Catrgories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://as1.ftcdn.net/v2/jpg/03/41/03/46/1000_F_341034617_4e96ntzBPpqjGxbUoHEVAp6NrH6KJwbE.jpg" alt=""/>
                    <button>
                        <Link to="/products/1" className="link" >
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://as1.ftcdn.net/v2/jpg/03/53/08/92/1000_F_353089200_fkHk6iJtrsZRldSqBlUOfRVOomSZSUYy.jpg" alt=""/>
                    <button>
                        <Link to="/products/1" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://as2.ftcdn.net/v2/jpg/04/84/87/61/1000_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg" alt=""/>
                    <button>
                        <Link to="/products/1" className="link" >
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://as1.ftcdn.net/v2/jpg/03/26/77/12/1000_F_326771205_9vwwoe2c4Lobu4IQVLfE2LFoUFZ7UgxU.jpg" alt=""/>
                            <button>
                                <Link className="link" to ="/products/1">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://as2.ftcdn.net/v2/jpg/01/90/23/55/1000_F_190235511_WskZAzpy15PRZlgolo2E83AIevyHAPkX.jpg" alt=""/>
                            <button>
                                <Link className="link" to ="/products/1">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://as1.ftcdn.net/v2/jpg/00/98/45/38/1000_F_98453833_iTZcTGS6GdM8th9S4fj3Cvxtmu4s1HTZ.jpg" alt=""/>
                    <button>
                        <Link className="link" to ="/products/1">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Catrgories;