"use client"

import { Provider } from "react-redux"
import Store from "./Store"

interface Children {
    children : React.ReactNode
}

export function Redux({children}: Children){
    return(
        <Provider store={Store}>
            {children}
        </Provider>
    )
}