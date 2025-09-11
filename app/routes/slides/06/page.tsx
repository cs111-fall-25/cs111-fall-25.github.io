import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 6: Strings";
const agenda: string[] = ["Strings", "Immutability", "Length", "Concatenation", "Equals", "Compare To", "Basic String Methods", "Project 1", "Lab 3"];

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
    <p className="text-usf-yellow">Strings</p>
    </section>
    <section>
    <p className="text-usf-yellow">Review</p>
    <Row>
    <Half>
    <p>To create a string, our data type is a <code>String</code>. We then give a variable name. We can then set it to a value surrounded by double-quotes.</p>
    </Half>
    <HalfCode>
    <Indent space={0}>String &lt;variable name&gt; = "";</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Immutability</p>
    <Row>
    <Half>
    <p>Strings are immutable, this means we cannot change a string by removing a value or changing a value.</p>
    <p>However, we can add to a string by concatenation.</p>
    </Half>
    <HalfCode>
    <Indent space={0}>String s = "hello";</Indent>
    <Indent space={0}>s = s + " world";</Indent>
    <Indent space={0}>System.out.println(s); // hello world</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Immutability</p>
    <Row>
    <Half>
    <p>While this is okay, the problem with this is that it creates a new string in memory. If we're creating small strings, this isn't so bad. But when we keep adding to it, we keep creating new strings in memory. This is bad.</p>
    </Half>
    <HalfCode>
    <Indent space={0}>String s = "hello";</Indent>
    <Indent space={0}>s = s + " world"; // Different than the first s.</Indent>
    <Indent space={0}>System.out.println(s); // hello world</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Length</p>
    <Row>
    <Half>
    <p>With strings, we can get the length of the string using the <code>.length()</code> method.</p>
    </Half>
    <HalfCode>
    <Indent>String s = "Hello World";</Indent>
    <Indent>System.out.println(s.length());</Indent>
    <Indent>//outputs 11</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Length use</p>
    <Row>
    <Half>
    <p>This is especially important if we want to loop/iterate through a string.</p>
      <p>We can use the <code>charAt</code> method to get the at each index/location.</p>
    </Half>
    <HalfCode>
    <Indent>String s = "Hello World";</Indent>
    <Indent>for(int i = 0; i &lt; s.length(); i++) &#123;</Indent>
    <Indent space={1}>System.out.println(s.charAt(i));</Indent>
    <Indent>&#125;</Indent>
    <Indent>// Prints out each character</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Concatenation</p>
    <Row>
    <Half>
    <p>We've seen this already before, but adding any value to a string will "concatenate" the value. This simply extends the string and creates a new and longer string.</p>
    </Half>
    <HalfCode>
    <Indent>String a = "Hello";</Indent>
    <Indent>a = a + " World";</Indent>
    <Indent>System.out.println(a);</Indent>
    <Indent>// Outputs "Hello World"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">String Equality</p>
    <Row>
    <Half>
    <p>You may have noticed before that the following code gives us a false value.</p>
    <p>This is because, with Java Strings, we cannot compare those two values directly using the <code>==</code> operator.</p>
    </Half>
    <HalfCode>
    <Indent>System.out.print("Continue? ");</Indent>
    <Indent>String choice = input.nextLine();</Indent>
    <Indent>if(choice == "n") &#123;</Indent>
    <Indent space={1}>System.out.println("Continuing");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">String Equality</p>
    <Row>
    <Half>
    <p>However, the following code prints true somehow. Why?</p>
    </Half>
    <HalfCode>
    <Indent>String a = "Hello";</Indent>
    <Indent>String b = "Hello";</Indent>
    <Indent>System.out.println(a == b);</Indent>
    <Indent>// outputs true</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half><p>The answer lies in memory and how Java optimizes it.</p></Half>
    <HalfCode>
    <Indent>String a = "Hello";</Indent>
    <Indent>// say a is stored at 0x1234abc;</Indent>
    <Indent>String b = "Hello";</Indent>
    <Indent>// Java sees the values being the same and reuses the same memory location at 0x1234abc</Indent>
    </HalfCode> 
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>But in this case, the "n" is not the same memory location as the string in <code>choice</code>, even if it holds the same value.</p>
    </Half>
    <HalfCode>
    <Indent>System.out.print("Continue? ");</Indent>
    <Indent>String choice = input.nextLine(); // say, choice is at 0x1282acd</Indent>
    <Indent>if(choice == "n") &#123; // say "n" is at 0x1829bed</Indent>
    <Indent space={1}>System.out.println("done");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">So how can we check for String equality?</p>
    </section>
    <section>
    <p className="text-usf-yellow">equals</p>
    <Row>
    <Half>
    <p>We can use the <code>.equals</code> method. This wll check if the values in the Strings are the same.</p>
      <p>This method takes in another String and returns <code>true</code> if they are identical in <strong>value</strong>, not in memory.</p>
    </Half>
    <HalfCode>
    <Indent>System.out.print("Continue? ");</Indent>
    <Indent>String choice = input.nextLine();</Indent>
    <Indent>if(choice.equals("n")) &#123;</Indent>
    <Indent space={1}>System.out.println("done");</Indent>
    <Indent>&#125; // will print "done" if choice is exactly "n"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">equalsIgnoreCase</p>
    <Row>
    <Half>
    <p>If we don't care about case sensitivity, then we can use the <code>equalsIgnoreCase</code> method. This does the same, but ignores the case of the string, checking if they match that way.</p>
    </Half>
    <HalfCode>
    <Indent>System.out.print("Continue? ");</Indent>
    <Indent>String choice = input.nextLine();</Indent>
    <Indent>if(choice.equalsIgnoreCase("n")) &#123;</Indent>
    <Indent space={1}>System.out.println("done");</Indent>
    <Indent>&#125; // prints "done" as long as choice is "N" or "n"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">compareTo</p>
    <Row>
    <Half>
    <p>If we want to compare two strings, we cannot use the &lt; and &gt; operators. Instead, we must use the <code>compareTo</code> method.</p>
    <p>This will return a negative number, 0, or a positive number depending on whether the other string is "greater", "lesser", or "equal" to the string. These compare the ASCII values.</p>
    </Half>
    <HalfCode>
    <Indent>String a = "hello";</Indent>
    <Indent>String b = "Hello";</Indent>
    <Indent>System.out.println(a.compareTo(b));</Indent>
    <Indent>// gives -32</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">ASCII Table</p>
    <a href="https://www.asciitable.com" target="_blank">asciitable.com</a>
    </section>
    <section>
    <p className="text-usf-yellow">compareToIgnoreCase</p>
    <Row>
    <Half>
    <p>If we want to compare two strings but ignore case sensitivity, we can use <code>compareToIgnoreCase</code>. The return values are the same, but ignore case sensitivity.</p>
    </Half>
    <HalfCode>
    <Indent>String a = "hello";</Indent>
    <Indent>String b = "Hello";</Indent>
    <Indent>System.out.println(a.compareTo(b));</Indent>
    <Indent>// gives 0</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">String Functions</p>
    <Row>
    <Half>
    <ul>
    {["substring", "charAt", "indexOf", "lastIndexOf", "replace", "split", "startsWith", "strip", "toCharArray", "toLowerCase", "toUpperCase", "trim"].map((func: string, i: number) => <li key={i}>{func}</li>)}
    </ul>
    </Half>
    <Half>
    <a href="https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html">Java Documentation for Strings</a>
    </Half>
    </Row>
    </section>
    <section><p className="text-usf-yellow">Javadoc</p></section>
    <section>
    <p>
    Explore the javadoc page with Strings. These are all of the methods we can call on a String.
    </p>
    </section>
    <section><p className="text-usf-yellow">Project 1</p></section>
    <section>
    <p className="text-usf-yellow">Password Validator and Generator</p>
    </section>
    <section>
    <p className="text-usf-yellow">Task</p>
    <ul>
    <li>You will create a simple Password Validator and Generator</li>
    <li>The user will be given two options after logging in. They can validate a password or generate a new password.</li>
    <li>You will store a username and password in the program, by updating the variables in the code to save a login credential.</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Password Validation</p>
    <p>For a password to be "valid", it must satisfy the following requirements:</p>
      <ul>
    <li>At least 8 characters long.</li>
    <li>Contain 1 uppercase character.</li>
    <li>Contain 1 lowercase character.</li>
    <li>Contain 1 digit.</li>
    </ul>
    <p>Ask the user to input the password they want to validate.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Checking for uppercase</p>
    <Row>
    <Half>
    <p>We can simply check if the character is greater than the character of 'A' and less than the character of 'Z'</p>
    </Half>
    <HalfCode>
    <Indent>char c = 'H';</Indent>
    <Indent>c &gt;= 'A' &amp;&amp; c &lt;= 'Z'; // evals to true</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Checking for uppercase</p>
    <Row>
    <Half>
    <p>This works because characters actually use ASCII to represent the data.</p>
    <p><a href="https://www.asciitable.com" target="_blank">asciitable.com</a></p>
    <p>Ultimately, characters still represent numbers.</p>
    </Half>
    <HalfCode>
    <Indent>char c = 'H';</Indent>
    <Indent>c &gt;= 'A' &amp;&amp; c &lt;= 'Z'; // evals to true</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Generating an uppercase character</p>
    <Row>
    <Half>
    <p>In order to generate a random uppercase character, we would simply get a random number from 0 to 26, then shift it by the character of 'A'.</p>
    <p>This works as 'A' is the character representation for the decimal value of 65. This means we're basically adding 65 to our number, then casting it to a character.</p>
    </Half>
    <HalfCode>
    <Indent>char c = (char) ((Math.random() * 26) + 'A');</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Generating a password</p>
    <p>Ask the user for the length of the password, then create a string with random uppercase letters, lowercase letters, and digits. The password should be at least 8 characters long.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 3</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
