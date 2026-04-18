import FlipCard from "../ui/flipcard";
import Card1 from "./card1";


const Flipcard1 = () => {
    return (
            <FlipCard
                front={<Card1 />}
                backTitle="Your Team Is Working Across 6 Different Tools"
                backDescription="Pricing is in one dashboard, listings in another, competitor tracking in spreadsheets, and performance in agency reports."
            />
        
    );
};

export default Flipcard1;
