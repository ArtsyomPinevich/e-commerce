import SideBar from '../SideBar/SideBar';
import './Main.scss';
import Products from '../Products/Products';
import { useState } from 'react';

const Main = () => {
    //rewrite this with usecontext
    const [selectedCathegory, setSelectedCathegory] = useState<string[]>([]);

    return (
        <section className="hero">
            <SideBar
                selectedCathegory={selectedCathegory}
                setSelectedCathegory={setSelectedCathegory}
            />
            <Products selectedCathegory={selectedCathegory} />
        </section>
    );
};

export default Main;
