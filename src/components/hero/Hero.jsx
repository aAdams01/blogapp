import Image from "next/image";

export default function Hero() {
  return (
  <section>
    <div>
      <h1 className="my-7 text-center text-3xl md:text-5xl">Web Developer</h1>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Column 1: Mini About Me */}
        <div className="diamond-container">
          <div className="diamond">
            <h2 className="md:text-2xl text-lg uppercase font-medium">Ariel</h2>
            <h3>Web Developer</h3>
            <p>Location</p>
            <p>Coding</p>
            <p>Reading</p>
            <p>Listening</p>
            <p>Watching</p>
          </div>
        </div>
        {/* Column 2: Site Intro + CTA */}
        <div className="md:col-span-2">
          <h2 className="font-medium md:text-2xl text-lg">Welcome, <br /> 
              I'm <span className="text-lavendar">Ariel</span>. <br />
              Mom, <span className="text-lavendar">Reader</span>, Developer
          </h2>
          <h3>I'm web developer turned stay-at-home mom who loves to code and read in my free time. Whether it's during nap time or after tucking the kids into bed, you'll find me working on random software projects or diving into a new book. Sometimes both.</h3>
          <a href="">Read the Blog</a>
        </div>
        {/* Column 3: Skills + Recent Highlights */}
        <div>
          <p>4 Programming Languages</p>
          <p>3 Kiddos</p>
          <p>43 Books Read this year</p>
        </div>
      </div>
    </div>
  </section>
  );
}