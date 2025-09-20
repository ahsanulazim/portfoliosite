export default function ExpertCard({ skill }) {
    return (
        <>
            <div className="card bg-shade hover:border-b-3 hover:border-b-main">
                <div className="avatar avatar-placeholder p-6 pb-0 rounded-md">
                    <div className="w-16 rounded-xl bg-white shadow-lg p-3">
                        <img src={skill.icon} alt={skill.heading} />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{skill.heading}</h2>
                    <p>{skill.body}</p>
                </div>
            </div>
        </>
    )
}
