import React from "react";
import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

// custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
                const value = evento.target.value;
                const name = evento.target.name;
                console.log(value);
                setValues({
                    ...values,
                    [name]: value,
                });
            },
            clearForm() {
                setValues({});
            }
        }   
    }

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = useState(false);
    const formCadastro = useForm({
        initialValues: { titulo:"", url:"" }
    });
    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=> setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setFormVisivel(false)
                        formCadastro.clearForm();
                    }}>
                    <div>
                        <button type="button" className="close-modal" onClick={()=> setFormVisivel(false)}>
                            x
                        </button>
                        <input 
                        placeholder="Titulo do video" 
                        name="titulo"
                        value={formCadastro.values.titulo} 
                        onChange={formCadastro.handleChange}
                        />
                        <input 
                        placeholder="URL" 
                        name="url"
                        value={formCadastro.values.url} 
                        onChange={formCadastro.handleChange}
                        />
                        <button type="submit">
                            Cadastrar
                        </button>
                    </div>
                    </form>
                    )
                : null}
        </StyledRegisterVideo>
    )    
}