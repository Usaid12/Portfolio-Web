import React from "react";

const About = () => {
  return (
    <div
      name="About Me"
      className="md:h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl border-gray-500 font-semibold inline border-b-4 ">
            About Me
          </p>
        </div>
        <p className="text-lg mt-4 ">
          I am <span className="font-bold text-red-500">Usaid Asif</span>, a
          Computer Systems Engineering student at NED University of Engineering
          and Technology, with a passion for web development. I have gained
          extensive experience in front-end design and development, working with
          various technologies such as Tailwind, Bootstrap, JavaScript, HTML,
          and CSS. I am a skilled web developer, proficient in creating
          responsive and intuitive designs that are optimized for user
          experience. I have worked on several web development projects and have
          a keen eye for detail, ensuring that all of my work is of the highest
          quality. I am dedicated to my craft and am always looking for ways to
          expand my skillset and stay up-to-date with the latest trends in web
          development.
        </p>
        <p className="text-lg mt-8">
          I am a motivated and detail-oriented individual, with a strong work
          ethic and a commitment to delivering high-quality work. I enjoy
          working collaboratively with others and am always eager to learn from
          my colleagues and mentors. I am a quick learner and adaptable, able to
          work in fast-paced and dynamic environments. I am passionate about
          using my skills in web development to make a positive impact and
          contribute to the success of the organizations I work with. I am ready
          to apply my skills and experience to any new challenges that come my
          way and am excited to join a team where I can continue to grow and
          develop as a web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
