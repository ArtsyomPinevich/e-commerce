import Header from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { ItemsProvider } from './context/ItemsContext';

function App() {
    return (
        <ItemsProvider>
            <ShoppingCartProvider>
                <div>
                    <Header />
                    <Main />
                </div>
            </ShoppingCartProvider>
        </ItemsProvider>
    );
}

export default App;
