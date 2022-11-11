import React from "react";
import { createContext } from "react";

export const ColorModeContext = createContext({
    mode: "light"
}); 

function ColorModeProvider(props) {
    return(
        <ColorModeContext.Provider value={{ mode: props.initialMode }}>
            {props.children}
        </ColorModeContext.Provider>
    )
}

export default ColorModeProvider