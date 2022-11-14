import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import { useContext } from "react";


export default function Video() {
    const contexto = useContext(ColorModeContext);

    return(
        <div>
            video
            {contexto.mode}
            <button onClick={()=> contexto.toogleMode()}>
                Trocar modo
            </button>
        </div>
    )
}