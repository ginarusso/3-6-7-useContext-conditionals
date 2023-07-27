import { React, useState, createContext } from "react"
import Header from "./Header"
import Button from "./Button"
import './App.css'

const ThemeContext = createContext()

export default function App() {
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

export { ThemeContext }