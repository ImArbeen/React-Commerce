{
  /*import Section is here  */
}

import HomeSlider from "../../components/banner/home-slider.components";
import { HomePageSectionTitle } from "../../components/common/title/home-title.components";

import HomeHeaderMenu from "../../components/header/home-header.components";

const HomePages: React.FC = () => {
  return (
    <>
      <HomeHeaderMenu />
      <HomeSlider />

      {/* catogeries starts from here */}
      <HomePageSectionTitle title="Category list " link={"/category"} />

      {/* Brand List   */}
      <HomePageSectionTitle title="Brand List " link={"/brand"} />

      {/* Brand List   */}
      <HomePageSectionTitle title="Product List " link={"/product"} />
    </>
  );
};

export default HomePages;
