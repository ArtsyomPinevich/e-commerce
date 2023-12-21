import { useEffect, useState } from 'react';

import './SideBar.scss';

const SideBar = ({ selectedCathegory, setSelectedCathegory }) => {
    const [cathegories, setCathegories] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((data) => setCathegories(data));
    }, []);

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const cathegory = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            setSelectedCathegory([...selectedCathegory, cathegory]);
        } else {
            setSelectedCathegory(
                selectedCathegory.filter((c: string) => c !== cathegory)
            );
        }
    };

    return (
        <div className="sidebar">
            <h3>Filter items by catheory</h3>
            <ul className="cathegories">
                {cathegories.map((element) => {
                    return (
                        <li key={element}>
                            <input
                                value={element}
                                type="checkbox"
                                onChange={handleCheckboxChange}
                            />
                            {element}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
