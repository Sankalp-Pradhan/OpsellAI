import FlipCard from "../../ui/flipcard";
import Card1 from "./card1";
import Card4 from "./card4";


const Flipcard4 = () => {
    return (
        <FlipCard
            front={<Card4 />}
            backTitle="Your Product Listings Are Different Everywhere"
            backDescription="Titles, images, prices and descriptions are inconsistent across
          marketplaces, hurting trust and conversion."
        />
    );
};

export default Flipcard4;
