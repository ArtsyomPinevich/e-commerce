import SideBar from '../SideBar/SideBar';
import './Main.scss';
import Products from '../Products/Products';

const Main = () => {
    return (
        <section className="hero">
            <SideBar />
            <Products />
        </section>
    );
};

export default Main;
