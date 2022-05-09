import React, { useRef, useEffect } from "react";

export const DropdownItem = ({ item, isOpenList, dropdownData, index, focus, setFocus, handleOpen }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (focus) {
            ref.current.focus();
        }
    }, [focus]);

    const handleSelect = () => {
        const getSelectedItem = dropdownData.splice(index, 1).toString();
        dropdownData.unshift(getSelectedItem);
    }

    const handleFocus = (event) => {
        setFocus(index);

        if (event.key === 'Enter') {
            handleSelect();
            handleOpen();
        }
    };

    return (
        <li
            className={`dropdown-item ${isOpenList ? 'dropdown__open' : ''}`}
            onClick={(index !== 0) ? handleSelect : undefined}
            tabIndex={focus ? 0 : -1}
            role="button"
            ref={ref}
            onKeyPress={e => handleFocus(e)}
        >
            {item}
        </li >
    )
}
