import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import eclipseDownloadImage from './img/eclipse download.png';
import slidesPdf from '@/static/slides/java.pdf';
import inheritanceDiagram from './img/inheritance.png';

const title: string = "Day 17: Inheritance Intro";
const agenda: string[] = ["Quiz 7", "Eclipse Install", "Inheritance Introduction", "extends", "super", "is-a relationship", "UML", "Project 3", "Media in-class"]

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
    <p className="text-usf-yellow">Quiz 7</p>
    </section>
    <section>
    <p className="text-usf-yellow">Eclipse</p>
    </section>
    <section>
    <p className="text-usf-yellow">IDE</p>
    </section>
    <section>
    <p className="text-usf-yellow">Integrated Development Environment</p>
    <ul>
    <li>Code Editor</li>
    <li>Debugger</li>
    <li>Code Execution</li>
    <li>Syntax Highlighter</li>
    <li>Compiler</li>
    <li>Usually, language specific</li>
    </ul>
    </section>
    <section>
    <p>Often comes with Generators, Utility functionality to simplify coding, refactors, and other features</p>
    <p>Using the generators such as generating the getters and setters for you can simplify and remove a lot of the boilerplate code.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Installation</p>
    </section>
    <section>
    <ul>
    <li>Go to <a href="https://www.eclipse.org/downloads/" target="_blank">https://www.eclipse.org/downloads/</a>.</li>
      <li>Click on the "Download" button on the page.</li>
    <li>Download the correct version for your computer.</li>
    </ul>
    </section>
    <section>
    <Row>
    <Half>
    <ol>
    <li>Open the Eclipse Installer</li>
    <li>Install the "Eclipse IDE for Java Developers"</li>
      <li>Leave the installation path information as is after pressing this option</li>
    <li>Press Install</li>
    <li>Accept the User Agreement</li>
    <li>Once it finishes installing, you may launch it.</li>
    <li>Navigate the workspace to point to your CS111 folder</li>
    </ol>
    </Half>
    <Half>
    <img src={eclipseDownloadImage} alt="Eclipse Download Type" />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Inheritance</p>
    </section>
    <section>
    <p>Time for us to look at another pillar of OOP!</p>
      <p>Inheritance!</p>
    </section>
    <section>
    <p className="text-usf-yellow">What does it mean to inherit something?</p>
    </section>
    <section>
    <p>In code, we can have our code inherit information from another class. This creates a parent-child relationship or a super-sub class relationship</p>
    </section>
    <section>
    <ul>
    <li>Data shared between parent-child class</li>
    <li>Media class -&gt; Movie</li>
    <li>Media class -&gt; TVShow</li>
    <li>Properties in Movie inherited from Media</li>
    <li>Properties in TVShow inherited from Media</li>
    <li>Differences internally, but shared information</li>
    <li>Avoid writing redundant code</li>
    </ul>
    </section>
    <section>
    <ul>
    <li>Base/shared functionality from parent class</li>
    <li>Expanded functionality in child class</li>
    </ul>
    </section>
    <section>
    <Row>
    <div className="flex-col text-[16pt] text-left w-1/3">
    <p>User</p>
    <ul>
    <li>First name</li>
    <li>Last name</li>
    <li>id</li>
    </ul>
    </div>
    <div className="flex-col text-[16pt] text-left w-1/3">
    <p>Student: Inherits User</p>
    <ul>
    <li>First name</li>
    <li>Last name</li>
    <li>id</li>
    <li>Email (w/ dons extension)</li>
    <li>Courses taken</li>
    </ul>
    </div>
    <div className="flex-col text-[16pt] text-left w-1/3">
    <p>Teacher: Inherits User</p>
    <ul>
    <li>First name</li>
    <li>Last name</li>
    <li>id</li>
    <li>Email (w/o dons)</li>
    <li>Courses taught</li>
    </ul>
    </div>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">extends</p>
    </section>
    <section>
    <p>Functionally, we can accomplish this inheritance using the <code>extends</code> keyword.</p>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>class User &#123;</Indent>
    <Indent space={1}>String firstName;</Indent>
    <Indent space={1}>String lastName;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>
    class Student extends User &#123;
    </Indent>
    <Indent space={1}>String id;</Indent>
    <Indent space={1}>// has access to firstName and lastName</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Accessors</p>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Default: visible in subclass</li>
    <li>Protected: visible in subclass</li>
    <li>Public: visible in subclass</li>
    <li>Private: hidden in subclass</li>
    </ul>
    </Half>
    <Half>
    <p>Inherited classes:</p>
    <p>If we want field variables visible, variables can become <code>protected</code> or 'default' meaning no accessor is given.</p>
    </Half>
    </Row>
    </section>
    <section>
    <div className="font-mono text-left text-[20pt]">
    <Indent>public class User &#123;</Indent>
    <Indent space={2}>String id; // visible in subclass</Indent>
    <Indent space={2}>protected String name; // also visible</Indent>
    <Indent space={2}>private String username; // no longer visible</Indent>
    <Indent space={2}>public int numId; // visible to all</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">super</p>
    </section>
    <section>
    <ul>
    <li><code>super</code> keyword: the <code>this</code> for parent classes</li>
    <li>Used like <code>this</code>, but references methods and variables in parent class (with protected/default/public accessors)</li>
    </ul>
    </section>
    <section>
    <Row>
    <HalfCode>
    <Indent>class User &#123;</Indent>
    <Indent space={1}>String firstName;</Indent>
    <Indent space={1}>String lastName;</Indent>
    <Indent space={1}>String email;</Indent>
    <Indent space={1}>public User(String f, String l) &#123;</Indent>
    <Indent space={2}>this.firstName = f;</Indent>
    <Indent space={2}>this.lastName = l;</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>class Student extends User &#123;</Indent>
    <Indent space={1}>String id;</Indent>
    <Indent space={1}>public Student(String f, String l, String id) &#123;</Indent>
    <Indent space={2}>super(f, l); // call User constructor</Indent>
    <Indent space={2}>this.id = id;</Indent>
    <Indent space={2}>super.email = f.charAt(0) + l + "@dons.usfca.edu";</Indent>
    <Indent space={2}>// Updates email in the super class</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">is-a</p>
    </section>
    <section>
    <p>You may have heard the "is-a" relationship</p>
    <div className="text-left">
    <ul>
    <li>Child class "is-a" parent class</li>
    <li>aka the child class is a child of the parent class</li>
    </ul>
    <br />
    <br />
    <ul>
    <li>"has-a" also exists</li>
    <li>Less about inheritance and more about encapsulation</li>
    </ul>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">instanceof</p>
    </section>
    <section>
    <p>
    There are two parts of the <code>instanceof</code> keyword
    </p>
    <ol>
    <li>Checks if an object is an instance of a certain class</li>
      <li>Checks if an object is an instance or inherits a parent class</li>
    </ol>
    <Indent>Student s = new Student("John", "Doe");</Indent>
    <Indent>s instanceof Student; // true</Indent>
    </section>
    <section>
    <p>So the following code would be true, given Student inherits User</p>
    <Indent>Student s = new Student();</Indent>
    <Indent>s instanceof User; // true</Indent>
    </section>
    <section>
    <p className="text-usf-yellow">UML</p>
    </section>
    <section>
    <p>With our UML Class Diagram, inheritance is shown with a pointer arrow pointing from the child class to the parent class.</p>
    </section>
    <section>
    <img src={inheritanceDiagram} alt="UML Diagram for Inheritance" />
    </section>
    <section>
    <p className="text-usf-yellow">Project 3</p>
    </section>
    <section>
    <p className="text-usf-yellow">In Class: Media</p>
    </section>
    <section>
    <p className="text-usf-yellow">Opening in Eclipse</p>
    <ol>
    <li>Clone normally with GitHub Desktop</li>
    <li>Open Eclipse</li>
    <li>Press <strong>Import Project</strong></li>
    <li>Choose <strong>General</strong></li>
    <li>Choose <strong>Projects from Folder or Archive</strong></li>
    <li>Input Source: Point to the Cloned directory</li>
    <li>Press <strong>Finish</strong></li>
    </ol>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Open the <code>Main.java</code> file</li>
    <li>Go to the top and press the <strong>Green Play Button</strong></li>
    <li>If that doesn't work and says <strong>you need to setup the Run Configuration</strong>, look to the right</li>
    </ul>
    </Half>
    <Half>
    <ul>
    <li>If you need to setup the <strong>Run Configuration</strong> follow the below steps</li>
    <li>Go to the top where the <strong>Green Play button</strong> and press the <strong>arrow</strong> next to it, choose <strong>Run Configurations</strong></li>
    <li>Choose <strong>Java Application</strong></li>
    <li>Input the folder for the <strong>Project</strong> and the <code>Main</code> class should be the main file.</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Pushing your code</p>
    <p>For now, push your code through GitHub Desktop as you've been doing thus far.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
