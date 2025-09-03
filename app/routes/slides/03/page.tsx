import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half } from '../components';

import slidesPdf from '@/static/slides/scanner.pdf';

const title: string = "Day 3: Scanner";
const agenda: string[] = ["Quiz 1", "Census Day Reminder", "Lab 1 Q5 Review", "Input", "Scanner", "Closing the Scanner", "Review of Operators", "In Class: Input Practice"]

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
    <p className="text-usf-yellow">Quiz 1</p>
    </section>
    <section>
    <p>You have 15 minutes to finish the Quiz. When you're done, you can bring it to me at the front or give it to your TA.</p>
    <p>Closed note quiz, try your best!</p>
    </section>
    <section>
    <p className="text-usf-yellow">Quiz 1 Review</p>
    <p>Do we have any questions to go over?</p>
    </section>
    <section>
    <p className="text-usf-yellow">Friday, Sep 5</p>
    <p>Last day to add/drop classes</p>
    </section>
    <section><p className="text-usf-yellow">Lab 1 Quick Debrief</p></section>
    <section>
    <p className="text-usf-yellow">Q3</p>
    <p>Int * String doesn't work in Java</p>
    </section>
    <section>
    <p className="text-usf-yellow">Q5</p>
    </section>
    <section>
    <p className="text-usf-yellow">Let's do it live!</p>
    <p>How does 127*3 give us 125?</p>
    </section>
    <section className="text-[16pt]">
    <p>127 * 3 = 381</p>
    <p>381 in binary = 256 + 64 + 32 + 16 + 8 + 4 + 1</p>
    <p>This is also equal to:</p>
    <p><code>1 * 2<sup className="leading-8">8</sup> + 0 * 2<sup>7</sup> + 1 * 2<sup>6</sup> + 1 * 2<sup>5</sup> + 1 * 2<sup>4</sup> + 1 * 2<sup>3</sup> + 1 * 2<sup>2</sup> + 0 * 2<sup>1</sup> + 1 * 2<sup className='leading-8'>0</sup></code></p>
    <p>By removing the powers of 2 and only taking the 1s and 0s</p>
    <p>we get: 101111101</p>
    <p>Byte takes 8 bits, so if we only look at the last 8 bits, we get 01111101</p>
      <p>01111101 is the binary for 125</p>
    </section>
    <section>
    <p>Test code. Don't assume</p>
    </section>
    <section>
    <p>Variable Creation Overview</p>
    </section>
    <section>
    <p><code>&#123;Data type&#125; &#123;Variable Name&#125; = &#123;Value&#125;;</code></p>
    <p>For example: <code>byte n = 100;</code></p>
    <p>If we don't have the <code>n</code> part, what is the variable?</p>
    </section>
    <section>
    <p className="text-usf-yellow">Variable Changing</p>
    <Row>
    <Half>
    <p><code>&#123;variable&#125; += &#123;value&#125;</code> may not always print something. Do not print this value out. Instead, change the variable first, then print out the value.</p>
    </Half>
    <Half>
    <p><code>int x = 1;</code></p>
    <p><code>x += 2;</code></p>
    <p><code>System.out.println(x);</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Input</p>
    </section>
    <section>
    <p>In Java, taking input is more complicated than the <code>input(prompt)</code> that we saw in Python.</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>In order to get input, we must use the <code>Scanner</code> class. This requires us to <code>import</code> the Scanner class into our program.</p>
    <p>At the top of your program, we will include the following code.</p>
    </Half>
    <Half>
    <p><code>import java.util.Scanner;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This will allow us to bring in the Scanner into our code, using Scanner to take the input from the user.</p>
    </Half>
    <Half>
    <p><code>import java.util.Scanner;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>The next step is to use our Scanner in our code.</p>
    <p>We will create a new Scanner <strong>object</strong>, which effectively creates a new instance or copy of the Scanner.</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>What is this <code>new</code> part?</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>
    <code>new</code> is a keyword that we use to create a new object. We will see what these objects mean later when we dive deeper into Classes and Objects.
    </p>
    </Half>
    <Half>
    <p>For now, think of it as making a new copy or instance of the Scanner</p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>But what about the <code>System.in</code>?</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Scanner can take in different types of input locations.</p>
    <p><code>System.in</code> simply tells Java to use the Standard Input from system.</p>
    <p>This is the same as the user input we used in Python.</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>In this case, we create the variable <code>input</code> to store our scanner, allowing us to call various functions connected to the scanner through input.</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Print then input</p>
    <Row>
    <Half>
    <p>To use Scanner, we first must print out the prompt, then on the next line, we can call our input.</p>
    <p>The example to the right simply prints the user to enter their name. On the next line, we read what the user typed in.</p>
    </Half>
    <Half>
    <p><code>System.out.println("Enter your name ");</code></p>
    <p><code>String name = input.nextLine();</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>In the previous slide, we saw <code>input.nextLine();</code></p>
    <p>This will read the data input on the line after the prompt. However, there are other functions we can call from the input.</p>
    </Half>
    <Half>
    <ol>
    {["nextLine", "next", "nextInt", "nextDouble", "nextLong", "nextShort", "nextByte", "nextBoolean"].map((option: string, i: number) => <li key={i}><code>{option}()</code></li>)}
    </ol>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">nextLine()</p>
    <Row>
    <Half>
    <p><code>nextLine()</code> gives us a String of what was inputted by the user on the line after the new line character.</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    <p><code>System.out.println("Enter your name: ");</code></p>
    <p><code>String name = input.nextLine();</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">next()</p>
    <Row>
    <Half>
    <p><code>next()</code> gives us a String of what was inputted by the user, following the print statement.</p>
    <p>If we want to output a prompt and take the input on the same line, this is where the regular <code>System.out.print</code> comes in handy.</p>
      <p>The difference between <code>next</code> and <code>nextLine</code> is, <code>next</code> reads up to the first space character, while <code>nextLine</code> will read until the new line character. (\n)</p>
      <p>An important note is: We may have to scan in the new line character afterwards, so we often simply have a <code>input.nextLine();</code></p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    <p><code>System.out.print("Enter your name: ");</code></p>
    <p><code>String name = input.next();</code></p>
    <p><code>input.nextLine();</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">nextInt()</p>
    <Row>
    <Half>
    <p><code>nextInt()</code> will give us the value entered by the user as an integer.</p>
      <p>An important note is: We may have to scan in the new line character afterwards, so we often simply have a <code>input.nextLine();</code></p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    <p><code>System.out.print("Enter your age: ");</code></p>
    <p><code>int age = input.nextInt();</code></p>
    <p><code>input.nextLine();</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">nextDouble()</p>
    <Row>
    <Half>
    <p><code>nextInt()</code> will give us the value entered by the user as a double.</p>
      <p>An important note is: We may have to scan in the new line character afterwards, so we often simply have a <code>input.nextLine();</code></p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    <p><code>System.out.print("Enter your age: ");</code></p>
    <p><code>double age = input.nextDouble();</code></p>
    <p><code>input.nextLine();</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p>We won't go over all of them, as we will explore them during the in-class coding exercise later.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Closing the Scanner</p>
    <Row>
    <Half>
    <p>In order to ensure we don't lock the system input to our program, at the end of our code, we should <code>close</code> the input for the scanner</p>
    </Half>
    <Half>
    <p><code>Scanner input = new Scanner(System.in);</code></p>
    <p>//Code</p>
    <p><code>input.close();</code></p>
    </Half>
    </Row>
    </section>
    <section><p className="text-usf-yellow">Operators in Java</p></section>
    <section>
    <p>As we saw a little in the Lab last week, we have very similar operators as in Python, with some slight differences.</p>
    </section>
    <section>
    <div className="text-[16pt]">
    <table>
    <thead>
    <tr>
    <td>Operator</td>
    <td>Use</td>
    <td>Differences/Limitations</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>+</td>
    <td>Adds two values together</td>
    <td>If strings are present, concatenate. Otherwise, attempts to add two values. Some types, such as booleans cannot be added together.</td>
    </tr>
    <tr>
    <td>-</td>
    <td>Finds the differences of two values</td>
    <td>Cannot subtract from a string (same reason as Python)</td>
    </tr>
    <tr>
    <td>*</td>
    <td>Multiples two values together</td>
    <td>Must be the same type/"multiply-able"</td>
    </tr>
    <tr>
    <td>/</td>
    <td>Divides two values</td>
    <td>Must be the same type/"divide-able"; No such thing as // for integer division. / is the primary method of division in Java. If they're both integers, it'll integer divide. If one is a floating point, it'll floating point divide.</td>
    </tr>
    <tr>
    <td>%</td>
    <td>Divides two values, returns remainder (mod)</td>
    <td>Must be the same type/"divide-able"</td>
    </tr>
    </tbody>
    </table>
    </div>
    </section>
    <section>
    <div className="text-[14pt]">
    <table>
    <thead>
    <tr>
    <td>Operator</td>
    <td>Use</td>
    <td>Example</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>+=</td>
    <td>Updates the variable with the added value to it.</td>
    <td>
    <p><code>int x = 0;</code><br />
    <code>x += 3;</code><br />
    <code>x -&gt; 3;</code></p>
    </td>
    </tr>
    <tr>
    <td>-=</td>
    <td>Updates the variable with the subtracted value.</td>
    <td>
    <p><code>int x = 10;</code><br />
    <code>x -= 3;</code><br />
    <code>x -&gt; 7;</code></p>
    </td>
    </tr>
    <tr>
    <td>*=</td>
    <td>Updates the variable with the multiplied value.</td>
    <td>
    <p><code>int x = 25;</code><br />
    <code>x *= 20;</code><br />
    <code>x -&gt; 500;</code></p>
    </td>
    </tr>
    <tr>
    <td>/=</td>
    <td>Updates the variable with the divided value.</td>
    <td>
    <p><code>int x = 24;</code><br />
    <code>x /= 3;</code><br />
    <code>x -&gt; 8;</code></p>
    </td>
    </tr>
    <tr>
    <td>%=</td>
    <td>Updates the variable by modulating it.</td>
    <td>
    <p><code>int x = 25;</code><br />
    <code>x %= 5;</code><br />
    <code>x -&gt; 0;</code></p>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </section>
    <section>
    <div className="text-[16pt]">
    <table>
    <thead>
    <tr>
    <td>Operator</td>
    <td>Use</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>&gt;</td>
    <td>True if left value is greater than right value</td>
    </tr>
    <tr>
    <td>&lt;</td>
    <td>True if left value is less than right value</td>
    </tr>
    <tr>
    <td>==</td>
    <td>True if left value is equal to the right value</td>
    </tr>
    <tr>
    <td>&gt;=</td>
    <td>True if left value is greater than or equal to the right value</td>
    </tr>
    <tr>
    <td>&lt;=</td>
    <td>True if left value is less than or equal to the right value</td>
    </tr>
    <tr>
    <td>!=</td>
    <td>True if left value is not equal to the right value</td>
    </tr>
    </tbody>
    </table>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">In Class: Input Practice</p>
    </section>
    <section>
    <p>Note; a use-case is a situation/circumstance where you would use something. For example, a use-case of an if-statement is when we need to check if two values are the same, then running some code.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
