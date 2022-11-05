import SEO from "components/common/Head";
import data from "data/list.json";
import Header from "components/Header";
import Hours from "components/Hours";
import Address from "components/Address";
import MenuSection from "components/MenuSection";

export default function Home() {
  return (
    <>
      <SEO title="Cafe Layout | React" slug="/" />
      <div className="py-0 sm:py-10 max-w-screen-lg">
        <div className=" main-container rounded-none sm:rounded overflow-hidden">
          <div className="hero flex-col sm:flex-row">
            <Header />
            <Hours />
          </div>
          <div className="flex flex-wrap">
            {data.map((item, index) => (
              <MenuSection key={item.key} item={item} index={index} />
            ))}
          </div>
          <Address />
        </div>
      </div>
    </>
  );
}
