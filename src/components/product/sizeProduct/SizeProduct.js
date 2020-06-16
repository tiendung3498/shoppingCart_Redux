import React  from 'react';

const SizeProduct = ({item,changeStatus}) => {

    return (

        <input type="button" value={item.name} className={item.status ? "product__size-list-active":''} onClick={()=>changeStatus(item)} />

    );
}
export default SizeProduct;