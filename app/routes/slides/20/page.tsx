import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 20: Inherited Casting";
const agenda: string[] = ["Casting", "Upcasting", "Downcasting", "FileWriter", "BufferedWriter", "Lab 11"];

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
    <p className="text-usf-yellow">Object Casting</p>
    </section>
    <section>
    <p className="text-usf-yellow">Upcasting</p>
    </section>
    <section>
    <p className="text-usf-yellow">Upcasting</p>
    <Indent>ParentClass obj = new ChildClass();</Indent>
    </section>
    <section>
    <Row>
    <Half>
    <p>Object is a Parent Type, but uses the implementation of the Child type.</p>
    </Half>
    <HalfCode>
    <Indent>Parent o = new Child();</Indent>
    <Indent>Media m = new Movie();</Indent>
    <Indent>// m uses implementation of methods in Movie</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Downcasting</p>
    </section>
    <section>
    <p className="text-usf-yellow">Downcasting</p>
    <Indent>Child obj = (Child) p;</Indent>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Object starts as a Parent type, cast into Child class</li>
    <li>Object must be able to be cast to Child class</li>
    <li>Object must be an instance of the parent</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>Child o = (Child) p;</Indent>
    <Indent>Media obj = new Media();</Indent>
    <Indent>Movie m = (Movie) obj;</Indent>
    <Indent>// Cast the obj down to a Movie type</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">FileWriter</p>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Use <code>FileWriter</code> to open a file to write to it</li>
    <li>Constructor is the file path and append or write.</li>
    <li>If second value is true, append.</li>
    <li>Otherwise, don't append, only write.</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>FileWriter w = new FileWriter(path);</Indent>
    <Indent>// write mode</Indent>
    <Indent>FileWriter a = new FileWriter(path, true);</Indent>
    <Indent>// append mode</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>To write, call <code>write</code> method.</li>
    <li>Takes in data to write to file</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>
    FileWriter f = new FileWriter(path);
    </Indent>
    <Indent>f.write(data);</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Will write explicit data</li>
    <li>Likely need to add <code>\n</code> to file after each line.</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>FileWriter f = new FileWriter(path);</Indent>
    <Indent>f.write(data);</Indent>
    <Indent>f.write("\n");</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Also should close file after writing</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>FileWriter f = new FileWriter(path);</Indent>
    <Indent>f.write(data);</Indent>
    <Indent>f.write("\n");</Indent>
    <Indent>f.close();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Wrap in <code>IOException</code> as <code>FileWriter</code> can throw exception</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>try &#123;</Indent>
    <Indent space={1}>FileWriter f = new FileWriter(path);</Indent>
    <Indent space={1}>f.write(data);</Indent>
    <Indent space={1}>f.write("\n");</Indent>
    <Indent space={1}>f.close();</Indent>
    <Indent>&#125; catch (IOException e) &#123;</Indent>
    <Indent space={1}>System.out.println(e);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">BufferedWriter</p>
    {/* TODO  */}
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Writes large chunks at a time.</li>
    <li>More efficient than writing single values each time.</li>
    <li>Closing buffered writer sends contents to file.</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>FileWriter file = new FileWriter(path);</Indent>
    <Indent>BufferedWriter writer = new BufferedWriter(file);</Indent>
    <Indent>writer.write(data);</Indent>
    <Indent>writer.close();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Using <code>flush</code> can also send content without needing to close the file.</li>
    <li>Useful when writing a lot of data and need to ensure data is written at explicit times.</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>FileWriter file = new FileWriter(path);</Indent>
    <Indent>BufferedWriter writer = new BufferedWriter(file);</Indent>
    <Indent>writer.write(data);</Indent>
    <Indent>writer.flush();</Indent>
    <Indent>writer.close();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Has useful methods like <code>newLine()</code> that adds a new line to the buffer.</li>
    <li>No need to explicitly add "\n"</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>FileWriter file = new FileWriter(path);</Indent>
    <Indent>BufferedWriter writer = new BufferedWriter(file);</Indent>
    <Indent>writer.write(data);</Indent>
    <Indent>writer.newLine();</Indent>
    <Indent>writer.flush();</Indent>
    <Indent>writer.close();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <div className="font-mono text-left text-[16pt]">
    <p>Still need to wrap in try-catch with <code>IOException</code></p>
    <Indent>String[] contents = ...;</Indent>
    <Indent>try &#123;</Indent>
    <Indent space={2}>FileWriter f = new FileWriter("names.txt");</Indent>
    <Indent space={2}>BufferedWriter w = new BufferedWriter(f);</Indent>
    <Indent space={2}>for(String names : contents) &#123;</Indent>
    <Indent space={4}>w.write(names);</Indent>
    <Indent space={4}>w.newLine();</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>w.close();</Indent>
    <Indent>&#125; catch(IOException e) &#123;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 11: Event Manager</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
