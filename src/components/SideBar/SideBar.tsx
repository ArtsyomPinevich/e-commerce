import { useEffect, useState } from 'react';

import './SideBar.scss';

const SideBar = () => {
    interface ICathegory {
        name: string;
        id: number;
        image: string;
    }
    const [cathegories, setCathegories] = useState<ICathegory[]>([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/categories')
            .then((res) => res.json())
            .then((data) => setCathegories(data));
        console.log(cathegories[0]);
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
                                {element.name}
                            </li>
                        </>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
