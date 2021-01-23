import React from 'react';
import coverImage from "../../assets/cover/stephen-image.jpg";


function About() {
  return (
    <section className="my-5">
      <h1 id="about">Biography</h1>
      <div>
        <p>My name is Janelle Peña. I am currently studying at  Northern Arizona University and working on gaining a
           Mechanical Engineering degree and a Modern Language degree with a Spanish emphasis.  I chose to become an 
           engineer because I have dreamed about being an engineer since my  7th grade  STEM Class . I also love math
           so I found it fitting. I choose Mechanical Engineering because I want to create, being a Mechanical Engineer
           allows me this opportunity. I want to impact the world one creation at a time. I don't know what  to create
           yet but I know their are many possibilities.</p>

           <p>One of the amazing things with a mechanical engineering degree is there are many options of what I can do.
           I have taken many math, physics, and design classes.  The different skills and information that I learned
           in these classes will help me be a better engineer. I have also gained technical skills as well like MATLAB,
           SolidWorks, Microsoft Office, and Googles' tools. There are other topics outside of engineering that I will
           need to succeed as well. These include business concepts, like supply and demand, and how to lead. I have
           taken a Macroeconomics  class to enrich my understanding of business and the economy. </p>
           <p> I also have taken a leadership role in a club on campus called SWE, (Society of Women Engineers), in this club I am able to
           network with other engineers and we are able to help each other when we have questions about our classes or
           different projects that we are working on.  I am also part of the LDSSA committee where we plan activities
           for the different wards.  As president of the LDSSA I get the opportunity to work with a team of about ten
           and I delegate and organize the activities and make sure things go as planned. When things go wrong we are
           able to work the problem and find a new solution. In both of these clubs I feel part of a community and it is
           wonderful. Maybe one day I will help create an artificial pancreas to cure diabetes, the next best roller
           coaster, or a flying solar car. All these inventions would impact the world in different ways.  I have
           listed the different projects I have worked on in chronological order having the most recent projects be
           listed first and so forth on the top of the webpage. A quick fun fact about me is that I enjoy skiing,
           playing card/ board  games, and watching sports. In high school I went to FBLA (Future Business Leaders
           of America) nationals three out of the four years, and I was also the valedictorian of my class. I wasn't
           the most intelligent in my class but I took the more challenging classes and worked hard to achieve both
           of these accomplishments. I love to learn and welcome any opportunity to do so!
        </p>
      </div>
      <img src={coverImage} className="my-2" style={{ width: "25%" }} alt="cover" />
    </section>
    
  );
}

export default About;