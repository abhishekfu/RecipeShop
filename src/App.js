import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main/index';
import {RecipeProvider} from './context/recipe.context';
import {UserProvider} from './context/user.context';
import {ModalProvider} from './context/modal.context';
import { SnackbarProvider } from 'notistack';
function App() {
  return (
    <SnackbarProvider maxSnack={3}>
    <UserProvider>
    <ModalProvider>
     <Navbar/>
     <RecipeProvider>
     <Main/>
     </RecipeProvider>
     </ModalProvider>
    </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
