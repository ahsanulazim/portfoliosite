import ReviewCard from "./ReviewCard";
import Title from "./Title";

export default function Testimonial() {
    return (
        <>
            <section className="bg-shade" id="testimonial">
                <div className="px-4 py-14 lg:px-14 lg:py-28 max-w-[1920px] mx-auto">
                    <Title subhead="Clients Feedback" heading="Customer Testimonials" margin={true} />

                    <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
            </section>
        </>
    )
}
