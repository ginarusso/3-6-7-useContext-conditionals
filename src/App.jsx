import React, { useState, createContext } from "react"
import Header from "./Header"
import Button from "./Button"
import './App.css'

export const ThemeContext = createContext()

const App = () => {

    const [theme, setTheme] = useState("dark")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={`container ${theme}-theme`}>
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export default App