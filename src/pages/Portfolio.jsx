
import Hero from "../components/Portfolio/Hero";
import PortfolioPictures from "../components/Portfolio/PortfolioPictures";
import All from "../components/Portfolio/All";
import Brands from "../components/Portfolio/Brands";
import Outdoor from "../components/Portfolio/Outdoor";
import Indoor from "../components/Portfolio/Indoor";
import Events from "../components/Portfolio/Events";
import PorftolioFooter from "../components/Portfolio/PorftolioFooter";
const Portfolio = ({ portolioSelected, setPortfolioSelected }) => {
  return (
    <div>
      <Hero />
      <PortfolioPictures
        portolioSelected={portolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      {portolioSelected === "all" && <All />}
      {portolioSelected === "brands" && <Brands />}
      {portolioSelected === "outdoor" && <Outdoor/>}
      {portolioSelected === "indoor" && <Indoor/>}
      {portolioSelected === "events" && <Events />}
      <PorftolioFooter />
    </div>
  );
};

export default Portfolio;
