import { useEffect, useState } from 'react';

import './SideBar.scss';

const SideBar = () => {
    const [cathegories, setCathegories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCathegories(data));
    }, []);

    return (
        <div className="sidebar">
            <h3>Filter items by catheory</h3>
            <ul className="cathegories">
                {cathegories.map((element) => {
                    return (
                        <>
                            <li>
                                <input type="checkbox" />
                                {element}
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
