import React, { createContext, useState, useContext, ReactNode } from "react"

// Define the type for the common state
type CommonState = {
    firstName: string
    lastName: string
    email: string
    password: string
    isLoggedIn: boolean
    // Add more properties as needed
}

// Define the initial state
const initialState: CommonState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLoggedIn: false,
    // Initialize other properties here
}

// Define the context type
type AppContextType = {
    commonState: CommonState
    setCommonState: React.Dispatch<React.SetStateAction<CommonState>>
}

// Create the context
const AppContext = createContext<AppContextType>({
    commonState: initialState,
    setCommonState: () => {},
})

// Create the provider
export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [commonState, setCommonState] = useState<CommonState>(initialState)

    return (
        <AppContext.Provider value={{ commonState, setCommonState }}>
            {children}
        </AppContext.Provider>
    )
}

// Custom hook to access the context
export const useAppContext = () => {
    const { commonState, setCommonState } = useContext(AppContext)

    // Define a function that correctly updates the state
    const updateCommonState = (newState: Partial<CommonState>) => {
        setCommonState((prevCommonState) => ({
            ...prevCommonState,
            ...newState,
        }))
    }

    return { commonState, updateCommonState }
}
