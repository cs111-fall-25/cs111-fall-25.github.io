import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 16: File IO and UML";
const agenda: string[] = ["File I/O", "File Class", "Scanner", "BufferedReader", "UML", "Lab 8", "Lab 9"];

/* TODO 
  * Slides around bufferedreader need to created from scratch
*/

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
    <p className="text-usf-yellow">File I/O</p>
    </section>
    <section>
    <p>Similar to Python, we can work with Files! There are multiple ways of doing this, but we will make use of Scanner and a new idea called a BufferedReader!</p>
    </section>
    <section>
    <p className="text-usf-yellow">File class</p>
    </section>
    <section>
    <p>First and foremost, there is a class called <code>File</code> that we can use.</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>This file class comes from <code>java.io</code></p>
    <p>Therefore, we must import it from <code>java.io</code></p>
    <p>After this, we can create a new <code>File</code> object, calling the constructor with a <strong>file path</strong> or <strong>file name</strong>.</p>
    </Half>
    <HalfCode>
    <Indent>import java.io.File;</Indent>
    <Indent>File f = new File(&lt;file path/file name&gt;);</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>For example, the code to the right will open the file <code>names.txt</code> into the object <code>f</code></p>
    </Half>
    <HalfCode>
    <Indent>import java.io.File;</Indent>
    <Indent>File f = new File("names.txt");</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Scanner</p>
    </section>
    <section>
    <p>Now, we can call the constructor from Scanner that takes in a file and reads it out!</p>
    </section>
    <section>
    <Row>
    <Half>
    <p>By passing the file object into the Scanner, we can read the contents of the file.</p>
    </Half>
    <HalfCode>
    <Indent>File file = new File("names.txt");</Indent>
    <Indent>Scanner s = new Scanner(file);</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>We can do this with two methods from the Scanner.</p>
    <p><strong><code>hasNextLine()</code></strong> returns <code>true</code> if there's a next line to read.</p>
      <p><strong><code>nextLine()</code></strong> returns the next line.</p>
    </Half>
    <HalfCode>
    <Indent>File file = new File("names.txt");</Indent>
    <Indent>Scanner s = new Scanner(file);</Indent>
    <Indent>while(s.hasNextLine() == true) &#123;</Indent>
    <Indent space={1}>String line = s.nextLine();</Indent>
    <Indent space={1}>System.out.println(line);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>This code will keep reading each line out of the file until there's no next line to read.</p>
    </Half>
    <HalfCode>
    <Indent>File file = new File("names.txt");</Indent>
    <Indent>Scanner s = new Scanner(file);</Indent>
    <Indent>while(s.hasNextLine() == true) &#123;</Indent>
    <Indent space={1}>String line = s.nextLine();</Indent>
    <Indent space={1}>System.out.println(line);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Buffered Reader</p>
    </section>
    <section>
    <p>With a <code>BufferedReader</code>, the contents of a file are read into a buffer (partially rather than the whole document at once), leading to a more efficient way to read a file.</p>
    </section>
    <section>
    <Row>
    <Half>With a BufferedReader, we start by reading the file using a <code>FileReader</code>. We then take the object and pass that into our <code>BufferedReader</code> constructor. We can then read the contents from the <code>reader</code> object.</Half>
    <HalfCode>
    <Indent>FileReader file = new FileReader(filename);</Indent>
    <Indent>BufferedReader reader = new BufferedReader(file);</Indent>
    <Indent>System.out.println(reader.readLine());</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Because the BufferedReader can throw an <code>IOException</code>, we must wrap the reader in a <code>try-catch</code></p>
    </Half>
    <HalfCode>
    <Indent>try &#123;</Indent>
    <Indent space={1}>FileReader file = new FileReader(filename);</Indent>
    <Indent space={1}>BufferedReader reader = new BufferedReader(file);</Indent>
    <Indent>&#125; catch(IOException e) &#123;</Indent>
    <Indent space={1}>System.out.println("File not found!");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>We can then read the line by setting the value in a while loop and checking if it isn't null.</p>
    </Half>
    <HalfCode>
    <Indent>try &#123;</Indent>
    <Indent space={1}>FileReader file = new FileReader(filename);</Indent>
    <Indent space={1}>BufferedReader reader = new BufferedReader(file);</Indent>
    <Indent space={1}>StringBuilder contents = new StringBuilder();</Indent>
    <Indent space={1}>String line = "";</Indent>
    <Indent space={1}>while(line != null) &#123;</Indent>
    <Indent space={2}>line = reader.readLine();</Indent>
    <Indent space={2}>if (line == null) &#123;</Indent>
    <Indent space={3}>break;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>contents.append(line);</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent>&#125; catch(IOException e) &#123;</Indent>
    <Indent space={1}>System.out.println("File not found!");</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">UML</p>
    </section>
    <section>
    <p>Let's pivot back to Pseudocode, the main topic of this week.</p>
    </section>
    <section>
    <p>We have another form of pseudocode to look at called UML, or Unified Modeling Language. This is a standardized modeling language that allows us to model our code in a universal way.</p>
    </section>
    <section>
    <p>There are different types of UML diagrams.</p>
    <p>We have:</p>
    <ul>
    <li><strong>Class Diagrams</strong></li>
    <li>Composite Structure Diagrams</li>
    <li>Object Diagrams</li>
    <li>Component Diagrams</li>
    <li>Deployment Diagrams</li>
    <li>Package Diagrams</li>
    <li>etc.,</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Class Diagram</p>
    <p>The main one we will use is the Class Diagram</p>
    </section>
    <section>
    <p className="text-usf-yellow">Class Diagram Structure</p>
    <table className="w-full text-[16pt]">
    <tr className="border border-1 border-gray-200 border-solid">
    <td className="text-center"><strong>Class Name</strong></td>
    </tr>
    <tr className="border border-1 border-gray-200 border-solid p-5">
    <td>
    <code>+ public field variable : type</code><br />
    <code>- private field variable : type</code><br />
    <code>~ default field variable : type</code><br />
    <code># protected field variable : type</code>
    </td>
    </tr>
    <tr className="border border-1 border-gray-200 border-solid p-5">
    <td className="p-5">
    <code>+ public method(params: types): return type</code><br />
    <code>- private method(params: types): return type</code><br />
    <u><code>+ public static function(params: types): return type</code></u><br />
    </td>
    </tr>
    </table>
    </section>
    <section>
    <p className="text-usf-yellow">Class Diagram Structure</p>
    <table className="w-full text-[16pt]">
    <tr className="border border-1 border-gray-200 border-solid">
    <td className="text-center"><strong>Student</strong></td>
    </tr>
    <tr className="border border-1 border-gray-200 border-solid p-5">
    <td>
    <code>- name: String</code><br />
    <code>- email: String</code><br />
    <code>- id: String</code>
    </td>
    </tr>
    <tr className="border border-1 border-gray-200 border-solid p-5">
    <td className="p-5">
    <code>+ getName(): String</code><br />
    <code>+ setName(name: String): void</code><br />
    <code>+ getId(): String</code><br />
    <code>+ setId(id: String): void</code><br />
    <code>- generateEmail(): String</code><br />
    <u><code>+ generateEmail(id: String): String</code></u><br />
    </td>
    </tr>
    </table>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 8</p>
    </section>
    <section>
    <p>
    This lab will run differently. There are two parts to this lab. The first will require you to work with a partner or a trio to solve a problem together.
      </p>
    <p>The second part lies in Lab 9, where you'll code out your implementation yourself.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 9</p>
    </section>
    <section>
    <p>Once you finish the parts for Lab 8 with your partner/team, work on Lab 9 individually. You will implement what you proposed in Lab 8. If there are elements to it that you don't think you can do, that's fine. Just do the best you can, or pivot to an implementation that you're capable of doing.</p>
    <p>Everyone should work on this part themselves.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
