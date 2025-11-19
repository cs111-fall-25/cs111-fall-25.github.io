import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 26: Go Fish Lab";
const agenda: string[] = ["Command Line Arguments", "Go Fish Lab"];

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
    <p className="text-usf-yellow">Command Line Arguments</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>The <code>String[] args</code> are called <strong>Command Line Arguments</strong></p>
    <p>These are arguments passed in when we run the code</p>
    </Half>
    <HalfCode>
    <Indent>public static void main(String[] args) &#123;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>public class Main &#123;</Indent>
    <Indent space={1}>public static void main(String[] args) &#123;</Indent>
    <Indent space={2}>System.out.println(args[0]);</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>java Main Hello World</Indent>
    <Indent>&gt;&gt; Hello</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>public class Add &#123;</Indent>
    <Indent space={1}>public static void main(String[] args) &#123;</Indent>
    <Indent space={2}>double total = 0.0;</Indent>
    <Indent space={2}>for(String arg : args) &#123;</Indent>
    <Indent space={3}>total += Double.parseDouble(arg);</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>System.out.println(total);</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>java Add 1.0 3 4.0 5</Indent>
    <Indent>&gt;&gt; 13.0</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>public class Add &#123;</Indent>
    <Indent space={1}>public static void main(String[] args) &#123;</Indent>
    <Indent space={2}>double total = 0.0;</Indent>
    <Indent space={2}>for(String arg : args) &#123;</Indent>
    <Indent space={3}>try &#123;</Indent>
    <Indent space={4}>total += Double.parseDouble(arg);</Indent>
    <Indent space={3}>&#125; catch(NumberFormatException e)&#123;</Indent>
    <Indent space={4}>continue;</Indent>
    <Indent space={3}>&#125;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>System.out.println(total);</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>java Add 1.0 3.0 4 a 8 !</Indent>
    <Indent>&gt;&gt; 16.0</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p>Great to use when specifying different values to run when executing code.</p>
    </section>
    <section>
    <ul>
    <li>Great when testing code with different inputs</li>
    <li>Helpful for specifying files being read at run-time</li>
      <li>Harder to use with built-in compilers/code runners (IDE)</li>
    <li>Useful when data is passed in from terminal</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 14: Go Fish!</p>
    </section>
    <section>
    <p>Fully optional. Would provide an extra graded assignment in the labs section.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
