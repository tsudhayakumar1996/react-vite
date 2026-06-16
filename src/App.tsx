import { ReactQueryClientProvider } from '@/providers/reactQuery'
import { ReactRouterProvider } from '@/providers/reactRouter'
import SnackBarProvider from '@/providers/snackbar'
import { MuiThemeProvider } from '@/providers/theme/mui'

const App = () => {
   return (
      <ReactQueryClientProvider>
         <MuiThemeProvider>
            <ReactRouterProvider />
            <SnackBarProvider />
         </MuiThemeProvider>
      </ReactQueryClientProvider>
   )
}

export default App
