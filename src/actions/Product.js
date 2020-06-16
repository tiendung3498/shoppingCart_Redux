

export const fetchProduct = (size,sort) =>{
    return async dispatch =>{
            let string ='http://localhost:4000/Product?';
           for(const item of size){
               if(item.status){
                   string += `&Size=${item.name}`;
                }
            }
            try {
                const request = string;
                const response = await fetch(request);
                const responseJson = await response.json();
                dispatch( showListProduct(responseJson,sort) )   
            } catch (error) {
                alert('Error: '+error.message);
                
            }
        }
        
        
    }


export const showListProduct = (listProduct,sort) => {
    return {
        type: 'showListProduct',
        listProduct,
        sort
    }
}

export const changeSize = size=> {
    return {
        type: 'changeSize',
        size,
    }
}
export const changeSort = value => {
    return {
        type: 'changeSort',
        value,
    }
}

