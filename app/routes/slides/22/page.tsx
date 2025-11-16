import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 22: HashSet/HashMap cont.";
const agenda: string[] = ["HashSet Review", "HashMap Review", "Lab 12"];

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
    <p className="text-usf-yellow">HashSet Review</p>
    </section>
    <section>
    <ul>
    <li>Unordered</li>
    <li>Non-duplicating/Unique</li>
    <li>Data structure</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Template</p>
    <Indent>HashSet&lt;T&gt; obj = new HashSet&lt;&gt;();</Indent>
    </section>
    <section>
    <p className="text-usf-yellow">Example</p>
    <Indent>HashSet&lt;Character&gt; chars = new HashSet&lt;&gt;();</Indent>
    <Indent>chars.add('c');</Indent>
    <Indent>chars.add('h');</Indent>
    <Indent>chars.contains('c'); // true</Indent>
    <Indent>chars.contains('o'); // false</Indent>
    <Indent>System.out.println(chars); &#8594; ['c', 'h']</Indent>
    </section>
    <section>
    <p className="text-usf-yellow">HashMap Review</p>
    </section>
    <section>
    <ul>
    <li>Key-Value pair collection</li>
    <li>Python Dictionary</li>
    <li>Keys are Unique</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Template</p>
    <Indent>HashMap&lt;K,V&gt; map = new HashMap&lt;&gt;();</Indent>
    </section>
    <section>
    <p className="text-usf-yellow">Example</p>
    <Indent>HashMap&lt;String, Double&gt; users = new HashMap&lt;&gt;();</Indent>
    <Indent>users.put("John", 3.72);</Indent>
    <Indent>users.put("James", 2.28);</Indent>
    <Indent>users.put("James", users.get("James") * 2);</Indent>
    <Indent>users.get("John"); &#8594; 3.72</Indent>
    <Indent>users.keySet(); &#8594; ["John", "James"];</Indent>
    <Indent>users &#8594; &#123; "John": 3.72, "James": 4.56 &#125;;</Indent>
    <Indent>users.containsKey("John"); &#8594; true</Indent>
    <Indent>users.containsKey("Jane"); &#8594; false</Indent>
    </section>
    <section className="text-[16pt]">
      <p className="text-usf-yellow">Sign up for Project 3 Interactive Grading</p>
      <p>Same as Project 1. Project 3 due on Friday, 11/14. Next Monday, 11/17 will be Code Reviews.</p>
      <p>Please head to Canvas to sign up for the Code Reviews. To ensure you meet with both myself and the TA throughout the Semester, please sign up for the person you didn't see last time.</p>
      <p>If you met with me for Project 1, meet with your TA. If you met with your TA for Project 1, meet with me.</p>
      <p>We will check and if the sign ups don't make sense, we will adjust them ourselves.</p>
      <p>Lecture will be recorded and posted to the course page. Please watch it before class. We will still have the usual quiz before class.</p>
      <p>Same set up as last time; come in, take quiz, leave, come back for allocated time slot.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 12: File Word Count</p>
    <p className="text-usf-yellow">Project 3</p>
    <p>Work on either. Both are due on Friday.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
