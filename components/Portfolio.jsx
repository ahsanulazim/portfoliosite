import PortfolioCard from "./PortfolioCard";
import Title from "./Title";
import { FaDribbble } from "react-icons/fa6";

export default function Portfolio() {

    const portItems = [
        {
            id: 1,
            img: "/Image.png",
            title: "Ahuse"
        },
        {
            id: 2,
            img: "/Image-1.png",
            title: "App Dashboard"
        }, {
            id: 3,
            img: "/Image-2.png",
            title: "Easy Rent"
        },
    ]

    return (
        <>
            <section className="px-4 py-14 lg:px-14 lg:py-28 max-w-[1920px] mx-auto" id="portfolio">
                <div className="flex items-start gap-y-5 sm:items-center flex-col sm:flex-row sm:justify-between mb-10 sm:mb-14">
                    <Title subhead="Recent Projects" heading="My Portfolio" margin={false} />
                    <button className="btn btn-secondary rounded-md"><FaDribbble />Visit My Dribbble</button>
                </div>
                <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap">
                    {portItems.map((portItem) => <PortfolioCard key={portItem.id} portItem={portItem} />)}
                </div>
            </section>
        </>
    )
}
