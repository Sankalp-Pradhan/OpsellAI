import FlipCard from "../../ui/flipcard";
import Card1 from "./card1";
import Card2 from "./card2";


const Flipcard2 = () => {
    return (
        <FlipCard
        front={<Card2 />}
        backTitle="Pricing Decisions Still Happen Manually"
        backDescription="   Your team changes prices based on guesswork, competitor checks, or
    gut feeling instead of real-time data."
    />
    );
};

export default Flipcard2;
