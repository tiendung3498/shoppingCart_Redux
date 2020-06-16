const initState = {
    list: [],
    size: [
        {
            "name": "xs",
            "status": false
        },
         {
            "name": "s",
            "status": false
        },
         {
            "name": "m",
            "status": false
        },
         {
            "name": "ml",
            "status": false
        },
         {
            "name": "l",
            "status": false
        },
         {
            "name": "xl",
            "status": false
        },
         {
            "name": "xxl",
            "status": false
        },


    ],
    sort: '1',
    
}
const sortProdcut = (arr,sort)=>{
    if(sort == 2){
        return arr.sort((a,b)=> b.Price -a.Price)
    }else if(sort == 3){
        return arr.sort((a,b)=> a.Price -b.Price)
    }
    return [...arr]

}
const ProductReducer = (state = initState, action) => {
    switch (action.type) {

        case 'showListProduct':
            {
                
        
                return {
                    ...state,
                    list: sortProdcut(action.listProduct,action.sort),
                    sort: action.sort
                }
            }  

        case 'changeSize':
            {
     
                const item = action.size;
                let index = state.size.findIndex(x=>x.name==item.name);
                const newSize = [...state.size];
                 newSize[index].status = !newSize[index].status;

                return {
                    ...state,
                    size : newSize

                };

            }
        case 'changeSort':
            {
                return {
                    ...state,
                    sort: action.value
                }
            }

        default:
            return state;
    }
}
export default ProductReducer;