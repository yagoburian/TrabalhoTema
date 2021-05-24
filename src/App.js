import { useState } from 'react'
import Formulario from './formulario'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { tescuro, tclaro} from './temas'


const App = () => {

    const [ atual, setTema ] = useState( tclaro )
    const [ claro, setClaro ] = useState( true )

    const mudarTema = () => {
        if (claro) 
            setTema( tescuro )
    
        else
            setTema( tclaro )
        setClaro( !claro )
    }

        return (
        <ThemeProvider theme={ atual }>
            <CssBaseline />
            <Formulario atual={ mudarTema }/>            
        </ThemeProvider>
    )
}

export default App
