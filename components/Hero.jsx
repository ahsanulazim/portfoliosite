import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero bg-shade min-h-screen">
      <div className="hero-content justify-between gap-8 flex-col lg:flex-row w-full px-2 lg:px-14 max-w-[1920px] mx-auto">
        <div className="text-center lg:text-left">
          <h3 className="text-sm md:text-lg xl:text-xl">
            Hey, I am Ahsanul Azim
          </h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-7xl font-medium text-balance">
            <strong>
              I create <span className="text-main">Product Design</span> and
              brand experience
            </strong>
          </h1>
          <p className="py-6 text-balance text-sm md:text-lg xl:text-xl opacity-70">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary lg:btn-lg rounded-md bg-main">
            Get In Touch
          </button>
        </div>
        <div className="relative w-full max-w-4xl h-auto aspect-[6/5]">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
