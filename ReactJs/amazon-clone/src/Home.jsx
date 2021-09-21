
import React from "react";
import HomeMain from "./Inside-img/amazon-home-img.jpg"
import Product from "./Product";
import HomeDataItem from "./HomeData";
 

const Home = () =>{
    return(
        <>
        <div className="home">
            <img src={HomeMain} style={{width:"100%", height:"370px"}} alt="amazon-home-main" />
            <div className="grad-container">
            <div className="container-fluid px-5" style={{zIndex:"9"}}>
                <div className="row">
                    {
                        HomeDataItem.map(({key,id,title,subtitle,img,alt,price,rating,col})=>{
                            const fullCol = `col-${col}`;
                            return(
                                <div className={fullCol}>
                                    <Product
                                        key={key}
                                        id={id}
                                        title={title}
                                        subtitle={subtitle}
                                        img={img}
                                        alt={alt}
                                        price={price}
                                        rating={rating}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            </div>
            
        </div>
        </>
    );
}

export default Home;