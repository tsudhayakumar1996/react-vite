import { createTheme, ThemeProvider } from '@mui/material/styles'

import type { ChildProp } from '@/commonType/childType'

const theme = createTheme({
   palette: {
      mode: 'light', // or 'dark' for dark mode
      primary: {
         main: '#1976d2' // primary color
      },
      secondary: {
         main: '#dc004e' // secondary color
      }
   }
})

export const MuiThemeProvider = ({ children }: ChildProp) => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
