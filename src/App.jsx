import "./App.css";
import Accordian from "./components/accordian/Accordian";
import ImageSlider from "./components/image-slider/ImageSlider";
import { LightDarkMode } from "./components/light-dark-mode/LightDarkMode";
import LoadMoreData from "./components/load-more-data/LoadMoreData";
import { ScrollIndicator } from "./components/scroll-indicator/ScrollIndicator";
import StarRating from "./components/star-rating/StarRating";
import SidebarTreeView from "./components/tree-view/SidebarTreeView";
import { Menus } from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordian /> */}

      {/* <StarRating noOfStart={10} /> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

      {/* <LoadMoreData /> */}

      {/* Tree-stractured View */}
      {/* <SidebarTreeView menus={Menus} /> */}

      {/* Dark-Light-Mode */}
      {/* <LightDarkMode /> */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
