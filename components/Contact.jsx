export default function Contact() {
    return (
        <section className="px-4 py-14 max-w-5xl mx-auto" id="contact">
            <div className="text-center mb-10">
                <h3 className="text-sm sm:text-lg">
                    Get In Touch
                </h3>
                <h2 className="font-bold text-4xl sm:text-6xl text-main">
                    Contact me
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <form className="fieldset gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="label mb-2" htmlFor="fname">First Name</label>
                        <input type="text" name="fname" className="input w-full border-main" placeholder="First Name" required />
                    </div>
                    <div>
                        <label className="label mb-2" htmlFor="lname">Last Name</label>
                        <input type="text" name="lname" className="input w-full border-main" placeholder="Last Name" required />
                    </div>
                    <div>
                        <label className="label mb-2" htmlFor="email">Email</label>
                        <input type="email" className="input w-full border-main" placeholder="Email" required />
                    </div>
                    <div>
                        <label className="label mb-2" htmlFor="tel">Phone</label>
                        <input type="tel" name="tel" className="input w-full border-main" placeholder="Phone Number" />
                    </div>
                </div>
                <div>
                    <label className="label mb-2" htmlFor="select">Choose a Topic</label>
                    <select defaultValue="Select One" name="select" className="select w-full border-main" required>
                        <option disabled={true}>Select One</option>
                        <option>Chrome</option>
                        <option>FireFox</option>
                        <option>Safari</option>
                    </select>
                </div>
                <div>
                    <label className="label mb-2" htmlFor="massage">Massage</label>
                    <textarea className="textarea w-full border-main" placeholder="Type Your Massage" name="massage" required></textarea>
                </div>
                <label className="label" htmlFor="checkbox">
                    <input type="checkbox" className="checkbox" name="checkbox" required />
                    I accept the terms
                </label>
                <div className="text-center">
                    <button type="submit" className="btn btn-wide rounded-md btn-primary mt-4">Submit</button>
                </div>
            </form>
        </section>
    )
}
