import Header from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
    return (
        <ShoppingCartProvider>
            <div>
                <Header />
                <Main />
            </div>
        </ShoppingCartProvider>
    );
}

export default App;
