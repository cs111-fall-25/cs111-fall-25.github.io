import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 9: Static";
const agenda: string[] = ["Object Oriented Programming", "Static Methods", "Lab 5: Tic Tac Toe"];

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
      <p className="text-usf-yellow">Object Oriented Programming</p>
    </section>
    <section>
      <p className="text-usf-yellow">What is it?</p>
      <ul>
      {["A different way of programming!", "Allows for data to be stored and \"encapsulated\"", "Think of it as your own custom data type that contains data inside of it!"].map((term: string, i: number) => <li key={i}>{term}</li>)}
      </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Why</p>
    <p>Object Oriented Programming, or OOP for short, allows us to create structures that represent data in a way that allows us to manipulate it in a contained and consistent manner.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Classes and Objects</p>
    </section>
    <section>
    <p>In OOP, there are two major topics in the form of "classes" and "objects"</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Class:</p>
    <p>The structure, definition of data, and how the data is manipulated.</p>
    <p>Contains "methods"</p>
    <p>Defines the variables and data stored inside.</p>
    </Half>
    <Half>
    <p>Object:</p>
    <p>The actual "version" or copy or instance of the class.</p>
    <p>How we call those "methods" and functions.</p>
    <p>Allows for multiple different "copies" of the class, following the structure.</p>
    </Half>
    </Row>
    </section>
    <section><p className="text-usf-yellow">Blueprint Analogies</p></section>
    <section>
    <p>A common analogy for Classes/Objects is a Blueprint/Actual.</p>
      <p>The class is a blueprint to construct something. The object is the actual "thing" being constructed.</p>
    <p>A Recipe/Dish is another good analogy. The Recipe for some dish is the class. It contains the structure, the ingredients, the order of how the dish is created. The Actual Dish created is the Object. You can follow the same instructions and create the same dish multiple times (creating multiple objects from the same class).</p>
    </section>
    <section>
    <p>We can make it a little more abstract too. Let's say a generic Computer is a class. The Object would be an individual computer, be it a Laptop or Desktop. We can have multiple computers that follow the same structure but with differences too. They are all computers and are "instances" or examples of a computer.</p>
    </section>
    <section>
    <p className="text-usf-yellow">4 Pillars</p>
    </section>
    <section>
    <p className="text-usf-yellow">4 Pillars</p>
    <ul>
    <li>Abstraction</li>
    <li>Encapsulation</li>
    <li>Polymorphism</li>
    <li>Inheritance</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Abstraction</p>
    <p>The ability to take code that has similar functionality and move it into a more generalized implementation.</p>
    <p>We won't see this too much in this class, but it'll show up more in 112 with the implementation of interfaces and abstract classes.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Encapsulation</p>
    <p>The ability to hide and store data within some class or object. This is heavily done using the <code>private</code> or <code>public</code> keywords.</p>
    <p>Data is hidden, using methods to expose and manipulate the data.</p>
    <p>We will see this next week when we start creating our own classes!</p>
    </section>
    <section>
    <p className="text-usf-yellow">Inheritance</p>
    <p>The ability for classes to inherit data from parent classes using the <code>extends</code> and <code>super</code> keywords.</p>
      <p>We will see this near the end of the semester when we properly talk about inheritance. This will also show up more in 112.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Polymorphism</p>
    <p>The ability to have different implementations for methods/functions, with different function parameters.</p>
      <p>We will see this more next week too! (well, after the midterm.)</p>
    </section>
    <section>
    <p className="text-usf-yellow">Wait...</p>
    <p>Now, that was more of an introduction to Object Oriented Programming from a more theoretical/abstract perspective.</p>
    <p>We will properly work through creating our own classes after the midterm. It also won't be on the midterm.</p>
    </section>
    <section>
    <p className="text-usf-yellow">...why?</p>
    <p>Before we start implementing our own classes, we should look at how to create functions in our code in order to clean up our code.</p>
    </section>
    <section><p>Today, we're going to dive into the <code>static</code> keyword.</p></section>
    <section>
    <p className="text-usf-yellow">Static Methods</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Let's look at the main method again. Remember how I said we'll talk about that <code>static</code> keyword later?</p>
    <p>Well, now is later.</p>
    </Half>
    <HalfCode>
    <Indent>public <strong>static</strong> void main(String[] args) &#123;</Indent>
    <Indent space={1}>System.out.println("Hello World");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Using the static keyword allows us to write functions that don't require us to work with classes and objects quite yet.</p>
    </Half>
    <HalfCode>
    <Indent>public <strong>static</strong> void main(String[] args) &#123;</Indent>
    <Indent space={1}>System.out.println("Hello World");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>We can call static functions within other static functions. We can also call static functions in non-static methods.</p>
    <p>However, we cannot call non-static methods in static functions.</p>
    </Half>
    <HalfCode>
    <Indent>public <strong>static</strong> void main(String[] args) &#123;</Indent>
    <Indent space={1}>System.out.println("Hello World");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Creating static functions</p>
    <Row>
    <Half>
    <p>Creating static functions is really straightforward. We simply add the static keyword after the <code>public/private</code> and before our <code>return type</code></p>
    </Half>
    <HalfCode>
    <Indent>public static &lt;type&gt; &lt;name&gt;(params) &#123;</Indent>
    <Indent space={1}>// function body</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Creating static functions</p>
    <Row>
    <Half>
    <p>We then give our function a name, parentheses, and any parameters inside of it.</p>
    <p>This is followed by curly brackets.</p>
    <p>Inside the function, we can do any calculation and return a value.</p>
    <p>This value returned should match the return type of the function.</p>
    </Half>
    <HalfCode>
    <Indent>public static &lt;type&gt; &lt;name&gt;(params) &#123;</Indent>
    <Indent space={1}>// function body</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Creating static functions</p>
    <Row>
    <Half>
    <p>In the example to the right, we have a static function that takes two integer parameters, <code>a</code> and <code>b</code>, with an integer return type. The function is named <code>add</code> and simply returns the sum of both numbers.</p>
    </Half>
    <HalfCode>
    <Indent>public static int add(int a, int b) &#123;</Indent>
    <Indent space={1}>return a + b;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Creating static functions</p>
    <Row>
    <Half>
    <p>In the case to the right, we don't return anything. This version simply prints out a value and doesn't <strong>return</strong> a value. In this case, we can change the return type into a <code>void</code> type. This version of our <code>add</code> function simply prints out the sum of <code>a</code> and <code>b</code>.</p>
    <p>Void functions <strong>do not</strong> return any value! The <code>return</code> keyword can be used to end the function, but it cannot return an actual value.</p>
    </Half>
    <HalfCode>
    <Indent>public static void add(int a, int b) &#123;</Indent>
    <Indent space={1}>System.out.println(a + b);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p>It is important to always remember that we need a returnt ype in our functions!</p>
    <p>Not having one will cause the compiler to complain and cause our code to fail to compile.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Count Lowercase Letters Function</p>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>public static int countLowers(String str) &#123;</Indent>
    <Indent space={1}>int total = 0;</Indent>
    <Indent space={1}>char[] chrs = str.toCharArray();</Indent>
    <Indent space={1}>for(char c : chrs) &#123;</Indent>
    <Indent space={2}>if (c &gt;= 'a' &amp;&amp; c &lt;= 'z') &#123;</Indent>
    <Indent space={3}>total++;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>return total;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>System.out.println(countLowers("HElLo"));</Indent>
    <Indent>System.out.println(countLowers("world"));</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p>What's the point of writing static functions?</p>
    </section>
    <section>
    <ul>
    {["Allows us to write code that will get called multiple times; code reusability", "Code can be more generic and can work for multiple cases", "Allows us to avoid writing the same code in different places"].map((reason: string, i: number) => <li key={i}>{reason}</li>)}
    </ul>
    <ul>
    <li>Essentially, for now, they are just functions that we can call in the main method!</li>
    </ul>
    </section>
    <section>
    <p className='text-usf-yellow'>Lab 5: Tic Tac Toe</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
