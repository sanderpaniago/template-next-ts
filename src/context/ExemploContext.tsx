import { createContext, ReactNode } from "react";

interface ExemploContextData {
    exemplo: string;
}

interface ExemploProviderProps {
    children: ReactNode
}

export const ExemploContext = createContext({} as ExemploContextData)

export function ExemploProvider({children}: ExemploProviderProps) {
    return (
        <ExemploContext.Provider value={{
            exemplo: "exemplo"
        }}>
            {children}
        </ExemploContext.Provider>
    )
}