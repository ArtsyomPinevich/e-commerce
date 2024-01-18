import './Main.scss';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Products from '../Products/Products';

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
