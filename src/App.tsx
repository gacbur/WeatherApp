import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styled/theme/Theme'
import { GlobalStyles } from './styled/GlobalStyles'
import { useDarkMode } from './hooks/useDarkMode'

import Header from './layout/header/Header'
import Main from './layout/main/Main'

import { AppWrapper } from './AppElements'

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <AppWrapper>
          <Header theme={theme} toggleTheme={themeToggler} />
          <Main />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;

