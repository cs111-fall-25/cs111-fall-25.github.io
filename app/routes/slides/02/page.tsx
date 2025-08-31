import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half } from '../components';

import slidesPdf from '@/static/slides/java-basics.pdf'

const title: string = "Day 2: Java Basics";

const agenda: string[] = ["Variables", "Primitive Data Types", "Naming Conventions", "Brief Intro to Strings", "Output", "Lab 1: Printing Data"]

const JavaBasicsSlides = (): ReactElement => {
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
    <section><p className="text-usf-yellow">Variables</p></section>
    <section>
    <Row>
    <Half>
    <p>In order to create a variable in Java, we must follow this format.</p>
    <br />
    <p>We can declare a variable to be set/initialized later.</p>
    <p>We must then initialize it with a value later.</p>
    <p>We can also combine it into a single line as seen in the third case.</p>
     {/* left */}
    </Half>
    <Half>
     {/* right */}
     <p>Variable Declaration:</p>
     <p><code>&lt;type&gt; &lt;variable name&gt;;</code></p>
     <p>Variable Initialization:</p>
     <p><code>&lt;variable name&gt; = &lt;value&gt;;</code></p>
     <p>Combined:</p>
     <p><code>&lt;type&gt; &lt;variable name&gt; = &lt;value&gt;;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Java is a semi-colon language, so we must add a semi-colon at the end of the line to denote the line has ended.</p>
     {/* left */}
    </Half>
    <Half>
     <p>Variable Declaration:</p>
     <p><code>&lt;type&gt; &lt;variable name&gt;;</code></p>
     <p>Variable Initialization:</p>
     <p><code>&lt;variable name&gt; = &lt;value&gt;;</code></p>
     <p>Combined:</p>
     <p><code>&lt;type&gt; &lt;variable name&gt; = &lt;value&gt;;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
     {/* left */}
     <p>What do I mean by &lt;type&gt;?</p>
    </Half>
    <Half>
     <p>Variable Declaration:</p>
     <p><code>&lt;type&gt; &lt;variable name&gt;;</code></p>
     <p>Variable Initialization:</p>
     <p><code>&lt;variable name&gt; = &lt;value&gt;;</code></p>
     <p>Combined:</p>
     <p><code>&lt;type&gt; &lt;variable name&gt; = &lt;value&gt;;</code></p>
     </Half> 
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Data Types</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Java has 8 primary "primitive" data types. These are shown on the right:</p>
    <p>These data types represent the way data is stored in Java. They are required when defining variables and later functions.</p>
    </Half>
    <Half>
    <ol>
    <li>byte</li>
    <li>short</li>
    <li>char</li>
    <li>int</li>
    <li>long</li>
    <li>float</li>
    <li>double</li>
    <li>boolean</li>
    </ol>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>These primitive data types don't have methods attached to them. They exist on their own and simply represent some value, but we don't have functions that connect to the type.</p>
    </Half>
    <Half>
    <ol>
    <li>byte</li>
    <li>short</li>
    <li>char</li>
    <li>int</li>
    <li>long</li>
    <li>float</li>
    <li>double</li>
    <li>boolean</li>
    </ol>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>For example, with a "char", we cannot use a ".toUpperCase()" on it.</p> 
      <p>This will make more sense when we talk more about Strings.</p>
    </Half>
    <Half>
    <ol>
    <li>byte</li>
    <li>short</li>
    <li>char</li>
    <li>int</li>
    <li>long</li>
    <li>float</li>
    <li>double</li>
    <li>boolean</li>
    </ol>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Byte</p>
    <Row>
    <Half>
    <p>A byte represents an 8-bit signed <strong>two's complement</strong> integer storing values from -128 to 127 (-2<sup className="leading-8">8</sup> to 2<sup>8</sup>-1)</p></Half>
    <Half>
    <p>Example of a byte variable:</p>
    <p><code>byte x = 120;</code></p>
    <p>OR</p>
    <p><code>byte x = -52;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Two's Complement?</p>
    <p>Remember binary from 110?</p>
    <p>A Two's Complement means the first bit in the binary value defines whether the value is positive or negative.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Binary</p>
    <p>Let's review binary quickly first, then we can see this Two's Complement in action!</p>
    <p>Let's say we have the binary value of 110.</p>
    <p>What is the decimal of that?</p>
    </section>
    <section>
    <p className="text-usf-yellow">Binary</p>
    <p>Let's review binary quickly first, then we can see this Two's Complement in action!</p>
    <p>Let's say we have the binary value of 110.</p>
    <p>What is the decimal of that?</p>
    <p>Remember, binary works with powers of 2.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Binary</p>
    <p>Let's review binary quickly first, then we can see this Two's Complement in action!</p>
    <p>Let's say we have the binary value of 110.</p>
    <p>What is the decimal of that?</p>
    <p>Remember, binary works with powers of 2.</p>
    <p>110 = 1 * 2 <sup className="leading-8">2</sup> + 1 * 2 <sup>1</sup> + 0 * 2 <sup>0</sup> = 6</p>
    </section>
    <section>
    <p className="text-usf-yellow">Negative binary?</p>
    <div className="text-[16pt]">
    <p>110 = 1 * 2 <sup className="leading-8">2</sup> + 1 * 2 <sup>1</sup> + 0 * 2 <sup>0</sup> = 6</p>
    <p>Now, without using a negative sign, how can we turn this into a negative value?</p>
    <p>Turn and talk with the person next to you. Think of a way we could turn this into a negative number.</p>
    <p>Hint: it doesn't have to evaluate to 6 in decimal, it could give us -2.</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Negative binary?</p>
    <div className="text-[16pt]">
    <p>110 = 1 * 2 <sup className="leading-8">2</sup> + 1 * 2 <sup>1</sup> + 0 * 2 <sup>0</sup> = 6</p>
    <p>The way Java does it uses the first bit in the binary string as an indicator of positive or negative.</p>
    <p>If the first bit is a 1, it means the value is a negative number. If the bit is a 0, it means the value is a positive number.</p>
      <p>So, actually, the way Java works with binary, 110 doesn't give us 6, it actually gives us -2. This is because the leading 1 denotes a negative number. We then take the value after, being 10, or 1 * 2 <sup className="leading-8">1</sup> + 0 * 2 <sup>0</sup> = 2. We can then add the negative back, so we get -2.</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Two's Complement</p>
    <div className="text-[16pt]">
    <p>So why is it called a two's complement?</p>
    <p>If we invert each binary bit and add 1 to the binary, we would get the negative complement.</p>
      <p>Take 0110 being decimal 6. To get the negative equivalent, we would flip each binary value to get 1001, then add 1 to it, giving us 1010.</p>
    <p>When we evaluate it, the leading 1 serves as the negative indicator, but it's included in the calculation.</p>
    <p>So we get <code>-(1 * 2<sup className="leading-8">3</sup>) + 0 * 2<sup>2</sup> + 1 * 2<sup>1</sup> + 0 * 2<sup>0</sup> = -6</code></p></div>
    </section>
    <section>
    <div className="text-[16pt]">
    <p>So what is the largest binary value with this system?</p>
    <p>Well that depends on the size of the type. For a byte, we would have 1000 0000. <br />This gives us <br /><code>-(1 * 2<sup className="leading-8">7</sup>) + 0 * 2<sup>6</sup> + 0 * 2<sup>5</sup> + 0 * 2<sup>4</sup> + 0 * 2<sup>3</sup> + 0 * 2<sup>2</sup> + 0 * 2<sup>1</sup>+ 0 * 2<sup>0</sup> = -128 </code></p>
      <p>this means the biggest positive value is 127, as we would have 0111 1111.</p>
    <p>So what about 1111 1111?</p>
    </div>
    </section>
    <section>
    <div className="text-[16pt]">
    <p>So what is the largest binary value with this system?</p>
    <p>Well that depends on the size of the type. For a byte, we would have 1000 0000. <br />This gives us <br /><code>-(1 * 2<sup className="leading-8">7</sup>) + 0 * 2<sup>6</sup> + 0 * 2<sup>5</sup> + 0 * 2<sup>4</sup> + 0 * 2<sup>3</sup> + 0 * 2<sup>2</sup> + 0 * 2<sup>1</sup>+ 0 * 2<sup>0</sup> = -128 </code></p>
      <p>this means the biggest positive value is 127, as we would have 0111 1111.</p>
    <p>So what about 1111 1111?</p>
    <p>Well, that gives us -1. Why?</p>
    </div>
    </section>
    <section>
    <p className="text-[16pt]"><span className="text-usf-yellow">Fun fact: </span>Did anyone play the game Civilizations?</p>
    </section>
    <section>
    <p className="text-[16pt]"><span className="text-usf-yellow">Fun fact:</span> Did anyone play the game Civilizations?</p><p className="text-[16pt]">This signed value is why Gandhi in the game is so ruthless. In a signed value, when you go from 0000 0000 and subtract 1 to get -1, you would be at 1111 1111. However, if it's unsigned, meaning the leading bit doesn't denote a signed value, we would instead get 256, which is a lot larger than -1.</p>
    </section>
    <section><p className="text-usf-yellow">Back to data types</p></section>
    <section>
    <p className="text-usf-yellow">short</p>
    <Row>
    <Half>
    <p>Our next type, in no particular order, is a short.</p>
    <p>This is a 16-bit signed two's complement integer storing values from -32768 to 32767 (-2<sup className="leading-8">16</sup> to 2<sup>16</sup>-1)</p>
    </Half>
    <Half>
    <p><code>short age = 25;</code></p>
    <p><code>short q = -10382;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">int</p>
    <Row>
    <Half>
    <p>Our next type, in no particular order, is an int.</p>
    <p>This is a 32-bit signed two's complement integer storing values from -2,147,483,648 to 2,147,483,647 (-2<sup className="leading-8">31</sup> to 2<sup>31</sup>-1)</p>
    </Half>
    <Half>
    <p><code>int age = 32;</code></p>
    <p><code>int x = -38192371;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">long</p>
    <Row>
    <Half>
    <p>Our next type, in no particular order, is a long.</p>
    <p>This is a 64-bit signed two's complement integer storing values from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 (-2<sup className="leading-8">63</sup> to 2<sup>63</sup>-1)</p>
    <p>You may have to add an "L" at the end of the number to denote to Java that the number is a long and not an integer.</p>
    </Half>
    <Half>
    <p><code>long currentTime = 1756082145L;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">float</p>
    <Row>
    <Half>
    <p>Next up, we have a float.</p>
    <p>A float is a 32-bit floating point data type. It's a less precise floating point value due to how it is represented in its binary form.</p>
    <p>It is good if we need smaller decimal values, slightly less precision, and to compute values faster. It has a smaller memory footprint.</p>
    </Half>
    <Half>
    <p><code>float a = 3.141f;</code></p>
    <p>//Float values must end with an "f" to denote it is a float and not a double.</p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">double</p>
    <Row>
    <Half>
    <p>Next up, we have a double.</p>
    <p>A double is a 64-bit floating point data type. It's a more precise floating point value, due to having more binary bits to use.</p>
    <p>It's also the default type for decimals in Java.</p>
      <p>Due to the higher bit usage, it uses more memory, but that means it's more precise.</p>
    </Half>
    <Half>
    <p><code>double a = 3.141;</code></p>
    <p>//Note: Does not require a "d" after, unlike a float that requires an "f"</p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">
     boolean 
    </p>
    <Row>
    <Half>
    <p>Now, this is the smallest type, a boolean.</p>
    <p>This represents the value of <code>true</code> and <code>false</code>. Unlike Python, the literals of true and false are lowercase.</p>
    <p>It also represents a single bit of information as it doesn't have to occupy any additional space.</p>
    </Half>
    <Half>
    <p><code>boolean isStudent = true;</code></p>
    <p><code>boolean hasGraduated = false;</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">
   char 
    </p>
    <Row>
    <Half>
    <p>The last type for our primitive types is a char.</p>
      <p>A char contains a single 16-bit character. This is a single character and requires the use of single quotes surrounded the character.</p>
    </Half>
    <Half>
    <p><code>char playAgain = 'n';</code></p>
    <p><code>char keepGoing = 'y';</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Naming Conventions</p>
    <p>A quick note about Java's Naming Conventions!</p>
    </section>
    <section>
    <p>
    In Java, we use Camel Casing for variables and functions (methods).
    </p>
    <p>Classes, which we'll touch upon later in the semester, use Pascal Casing.</p>
    <p>Constants and enums are all in Capital/Uppercase Letters.</p>
    <p>First character must be a letter, numbers can follow after. Underscores are okay, but not recommended due to naming conventions.<sup className="leading-8">*</sup></p>
    </section>
    <section>
    <p className="text-usf-yellow">Camel Casing</p>
    <p>First letter of each word after the first word is capitalized.</p>
    <p><code>aReallyLongVariableName</code></p>
    <p>No spaces since Java sees a space as a separator, not a part of the variable.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Pascal Casing</p>
    <p>First letter of each word is capitalized, including the first character of the firstWord.</p>
    <p><code>AReallyLongClassName</code></p>
    <p>Again, no spaces due to how Java reads spaces as separators of code.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Upper Case</p>
    <p>This one is pretty self explanatory</p>
    <p><code>ACONSTANTVALUE</code></p>
    <p>This one can also have underscores to make it easier to read.</p>
    <p><code>A_CONSTANT_VALUE</code></p>
    </section>
    <section>
    <p>These naming conventions are there to help us create code that follows a standard convention. Please stick to these conventions. They are ways that allow us to create names for variables, functions (methods), classes (later), and constants with multiple words, while maintaining a degree of readability.</p>
      <p>We can't have spaces in these names, so these help us identify different words.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Back to data types</p>
    <p>Sorta...</p>
    </section>
    <section><p className="text-usf-yellow">Did we miss one?</p></section>
    <section><p className="text-usf-yellow">What about Strings?</p></section>
    <section>
    <p>In Java, a String isn't a "primitive" data type.</p>
    <p>This is because there are more things we can do with strings.</p>
    <p>We will look and dive into Strings later in the semester, but here's the basic gist of them.</p>
    <p>A String is a data type. However, it's what we call a <strong>Object Data Type</strong></p>
    </section>
    <section>
    <Row>
    <Half><p>To use a String, simply surround the text with double quotes and define the type as a String.</p>
    <p>String can contain any character, as long as they are enclosed in the double quotes.</p>
    </Half>
    <Half>
    <p><code>String name = "Edward";</code></p>
    <p><code>String courseName = "Foundations of Program Design"</code></p>
    <p><code>String course = "CS111 Foundations of Program Design"</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Output</p>
    </section>
    <section>
    <p>Last main point for today's lecture.</p>
    <p>We can output all of these variables and values using our trust <code>"System.out.println()"</code> that we saw last class.</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>With println, we can pass in variables or values to print out. Unlike the Python print, we cannot pass in a comma to separate values. Instead, we use the + operator to concatenate/combine values.</p>
    <p>When a string is present, the values will be concatenated.</p>
    </Half>
    <Half>
    <p><code>int age = 25;</code></p>
    <p><code>System.out.println("Age:" + age);</code></p>
    <p>//This works, outputting "Age: 25"</p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>When we run the code to the right, we don't get any errors as it can concatenate (add) the values together, despite age being a number.</p>
    </Half>
    <Half>
    <p><code>int age = 25;</code></p>
    <p><code>System.out.println("Age:" + age);</code></p>
    <p>//This works, outputting "Age: 25"</p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>A downside to this is that once it begins concatenating, it will naturally concatenate, unless parentheses are added to ensure we stop concatenating.</p>
    </Half>
    <Half>
    <p><code>System.out.println("Age:" + 25 + 2);</code></p>
    <p>//Above produces: "Age: 252"</p>
    <p>//If we want to add 2, we would have to do the following:</p>
      <p><code>System.out.println("Age:"+(25+2));</code></p>
    <p>//This produces: "Age: 27" as it does the arithmetic first.</p>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>If we don't want to print the new line character after, we can use <code>System.out.print();</code></p>
    <p>This is helpful when we want to print different values on the same line and not use a single print statement.</p>
    <p>More useful when we touch upon loops and printing out patterns of text.</p>
    </Half>
    <Half>
    <p><code>System.out.print("Hello World");</code></p>
    <p>//This won't print a new line after</p>
    <br />
    <p><code>System.out.print("Welcome ");</code></p>
    <p><code>System.out.print(name);</code></p>
    <p><code>System.out.print("!");</code></p>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 1: Printing Data</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 1: Printing Data</p>
    <p>For the remainder of class, we will work on Lab 1. This is a simple exercise on using variables and print statements.</p>
      <p>When you finish it, please submit it by pushing your code to GitHub and submitting the link to Canvas.</p>
    </section>
    <section>
    <p className="text-usf-yellow">No class on Monday; Labor Day.</p>
    </section>
    </Slides>
    </>
  )
}

export default JavaBasicsSlides;
