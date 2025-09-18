import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 11: OOP 2";
const agenda: string[] = ["OOP Quick Review", "Getters and Setters", "Static Methods in Instance Methods", "toString", "Array of Objects", "null", "Project 2", "Lab 6"];

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
    <p className="text-usf-yellow">OOP Quick Review</p>
    </section>
    <section>
    <p className="text-usf-yellow">Class Structure</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>A class follows the structure to the right.</p>
    <p>Remember, the name of the file must match the name of the class.</p>
    <p><code>ClassName.java</code></p>
    </Half>
    <HalfCode>
    <Indent><span className="text-gray-700 dark:text-gray-300">public class ClassName &#123;</span></Indent>
    <Indent space={1}><span className="text-cyan-700 dark:text-cyan-300">// field variables/members</span></Indent>
    <div className="text-usf-yellow">
    <Indent space={1}>public ClassName(params) &#123;</Indent>
    <Indent space={2}>// Constructor Code</Indent>
    <Indent space={1}>&#125;</Indent>
    </div>
    <Indent space={1}><span className="text-red-700 dark:text-red-300">// Methods</span></Indent>
    <Indent><span className="text-gray-700 dark:text-gray-300">&#125;</span></Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <div className="font-mono text-left text-[15pt] w-3/4">
    <Indent><span className="text-gray-700 dark:text-gray-300">public class Stationary &#123;</span></Indent>
    <div className="text-cyan-700 dark:text-cyan-300">
    <Indent space={1}>private String name;</Indent>
    <Indent space={1}>private String description;</Indent>
    </div>
    <div className="text-usf-yellow">
    <Indent space={1}>public Stationary(String name, String description) &#123;</Indent>
    <Indent space={2}>this.name = name;</Indent>
    <Indent space={2}>this.description = description;</Indent>
    <Indent space={1}>&#125;</Indent>
    </div>
    <div className="text-red-700 dark:text-red-300">
    <Indent space={1}>public String getName() &#123;</Indent>
    <Indent space={2}>return this.name;</Indent>
    <Indent space={1}>&#125;</Indent>
    </div>
    <Indent><span className="text-gray-700 dark:text-gray-300">&#125;</span></Indent>
    </div>
    <div className="text-[15pt] text-left font-mono w-1/4">
    <p className="text-gray-700 dark:text-gray-300">Class Name</p>
    <p className="text-cyan-700 dark:text-cyan-300">Field Variables</p>
    <p className="text-usf-yellow">Constructor</p>
    <p className="text-red-700 dark:text-red-300">Methods</p>
    </div>
    </Row>
    </section>
    <section><p className="text-usf-yellow">Getters and Setters</p></section>
    <section>
    <p>In order to access and modify private variables in a class, we need to have public methods to get and set values. These are called getters and setters.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Getters</p>
    <Row>
    <Half>
    <p>This will get the value and return it. Nothing else needs to happen and it simply returns the value outward so other scopes can see the hidden, encapsulated, values.</p>
    </Half>
      <HalfCode>
      <Indent>private String name;</Indent>
      <Indent>public String getName() &#123;</Indent>
      <Indent space={1}>return this.name;</Indent>
      <Indent>&#125;</Indent>
      </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Setters</p>
    <Row>
    <Half>
    <p>This will set and replace the value in a field variable with a given new value. This method is often a void method as it doesn't return anything and simply updates a value.</p>
    </Half>
      <HalfCode>
      <Indent>public void setName(String name) &#123;</Indent>
      <Indent space={1}>this.name = name;</Indent>
      <Indent>&#125;</Indent>
      </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Accessing static methods in instance methods</p>
    </section>
    <section>
    <Row>
    <div className="w-1/3">
    <p>Static functions can be used to write more generic code or to write utility functions that can have specialized functionality within the class itself.</p>
    </div>
    <div className="w-2/3 font-mono text-[13pt]">
    <Indent>public static String getInfo(String f, String l) &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append(f).append(" ").append(l);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    <br />
    <Indent>public String getInfo() &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append(getInfo(this.firstName, this.lastName));</Indent>
    <Indent space={1}>s.append(" ").append(this.age);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    </div>
    </Row>
    </section>
    <section>
    <Row>
    <div className="w-1/3">
    <p>We can call static functions in instance methods.</p>
    </div>
    <div className="w-2/3 font-mono text-[13pt]">
    <Indent>public static String getInfo(String f, String l) &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append(f).append(" ").append(l);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    <br />
    <Indent>public String getInfo() &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append(getInfo(this.firstName, this.lastName));</Indent>
    <Indent space={1}>s.append(" ").append(this.age);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    </div>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">toString</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>When we print out an Object itself, we often get some information printed out to the console.</p>
    <p>When we print out an object, we actually call a method called <code>toString()</code> behind the scenes.</p>
    </Half>
    <HalfCode>
    <Indent>Student s = new Student("Edward", "Rees", "erees", "20250101", 25);</Indent>
    <Indent>System.out.println(s);</Indent>
    <Indent>// Could give us something like: "Student@2a138b55"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This <code>toString</code> default behavior returns the class name, an @ sign, and the hex string of what we call the hashcode of the object.</p>
    </Half>
    <HalfCode>
    <Indent>Student s = new Student("Edward", "Rees", "erees", "20250101", 25);</Indent>
    <Indent>System.out.println(s);</Indent>
    <Indent>// Could give us something like: "Student@2a138b55"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This Hex String is a hexadecimal (base 16) version of a number.</p>
    <p>A hashcode is an identifier for an object that allows for object comparison and equality. This implementation depends on the JVM, but often is the memory address for the object converted into an integer.</p>
    </Half>
    <HalfCode>
    <Indent>Student s = new Student("Edward", "Rees", "erees", "20250101", 25);</Indent>
    <Indent>System.out.println(s);</Indent>
    <Indent>// Could give us something like: "Student@2a138b55"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>While the default behavior is there, we can actually override the <code>toString</code> method, to provide more information about the object itself.</p>
    </Half>
    <HalfCode>
    <Indent>Student s = new Student("Edward", "Rees", "erees", "20250101", 25);</Indent>
    <Indent>System.out.println(s);</Indent>
    <Indent>// After overriding toString, we could get something like:</Indent>
    <Indent>// "[erees/20250101] Edward Rees: 25"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>What does this overriding look like?</p>
    </Half>
    <div className="font-mono w-1/2 text-[14pt]">
    <Indent>@Override</Indent>
    <Indent>public String toString() &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append("[");</Indent>
    <Indent space={1}>s.append(this.username);</Indent>
    <Indent space={1}>s.append("/");</Indent>
    <Indent space={1}>s.append(this.id);</Indent>
    <Indent space={1}>s.append("] ");</Indent>
    <Indent space={1}>s.append(this.firstName);</Indent>
    <Indent space={1}>s.append(" ");</Indent>
    <Indent space={1}>s.append(this.lastName);</Indent>
    <Indent space={1}>s.append(": ");</Indent>
    <Indent space={1}>s.append(this.age);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    </div>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>When we add the <strong>@Override</strong> annotation above the method, the JVM sees that we are overriding the base implementation and uses our version instead.</p>
    </Half>
    <div className="font-mono w-1/2 text-[14pt]">
    <Indent>@Override</Indent>
    <Indent>public String toString() &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append("[");</Indent>
    <Indent space={1}>s.append(this.username);</Indent>
    <Indent space={1}>s.append("/");</Indent>
    <Indent space={1}>s.append(this.id);</Indent>
    <Indent space={1}>s.append("] ");</Indent>
    <Indent space={1}>s.append(this.firstName);</Indent>
    <Indent space={1}>s.append(" ");</Indent>
    <Indent space={1}>s.append(this.lastName);</Indent>
    <Indent space={1}>s.append(": ");</Indent>
    <Indent space={1}>s.append(this.age);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    </div>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This is important as we can then simply print out the object variable itself!</p>
    <p>Since this method return a string, we not have a String representation of the object. Anytime we want to print out the object information, we can call this <code>toString()</code> method itself.</p>
    </Half>
    <div className="font-mono w-1/2 text-[14pt]">
    <Indent>@Override</Indent>
    <Indent>public String toString() &#123;</Indent>
    <Indent space={1}>StringBuilder s = new StringBuilder();</Indent>
    <Indent space={1}>s.append("[");</Indent>
    <Indent space={1}>s.append(this.username);</Indent>
    <Indent space={1}>s.append("/");</Indent>
    <Indent space={1}>s.append(this.id);</Indent>
    <Indent space={1}>s.append("] ");</Indent>
    <Indent space={1}>s.append(this.firstName);</Indent>
    <Indent space={1}>s.append(" ");</Indent>
    <Indent space={1}>s.append(this.lastName);</Indent>
    <Indent space={1}>s.append(": ");</Indent>
    <Indent space={1}>s.append(this.age);</Indent>
    <Indent space={1}>return s.toString();</Indent>
    <Indent>&#125;</Indent>
    </div>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>With the <code>toString</code> method overridden, we can also do:</p>
    </Half>
    <HalfCode>
    <Indent>Student s = new Student("Edward", "Rees", "erees", "20250101", 25);</Indent>
    <Indent>String sInfo = s.toString();</Indent>
    <Indent>System.out.println(sInfo);</Indent>
    <Indent>// or even simpler:</Indent>
    <Indent>System.out.println(s);</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Array of Objects</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>Since objects are another data type, we can create an array of objects.</p>
    <p>The logic is the same as an array of any other data type, but instead of primitive types, we have objects.This means we can use the object methods too.</p>
    </Half>
    <HalfCode>
    <Indent>Student[] students = new Student[10];</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>However, we must set values in the array to new instances of the data type.</p>
    </Half>
    <HalfCode>
    <Indent>Student[] students = new Student[5];</Indent>
    <Indent>students[0] = new Student( ... );</Indent>
    <Indent>students[1] = new Student( ... );</Indent>
    <Indent>...</Indent>
    <Indent>for(Student s : students) &#123;</Indent>
    <Indent space={1}>System.out.println(s);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Alternatively, if we know the student objects already, we could also set them initially:</p>
    </Half>
    <HalfCode>
    <Indent>Student[] students = &#123; new Student(...), new Student(...), ... new Student(...) &#125;</Indent>
    <Indent>for(Student s : students) &#123;</Indent>
    <Indent space={1}>System.out.println(s);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>If we wanted to print out only the names of the students, we could also do this:</p>
    </Half>
    <HalfCode>
    <Indent>Student[] students = &#123; new Student(...), new Student(...), ... new Student(...) &#125;</Indent>
    <Indent>for(Student s : students) &#123;</Indent>
    <Indent space={1}>System.out.println(s.getName());</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">null</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>The default value for a primitive type is <code>0</code>, but for an object, it's <code>null</code>.</p>
    <p><code>null</code> is another primitive value, like how <code>None</code> is a value in Python.</p>
    <p><code>null</code> is used when an object doesn't exist or a value is not found.</p>
    </Half>
    <HalfCode>
    <Indent>if (obj == null) &#123;</Indent>
    <Indent space={1}>return false;</Indent>
    <Indent>&#125;</Indent>
    <Indent>return true;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Project 2</p>
    </section>
    <section>
    <p className="text-usf-yellow">Reminder of Spec Grading</p>
    </section>
    <section>
    <p>Do the work for a C <strong>first</strong>, then implement the features for a B <strong>next</strong>, then work on the features for an A <strong>last</strong>. If you tackle the A features but your C and B features aren't working, you won't get an A.</p>
      <p>Work incrementally, not tackling the A+ features when your base functionality doesn't work. Taking that approach will lead to less of the project functionally complete at the end, leading you towards getting a D instead. I do'nt want that when I know you're all capable of doing well.</p>
    <p>Go slow and incrementally!</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 6</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
