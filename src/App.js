import { useState } from 'react';

import { DropdownItem } from './DropdownItem';
import { dropdownListData } from './helper';

import './App.css';

const App = () => {
  const [isOpenList, setOpenList] = useState(false);
  const handleOpen = () => setOpenList(!isOpenList);

  return (
    <ul className="dropdown-list" onClick={handleOpen}>
      {dropdownListData.map((item, index) =>
        <DropdownItem
          key={index}
          item={item}
          isOpenList={isOpenList}
          dropdownData={dropdownListData}
          index={index}
        />
      )}
    </ul>
  );
};


export default App;
