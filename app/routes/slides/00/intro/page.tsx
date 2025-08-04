import { Navbar, Slides } from '@/components';


// Remove some fragments

import usfca from './img/usfca.jpg';
import nightskyline from './img/night-skyline-hong-kong.jpg'
import gradingTable from './img/grading-table.png';
import textbook from './img/textbook.jpg';
import teachingIcon from './img/teaching.png';
import programmingIcon from './img/programming.jpg';
import sailingIcon from './img/sailing.jpg';

const IntroSlides = () => {
  return (
    <>
    {/* <Navbar /> */}
    {/* Add download button */}
    <Slides>
    <section>
    <p className="text-usf-yellow">CS 111: Foundations of Program Design</p>
    </section>
    <section>
    <p className="text-usf-yellow">Welcome!</p>
    </section>
    <section>
    <p className="text-usf-yellow">About Me!</p>
    <div className="r-hstack gap-10">
    <img width={500} src={nightskyline} alt="Hong kong skyline" className=""/>
    <img width={500} src={usfca} alt="campus" className=""/>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Academic Experience</p>
    <div className="text-md">
    <ul className="">
    <li>USF Alumni</li>
    <ul>
    <li>BS CS</li>
    <li>MAT</li>
    </ul>
    <li>CS Major, Psych Minor, joined Dual Degree Teaching Program</li>
    <li>TA for C and Systems, Tutor in the Tutoring Center</li>
      <li>Taught Mathematics at different Secondary Schools</li>
    <li>Helped various startups</li>
    <li>CoderSchool Management</li>
    <li>Solutions Architect at a current Startup</li>
    </ul>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Tech Interests</p>
    <ul >

    <li>Web Development</li>
    <li>System Design</li>
    <li>DevOps</li>
    <li>Programming Languages</li>
    <li>CS for All</li>
      <li>Computer Science Education</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Hobbies</p>
    <div className="r-hstack">
    <img width={500} src={programmingIcon} alt="programming hobby" className=""/>
    <img width={500} src={sailingIcon} alt="sailing hobby" className=""/>
    <img width={500} src={teachingIcon} alt="teaching hobby" className=""/>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Your Turn!</p>
    </section>
    <section>
    <p className="text-usf-yellow">With a partner next to you, share about yourself!</p>
    <ul>
    <li>What’s your name?</li>
    <li>Where are you from?</li>
    <li>What year are you in?</li>
    <li>What program are you in?</li>
    <li>What are you interested in? Doesn&apos;t have to be technical interests.</li>
    </ul>
    </section>
    <section>
    Out of curiosity...
    </section>
    <section>
    How many of you are CS majors? 
    </section>
    <section>
    CS Minors?
    </section>
    <section>
    Math Majors?
    </section>
    <section>
    Data Science?
    </section>
    <section>
    UTEC/Teaching/UESJ?
    </section>
    <section>
    Engineering?
    </section>
    <section>
    Others?
    </section>
    <section>
    Freshmen?
    </section>
    <section>
    Sophomores?
    </section>
    <section>
    Juniors?
    </section>
    <section>
    Seniors?
    </section>
    <section>
    Alright that&apos;s enough.
    </section>
    <section>
    TA Introduction!
    </section>
    <section>
    Class Expectations
    </section>
    <section>
    <p className="text-usf-yellow">Attendance</p>
    <p className="">
    Mandatory. Email me or message me on CampusWire (we will get into that more later) if you can’t come to class.
    </p>
    </section>
    <section>
    <p className='text-usf-yellow'>Textbook</p>
    <div className="flex flex-row">
    <ul>
    <li>Java Software Solutions</li>
    <li>ISBN: 9780134543284</li>
    <li>Authors: John Lewis, William Loftus</li>
    <li>Publisher: Pearson</li>
    <li>Publication Date: 2017-02-17</li>
    <li>Recommended</li>
    </ul>
    <img src={textbook} alt="Java Software Solutions Textbook" />
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Getting Help</p>
    <ul>
    <li>Myself</li>
    <li>TA</li>
    <li>Tutoring Center</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Code Review</p>
    <p>If I question or doubt whether you wrote your own code, I&apos;ll ask you to come into my office hours and have you explain different parts of your code to me.</p>
      <p>Additionally, the projects will have an Interactive Grading portion, where you will meet with one of us (TA or myself). We&apos;ll ask some questions about your project to ensure you understand your work.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Late Policy/Resubmission Policy</p>
    <ul>
    <li>5 Late Submissions throughout the semester</li>
    <ul>
    <li>Canvas Module countdown</li>
    </ul>
    <li>Send me your reasoning for why it was late</li>
      <li>If you use the submission, up to 3 days late to still receive credit</li>
        <li>No resubmissions</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Taking Notes/Tech Policy</p>
    <ul>
    <li className="">I will post the slides online after class.</li>
    <li className="">I may post the code written in class on Canvas, on CampusWire, or on GitHub (more on this later) depending on the context.</li>
    <li className="">I’m okay with you all using your computers and tablets, but please be productive in class and pay attention. I don’t want to end up repeating myself every time in Office Hours because you were doing something else in class.</li>
      </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Office Hours</p>
    <ul>
    <li>MW 4:00-5:00 (After class)</li>
    <li>Room HR 415</li>
    <li>On Syllabus</li>
    <li>Also posted on CampusWire after today</li>
    <li>Please come into my Office Hours or the Office Hours of a TA to get help if you’re unsure about anything!</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">TA Office Hours</p>
    <div className="flex flex-row justify-around">
    <div>
    <p>Omyaasree</p>
    <p>TIME</p> {/* TODO FILL TIME */}
    <p>HR 411/413 (CS Labs)</p>
    </div>
    <div>
    <p>Rudraraj</p>
    <p>TIME</p> {/* TODO FILL TIME */}
    <p>HR 411/413 (CS Labs)</p>
    </div>
    </div>
    </section>
    <section>
    Syllabus Walkthrough
    </section>
    <section>
    <p className="text-usf-yellow">Course Objectives</p>
    <div className="text-md">
    <ul className="">
    <li>Students will learn basic principles of software design, development, and debugging. Students should leave the course able to develop quality software: well-structured, clearly written, and robust.</li>
    <li>Mastery of these subjects shall be demonstrated through the labs, projects, quizzes, in-class assignments, and exams.</li>
    </ul>
    </div>
    </section>
    <section>
    <div>
    <ul>
    <li>Students will learn and be able to use the following computer science concepts:</li>
    <ul>
    <li>Variable types and uses</li>
    <li>Objects and references to objects</li>
    <li>Command line, Keyboard, and File input/output</li>
    <li>Conditional Statements</li>
    <li>Loops</li>
    <li>Mathematical Operations</li>
    <li>Object Oriented Programming, including encapsulation and inheritance</li>
    <li>Basic arrays</li>
    <li>Basic collection data types</li>
    </ul>
    </ul>
    </div>
    </section>
    <section>
    Class Structure
    </section>
    <section>
    <p className="text-usf-yellow">Assignment Structure</p>
    <div className="flex text-[16pt]">
    <div className="flex flex-col">
    <ul>
    <li>Weekly quizzes - short quizzes to check for understanding</li>
      <ul>
    <li>Done in class (Mondays)</li>
    </ul>
    <li>In-class Programming - short programming assignments that can usually be completed in class. Can only be madeup if you weren&apos;t in class.</li>
      <ul>
    <li>Due end of class</li>
    </ul>
    {/* </ul> */}
    {/* </div> */}
    {/* <div className="flex flex-col"> */}
    {/* <ul> */}
    <li>Labs - medium sized assignments that take 3-5 days</li>
    <ul><li>Due by the end of the week, usually worked on in class on Wednesdays</li></ul>
    </ul>
    </div>
    <div className="flex flex-col">
    <ul>
    <li>Projects - larger assignments that can take 7-10 days</li>
    <ul><li>Due two weeks after on Fridays</li></ul>
    <br />
    <li>
    Exams - a Midterm and Final Exam to demonstrate your understanding of the material through multiple choice, fill in the blanks, free response, and paper coded problems.
      </li>
    </ul>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Specification based Grading</p>
    <p>The projects will have a specification regarding required features implemented for each grade point</p>
      <p>For example, to get a C for the project, you <strong>must</strong> completely implement specific features. To get a B for the project, you <strong>must</strong> completely implement the features of a C and additional features to get a B.</p>
        <p>We will see this more when we get to the first project.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Labor Based Grading</p>
    <p>We will use a Labor Based Grading</p>
    <p>There is a supporting document in the &quot;Policies&quot; in the &quot;Grading System&quot; document. Please read it before next week to have a better understanding of what it is.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Labor Based Grading cont.</p>
    <div className="text-[20pt]">
    <p>Short of it:</p>
    <ul>
    <li>Do X number of each assignment and you&apos;ll end up with a certain grade</li>
    <li>Do less work, you&apos;ll end up with a lower grade.</li>
    <li>Do more work, you&apos;ll end up with a better grade</li>
    <li>Labs, In Class, Quizzes, and Exams will be graded by Complete/Incomplete</li>
    <li>Projects will be graded with Specification Based Grading</li>
    <li>Engagement and Extra Credit are also Complete/Incomplete</li>
    <li>Exams are also Complete/Incomplete</li>
    </ul>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Table</p>
    <img height={500} src={gradingTable} alt="Grading Table" className=""/>
    </section>
    <section>
    <p className="text-usf-yellow">Projects</p>
    <p>Quiz Study Helper</p>
    </section>
    <section>
    <p className="text-usf-yellow">CS Engagement</p>
    <p>Go to a CS event and take a picture of yourself at the event.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Important note about AI</p>
    </section>
    <section>
    <p className="text-usf-yellow">AI Use</p>
    <ul>
    <li>Don&apos;t use it</li>
    <li>We can tell</li>
    <li>You won&apos;t learn to code by relying on it.</li>
    <li>Not always accurate</li>
    <ul>
    <li>Spend more time fixing it than writing it in some cases</li>
    </ul>
    <li>We may have exercises to showcase this throughout the semester</li>
    <li>Just don&apos;t use it.</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Plagiarism and Cheating</p>
    <ul>
    <li>Conversation around your code</li>
    <li>If suspicion remains after meeting, report may be sent to Academic Integrity Committee</li>
      <li>IC/F on submission</li>
    <li>Second time, IC/F on submission, report sent to Academic Integrity Committee</li>
    <li>Likely means CASA and Dean get involved</li>
    <ul>
    <li>Not fun</li>
    <li>Don&apos;t do it.</li>
    </ul>
    </ul>
    </section>
    <section>Set some expectations</section>
    <section>
    <p className="text-usf-yellow">What you&apos;ll do in this class</p>
    {/* TODO separate slides */}
    <div className="flex flex-row text-[16pt] ">
    <div className="flex flex-col">
    <ul>
    <li>Create small to medium sized programs to develop a deeper understanding of Java</li>
    <li>Learn the Foundations of the Java Programming Language</li>
    <li>Brainstorm and problem solve your way through various programs</li>
    <li>Practice what you&apos;ve learned in various settings with different kinds of programs</li>
    </ul>
    </div>
    <div className="flex flex-col">
    <ul>
    <li>Present your code to others.</li>
    <li>Diagram your code and explain your thinking to others</li>
    <li>Develop a Quiz Study Program</li>
    <li>Become more comfortable with the Terminal to run programs</li>
   </ul>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">What we won&apos;t do in this class</p>
    <div className="flex flex-row justify-between">
    <div className="flex flex-col">
    <ul>
    <li>Learn another programming language like C or Rust</li>
    <li>Create an AI</li>
    <li>Create a Mobile App</li>
    <li>Create a Game</li>
    <li>Create a new OS</li>
    <li>Develop the next big GPT equivalent</li>
    </ul>
    </div>
    <div className="flex flex-col">
    <ul>
    <li>Hack into your friends&apos; social media accounts</li>
    <li>Fix your family&apos;s printer</li>
    <li>Get your friend&apos;s password</li>
   </ul>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Hopefully what you&apos;ll be able to do after this semester</p>
    <ul>
    <li>Code in Java</li>
    <li>Problem solve and develop a foundational understanding of debugging</li>
    <li>Have a stronger understanding of Programming as a whole</li>
    <li>Understand how to work through a problem and solve it</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Lastly, what you might be able to do after this semester</p>
    <ul>
    <li>Use tools to find bugs in your code</li>
    <li>Research on your own to expand your own understanding</li>
    <li>How to ask for help and find the resources you need</li>
    </ul>
    </section>
    <section>See you on Monday for our setup!</section>
    </Slides>
    </>
  )
}

export default IntroSlides;
