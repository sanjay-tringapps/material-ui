import Crud_Layout from './Crud_MUI';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
const themes = createTheme({
	palette: {
	  primary: {
		main: red[500],
	  },
	},
  });
  
function App() {
  return (
	<ThemeProvider theme={themes}>
    <div className="App">
    	 <AppBar position="static">
    	 	 <Typography variant="h4" component="div" align="center">
            		CRUD USING MAT UI
          	 </Typography>
    	  </AppBar>
      	<Crud_Layout />
    </div>
	</ThemeProvider>
  );
}

export default App;
