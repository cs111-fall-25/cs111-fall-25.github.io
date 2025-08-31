import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 5: For Loops";
const agenda: string[] = ["Quiz 2", "Nested Conditionals", "Unary Operators", "For Loops", "Continue", "Nested Loops", "In Class"]

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
    <p className="text-usf-yellow">Quiz 2</p>
    </section>
    <section><p className="text-usf-yellow">Nested Conditional Statements</p></section>
    <section><p>We can nest conditional statements as we can in Python. Pay attention to the curly brackets!</p></section>
    <section>
    <p className="text-usf-yellow">Review of Nested Conditional Statements</p>
    <div className="text-[16pt] text-left font-mono">
    <p>if(condition 1) &#123;</p>
    <p className="pl-15">if (inner condition 1) &#123;</p>
    <p className="pl-30">// code if cond 1 and inner cond 1 are true</p>
      <p className="pl-15">&#125; else if(inner condition 2) &#123;</p>
    <p className="pl-30">// code if cond 1 and inner cond 2 are true</p>
      <p className="pl-15">&#125;</p>
    <p>&#125; else &#123;</p>
    <p className="pl-15">// code if condition 1 is false</p>
      <p>&#125;</p>

    </div>
    <p></p>
    </section>
    <section><p className="text-usf-yellow">Unary Operators</p></section>
    <section>
    <Row>
    <Half>
    <p>In Java, we have a concept called "unary" operators.</p>
    <p>These are an even simpler way of updating a variable by adding or subtracting 1 to it.</p>
    </Half>
    <Half>
    <p><code>int x = 0;</code></p>
    <p><code>x++; // same as x += 1;</code></p>
    <p><code>x--; // same as x -= 1;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Why?</p>
    <Row>
    <Half><p>This one can actually be placed and used as an expression in the println code!</p></Half>
    <Half>
    <p><code>int x = 0;</code></p>
    <p><code>System.out.println(x++); // prints 0</code></p>
    <p><code>System.out.println(x); // prints 1</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Why?</p>
    <Row>
    <Half><p>Works with subtraction too!</p></Half>
    <Half>
    <p><code>int x = 10;</code></p>
    <p><code>System.out.println(x--); // prints 10</code></p>
    <p><code>System.out.println(x); // prints 9</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Location matters!</p>
    <Row>
    <Half>
    <p><code>x++;</code> will increment x <strong>after</strong> its used.</p>
    <p><code>++x;</code> will increment x <strong>before</strong> its used.</p>
    </Half>
    <Half>
    <p><code>int x = 0;</code></p>
    <p><code>System.out.println(x++); // prints 0 but x becomes 1</code></p>
    <p><code>System.out.println(x); // prints 1</code></p>
    <p><code>System.out.println(++x); // prints 2 as x becomes 2 before we use it.</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Location matters!</p>
    <Row>
    <Half>
    <p><code>x--;</code> will decrement x <strong>after</strong> its used.</p>
    <p><code>--x;</code> will decrement x <strong>before</strong> its used.</p>
    </Half>
    <Half>
    <p><code>int x = 10;</code></p>
    <p><code>System.out.println(x--); // prints 10 but x becomes 9</code></p>
    <p><code>System.out.println(x); // prints 9</code></p>
    <p><code>System.out.println(--x); // prints 8 as x becomes 8 before we use it.</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">For Loop</p>
    </section>
    <section>
    <p>Outside of while loops, we also have for loops!</p>
    </section>
    <section>
    <p>For loops work a little differently than they do in Python.</p>
    </section>
    <section>
    <p className="text-usf-yellow">For Template</p>
    <Row>
    <Half>
    <p>Here's the template:</p>
    </Half>
    <Half>
    <p><code>for(&lt;variable&gt;; &lt;condition&gt;; &lt;change&gt;) &#123;</code></p>
    <p className="pl-5"><code>// code</code></p>
    <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Example</p>
    <Row>
    <Half><p>Let's use an actual example and break down the example. The code to the right will print out the numbers from 1 to 100.</p></Half>
    <Half>
    <p><code>for(int i = 1; i &lt; 101; i++) &#123;</code></p>
    <p className="pl-5"><code>System.out.println(i);</code></p>
    <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Example breakdown</p>
    <Row>
    <Half>
    <p>We start this loop by initializing a variable to 1.</p>
    </Half>
    <Half>
    <p><code>for(<span className="text-usf-yellow">int i = 1;</span> i &lt; 101; i++) &#123;</code></p>
    <p className="pl-5"><code>System.out.println(i);</code></p>
    <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Example breakdown</p>
    <Row>
    <Half>
    <p>We then tell our code to keep going as long as i is less than 101.</p>
    </Half>
    <Half>
    <p><code>for(int i = 1; <span className="text-usf-yellow">i &lt; 101;</span> i++) &#123;</code></p>
    <p className="pl-5"><code>System.out.println(i);</code></p>
    <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Example breakdown</p>
    <Row>
    <Half>
    <p>And at the end, we tell it how to get there (by incrementing by 1.)</p>
    </Half>
    <Half>
    <p><code>for(int i = 1; i &lt; 101; <span className="text-usf-yellow">i++</span>) &#123;</code></p>
    <p className="pl-5"><code>System.out.println(i);</code></p>
    <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Decrementing example</p>
    <Row>
    <Half><p>What about counting downward?</p></Half>
    <Half>
    <p><code>for(int i = 100; i &gt; 0; i--) &#123;</code></p>
    <p><code>System.out.println(i);</code></p>
    <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">For v While</p>
    <Row>
      <Half>
      <div className="font-mono">
      <p>for(int i = 0; i &lt; 100; i++) &#123;</p>
      <p className="pl-5">System.out.println(i);</p>
      <p>&#125;</p>
      </div>
      </Half>
      <Half>
      <div className="font-mono">
      <p>int i = 0;</p>
      <p>while(i &lt; 100) &#123;</p>
      <p className="pl-5">System.out.println(i);</p>
      <p className="pl-5">i++;</p>
      <p>&#125;</p>
      </div>
      </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">For v While</p>
    <Row>
    <Half>
    <p>For Loop</p>
    <ul className="list-disc">
    <li>Finite number of iterations</li>
    <li>Counter is necessary</li>
    </ul>
    </Half>
    <Half>
    <p>While Loop</p>
    <ul className="list-disc">
    <li>Number of iterations may be unknown</li>
    <li>Run until some condition is met, may not be a numeric condition</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">continue keyword</p>
    <Row>
    <Half>
    <p>Continue is a keyword that will skip an iteration and go to the following iteration.</p>
    <p>The code to the right will print out all the numbers between 0 and 99, but it'll skip each multiple of 5.</p>
    </Half>
    <HalfCode>
    <p>for(int i = 0; i &lt; 100; i++) &#123;</p>
    <p className="pl-10">if (i % 5 == 0) &#123;</p>
    <p className="pl-20">continue;</p>
    <p className="pl-10">&#125;</p>
    <p className="pl-10">System.out.println(i);</p>
    <p>&#125;</p>
    </HalfCode>
    </Row>
    </section> 
    <section>
    <p className="text-usf-yellow">Nested Loops</p>
    <Row>
    <Half>
    <p>As a review, we can nest loops as we can with conditional statements</p>
    </Half>
    <HalfCode>
    <Indent space={0}>for(int i = 0; i &lt; 10; i++) &#123;</Indent> 
    <Indent space={1}>for(int j = i; j &lt; 10; i++) &#123;</Indent> 
    <Indent space={2}>System.out.print(j + " ");</Indent> 
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>System.out.println();</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Nested Loops</p>
    <Row>
    <Half>
    <p>Output of the right hand code gives:</p>
    <ul className="list-none">
    {["0 1 2 3 4 5 6 7 8 9", "1 2 3 4 5 6 7 8 9", "2 3 4 5 6 7 8 9", "3 4 5 6 7 8 9", "4 5 6 7 8 9", "5 6 7 8 9", "6 7 8 9", "7 8 9", "8 9", "9"].map((pat: string, i: number) => <li className="list-none" key={i}>{pat}</li>)}
    </ul>
    </Half>
    <HalfCode>
    <Indent space={0}>for(int i = 0; i &lt; 10; i++) &#123;</Indent> 
    <Indent space={1}>for(int j = i; j &lt; 10; i++) &#123;</Indent> 
    <Indent space={2}>System.out.print(j + " ");</Indent> 
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>System.out.println();</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Nested Loops</p>
    <Row>
    <Half>
    <p>Once the inner <code>j</code> loop finishes, the outer <code>i</code> loop goes to the next iteration. This keeps resetting the inner loop until the outer loop finishes.</p>
    </Half>
    <HalfCode>
    <Indent space={0}>for(int i = 0; i &lt; 10; i++) &#123;</Indent> 
    <Indent space={1}>for(int j = i; j &lt; 10; i++) &#123;</Indent> 
    <Indent space={2}>System.out.print(j + " ");</Indent> 
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>System.out.println();</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section><p className="text-usf-yellow">In Class: Iterative Practice</p></section>
    </Slides>
    </>
  )
}

export default Slide;
