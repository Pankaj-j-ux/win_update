import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import { ContactPhoneTwoTone } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { addInCart } from './actions/index';

const Product = (props)=>{
    
    const dispatch = useDispatch();
    
    const ratingStar = (count)=>{
        let Content = [];
        for (let index = 0; index < count; index++) {
            Content.push(<StarIcon style={{color:"#e79325"}} />);           
        }
        return (
              Content
        );
    }

    return(
        <>
        <div className="product-body py-3 px-3 mb-5 bg-white" style={{position:"relative", top:"-30px"}}>
            <div className="product-title fs-5" style={{fontFamily: "'Baloo Chettan 2', cursive", fontWeight:"500"}}>
                {props.title}
                <div className="sub-title fs-6 fw-bold">
                {props.subtitle}
                </div>
            </div>
            <div className="fw-bold">
                ${props.price}
            </div>
            <div>
                {ratingStar(props.rating)}
            </div>
            <div className="text-center">
            <img src={props.img} alt={props.alt} className="p-4"/>
            </div>
            <div className="text-center">
            <Button variant="contained" style={{backgroundColor:"#f7b157"}} onClick={()=> dispatch(addInCart(props.id))}>
                Add to Cart
            </Button>
            </div>
            
        </div>
        </>
    );
}

export default Product;