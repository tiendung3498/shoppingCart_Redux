import React, { useState , useEffect , useMemo, useRef, useCallback} from 'react';
import { useSelector,useDispatch } from "react-redux";
import ListProduct from './listProduct/ListProduct';
import SizeProduct from './sizeProduct/SizeProduct';
import {fetchCartWithId} from '../../actions/Cart';
import PropTypes from 'prop-types';

import './product.scss';
import SortProduct from './sortProduct/SortProduct';
import { fetchProduct, changeSize, changeSort  } from '../../actions/Product';
function Product(props) {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.product.list); 
    const size = useSelector(state=>state.product.size);
    const sort = useSelector(state=>state.product.sort);
    const load = useRef(null);
    
     useEffect(() => {
         dispatch(fetchProduct(size,sort));

     },[])
     const changeStatus = item =>{
         loading();
         dispatch(changeSize(item));
         dispatch(fetchProduct(size,sort));
    }
     const listSize = useMemo(() =>{
        let string=[];
        for (const item in size) {
            string.push(<SizeProduct key={item} item={size[item]} changeStatus = { changeStatus} />)
        }
        return string;
    },[size]);


    const loading = () =>{
        load.current.style.display='block'
        setTimeout(() => {
            load.current.style.display='none'
        }, 500);
    }
    const handleChange = event =>{
        const value = event.target.value;
        dispatch(changeSort(value));
        if(value==1) return;
        else{
        loading();
        dispatch(fetchProduct(size,value));
        }
    }
    
    const addCart = id =>{
        dispatch(fetchCartWithId(id));

        }
    

    return (
        
        <section className="product">
            <div className="product__loader" ref = {load}>
                <div className="product__loader-item"></div>
            </div>
            <div className="container" >
                <div className="product__size">
                    <p>Size :</p>
                    <div className="product__size-list">
                        {listSize}
                    </div>
                </div>
                <div className="product__box">
                <SortProduct length={products.length} sort={sort} handleChange={handleChange}/>
                    <div className="product__list">
                        {
                                <ListProduct data = {products} addCart = {addCart}/>
                                
                        }
                    </div>
                </div>
            
                
            </div>
        </section>

    );
}

export default Product;