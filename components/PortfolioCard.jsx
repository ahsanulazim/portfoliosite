import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function PortfolioCard({ portItem }) {
    return (
        <>
            <div className="card sm:card-lg xl:card-xl bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={portItem.img}
                        alt={portItem.title}
                        className="w-full h-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{portItem.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <Link href="#" className="underline flex items-center hover:text-main">View in Dribbble <GoArrowUpRight className="text-lg" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
