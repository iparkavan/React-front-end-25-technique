import MenuList from "./MenuList";
import "./styles.css";

// eslint-disable-next-line react/prop-types
const SidebarTreeView = ({ menus = [] }) => {
  
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default SidebarTreeView;
