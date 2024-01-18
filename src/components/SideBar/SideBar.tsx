import { useEffect, useState } from 'react';
import { Checkbox, Spinner } from '@chakra-ui/react';

import './SideBar.scss';

//todo fix
const SideBar = ({ selectedCathegory, setSelectedCathegory }: any) => {
    const [cathegories, setCathegories] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const FetchData = async () => {
            setIsLoading(true);

            const data = await fetch(
                'https://fakestoreapi.com/products/categories'
            );
            const json = await data.json();
            setCathegories(json);

            setIsLoading(false);
        };

        FetchData();
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
                {isLoading ? (
                    <Spinner size="xl" />
                ) : (
                    cathegories.map((element) => {
                        return (
                            <li key={element}>
                                <Checkbox
                                    value={element}
                                    onChange={handleCheckboxChange}
                                >
                                    {element}
                                </Checkbox>
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};

export default SideBar;
