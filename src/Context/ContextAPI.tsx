import { createContext } from "react"

export const reactStore={
    fruits: ["Apple","Oranges","Mangoes"],
    message: "This is default message"
}


export const Context = createContext<any>(null)