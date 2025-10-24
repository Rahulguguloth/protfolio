import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Guguloth Rahul | AI & Data Science Student & Developer</title>
        <meta name="description" content="Learn more about Guguloth Rahul, a passionate learner specializing in AI & Data Science, with a foundation in Mechanical Engineering and interests in software development, web design, and emerging technologies." />
        <link rel="canonical" href="https://guguloth-rahul.vercel.app/about" />
        <meta property="og:title" content="About Guguloth Rahul | AI & Data Science Enthusiast" />
        <meta property="og:description" content="Get to know Guguloth Rahul’s journey from Mechanical Engineering to AI & Data Science, and his passion for coding, creativity, and problem-solving." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://guguloth-rahul.vercel.app/about" />
        <meta property="og:image" content="https://guguloth-rahul.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Guguloth Rahul's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@GugulothRahul" />
        <meta name="twitter:title" content="About Guguloth Rahul | AI & Data Science Student" />
        <meta name="twitter:description" content="Discover Guguloth Rahul’s background in Mechanical Engineering, his transition to AI & Data Science, and his enthusiasm for technology and innovation." />
        <meta name="twitter:image" content="https://guguloth-rahul.vercel.app/profile_pic.png" />
      </Helmet>
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
          <BlurImage
            src="/profile_pic.png"
            blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
            alt="Profile"
            className="w-full h-full"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I’m <strong>Guguloth Rahul</strong>, a passionate learner with a strong academic background in both <strong>Mechanical Engineering</strong> and <strong>Artificial Intelligence & Data Science</strong>. I completed my diploma in Mechanical Engineering from <strong>Government Polytechnic, Mahabubnagar</strong> and am currently pursuing my B.Tech in Hyderabad, specializing in AI & DS.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My journey bridges engineering principles with the rapidly evolving world of artificial intelligence. I’m deeply interested in <strong>software development</strong>, <strong>web design</strong>, and <strong>emerging tech trends</strong>, where I continue to explore how technology can solve real-world problems.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Through my academic projects and personal explorations, I’ve developed strong skills in <strong>programming</strong>, <strong>problem-solving</strong>, and <strong>creative thinking</strong>. I take pride in being a <strong>self-motivated</strong> and <strong>curious</strong> individual who constantly seeks opportunities to grow both personally and professionally.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to keep learning, build impactful digital experiences, and contribute meaningfully to the ever-changing world of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
