import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLable) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLable]: !displayCurrentChildren[getCurrentLable],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        {/* eslint-disable-next-line react/prop-types */}
        <p>{item.label}</p>
        {/* eslint-disable-next-line react/prop-types */}
        {item && item.children && item.children.length ? (
          // eslint-disable-next-line react/prop-types
          <span onClick={() => handleToggleChildren(item.label)}>
            {/* eslint-disable-next-line react/prop-types */}
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus size={25} color="white" />
            )}
          </span>
        ) : null}
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {item &&
      // eslint-disable-next-line react/prop-types
      item.children &&
      // eslint-disable-next-line react/prop-types
      item.children.length > 0 &&
      // eslint-disable-next-line react/prop-types
      displayCurrentChildren[item.label] ? (
        // eslint-disable-next-line react/prop-types
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
