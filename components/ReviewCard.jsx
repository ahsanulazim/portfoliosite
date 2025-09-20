import { FaStar } from "react-icons/fa6";

export default function ReviewCard() {
    return (
        <>
            <div className="card card-border border-second card-sm lg:card-md xl:card-lg 2xl:card-xl">
                <div className="card-body">
                    <div className="text-second text-2xl flex mb-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
                    <div className="card-actions mt-3">
                        <ul className="list">
                            <li className="list-row p-0">
                                <div className="avatar avatar-placeholder">
                                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                        <span className="text-xl">AI</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Ahsanul Azim Plabon</div>
                                    <div className="text-xs font-semibold opacity-60">Web Dev</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
