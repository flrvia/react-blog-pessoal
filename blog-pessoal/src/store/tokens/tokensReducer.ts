import { Action } from "./actions";

export interface TokenState{
    tokens: string
}

//definindo para o state um valor inicial que é um valor vazio
const initialState = {
    tokens: ""
}

//A propriedade do token da model token esta definida como vazia
export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch(action.type){
        case "ADD-TOKEN":{
            return {tokens: action.payload}
        }
        default:
            return state
    }
}