import { Slides, SlideNavbar } from '@/components';

import introSlidesPdf from '@/static/slides/intro-slides.pdf'

const JavaSlides = () => {
  return (
    <>
    <SlideNavbar title="Day 1: Java" downloadHref={introSlidesPdf} />
    <Slides>
    <section>
    <p className="text-usf-yellow">Day 1: Java</p>
    </section>
    <section>
    <p className="text-usf-yellow">Programming Languages</p>
    <div className="flex flex-row justify-around">
    <ul className="text-[20pt]">
    {["Assembly", "C", "Clojure", "C++", "C#", "Dart", "Elixir", "Erlang", "Fortran", "F#", "Go", "Groovy", "Haskell", "Java", "JavaScript","Kotlin"].map((lang: string) => <li key={lang} className="text-md">{lang}</li>)}
    </ul>
    <ul className="text-[20pt]">
    {["Lisp", "Lua", "MATLAB", "OCaml", "PHP", "Prolog", "Python", "R", "Ruby", "Rust", "Scala", "Solidity", "Swift", "TypeScript", "V", "Zig"].map((lang: string) => <li key={lang}>{lang}</li>)}
    </ul>
    </div>
    </section>
    <section>
    <p>So why Java?</p>
    </section>
    <section>
    <ul>
    <li>Class based</li>
    <li>Object Oriented</li>
    <li>Easier syntax to pick up Object Oriented concepts</li>
    <li>Compiled language</li>
    <li>Strongly Typed programming language</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Interpreted v Compiled</p>
    </section>
    <section>
    <p>Java is a <strong>Compiled</strong> programming language. So what does that mean?</p>
    </section>
    <section>
    <div className="flex flex-row justify-around">
    <p>Compiled languages take the source code and compile it into machine byte code</p>
    <p>Interpreted languages, like Python, read code line by line and execute the code line by line.</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Pros and Cons of Compiled</p>
    <div className="flex flex-row justify-between">
    <p>
    Pros:
      <ul>
    <li>Code is checked when compiled.</li>
    <li>Errors can be found before running code.</li>
    <li>Code generally runs faster as it doesn't have ot execute/check the code line by line each time</li>
    <li>Consistency of execution</li>
    </ul>
    </p>
    <p>
    Cons:
      <ul>
    <li>Additional step before running code to compile</li>
    <li>May take longer before we can run and test our code due to compilation step</li>
    </ul>
    </p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Pros and Cons of Interpreted</p>
    <div className="flex flex-row justify-between">
    <p>
    Pros:
      <ul>
    <li>Generally more forgiving with syntax</li>
    <li>Generally faster to write code</li>
    </ul>
    </p>
    <p>
    Cons:
      <ul>
    <li>Slower to run as it has to execute line by line</li>
    <li>May take longer to debug as any errors are found when executing code</li>
    </ul>
    </p>
    </div>
    </section>
    <section><span className="text-usf-yellow font-bold">Java</span></section>
    <section>
    <p className="text-usf-yellow">Java</p>
    <p>A compiled, statically typed, Object Oriented programming language that we will use throughout this course.</p>
    <p>Java compiles to bytecode, executing code through the JVM</p>
    <p>Statically typed simply means data types are clearly defined for each variable and function</p>
      <p>We will explore Object Oriented programming more later in the semester</p>
    </section>
    <section><span className="text-usf-yellow font-bold">JVM</span></section>
    <section>
    <p className="text-usf-yellow">Java Virtual Machine (JVM)</p>
    <p>Java code is compiled into Bytecode that the Java Virtual Machine can read and execute. This means code will run the same regardless of the operating system, as it is executed through a Virtual Machine.</p>
    <p>This allows for standardized code, where we would only have to write code once and it would execute the same everywhere.</p>
      </section>
    <section><span className="text-usf-yellow font-bold">Byte Code</span></section>
    <section>
    <p>Numeric instructions read by the Java Virtual machine that gets read as binary later.</p>
    <p>Each instruction is a single byte, hence the term "bytecode"</p>
    </section>
    <section><span className="text-usf-yellow">Uses</span></section>
    <section>
    <p className="text-usf-yellow">Uses</p>
    <ul>
    {["Web Backend Development", "Database (Neo4j)", "Android App Development", "Desktop Applications", "Enterprise Software", "Games (Minecraft)", "Embedded Systems", "Cloud Applications", "Testing Systems (Selenium)", "Data Structures"].map((use: string) => <li key={use}>{use}</li>)}
    </ul>
    </section>
    <section>Java keywords</section>
    <section>
    <ul>
    <li><a href="https://www.w3schools.com/java/java_ref_keywords.asp" target="_blank">https://www.w3schools.com/java/java_ref_keywords.asp</a></li>
      <li>51 functional keywords in Java</li>
    <li>24 functional keywords in Python</li>
    </ul>
    </section>
    <section>Java Code Structure Intro</section>
    <section>
    <p className="text-left">
    public class Main &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (class)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-[18pt] text-left">
    <p>
    Java is a class-based object-oriented programming language. This means the language requires everything to exist in a class of sorts.
    </p>
    <p>We will see what this means later when we dive into creating our own classes.</p>
    <p>We will also say the class is "public" to ensure other "classes" can see it.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>When we run a java program, our compiler will look for a "main" method. This highlighted line is the entire main method.</p>
      <p>A method is essentially a function, but stored in a class.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>The main method will always start with a "public" keyword at the beginning to denote that the method is available for other classes to see.</p>
      <p>We will look at this "public" keyword more later.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between"> 
    <p className="text-left w-[75vw] text-[18pt]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-[18pt] text-left">
    <p>After the public keyword, we have our "static" keyword. We will see the purpose of this more later, but it essentially means the function will stick to the class.</p>
    <p>this will make far more sense later when we discuss using static vs. non-static/instance functions.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>After the "static" keyword, we have our "void" keyword. This is important because functions in Java require a return type.</p>
    <p>Unlike Python, when we don't return a value, we must define our function to have a "void" return type.</p>
    <p>Simply put, this means there's no value being returned from the function.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>Since it's a function, we have parentheses after with a single parameter.</p>
    <p>As a reminder, a parameter is the variable we define when we define the function.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>Here, this parameter is called "args". Notice we have "String[]" before it.</p>
    <p>In Java, when we declare variable, we must give it a type.</p>
    <p>This means our arguments will be a list (or properly called an Array) of Strings</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>This parameter is what we call a "Command Line Argument". We will explore these far later in the semester. For now, just remember you have to include "String[] args" in the parentheses for the main function.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (main)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>The main method will always start with a "public" keyword at the beginning to denote that the method is available for other classes to see.</p>
      <p>We will look at this "public" keyword more later.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (print)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>Now this last line is how we "print" to our console.</p>
    <p>In Java, we have to call "System.out.println" as a single function. This is actually three different parts working together.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (print)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>System is a class that directs Java towards System wide actions.</p>
    <p>Out tells Java we want to output something.</p>
    <p>Println will print the contents passed into the function out into the console, outputting a new line after.</p>
    </div>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Breaking it down (print)</p>
    <div className="flex flex-row justify-between">
    <p className="text-left text-[18pt] w-[75vw]">
    <span className="text-usf-yellow">public class Main &#123;</span><br />
    &nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello World");<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
    &#125;
    </p>
    <div className="text-left text-[18pt]">
    <p>In this case, we are printing out "Hello World" to the console</p>
    <p>There are other alternatives to println, which we will see later with the use of: <code>System.out.print()</code></p>
    </div>
    </div>
    </section>
    <section>Setup</section>
    <section>
    <p>We will go through the setup together, but you can also go through the assignment at the <a href="/inclass/setup" target="_blank">setup assignment</a></p>
    </section>
    <section>Post setup</section>
    <section>
    <p>When you finish the setup, go ahead to the post-setup assignment at <a href="/inclass/post-setup">inclass/post-setup</a></p>
    </section>
    </Slides>
    </>
  )
}

export default JavaSlides;
