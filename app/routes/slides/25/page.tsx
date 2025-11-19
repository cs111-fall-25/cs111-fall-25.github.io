import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';
import backtracking from './img/Backtracking.jpg';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 25: Recursion";
const agenda: string[] = ["Recursion", "In Class"];

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
    <p className='text-usf-yellow'>Recursion</p>
    </section>
    <section>
    <p>Calling the function within itself</p>
    </section>
    <section>
    <div className="font-mono text-left">
    <Indent>int num = 0;</Indent>
    <Indent>int inc()&#123;</Indent>
    <Indent space={2}>num++;</Indent>
    <Indent space={2}>inc();</Indent>
    <Indent>&#125;</Indent>
    </div>
    <p>What is the final value for <code>num</code>?</p>
    </section>
    <section>
    <div className="font-mono text-left">
    <Indent>int num = 0;</Indent>
    <Indent>int inc()&#123;</Indent>
    <Indent space={2}>num++;</Indent>
    <Indent space={2}>inc();</Indent>
    <Indent>&#125;</Indent>
    </div>
    <p>What is the final value for <code>num</code>?</p>
    <p>When does the function end?</p>
    </section>
    <section>
    <div className="font-mono text-left">
    <Indent>int num = 0;</Indent>
    <Indent>int inc()&#123;</Indent>
    <Indent space={2}>num++;</Indent>
    <Indent space={2}>inc();</Indent>
    <Indent>&#125;</Indent>
    </div>
    <p>What is the final value for <code>num</code>?</p>
    <p><s>When </s>Does the function end?</p>
    </section>
    <section>
    <p>Two main concepts:</p>
    <ul>
    <li>Base Case</li>
    <li>Recursive Case</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Base Case</p>
    <ul>
    <li>Condition for the recursion to stop.</li>
    <li>if statement with a return to stop the cycle.</li>
    <li>Doesn't have to always return a value, can simply return.</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Recursive Case</p>
    <ul>
    <li>Condition to keep recursion going</li>
    <li>Can live in an else</li>
    <li>Can also just be code outside of conditional statement</li>
    </ul>
    </section>
    <section>
    <p>What happens if there is no base case to stop the recursion?</p>
    </section>
    <section>
    <p className="text-usf-yellow">StackOverflowError</p>
    <ul>
    <li>Infinite Recursive Cycle</li>
    <li>Stack (remember from memory lecture?) runs out of memory</li>
    <li>Causes code to crash</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">StackOverflowError</p>
    <ul>
    <li>Easily avoidable</li>
    <li>Ensure base case exists and stops recursive cycle</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Caveat?</p>
    <aside className="notes">
    <ul>
    <li>Can students identify the caveat with variables and memory?</li>
    <li>Drive thinking with questions</li>
    <li>Variables defined in the function get reset during each recursive cycle</li>
    </ul>
    </aside>
    </section>
    <section>
    <div className="text-left font-mono text-[20pt]">
    <Indent>int add(int a, int b) &#123;</Indent>
    <Indent space={2}>if(a == 0) &#123; // base case</Indent>
    <Indent space={4}>return b;</Indent>
    <Indent space={2}>&#125; else &#123; // recursive case</Indent>
    <Indent space={4}>return add(a - 1, b + 1);</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125;</Indent>
    <br /><br />
    <Indent>add(2, 10); &larr; 12</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Why Recursion?</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Iteration:</p>
    <ul>
    <li>Often simpler to solve iteratively</li>
    <li>Most cases, this is enough.</li>
    </ul>
    </Half>
    <Half>
    <p>Recursion:</p>
    <ul>
    <li>Allows for backtracking</li>
    <li>Some algorithms require it/easier to conceptualize recursively</li>
    <li>Some algorithms are naturally recursive</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Example</p>
    <Row>
    <HalfCode>
    <Indent>int sum(int n) &#123;</Indent>
    <Indent space={1}>int total = 0;</Indent>
    <Indent space={1}>for(int i = 1; i &lt;= n; i++) &#123;</Indent>
    <Indent space={2}>total += i;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>return total;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>int sum(int n) &#123;</Indent>
    <Indent space={1}>if(n &lt;= 1)&#123;</Indent>
    <Indent space={2}>return 1;</Indent>
    <Indent space={1}>&#125; else &#123;</Indent>
    <Indent space={2}>return n + sum(n - 1);</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <img src={backtracking} />
    <aside className="notes">
    <ul>
    <li>Going back to previous route</li>
    <li>Need to be able to go back</li>
    <li>Difficult to do iteratively</li>
    </ul>
    </aside>
    </section>
    <section>
    <p className="text-usf-yellow">N Queens</p>
    <ul>
    <li>Given N number of Queens on an n x n chess board, what is the arrangement of Queens to ensure no queens attack each other?</li>
    <li>Naturally recursive</li>
    <li>Requires backtracking (previous run)</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Minimax</p>
    <ul>
    <li>Calculate optimal move for Tic Tac Toe</li>
    <li>Simulates future runs and resets after each move</li>
    <li>Maximize/minimize based on current player</li>
    </ul>
    </section>
    <section>
    <ul>
    <li>Three different recursive algorithms</li>
    <li>Possible to solve iteratively, but significantly easier recursively</li>
    <li>N-Queens: 245</li>
    <li>Maze Solving: 112 or 245</li>
    <li>Minimax: 221</li>
    </ul>
    <aside className="notes">
    <ul>
    <li>N-Queens w/ Brizan</li>
    <li>Maze Solving w/ Haskell</li>
    <li>Minimax w/ Peterson</li>
    </ul>
    </aside>
    </section>
    <section>
    <p className="text-usf-yellow">In Class: Recursion</p>
    <p>Factorial, Fibonacci, Is Palindrome</p>
    <p>Recursive and Iterative</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
