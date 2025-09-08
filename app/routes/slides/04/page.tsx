import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/conditionals.pdf';
import { Table, TableHeader, TableBody, TableCell, TableHead, TableRow  } from '@/components';

const title: string = "Day 4: Conditionals";
const agenda: string[] = ["Booleans", "Conditional Chaining", "Conditional Statements", "While Loops", "Primitive Type Casting", "Random Numbers", "Lab 2: Number Guessing Game"];

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
    <p className="text-usf-yellow">Booleans</p>
    </section>
    <section>
    <p className="text-usf-yellow">Review</p>
    <Row>
    <Half>
    <p>Explicit/Literals</p>
    <p><code>true</code></p>
    <p><code>false</code></p>
    </Half>
    <Half>
    <p>Implicit/Evaluated</p>
    <p><code>3 &gt; 2</code></p>
    <p><code>2 &lt; 10</code></p>
    <p><code>3 == 3</code></p>
    <p><code>4 != 8</code></p>
    <p><code>5 &gt;= 1</code></p>
    <p><code>9 &lt;= 9</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Conditional Chaining</p>
    </section>
    <section>
    <p>Remember that we can always check for multiple conditions at once using the <strong>and/or</strong> boolean keywords and can check for negation with the <strong>not</strong> keywords.</p>
    </section>
    <section>
    <p className="text-usf-yellow">not</p>
    <Row>
    <Half><p>Unlike Python, <strong>not</strong> is not the "keyword" to use here. In Java, we use <code>!</code> instead to denote <strong>not</strong></p></Half>
    <Half>
    <p><code>!true -&gt; false</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">not truth table</p>
    <Table className="text-md w-3/4">
    <TableHeader>
    <TableRow>
    <TableHead>x</TableHead>
    <TableHead>!x</TableHead>
    </TableRow>
    </TableHeader>
    <TableBody>
    <TableRow>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>false</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>true</code></TableCell>
    </TableRow>
    </TableBody>
    </Table>
    </section>
    <section>
    <p className="text-usf-yellow">and</p>
    <Row>
    <Half><p>Unlike Python, <strong>and</strong> is not the "keyword" to use here. In Java, we use <code>&amp;&amp;</code> instead to denote <strong>and</strong></p></Half>
    <Half>
    <p><code>true &amp;&amp; false -&gt; false</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">and truth table</p>
    <Table className="text-md w-3/4">
    <TableHeader>
    <TableRow>
    <TableHead>x</TableHead>
    <TableHead>y</TableHead>
    <TableHead>x &amp;&amp; y</TableHead>
    </TableRow>
    </TableHeader>
    <TableBody>
    <TableRow>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>true</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>false</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>false</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>false</code></TableCell>
    </TableRow>
    </TableBody>
    </Table>
    </section>
    <section>
    <p className="text-usf-yellow">or</p>
    <Row>
    <Half><p>Unlike Python, <strong>or</strong> is not the "keyword" to use here. In Java, we use <code>&#124;&#124;</code> instead to denote <strong>or</strong></p></Half>
    <Half>
    <p><code>true &#124;&#124; false -&gt; true</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">or truth table</p>
    <Table className="text-md w-3/4">
    <TableHeader>
    <TableRow>
    <TableHead>x</TableHead>
    <TableHead>y</TableHead>
    <TableHead>x &#124;&#124; y</TableHead>
    </TableRow>
    </TableHeader>
    <TableBody>
    <TableRow>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>true</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>true</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>true</code></TableCell>
    <TableCell><code>true</code></TableCell>
    </TableRow>
    <TableRow>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>false</code></TableCell>
    <TableCell><code>false</code></TableCell>
    </TableRow>
    </TableBody>
    </Table>
    </section>
    <section>
    <p className="text-usf-yellow">Boolean Algebra</p>
    <div className="text-[16pt]">
    <p>Order of operations</p>
    <ul className="list-disc pl-5">
    {["Left to Right", "Parentheses get evaluated first", "Not evaluated next", "And evaluated after", "Or evaluated last", "Parentheses do change this order, just like they do with regular arithmetic operations"].map((op: string, i: number) => <li key={i}>{op}</li>)}
    </ul>
    <p><code>true &#124;&#124; (true &amp;&amp; false) = true &#124;&#124; false = true</code></p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Conditional Statements</p>
    </section>
    <section>
    <p className="text-usf-yellow">if</p>
    <Row>
    <Half>
    <p>Same as in Python, we have the <strong>if</strong> keyword.</p>
      <p>However, unlike Python, we must wrap the condition in parentheses and have curly brackets after.</p>
    </Half>
    <Half>
    <p><code>if (boolean condition)&#123;</code></p>
    <p className="pl-5"><code>// code if the condition is true</code></p>
      <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">else</p>
    <Row>
    <Half>
    <p>If the condition in the <strong>if</strong> clause is incorrect, or false, and we want some other code to execute, we can use an <strong>else</strong> statement.</p>
      <p>This is the same as in Python, where we don't give the else a condition. We add curly braces after and place our code between the braces.</p>
    </Half>
    <HalfCode>
    <Indent space={0}>if (boolean condition) &#123;</Indent>
    <Indent space={1}>// code if the condition is true</Indent>
    <Indent space={0}>&#125;</Indent>
    <Indent space={0}>else &#123;</Indent>
    <Indent space={1}>// code if the condition is false</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">else if</p>
    <Row>
    <Half>
    <p>If we have multiple conditions to check for, we can use an else if.</p>
      <p>If the first condition is <code>false</code>, but we want to check for a secondary condition, we can use an <code>else if</code>.</p>
        <p>This is better than having multiple <code>if</code> statements, as we can include an <code>else</code> at the end to catch all the other cases, if all cases are false.</p>
    </Half>
    <Half>
    <p><code>if (condition 1)&#123;</code></p>
    <p className="pl-5"><code>// code if condition 1 is true</code></p>
      <p><code>&#125;</code></p>
    <p><code>else if (condition 2)&#123;</code></p>
    <p className="pl-5"><code>// code if condition 2 is true</code></p>
      <p><code>&#125;</code></p>
      <p><code>else &#123;</code></p>
    <p className="pl-5"><code>// code if the condition 1 and 2 are false</code></p>
      <p><code>&#125;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">else if</p>
    <Row>
    <Half>
    <p>You can have as many else if statements as you want/need.</p>
    </Half>
    <HalfCode>
    <Indent space={0}>if (condition 1)&#123;</Indent>
    <Indent space={1}>// code if condition 1 is true</Indent>
    <Indent space={0}>&#125; else if (condition 2)&#123;</Indent>
    <Indent space={1}>// code if condition 2 is true</Indent>
    <Indent space={0}>&#125; else if (condition 3)&#123;</Indent>
    <Indent space={1}>// code if condition 3 is true</Indent>
    <Indent space={0}>&#125; else &#123;</Indent>
    <Indent space={1}>// code if all conditions are false</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section><p className="text-usf-yellow">While Loops</p></section>
    <section>
    <Row>
    <Half>
      <p>If we want to repeat code, we can use a <code>while</code> loop.</p>
      <p>We can use the <code>while</code> keyword, with parentheses after, with a condition that must be true for the loop to run. If the condition becomes false, the loop will naturally stop.</p>
      </Half>
    <HalfCode>
    <Indent space={0}>while(true condition to run the loop) &#123;</Indent>
    <Indent space={1}>// looping code goes here</Indent>
    <Indent space={0}>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Infinite Loops</p>
    <Row>
    <Half>
    <p>We can create an infinite loop using <code>true</code> as our condition to run the loop.</p>
    <p>This will never end unless it runs into a <code>break</code></p>
    </Half>
    <HalfCode>
    <Indent>while (true) &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Stopping a loop</p>
    <Row>
    <Half>
    <p>If we want to stop a loop in its tracks, we can use the <code>break</code> keyword.</p>
      <p>The example to the right will keep going until x is greater than 5.</p>
    </Half>
    <HalfCode>
    <Indent>int x = 1;</Indent>
    <Indent>while (true) &#123;</Indent>
    <Indent space={1}>if (x &gt; 5) &#123;</Indent>
    <Indent space={2}>break;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>x += 1;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Conditioned Loops</p>
    <Row>
    <Half>
    <p>Normally, we will end the loop based on some condition, instead of breaking when the condition of an if-statement is met.</p>
      <p>The example to the right is the same while loop code as the code in the previous slide, but without an if-statement and using break.</p>
    </Half>
    <HalfCode>
    <Indent>int x = 1;</Indent>
    <Indent>while(x &lt; 5)&#123;</Indent>
    <Indent space={1}>x += 1;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">When to use either</p>
    <Row>
    <Half><p>Infinite loops are great when multiple possible conditions may stop the loop</p></Half>
    <Half><p>Conditioned loops are the "normal" way to write while loops. They will end when some condition is no longer true.</p></Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Primitive Type Casting</p>
    </section>
    <section>
    <p>What is the term we use to describe converting between types?</p>
    <p>We did this in Python when we converted a String into an integer</p>
    <p>Who remembers this term?</p>
    </section>
    <section><p className="text-usf-yellow">Cast</p></section>
    <section>
    <p>As a review, casting is the process of converting data from one type into another type.</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Between primitive data types, we can cast a value into a different type if we need.</p>
      <p>We just need to put the type we want to cast the data into in parentheses before the value.</p>
    <p>The example to the right casts the double into an integer.</p>
    </Half>
    <HalfCode>
    <Indent>double d = 13.024;</Indent>
    <Indent>int i = (int) d;</Indent>
    <Indent>System.out.println(i + 1); // gives us 14</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This doesn't work with strings in the same way. Instead, we have to call another function to parse the data.</p>
    </Half>
    <HalfCode>
    <Indent>String s = "123";</Indent>
    <Indent>int i = Integer.parseInt(s);</Indent>
    <Indent>System.out.println(i + 3); // Gives 126</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Random Numbers</p>
    </section>
    <section>
    <p>There are multiple ways of generating a random number in Java. We'll use the <code>Math.random()</code> approach.</p>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Using this method, we use <code>Math.random()</code> to generate a random number between 0 and 1.</li>
    <li>We then multiply the number by the different of a maximum and minimum value. This will shift our range from [0 to 1] to [0 to (max-min)]</li>
    <li>We then add a minimum to shift our minimum value. This shifts our range to [min to max].</li>
    <li>Lastly, we cast it into an integer to remove the decimal place.</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>int num = (int) (Math.random() * (max-min) + min);</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>In the example to the right, we would get a random number between 5 and 25, excluding 25.</li>
    <li>Math.random() gives us a double between 0 and 1 (exclusive of 1.)</li>
    <li>Multiplying that by (25-5) or 20, shifts our range of values to 0 to 20 (exclusive of 20).</li>
    <li>We then add 5 to shift the values to 5 to 25 (exclusive of 25)</li>
    <li>Casting it to an integers happens at the end, removing the decimals.</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>int num = (int) (Math.random() * (25-5)) + 5;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Removing the parentheses would maintain the order of operations, as multiplication happens first, however, separating the operations leads to more readable code.</p>
    <p>Ensure the order or operations is correct, or you risk having the incorrect range of [0, 25) </p>
    </Half>
    <HalfCode>
    <Indent space={0}>int num = (int) (Math.random() * (25-5 + 5));</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 2: Number Guessing Game</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
