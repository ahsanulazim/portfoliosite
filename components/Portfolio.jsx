import PortfolioCard from "./PortfolioCard";
import Title from "./Title";
import { FaDribbble } from "react-icons/fa6";

export default function Portfolio() {
    return (
        <>
            <section className="px-4 py-14 lg:px-14 lg:py-28 max-w-[1920px] mx-auto">
                <div>
                    <Title subhead="Recent Projects" heading="My Portfolio" />
                    <button className="btn btn-secondary rounded-md"><FaDribbble />Visit My Dribbble</button>
                </div>
                <PortfolioCard />
            </section>
        </>
    )
}
