import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 19: Debugging";
const agenda: string[] = ["Quiz 8", "Lab 10 Structure", "Enums", "Final Exam", "Debugging"];

const Slide = () : ReactElement => {
  return (
    <>
    <SlideNavbar title={title} downloadHref={slidesPdf} />
    <Slides>
    <section>
    <p className="text-usf-yellow">{title}</p>
    </section>
    <section>
    <p className="text-usf-yellow">Agenda</p>
    <ul className="list-disc">
    {agenda.map((event: string, index: number) => <li key={index}>{event}</li>)}
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Quiz 8</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 10 Structure</p>
    </section>
    <section>
    <p>The order of writing code is important. Blindly coding will only confuse you more.</p>
    <p>It's important to think about what may be necessary first.</p>
    </section>
    <section>
    <div className="text-left">
    <p>For Lab 10:</p>
    <ul>
    <li>Does it make sense to implement the <code>fillCompany</code> function when we haven't read the file yet?</li>
    <li>Does it make sense to call <code>findDevelopersByLanguage</code> when <code>getAllDevelopers</code> and <code>knowsLanguage</code> aren't written yet?</li>
    </ul>
    <p>Think about what you need first sometimes.</p>
    </div>
    </section>
    <section>
    <p>There is some order to what functions to implement first.</p>
    <p>Start by planning out what functions may need to be called in other functions.</p>
    <p>Implement dependencies first.</p>
    </section>
    <section>
    <p>The README also often outlines the general order if you read it top down.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Enums</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>A concept that allows us to have some explicit constants in java.</p>
    </Half>
    <HalfCode>
    <Indent>enum &gt;enum name&lt; &#123;</Indent>
    <Indent space={1}>OPTION_1,</Indent>
    <Indent space={1}>OPTION_2,</Indent>
    <Indent space={1}>OPTION_3,</Indent>
    <Indent space={1}>OPTION_4,</Indent>
    <Indent space={1}>OPTION_5,</Indent>
    <Indent space={1}>...etc.,</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Imagine we have a Computer class and we want to standardize the types of form factors. We can use an <code>enum</code> to accomplish this.</p>
    </Half>
    <HalfCode>
    <Indent>enum FormFactor &#123;</Indent>
    <Indent space={1}>LAPTOP,</Indent>
    <Indent space={1}>DESKTOP,</Indent>
    <Indent space={1}>TABLET</Indent>
    <Indent>&#125;</Indent>
    <br />
    <br />
    <Indent>FormFactor.LAPTOP</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Final Exam</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Section 1: Wednesday 12/10 at 10AM-12PM (LS 307)</p>
    </Half>
    <Half>
    <p>Section 2: Monday 12/8 at 3PM-5PM (LS G12)</p>
    </Half>
    </Row>
    </section>
    <section>
    <p>Will be on all of the concepts we have covered <strong>after</strong> the midterm.</p>
    <ul>
    {["Classes", "Objects", "static", "instance", "equals", "Pseudocode", "UML", "abstract", "debugging", "method overloading", "upcasting/downcasting", "File Reading", "File Writing", "ArrayList", "LinkedList", "HashSet", "HashMap", "Recursion", "Basic Sorting", "Basic Searching"].map((val: string, i: number) => <li key={i}>{val}</li>)}
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Debugging</p>
    </section>
    <section>
    <ul>
    <li>Stepping through code</li>
    <li>Identify processes happening</li>
    <li>See variables at different points</li>
    <li>Pause our program</li>
    <li>Find logical errors</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">In Class: Debugging</p>
    </section>
    <section>
    <p className="text-usf-yellow">Breakpoints</p>
    </section>
    <section>
    <ul>
    <li>Pauses code during execution</li>
    <li>Place breakpoint at <code>Main</code> method</li>
    <li>See what is happening throughout program.</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Stepping into Instructions</p>
    </section>
    <section>
    <ul>
    <li>Step through code to see what's happening</li>
    <li>View values in variables</li>
    <li>Removes the need for multitude of print statements</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Stepping over</p>
    </section>
    <section>
    <ul>
    <li>Step/Next button to go to next function</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Continue</p>
    </section>
    <section>
    <ul>
    <li>Go to the next breakpoint</li>
    <li>continue through code</li>
    </ul>
    </section>
    
    </Slides>
    </>
  )
}

export default Slide;
