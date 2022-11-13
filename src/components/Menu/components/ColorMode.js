import React, { useState } from "react";
import { createContext } from "react";

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => {  },
    toogleMode: () => {}
}); 

function ColorModeProvider(props) {
    const [mode, setMode] = useState(props.initialMode)
    
    function toogleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return(
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toogleMode: toogleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}

export default ColorModeProvider