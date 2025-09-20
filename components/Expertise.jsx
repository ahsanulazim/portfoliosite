import ExpertCard from "./ExpertCard";
import Title from "./Title";
import styles from "./Expertise.module.css"

export default function Expertise() {

    const skills = [
        {
            id: 1,
            icon: "/product-chain.png",
            heading: "Strategy & Direction",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
        {
            id: 2,
            icon: "/tag.png",
            heading: "Branding & Logo",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
        {
            id: 3,
            icon: "/feather-pen.png",
            heading: "UI & UX Design",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        },
        {
            id: 4,
            icon: "/code.png",
            heading: "Webflow Development",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        }
    ]

    return (
        <>
            <section className="px-4 py-14 lg:px-14 lg:py-28 max-w-[1920px] mx-auto">
                <Title heading="My Expertise" subhead="My Skills" />
                <div className={`${styles.gridContainer} grid gap-6`}>
                    {skills.map((skill) => <ExpertCard key={skill.id} skill={skill} />)}
                </div>
            </section >
        </>
    )
}
