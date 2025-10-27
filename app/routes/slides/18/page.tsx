import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 18: Inheritance Continued";
const agenda: string[] = ["Inheritance review", "Super review", "File Reading review", "Extra Credit 1", "Lab 10"];

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
    <p className="text-usf-yellow">Inheritance Review</p>
    </section>
    <section>
    <p>We can extend the functionality of a class by having a sub-class (child class) inherit it. This expands on the functionality and reduces the need to repeat code/implementations.</p>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>class Polygon &#123;</Indent>
    <Indent space={1}>//Implementation</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>class Rectangle extends Polygon &#123;</Indent>
    <Indent space={1}>//Expanded implementation</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className='text-usf-yellow'>Super review</p>
    </section>
    <section>
    <ul>
    <li>similar to <code>this</code></li>
    <li>references parent methods and variables</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">File Reading review</p>
    </section>
    <section>
    <div className="font-mono text-[16pt] text-left">
    <Indent>StringBuilder str = new StringBuilder();</Indent>
    <Indent>File file = new File(path);</Indent>
    <Indent>try &#123;</Indent>
    <Indent space={2}>Scanner reader = new Scanner(file);</Indent>
    <Indent space={2}>while (reader.hasNextLine()) &#123;</Indent>
    <Indent space={4}>str.append(reader.nextLine());</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={0}>&#125; catch(IOException e) &#123;</Indent>
    <Indent space={2}>System.out.println(e);</Indent>
    <Indent space={0}>&#125;</Indent>
    <Indent>return str.toString();</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[16pt] text-left">
    <Indent>StringBuilder str = new StringBuilder();</Indent>
    <Indent>try &#123;</Indent>
    <Indent space={2}>FileReader file = new FileReader(path);</Indent>
    <Indent space={2}>BufferedReader reader = new BufferedReader(file);</Indent>
    <Indent space={2}>String line = "";</Indent>
    <Indent space={2}>while (line != null) &#123;</Indent>
    <Indent space={4}>line = reader.readLine();</Indent>
    <Indent space={4}>str.append(line);</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent >&#125; catch(IOException e) &#123;</Indent>
    <Indent space={2}>System.out.println(e);</Indent>
    <Indent space={0}>&#125;</Indent>
    <Indent>return str.toString();</Indent>
    </div>
    </section>
    <section>
    <ul>
    <li>Can read any kind of text file</li>
    <li>We will use it to read csv files or "Comma Separated Value" files</li>
    </ul>
    </section>
    <section>
    <p className='text-usf-yellow'>
    Common structure with files
    </p>
    <ul>
    <li>Store contents into a StringBuilder with each new line also added</li>
    <li>Use the <code>toString()</code> to get the string version, then split it by the <code>\n</code> to get each row.</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Parsing rows</p>
    <ul>
    <li>We can then split the row with the delimiters, such as commas to create our inner array of values</li>
    <li><code>String s = "John Doe,12,student";</code></li>
    <li><code>String[] c = s.split(",")</code> -&gt; <code>&#123;"John Doe", "12", "student"&#125;</code></li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Split with RegEx</p>
    <ul>
    <li><code>split</code> takes in Regular Expression</li>
    <li>Powerful way of reading strings and getting information from strings</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">\n split</p>
    <Row>
    <HalfCode>
    <p>If our data looks like:</p>
      <Indent>String users = "John Doe,12,students\nJane Doe,15,student\nTim Jones,50,teacher\n";</Indent>
    <p><code>users.split("\n")</code> would give us:</p>
    </HalfCode>
    <HalfCode>
    &#123;"John Doe,12,student", "Jane Doe,15,student", "Tim Jones,50,teacher"&#125;
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">, split</p>
    <Row>
    <Half>
    <p>If our data looks like:</p>
    <Indent>String users = "John Doe,12,student";</Indent>
    <Indent>users.split(",") would give us</Indent>
    </Half>
    <HalfCode>
    &#123; "John Doe", "12", "student" &#125;
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">||| split</p>
    <Row>
    <Half>
    <p>If our data looks like:</p>
      <p><code>String users = "John Doe|||12|||student";</code></p>
    <p><code>users.split("|||");</code> would give us:</p>
    <sup>May need to use \ to negate the |</sup>
    </Half>
    <HalfCode>
    <Indent>&#123; "John Doe", "12", "student" &#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Escape Codes</p>
    <Row>
    <Half>
    <ul>
    <li>Some values in Regular Expression stand for something</li>
      <li><code>.</code> stands for any character, but if we want to check for the period, we often have to negate it with the "\" character. In java, we need to do \\ for the backslash to work.</li>
    </ul>
    </Half>
    <Half>
    <ul>
    <li><code>.</code> : any character</li>
    <li><code>\\.</code> : explicitly look for a period</li>
    <li><code>+</code> : one or more of the previous characters</li>
    <li><code>\\+</code> : explicitly look for the plus</li>
    <li><code>|</code> : sometimes means alternative options</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Extra Credit 1</p>
    </section>
    <section>
    <ul>
    <li>Problems in code to debug</li>
    <li>In a new doc, write out the problem</li>
    <li>Propose a solution</li>
    <li>Write a fix</li>
    <li>You have until Friday Nov, 7 at midnight to finish this</li>
    {/* TODO replace XXX with deadline */}
    </ul>
    <br />
    <ul>
    <li>Put everything in the GitHub repository and upload to GitHub</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 10</p>
    </section>
    <section>
    <ul>
    <li>File Reading</li>
    <li>Adding to a Company with Employees, Managers, and Developers</li>
    </ul>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
