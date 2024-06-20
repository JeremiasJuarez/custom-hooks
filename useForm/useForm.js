import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target})=>{

        const { name, value } = target
        
        setFormState({
            ...formState,
            [ name ]: value
        })

    }

    const onResetForm = ()=>{
        setFormState(
            initialForm
        )
    }


    return {
        ...formState,
        formState, // los datos del formulario
        onInputChange, // funcion para cambiar el formulario o sus datos
        onResetForm
    }
}
