import Title from "./Title";

export default function About() {
    return (
        <>
            <section className="hero" id="about">
                <div className="hero-content justify-between gap-14 flex-col lg:flex-row w-full px-4 py-14 lg:px-14 lg:py-28 max-w-[1920px] mx-auto">
                    <img
                        src="/About Me.png"
                        alt="Professional Pic"
                        className="w-full lg:max-w-lg xl:max-w-2xl"
                    />
                    <div className="lg:max-w-3xl">
                        <Title subhead="About" heading="About Me" margin={true} />
                        <p className="mb-6 lg:text-balance lg:text-lg xl:text-xl opacity-60">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>

                        <p className="lg:text-balance lg:text-lg xl:text-xl opacity-60">Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
