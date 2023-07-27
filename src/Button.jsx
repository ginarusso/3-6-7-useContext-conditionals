import React, { useContext } from "react"
import { ThemeContext } from "./App"

const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme} className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}

export default Button