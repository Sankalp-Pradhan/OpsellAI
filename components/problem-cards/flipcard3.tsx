import FlipCard from "../ui/flipcard";
import Card1 from "./card1";
import Card3 from "./card3";


const Flipcard3 = () => {
    return (
        <FlipCard
            front={<Card3 />}
            backTitle="Competitors Change Faster Than You Can React"
            backDescription="By the time you notice a competitor dropped prices or launched a
    bundle, you have already lost sales."
        />
    );
};

export default Flipcard3;
