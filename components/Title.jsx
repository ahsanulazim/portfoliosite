export default function Title({ subhead, heading, margin }) {
    return (
        <div className={margin ? "mb-10 sm:mb-14" : ""}>
            <h3 className="text-sm sm:text-lg">
                {subhead}
            </h3>
            <h2 className="font-bold text-4xl sm:text-6xl text-main">

                {heading}

            </h2>
        </div>
    )
}
