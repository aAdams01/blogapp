import Image from "next/image";

export default function Hero() {
  return (
  <section>
    <div>
      <h1 className="my-auto text-center text-2xl">Dev & Reader</h1>
      <div className="flex flex-row">
        {/* Column 1: Mini About Me */}
        <div>
          <h2>Ariel</h2>
          <h3>Web Developer</h3>
          <p>Location</p>
          <p>Coding</p>
          <p>Reading</p>
          <p>Listening</p>
          <p>Watching</p>
        </div>
        {/* Column 2: Site Intro + CTA */}
        <div>
          <h2>Welcome, <br /> 
              I'm Ariel. <br />
              Mom, Reader, Developer
          </h2>
          <h3>I'm web developer turned stay-at-home mom who loves to code and read in my free time. Whether it's during nap time or after tucking the kids into bed, you'll find me working on random software projects or diving into a new book. Sometimes both.</h3>
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