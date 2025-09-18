import { Slides, SlideNavbar, TableHead, TableHeader } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';
import accessModifiers from "./img/Access-Modifiers.png"
import { Table } from 'lucide-react';

const title: string = "Day 10: OOP 1";
const agenda: string[] = ["Reminder of Today", "Object Oriented Programming Recap", "Class", "Field Variables/Members", "Constructor", "Methods", "This", "Quiz 4", "In Class"];

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
    <p className="text-usf-yellow">Reminder for today!</p>
    <p>Reminder for today's lecture. Watch this lecture before class. We'll do the Quiz at the start of class, you'll then leave and come back for your allocated timeslot for the Project 1 Code Review.</p>
    </section>
    <section>
    <p className="text-usf-yellow">OOP</p>
    </section>
    <section>
    <p>Reminder that Classes and Objects are the heart of OOP.</p>
    <p>We talked about Encapsulation, Abstraction, Polymorphism, and Inheritance a little last week.</p>
    </section>
    <section>
    <p className="text-usf-yellow">4 Pillars Recap</p>
    </section>
    <section>
    <p className="text-usf-yellow">Abstraction</p>
    <p>The ability to take code that has similar functionality and move it into a more generalized implementation.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Encapsulation</p>
    <p>The ability to hide and store data within some class or object. This is heavily shown using the <code>private</code> and <code>public</code> keywords.</p>
    <p>Data is hidden, with methods exposing and manipulating the data.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Inheritance</p>
    <p>The ability for classes to inherit data from parent classes using the extends and super keywords.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Polymorphism</p>
    <p>The ability to have different implementations for methods/functions, with different function parameters.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Classes and Objects</p>
    </section>
    <section>
    <p className="text-usf-yellow">Classes</p>
    <p>The structure that defines data and how methods interact with each other and with the inner data.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Objects</p>
    <p>Actual instance or copies from the class (blueprint).</p>
    <p>Actual "thing" we will use.</p>
    <p>uses the class as the structure, while the object is the instance we use.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Class</p>
    <p>Let's look at the structure of a class now!</p>
    </section>
    <section>
    <p className="text-usf-yellow">Structure</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>A class follows the structure to the right:</p>
    <p>First thing to note: the name of the file must match the name of the class in order for our code to work.</p>
      <p><code>ClassName.java</code></p>
    </Half>
    <HalfCode>
    <Indent>public class ClassName &#123;</Indent>
    <Indent space={1}>// field variables/members</Indent>
    <Indent space={1}>public ClassName(params) &#123;</Indent>
    <Indent space={2}>// Constructor</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>// Methods</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Field Variables/Members</p>
    </section>
    <section>
    <p>In our classes, we can have variables that exist throughout the class. These are called field variables or members.</p>
    <p>These variables belong to the class itself.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Field Variables in Action</p>
    <Row>
    <Half>
    <p>These variables are created as normal variables but we put them inside the class itself.</p>
    <p>These are also preceded by either <code>private</code> or <code>public</code> or nothing at all.</p>
    </Half>
    <HalfCode>
    <Indent>public class User &#123;</Indent>
    <Indent space={1}>private String name;</Indent>
    <Indent space={1}>public String id;</Indent>
    <Indent space={1}>byte age;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Field Variables in Action</p>
    <Row>
    <Half>
    <p>In the example to the right, we have a <strong>private</strong> name for the user, a <strong>public</strong> id, and an age that has no public/private identifier. This means the <code>age</code> variable has a <strong>default</strong> scope.</p>
    </Half>
    <HalfCode>
    <Indent>public class User &#123;</Indent>
    <Indent space={1}>private String name;</Indent>
    <Indent space={1}>public String id;</Indent>
    <Indent space={1}>byte age;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Access Modifiers</p>
    <img src={accessModifiers} alt="Access Modifiers Diagram" />
    </section>
    <section>
    <table>
    <thead>
    <tr>
    <td>Modifier</td>
    <td>Class</td>
    <td>Package</td>
    <td>Subclass</td>
    <td>World</td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>public</td>
    <td>y</td>
    <td>y</td>
    <td>y</td>
    <td>y</td>
    </tr>
    <tr>
    <td>protected</td>
    <td>y</td>
    <td>y</td>
    <td>y</td>
    <td>n</td>
    </tr>
    <tr>
    <td>default</td>
    <td>y</td>
    <td>y</td>
    <td>n</td>
    <td>n</td>
    </tr>
    <tr>
    <td>private</td>
    <td>y</td>
    <td>n</td>
    <td>n</td>
    <td>n</td>
    </tr>
    </tbody>
    </table>
    </section>
    <section>
    <p className="text-usf-yellow">Field Variables in Action</p>
    <Row>
    <Half>
    <p>This means our name is only visible in the class itself. Other classes can see the id. The age is visible to the class and technically to what we call the <code>package</code></p>
    </Half>
    <HalfCode>
    <Indent>public class User &#123;</Indent>
    <Indent space={1}>private String name;</Indent>
    <Indent space={1}>public String id;</Indent>
    <Indent space={1}>byte age;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Packages?</p>
    <p>Packages are a way we can group and organize code together. We may use packages later in the semester but for now, we will continue to write code without them.</p>
    </section>
  <section>
  <p className="text-usf-yellow">Constructor</p>
  </section>
  <section>
  <p>Our constructor is the method with the same name as our class. This is the method called when we create a new object of the class.</p>
  </section>
  <section>
  <Row>
  <Half>
  <p>In the example to the right, the constructor is the <code>public User(String newName)</code> function</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>private String name;</Indent>
  <Indent space={1}><span className="text-usf-yellow">public User(String newName) &#123;</span></Indent>
  <Indent space={2}><span className="text-usf-yellow">name = newName;</span></Indent>
  <Indent space={1}><span className="text-usf-yellow">&#125;</span></Indent>
  <Indent>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <Row>
  <Half>
  <p>When we create a new instance of the class with a new object, we're actually calling the constructor!</p>
  </Half>
  <HalfCode>
  <Indent>User u = new <span className="text-usf-yellow">User("Edward")</span>;</Indent>
  <Indent>// User("Edward") is calling the User(String newName) method!</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <Row>
  <Half>
  <p>For example, when we created a new Scanner object, we actually were calling one of the constructors for the Scanner class!</p>
  </Half>
  <HalfCode>
  <Indent>Scanner input = new Scanner(System.in);</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Multiple Constructors</p>
  <Row>
  <Half>
  <p>With Java, we can also create multiple constructors. These will vary with the function parameters and how the functions are implemented.</p>
  </Half>
  <HalfCode>
  <Indent>public User(String newName) &#123;</Indent>
  <Indent space={1}>// implementation</Indent>
  <Indent>&#125;</Indent>
  <Indent>public User(String fName, String lName) &#123;</Indent>
  <Indent space={1}>// implementation</Indent>
  <Indent>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Multiple Constructors</p>
  <Row>
  <Half>
  <p>This is actually the concept of <strong>polymorphism</strong> in action! We are able to have multiple forms for a single function!</p>
  </Half>
  <HalfCode>
  <Indent>public User(String newName) &#123;</Indent>
  <Indent space={1}>name = newName;</Indent>
  <Indent>&#125;</Indent>
  <Indent>public User(String fName, String lName) &#123;</Indent>
  <Indent space={1}>name = fName + lName;</Indent>
  <Indent>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Methods</p>
  </section>
  <section>
  <p>Methods are what we call functions that belong inside a function. Methods are functions. However, not all functions are methods.</p>
  <p>Technically, the static functions we wrote last week aren't methods as they don't belong to the object, but exist on the class itself. They don't use any data belonging to the object either.</p>
  </section>
  <section>
  <p>Methods primarily use the data from the class itself and don't use the <code>static</code> keyword. This makes them <strong>non-static</strong> or also called <strong>instance</strong> methods.</p>
  </section>
  <section>
  <Row>
  <Half>
  <p>To write a method, we simply need the <code>public</code>/<code>private</code> keyword, followed by the return type, then the name of the method.</p>
  <p>if we need parameters to the method, we can specify them in the parentheses.</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>private String name;</Indent>
  <Indent space={1}>public String getName() &#123;</Indent>
  <Indent space={2}>return name;</Indent>
  <Indent space={1}>&#125;</Indent>
  <Indent>&#125;</Indent>
  </HalfCode> 
  </Row>
  </section>
  <section>
  <Row>
  <Half>
  <p>For example with <code>getBirthYear</code>, where we take the current year as a parameter and return the difference of the current year and the stored age.</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>byte age;</Indent>
  <Indent space={1}>public int getBirthYear(int currYear) &#123;</Indent>
  <Indent space={2}>return currYear - age;</Indent>
  <Indent space={1}>&#125;</Indent>
  <Indent>&#125;</Indent>
  </HalfCode> 
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Variable Scoping</p>
  </section>
  <section>
  <p className="text-usf-yellow">Class Scope</p>
  <Row>
  <Half>
  <p>Field variables/members exist in the class itself.</p>
  <p>This means any instance methods can see and use the variables.</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>private String name;</Indent>
  <Indent space={1}>// exist throughout the class</Indent>
  <Indent>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Method Scope (params)</p>
  <Row>
  <Half>
  <p>Parameters/variables defined from the method header in the parentheses only exist in the method itself.</p>
  <p>In the example to the right, <code>currYear</code> only exists in the <code>getBirthYear</code> method.</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>public int getBirthYear(int currYear) &#123;</Indent>
  <Indent space={2}>// currYear doesn't exist outside getBirthYear</Indent>
  <Indent space={1}>&#125;</Indent>
  <Indent>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Method Scope (local defined)</p>
  <Row>
  <Half>
  <p>Variables defined in the methods, but not in the parameters, also only exist in the method themselves.</p>
  <p>Values are returned from methods/functions, but not the variables themselves.</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>public int getBirthYear(int currYear) &#123;</Indent>
  <Indent space={2}>int year = currYear - age;</Indent>
  <Indent space={2}>return year;</Indent>
  <Indent space={2}>// year only exists in the method, but the value leaves the function.</Indent>
  <Indent space={1}>&#125;</Indent>
  <Indent>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">this</p>
  </section>
  <section>
  <p>In Java, if we want to reference anything in the class, within any method, we can use the <code>this</code> keyword.</p>
  <p>Any method or variable within the class is accessible using the <code>this</code> keyword.</p>
  </section>
  <section>
  <Row>
  <Half>
  <p>This is useful when we need to specify which variable we are referencing.</p>
  <p>In the example the right, <code>name</code> appears as both a field variable <strong>and</strong> as a parameter to the constructor.</p>
  <p>To avoid confusion, using the <code>this</code> keyword can help us differentiate between the two.</p>
  </Half>
  <HalfCode>
  <Indent>public class User &#123;</Indent>
  <Indent space={1}>private String <span className="bg-emerald-200 dark:bg-emerald-800">name</span>;</Indent>
  <Indent space={1}>public User (String <span className="bg-red-200 dark:bg-red-800">name</span>) &#123;</Indent>
  <Indent space={2}>this.<span className="bg-emerald-200 dark:bg-emerald-800">name</span> = <span className="bg-red-200 dark:bg-red-800">name</span>;</Indent>
  <Indent space={1}>&#125;</Indent>
  <Indent space={0}>&#125;</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <Row>
  <Half>
  <p>Concurrently, this can help us call another constructor too!</p>
  <p>If we use <code>this</code> as a method, it naturally will call another constructor, int hsi case, calling the constructor that takes in a single String.</p>
  </Half>
   <HalfCode>
   <Indent>public class User &#123;</Indent>
   <Indent space={1}>public User(String name) &#123;</Indent>
   <Indent space={2}>this.name = name;</Indent>
   <Indent space={1}>&#125;</Indent>
   <Indent space={1}>public User(String fName, String lName) &#123;</Indent>
   <Indent space={2}>this(fName + " " + lName);</Indent>
   <Indent space={1}>&#125;</Indent>
   <Indent space={0}>&#125;</Indent>
   </HalfCode> 
  </Row>
  </section>
  <section>
  <p className="text-usf-yellow">Example Class</p>
  </section>
  <section>
  <div className="text-left font-mono text-[16pt]">
    <Indent>public class Stationary &#123;</Indent>
    <Indent space={2}>private String name;</Indent>
    <Indent space={2}>private String description;</Indent>
    <Indent space={2}>public Stationary(String name, String description) &#123;</Indent>
    <Indent space={4}>this.name = name;</Indent>
    <Indent space={4}>this.description = description;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>public String getName() &#123;</Indent>
    <Indent space={4}>return this.name;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={0}>&#125;</Indent>
  </div>
  </section>
  <section>
  <p className="text-usf-yellow">Calling methods</p>
  </section>
  <section>
  <Row>
  <Half>
  <p>In order to call a method, we must call it on the variable itself.</p>
  </Half>
  <HalfCode>
  <Indent>User ed = new User("Edward");</Indent>
  <Indent>System.out.println(<span className="text-usf-yellow">ed.getName()</span>)</Indent>
  <Indent>// gives us "Edward"</Indent>
  <br />
  <Indent>User amy = new User("Amy");</Indent>
  <Indent>System.out.println(<span className="text-usf-yellow">amy.getName()</span>)</Indent>
  <Indent>// gives us "Amy"</Indent>
  </HalfCode>
  </Row>
  </section>
  <section>
  <Row>
  <Half>
  <p>Since these methods aren't static, they must be called on the objects. If we call them on the class, our code would fail to compile.</p>
  </Half>
  <HalfCode>
  <Indent>User u = new User("Edward");</Indent>
  <Indent>System.out.println(User.getName());</Indent>
  <Indent>// crashes due to getName not being static.</Indent>
  </HalfCode>
  </Row>
  <div className="text-left font-mono text-[16pt] bg-gray-800 text-gray-400 px-2 py-1 font-light">
    <p>Error:</p>
    <p>non-static method getName() cannot be referenced from a static context</p>
    <p>User.getName();</p>
    <p>^__________^</p>
  </div>
  </section>
  <section>
  <p>Alright that's it for the lecture/content portion. Please come to class to do Quiz 4. We will do the Code Reviews afterwards. Please come on time for your slot. If you're late, it'll be skipped and you'll receive a 0 for the Code Review portion, impacting your grade heavily. While other students are doing the Code Review, please work on the in class.</p>
  </section>
    </Slides>
    </>
  )
}

export default Slide;
