import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IState } from "./products.reducer";

export const allProucts = createSelector(createFeatureSelector<IState>("products"),(state:IState)=>{
    return state;
});