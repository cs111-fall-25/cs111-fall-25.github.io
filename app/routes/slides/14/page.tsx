import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 14: More Methods";
const agenda: string[] = ["Pass by Value v Pass by Reference", "Static v Instance", "Method Overloading", "Hashcode", "Equals", "Lab 7"];

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
    <p className="text-usf-yellow">Pass by Value v Pass by Reference</p>
    </section>
    <section>
    <p>You may have heard of Pass by Value and Pass by Reference before.</p>
    <p>Java is purely a <strong>Pass by Value*</strong> language. This means when variables are passed into functions, the values themselves are passed in and not references to the variables.</p>
    <p>However, that * is for Objects.</p>
    </section>
    <section>
    <p>Effectively, primitive types are passed in by value. This means when we try to change the variable, the value in the original variable does not change.</p>
    </section>
    <section>
    <p>However, objects are the *. When an object is passed to a function, the value to the reference of the object is provided.</p>
    <p>This mimics a "pass by reference" as when we call methods on the object, it can directly change the object itself.</p>
    <p>The same can be said with arrays, where passing an array into a function and changing that array can change the original array.</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>For example, if we write a function to swap values in an array, the original array gets updated!</p>
    </Half>
    <HalfCode>
    <Indent>public static void swap(int[] a, int i, int j) &#123;</Indent>
    <Indent space={2}>int t = a[i];</Indent>
    <Indent space={2}>a[i] = a[j];</Indent>
    <Indent space={2}>a[j] = t;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>At the same time, calling a method on an object in a function can also change and update the object itself.</p>
    </Half>
    <HalfCode>
    <Indent>public static void incrementAge(Student s) &#123;</Indent>
    <Indent space={2}>s.setAge(s.getAge() + 1);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">static v instance</p>
    </section>
    <section>
    <p>Now that we've spent some time building our own classes, we cna revisit static v instance and how they can be called differently.</p>
    </section>
    <section>
    <p>Static attaches to the class itself, while non-static or instance attaches to the object (variable) itself.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Calling static methods</p>
    <Row>
    <HalfCode>
    <Indent>class Student &#123;</Indent>
    <Indent space={2}>public static String genName(String f, String l)  &#123;</Indent>
    <Indent space={4}>return f + " " + l;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>public static void main(String[] args) &#123;</Indent>
    <Indent space={2}>Student.genName("John", "Doe");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">
    Calling instance methods
    </p>
    <div className="font-mono text-left text-[16pt]">
    <Indent>class Student &#123;</Indent>
    <Indent space={2}>public String genName() &#123;</Indent>
    <Indent space={4}>return genName(this.first, this.last);</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>public static void main(String[] args) &#123;</Indent>
    <Indent space={4}>Student s = new Student("John", "Doe");</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p>Static functions can be used without information of what's in the class, but instance methods often utilize the information from the class itself. Instance methods have access to the <code>this</code> keyword.</p>
    </section>
    <section>
    <p className="text-usf-yellow">When to use which?</p>
    <Row>
    <Half>
    <p>static</p>
    <ul><li>Great when functionality can be generalized</li></ul>
    </Half>
    <Half>
    <p>instance</p>
    <ul><li>Better when information from the object (inside the class) is useful/required</li></ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Method Overloading</p>
    </section>
    <section>
    <p>The ability to write one method with different parameters leading to different return types.</p>
    </section>
    <section>
    <div className="font-mono text-left text-[16pt]">
    <Indent>public static int add(int a, int b) &#123;</Indent>
    <Indent space={2}>return a + b;</Indent>
    <Indent>&#125;</Indent>
    <Indent>public static float add(float a, float b) &#123;</Indent>
    <Indent space={2}>return a + b;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p>A form of polymorphism we've already seen in the previous week by calling different versions of the function with different parameters.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Hashcode</p>
    </section>
    <section>
    <p>At its core, it's a way Object are identifiable based on their hashcode. This hashcode can also be used for more complex situations; such as collections and identifying means of sorting objects.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Why does this matter?</p>
    </section>
    <section>
    <p>You will look at how these hashcodes are generated in either CS112 and/or CS245. However, I thought it would be good to look at it now, given we've already seen this when we printed out an Array and an Object itself.</p>
    </section>
    <section>
    <p>At the same time, this is often used in the <code>.equals</code> method when seeing if two objects are equal!</p>
    </section>
    <section>
    <p className="text-usf-yellow">Equals</p>
    </section>
    <section>
    <p>Speaking of which, we can also replace the <code>.equals</code> method for our own classes and see if two objects are equal to each other!</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>This can be done using the <code>instanceof</code> keyword. This will check if the object is already an instance of the current class (Student in this case).</p>
      <p>If it isn't, we can simply return <code>false</code> since they can't be the same.</p>
    </Half>
    <HalfCode>
    <Indent>@Override</Indent>
    <Indent>public boolean equals(Object o) &#123;</Indent>
    <Indent space={2}>if(!(o instanceof Student)) &#123;</Indent>
    <Indent space={4}>return false;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>Student s = (Student) o;</Indent>
    <Indent space={2}>if(s.getName().equals(this.name)) &#123;</Indent>
    <Indent space={4}>return true;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>return false;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>After this, we can cast our Object into the current class (Student). We'll see this more later when we talk about inheritance properly, but we can cast the object into a Student type then!</p>
    </Half>
    <HalfCode>
    <Indent>@Override</Indent>
    <Indent>public boolean equals(Object o) &#123;</Indent>
    <Indent space={2}>if(!(o instanceof Student)) &#123;</Indent>
    <Indent space={4}>return false;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>Student s = (Student) o;</Indent>
    <Indent space={2}>if(s.getName().equals(this.name)) &#123;</Indent>
    <Indent space={4}>return true;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>return false;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>From here, we can check for equality with different elements of the object.</p>
      <p>The example to the right simply checks if the names are the same. We can check for more values if we want, but this is a simple example.</p>
    </Half>
    <HalfCode>
    <Indent>@Override</Indent>
    <Indent>public boolean equals(Object o) &#123;</Indent>
    <Indent space={2}>if(!(o instanceof Student)) &#123;</Indent>
    <Indent space={4}>return false;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>Student s = (Student) o;</Indent>
    <Indent space={2}>if(s.getName().equals(this.name)) &#123;</Indent>
    <Indent space={4}>return true;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>return false;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 7: Shopping Cart</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
