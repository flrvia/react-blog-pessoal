export type Action = {type: "ADD-TOKEN"; payload: string};
//payload é a informação que a action esta levando

export const addToken = (token: string): Action =>({
    type: "ADD-TOKEN",
    payload: token,
});