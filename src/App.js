import { useState } from 'react';

import { DropdownItem } from './DropdownItem';
import { dropdownListData, useRoveFocus } from './helper';

import './App.css';

const App = () => {
  const [isOpenList, setOpenList] = useState(false);
  const handleOpen = () => setOpenList(!isOpenList);
  const [focus, setFocus] = useRoveFocus(dropdownListData.length);

  return (
    <ul className="dropdown-list" onClick={handleOpen}>
      {dropdownListData.map((item, index) =>
        <DropdownItem
          key={index}
          item={item}
          isOpenList={isOpenList}
          dropdownData={dropdownListData}
          index={index}
          focus={focus === index}
          setFocus={setFocus}
          handleOpen={handleOpen}
        />
      )}
    </ul>
  );
};


export default App;
