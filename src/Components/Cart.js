import React, { createContext, useContext, useReducer } from 'react'

const Cartstate = createContext()
const Cartdispatch = createContext()

export const Usecart = () => useContext(Cartstate);
export const Dispatchcart = () => useContext(Cartdispatch)


const reducer = (state, action) => {
    const product = action.item
    switch (action.type) {
        case 'ADD':
            // return [...state, action.item]
            const exist = state.find((x)=> x.id === product.id)
            if(exist){
                return state.map((x)=> x.id === product.id?{...x,qty: x.qty+1} :x );
            }else{
                return [
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
        case 'DEL':
            const exist1=state.find((x)=> x.id === product.id)
            if(exist1.qty === 1){
                return state.filter((x)=> x.id !== exist1.id);
            }else{
                return state.map((x)=> x.id === product.id? {...x,qty: x.qty-1}:x)
            }
        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        default:
            throw new Error(`unknown action ${action.type}`);

    }
}

export const Cart = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <Cartdispatch.Provider value={dispatch}>
            <Cartstate.Provider value={state}>
                {children}
            </Cartstate.Provider>
        </Cartdispatch.Provider>
    )
}
