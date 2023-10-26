import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import TodoContainer from './components/TodoContainer';
import TodoProvider from './context/TodoContext';

const theme = createTheme({
  typography:{
    fontFamily: 'Roboto, sans-serif'
  },  
});

function App() {
  return (
    <TodoProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <TodoContainer />
      </ThemeProvider>
    </TodoProvider>
  )
}

export default App
