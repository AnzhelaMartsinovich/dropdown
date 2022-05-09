import React from "react";

export const DropdownItem = ({ item, isOpenList, dropdownData, index }) => {
    const handleSelect = () => {
        const getSelectedItem = dropdownData.splice(index, 1).toString();
        dropdownData.unshift(getSelectedItem);
    }

    return (
        <li
            className={`dropdown-item ${isOpenList ? 'dropdown__open' : ''}`}
            onClick={(index !== 0) ? handleSelect : undefined}
        >
            {item}
        </li >
    )
}
