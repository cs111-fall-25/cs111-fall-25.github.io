import { Slides, SlideNavbar } from '@/components';
import {  type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';
import pseudocodeExample from './img/pseudocode example.jpg';
import slidesPdf from '@/static/slides/java.pdf';
import startNode from './img/start-node.png';
import downArrow from './img/down-arrow.png';
import decisionNode from './img/decision-node.png';
import processNode from './img/process-node.png';
import outputNode from './img/output-node.png';


const Shape = ({ shape, text }: { shape: string, text?: string }) : ReactElement => {
  return (
    <div>{shape}</div>
  )
}

const title: string = "Day 15: Exceptional Design";
const agenda: string[] = ["Quiz 6", "Exception Handling", "Program Design", "In Class: Pseudocode"];

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
    <p className="text-usf-yellow">Quiz 6</p>
    </section>
    <section>
    <p className="text-usf-yellow">Exception Handling</p>
    </section>
    <section>
    <p>Our code can sometimes crash when we give it values we don't intend to give or try to use values that we don't have access to.</p>
    </section>
    <section>
    <p>We've seen these with <code>ArrayIndexOutOfBoundsExceptions</code> and <code>IndexOutOfBoundsExceptions</code>. Some of you have also seen the <code>InputMismatchException</code> and the <code>NullPointerException</code></p>
    <p>In Java, errors are called exceptions.</p>
    </section>
    <section>
    <p>We can <code>try</code> to run some code that may crash then <code>catch</code> the exceptions.</p>
    </section>
    <section>
    <p className="text-usf-yellow">
    Template
    </p>
    <div className="font-mono text-[16pt] text-left">
    <Indent>try &#123;</Indent>
    <Indent space={2}>// Code that might crash</Indent>
    <Indent>&#125;</Indent>
    <Indent>catch(&lt;Exception&gt; e) &#123; // should be specific exception</Indent>
    <Indent space={2}>// What to do if exception is hit?</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <Row>
    <Half>
    <p>The code to the right tries to get a value in an array at index <code>i</code>, but if the index is out of bounds, instead of crashing, we return <code>-1</code></p>
    </Half>
    <HalfCode>
    <Indent>private static int getN(int[] arr, int i) &#123;</Indent>
    <Indent space={1}>try &#123;</Indent>
    <Indent space={2}>return arr[i];</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>catch(ArrayIndexOutOfBoundsExceptions e) &#123;</Indent>
    <Indent space={2}>return -1;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>You may be thinking "why don't we just use an if-statement and check if the index is out of bounds". You would be correct to think of this.</p>
    </Half>
    <HalfCode>
    <Indent>private static int getN(int[] arr, int i) &#123;</Indent>
    <Indent space={1}>try &#123;</Indent>
    <Indent space={2}>return arr[i];</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>catch(ArrayIndexOutOfBoundsExceptions e) &#123;</Indent>
    <Indent space={2}>return -1;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This example isn't the greatest because we can catch the exception without needing to use a try-catch with the code.</p>
    </Half>
    <HalfCode>
    <Indent>private static int getN(int[] arr, int i) &#123;</Indent>
    <Indent space={1}>try &#123;</Indent>
    <Indent space={2}>return arr[i];</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>catch(ArrayIndexOutOfBoundsExceptions e) &#123;</Indent>
    <Indent space={2}>return -1;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This is what we call an <code>unchecked</code> exception.</p>
    </Half>
    <HalfCode>
    <Indent>private static int getN(int[] arr, int i) &#123;</Indent>
    <Indent space={1}>try &#123;</Indent>
    <Indent space={2}>return arr[i];</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>catch(ArrayIndexOutOfBoundsExceptions e) &#123;</Indent>
    <Indent space={2}>return -1;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section><p className="text-usf-yellow">Checked v Unchecked Exceptions</p></section>
    <section>
    <Row>
    <Half>
    <p>An unchecked exception is an exception that happens when the code being executed runs into logical errors. These aren't checked at compile time, as they would only occur based on the usage of the code/values given into the code. These are often also errors we can find with a simple if-statement ahead of time.</p>
    <p>Examples are:</p>
    <ul>
    <li>NullPointerException</li>
    <li>ArrayIndexOutOfBoundsExceptions</li>
    </ul>
    </Half>
    <Half>
    <p>Checked exceptions happen when the code is compiled. These often are more complicated and cannot simply be checked with an if-statement. Instead, we must check for these exceptions using a try-catch statement.</p>
    <p>Examples are:</p>
    <ul>
    <li>FileNotFoundException</li>
    <li>IOException</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">finally</p>
    </section>
    <section>
    <p className='text-usf-yellow'>finally</p>
    <Row>
    <Half>
    <p>Similar to Python, if we had code that should always execute no matter what happens, we can use the <code>finally</code> clause.</p>
      <p>Example to the right will always print out "Swap done!"</p>
    </Half>
    <HalfCode>
    <Indent>static void swap(float[] arr, int i, int j)&#123;</Indent>
    <Indent space={1}>try &#123;</Indent>
    <Indent space={2}>float t = arr[i];</Indent>
    <Indent space={2}>arr[i] = arr[j];</Indent>
    <Indent space={2}>arr[j] = t;</Indent>
    <Indent space={1}>&#125; catch(ArrayIndexOutOfBoundsExceptions e) &#123;</Indent>
    <Indent space={2}>System.out.println("Error with index!");</Indent>
    <Indent space={1}>&#125; finally &#123;</Indent>
    <Indent space={2}>System.out.println("Swap done!");</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Why?</p>
    <p><code>try/catch</code> pattern is great when we need to write some code that may or may not crash.</p>
    <p><code>finally</code> is great for cleaning up the code to ensure some code is always executed. This can show up when we need to close a Scanner or close a file.</p>
      <p>Since <code>finally</code> always happens at the end, if you return a value in the <code>finally</code>block and return a value in the <code>try</code> block, the value returned in <code>finally</code> will be returned.</p>
    </section>
    <section>
    <div className="font-mono text-left text-[16pt]">
    <Indent>try &#123;</Indent>
    <Indent space={2}>return 1;</Indent>
    <Indent>&#125; catch(Exception e) &#123; // Generic exception, catch all</Indent>
    <Indent space={2}>return -1;</Indent>
    <Indent>&#125; finally &#123;</Indent>
    <Indent space={2}>return 0; // returns 0 since finally runs last.</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">throws</p>
    </section>
    <section>
    <p>If we wanted to raise an exception (like we could in Python), we would need to use the <code>throws</code> and <code>throw</code> keyword.</p>
    </section>
    <section>
    <p>We add the <code>throws</code> keyword to the method itself, which tells Java that this method would eventually throw a specific exception. We also include the specific exception it may throw.</p>
    </section>
    <section>
    <div className="text-left font-mono text-[16pt]">
    <Indent>static void swap(int[] arr, int i, int j) throws ArrayIndexOutOfBoundsExceptions &#123;</Indent>
    <Indent space={2}>int t = arr[i];</Indent>
    <Indent space={2}>arr[i] = arr[j];</Indent>
    <Indent space={2}>arr[j] = t;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">But why?</p>
    </section>
    <section>
    <p>Having a method throw an exception can be better to ensure the calling location can handle the exception differently.</p>
    <p>Forcing a way of handling an exception isn't always great, sometimes we want to allow whatever is calling the function to handle it themselves.</p>
    </section>
    <section>
    <p className="text-usf-yellow">throw</p>
    </section>
    <section>
    <p>Now, if we want to intentionally throw an exception, we can use the <code>throw</code> keyword with the <code>throws</code> keyword.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Example</p>
    <div className="font-mono text-left text-[16pt]">
    <Indent>static int findMax(int[] arr) throws IndexOutOfBoundsExceptions &#123;</Indent>
    <Indent space={2}>if(arr.length == 0) &#123;</Indent>
    <Indent space={4}>throw new IndexOutOfBoundsExceptions("empty array!");</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>// find max implementation</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p><code>throw</code> will end the function once the exception is thrown. This is useful if we want to implement different ways to process the errors elsewhere, rather than within the function itself.</p>
    </section>
    <section>
    <p className='text-usf-yellow'>5 min break; topic pivot after break</p>
    </section>
    <section>
    <p className="text-usf-yellow">Program Design</p>
    </section>
    <section>
    <p>For the rest of this week, we'll look at two forms of pseudocode that help us structure our code.</p>
      <p>The first, which will be today is called <strong>Flowchart Pseudocode</strong></p>
    </section>
    <section>
    <p>So what is Pseudocode?</p>
    </section>
    <section>
    <p>For the exercises today, we will use the website <a href="https://app.diagrams.net" target="_blank">app.diagrams.net</a>. It's posted on the course page under the resources for today as <strong>Diagram Tool</strong></p>
    </section>
    <section>
    <p className="text-usf-yellow">Flowchart Pseudocode</p>
    </section>
    <section>
    <p>We can model a function using a flowchart, where certain symbols represent certain concepts.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Terminal</p>
    <Row>
    <Half>
    <p>Often to denote a program start or end point.</p>
    </Half>
    <Half>
    <img src={startNode} alt={"Start/End"} />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Flow Direction</p>
    <Row>
    <Half>
    <p>Denotes the direction of flow.</p>
    </Half>
    <Half>
    <img src={downArrow} alt={"Down arrow"} />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Input/Output</p>
    <Row>
    <Half>
    <p>Denotes the input or output of data (user input, console output)</p>
    </Half>
    <Half>
    <img src={outputNode} alt={"Output x"} />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Process</p>
    <Row>
    <Half>
    <p>Denotes an operation that manipulates data. This can be changing the value of a variable or manipulating it.</p>
    </Half>
    <Half>
    <img src={processNode} alt={"x = 1"} />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Decision</p>
    <Row>
    <Half>
    <p>Denotes a condition or decision made that redirects the flow of data based on the conditional outcome (if statement)</p>
    </Half>
    <Half>
    <img src={decisionNode} alt={"x < 3?"} />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Flowchart Example</p>
    <Row>
    <Half>
    <img src={pseudocodeExample} alt="example flowchart pseudocode" />
    </Half>
    <HalfCode>
    <Indent>int counter = 1;</Indent>
    <Indent>while(counter &lt; 100) &#123;</Indent>
    <Indent space={1}>System.out.println(counter);</Indent>
    <Indent space={1}>counter++;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Inclass: Pseudocode</p>
    </section>
    <section>
    <p>Using the <a href="https://app.diagrams.net" target="_blank">app.diagrams.net</a> website, you will draw the pseudocode for the programs shown in the inclass assignment.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
