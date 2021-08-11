import { ProductActionsTypes, ProductsActions } from "../actions/product.action";
import Product from "../modal/product.modal";

export interface IState{
    loading:boolean;
    products:Product[];
    error:string;
};

const initialState:IState = {
    loading : false,
    products:[],
    error:""
};

export default function productsReducer(state=initialState,action:ProductActionsTypes):IState{
    switch(action.type){
        case ProductsActions.GetProducts:
                return{
                    ...state,
                    loading:false,
                    products:[],
                    error:""
                }      
        case ProductsActions.ProductsLoadingSuccess:
              return{
                  ...state,
                  loading:true,
                  products:action.products,
                  error:""
              }

        case ProductsActions.ProductsLoadingFail:
              return{
                  ...state,
                  loading:true,
                  products:[],
                  error:"Network Error"
              }

        default:
            return state;
    }
};