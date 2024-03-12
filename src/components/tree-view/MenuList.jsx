import MenuItem from "./MenuItem";

// eslint-disable-next-line react/prop-types
const MenuList = ({ list = [] }) => {
  // console.log(list);
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? // eslint-disable-next-line react/jsx-key
          list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
};
      
export default MenuList;
