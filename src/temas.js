import { createMuiTheme } from '@material-ui/core/styles'

const tescuro = createMuiTheme(({
    palette: {
        type: 'dark',
        primary: {
          main: '#D3D3D3',
        },
        background: {
          default: '#12121c',
          paper: '#12394a',
        },
      },
}))

const tclaro = createMuiTheme(({
    palette: {
        type: 'light',
        primary: {
          main: '#fbf2ff',
        },
        background: {
          default: '#b7cdff',
          paper: '#d7ebf7',
        },
      },    

}))



export { tescuro, tclaro }