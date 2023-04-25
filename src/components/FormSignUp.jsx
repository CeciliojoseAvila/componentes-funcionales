import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState} from 'react';

function FormSignUp({handleSubmit }) { 
  
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [promoc, setPromoc] = useState(true)
    const [noved, setNoved] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Deben ser al menos 3 caracteres",
        },
    })

    function validarNombre(nombre) { 
        if (nombre.length >= 3) {
            return { name: { error: false, message: "", }, }
        } else { 
            return {
                name: { error: true, message: "Deben ser al menos 3 caracteres", },
            }
        }
    }


    return <form onSubmit={(e) => {
        e.preventDefault()
       handleSubmit({ name, lastName, email, promoc, noved })
    }}>
      
        <TextField id="name" label="Nombres" variant="outlined" fullWidth margin="normal"
            onChange={(e) => setName(e.target.value)} value={name} error={errors.name.error} helperText={ errors.name.error ? errors.name.message : " " } onBlur={(e)=> setErrors(validarNombre(e.target.value))}/>
        
        <TextField id="lastName" label="Apellidos" variant="outlined" fullWidth margin="normal" value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
        
        <TextField id="email" label="Email" variant="outlined" fullWidth margin="normal"  value={email} onChange={(e) => setEmail(e.target.value)}/>
       
        <FormGroup>
            <FormControlLabel
                control={
                    <Switch 
                    name="promo" checked={promoc} onChange={(e) => setPromoc(e.target.checked)}
                    />} label="Promociones"
            />
            
            <FormControlLabel
                control={
                    <Switch color="secondary"
                         name="Noved" checked={noved} onChange={(e) => setNoved(e.target.checked)}
                    />} label="Novedades"
            />    
                     
        </FormGroup>
        
        <Button variant="contained" type='submit'>Registrarse</Button>
    </form>
}

export default FormSignUp