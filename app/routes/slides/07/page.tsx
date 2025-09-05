import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 7: StringBuilder + Arrays";
const agenda: string[] = ["StringBuilder", "Stack v Heap", "Array", "Lab 4"];

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
    <p className="text-usf-yellow">String Concatenation not always good</p>
    <p>As we said on Wednesday, constantly concatenating to Strings isn't ideal. It eds up creating too many new objects in memory.</p>
    <p>So how can we effectively add to a string?</p>
    </section>
    <section>
    <p className="text-usf-yellow">StringBuilder</p>
    </section>
    <section>
    <p className="text-usf-yellow">StringBuilder</p>
    <p>Just like Scanner, this is another "class" we can use. However, unlike Scanner, StringBuilder doesn't have to be imported at the top.</p>
    <p>This is because StringBuilder comes from <code>java.lang</code> system. This means that it's already automatically imported for us, just like how Math is automatically imported for us.</p>
    </section>
    <section>
    <p className="text-usf-yellow">What</p>
    <p>StringBuilder allows us to construct a new String by adding values into a String buffer. Additionally, using a StringBuilder, we can alos remove values from a String.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Why</p>
    <p>Well, it is more memory efficient as each addition doesn't create a new string in memory. Instead, it adds the value into a buffer, that continues to get updated until we call a function to give us the string.</p>
    </section>
    <section>
    <p className="text-usf-yellow">How</p>
    <Row>
    <Half>
    <p>We can create a new StringBuilder using the same format as our Scanner.</p>
    </Half>
    <HalfCode>
    <Indent><span className="text-usf-yellow">StringBuilder s = new StringBuilder();</span></Indent>
    <Indent>s.append("hello");</Indent>
    <Indent>s.append(" world");</Indent>
    <Indent>String str = s.toString();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">How</p>
    <Row>
    <Half>
    <p>We can then call append on the variable containing the StringBuilder.</p>
    <p>This will append a string into the current StringBuilder.</p>
    </Half>
    <HalfCode>
    <Indent>StringBuilder s = new StringBuilder();</Indent>
    <Indent><span className="text-usf-yellow">s.append("hello");</span></Indent>
    <Indent><span className="text-usf-yellow">// s contains "hello"</span></Indent>
    <Indent>s.append(" world");</Indent>
    <Indent>String str = s.toString();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">How</p>
    <Row>
    <Half>
    <p>When we call append again, the StringBuilder will add the new value, but won't create a new String in memory. It'll continue adding until we stop.</p>
    </Half>
    <HalfCode>
    <Indent>StringBuilder s = new StringBuilder();</Indent>
    <Indent>s.append("hello");</Indent>
    <Indent>// s contains "hello"</Indent>
    <Indent><span className="text-usf-yellow">s.append(" world");</span></Indent>
    <Indent><span className="text-usf-yellow">// s contains "hello world"</span></Indent>
    <Indent>String str = s.toString();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">How</p>
    <Row>
    <Half>
    <p>In order to get the string out, we simply call <code>toString</code> on the variable containing the StringBuilder. This gives us the final resulting string!</p>
    </Half>
    <HalfCode>
    <Indent>StringBuilder s = new StringBuilder();</Indent>
    <Indent>s.append("hello");</Indent>
    <Indent>// s contains "hello"</Indent>
    <Indent>s.append(" world");</Indent>
    <Indent>// s contains "hello world"</Indent>
    <Indent><span className="text-usf-yellow">String str = s.toString();</span></Indent>
    <Indent><span className="text-usf-yellow">// Gives us "helo world"</span></Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Removing values (deleteCharAt)</p>
    <Row>
    <Half>
    <p>Let's say we want to remove a value from our StringBuilder.</p>
    <p>We can call <code>deleteCharAt(index)</code> where index is the location of the value we want to remove.</p>
    </Half>
    <HalfCode>
    <Indent>StringBuilder s = new StringBuilder();</Indent>
    <Indent>s.append("hello world!");</Indent>
    <Indent>s.deleteCharAt(s.length() - 1);</Indent>
    <Indent>s.toString(); // gives us "hello world"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Removing values (delete)</p>
    <Row>
    <Half>
    <p>Alternatively, we can also call the <code>delete(startIndex, endIndex)</code> to delete a substring from our StringBuilder.</p>
    </Half>
    <HalfCode>
    <Indent>StringBuilder s = new StringBuilder();</Indent>
    <Indent>s.append("hello world!");</Indent>
    <Indent>s.delete(5, 11); // remvoe "world"</Indent>
    <Indent>s.toString(); // gives us "hello"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Getting the String</p>
    <Row>
    <Half>
    <p>When we want to get the string from the StringBuilder, we can simply call the <code>toString()</code> function!</p>
    </Half>
    <HalfCode>
    <Indent>StringBuilder s = new StringBuilder();</Indent>
    <Indent>s.append("hello");</Indent>
    <Indent>s.append(" world");</Indent>
    <Indent>String str = s.toString(); // gives us "hello world"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">StringBuffer?</p>
    <p>If you look up StringBuilder, you may also find <code>StringBuffer</code>.</p>
      <p>For all intensive purposes of this class, they are the same.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Memory Access</p>
    </section>
    <section>
    <p className="text-usf-yellow">Memory?</p>
    <p>You may have noticed that I've mentioned memory a lot in class...</p>
    <p>I'm not just bringing it up to be annoying, it is an important topic to talk about when we think about our programs.</p>
    </section>
    <section>
    <p>The size of a data type matters to how we design our programs. Understanding that some types are bigger than others means we can create our programs to cater to these needs better.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Stack and Heap</p>
    </section>
    <section>
    <p className="text-usf-yellow">Stack and Heap</p>
    <p>Our memory is split into two main concepts called the <strong>Stack</strong> and <strong>Heap</strong></p>
    </section>
    <section>
    <p className="text-usf-yellow">Differences</p>
    <Row>
    <Half>
    <p>Stack</p>
    <ul>
    {["Contains methods/function calls", "Local method primitive values/variables stored", "References to Objects used by methods/functions", "Deallocated/freed space when methods/functions are done", "Variables in Stack are freed once method is done"].map((diff: string, i: number) => <li key={i}>{diff}</li>)}
    </ul>
    </Half>
    <Half>
    <p>Heap</p>
    <ul>
    {["Contains Objects", "References to location of Objects in Heap, sent to Stack", "Garbage Collected to free memory when objects are out of scope/no longer in use", "Objects created in Heap exists throughout the program globally until garbage collected"].map((diff: string, i: number) => <li key={i}>{diff}</li>)}
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Garbage Collection?</p>
    <ul>
    <li>Automatic process done by the JVM to clear memory from the Heap</li>
    <li>Common in some other languages such as Go, JavaScript, Python</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Array</p>
    </section>
    <section>
    <p className="text-usf-yellow">Array?</p>
    <p>In Python, you should've learned about Lists. The data structure that uses [] and allows you to use indexes, add, and remove values from it.</p>
    <p>In Java, we have a similar structure called an Array. This also uses [] and we can index it, but we cannot add to it nor remove values from it. We can only get and set values in it.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Creating an array</p>
    <Row>
    <Half>
    <p>We can create an array using the following notion.</p>
    <p>Similar to any regular variable, we must give it a data type with square brackets after the type.</p>
    <p>We will set it equal to a <code>new</code> array. The <code>&lt;data type&gt;</code> is the same in both cases. In this case, we must give it a size.</p>
    </Half>
    <HalfCode>
    <Indent>&lt;data type&gt;[] variable = new &lt;data type&gt;[size];</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">int array example</p>
    <Row>
    <Half>
    <p>This will initialize an integer array with a size of 10 elements</p>
    </Half>
    <HalfCode>
    <Indent>int[] array = new int[10];</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">int array example (pre-set)</p>
    <Row>
    <Half>
    <p>Alternatively, we can set the values in the array without setting the size.</p>
    <p>The example to the right will initialize an array with the values of 1-6</p>
    </Half>
    <HalfCode>
    <Indent>int[] array = &#123; 1, 2, 3, 4, 5, 6 &#125;;</Indent>
    </HalfCode> 
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Getting values</p>
    <Row>
    <Half>
    <p>Alternatively, we can set the values in the array without setting the size.</p>
    <p>The example to the right will initialize an array with the values of 1-6</p>
    </Half>
    <HalfCode>
    <Indent>int[] array = &#123; 1, 2, 3, 4, 5, 6 &#125;;</Indent>
    </HalfCode> 
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Getting values</p>
    <Row>
    <Half>
    <p>We can get values using square brackets and indexes, just like we can in Python.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 4, 9, 16, 25 &#125;;</Indent>
    <Indent>System.out.println(arr[0]); // gives us 1</Indent>
    <Indent>System.out.println(arr[4]); // gives us 25</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Setting values</p>
    <Row>
    <Half>
    <p>Similar to how we can do it in Python, we can set values using the index.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 4, 9, 16, 25 &#125;;</Indent>
    <Indent>arr[3] = 4;</Indent>
    <Indent>System.out.println(arr[3]); // gives u 4</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Types?</p>
    <Row>
    <Half>
    <p>One of the major differences between a Python list and a Java array is that a java array must contain a single type. Python lists can contain multiple types and values, but a Java array must keep the same type.</p>
    </Half>
    <HalfCode>
    <Indent>int arr[] = new int[10];</Indent>
    <Indent>arr[0] = 1;</Indent>
    <Indent>arr[1] = "3"; // not allowed!</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Length</p>
    <Row>
    <Half>
    <p>We can also get the length of an array using the length property.</p>
    <p>This one doesn't use parentheses since it isn't a function, but rather a property of arrays.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 2, 3, 4, 5, 6 &#125;;</Indent>
    <Indent>System.out.println(arr.length); // Gives us 6</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Iterating through an array</p>
    <Row>
    <Half>
    <p>We can use a <code>for loop</code> to iterate through an array using the indexes of the array and the length of the array.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = new int[11];</Indent>
    <Indent>for(int i = 0; i &lt; arr.length; i++) &#123;</Indent>
    <Indent space={1}>arr[i] = i * i;</Indent>
    <Indent>&#125;</Indent>
    <p>// Stores the squares into the array</p>
    <p>// 0 1 4 9 16 25 36 49 64 81 100</p>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">For each/enhanced for loop</p>
    <Row>
    <Half>
    <p>We have another way of looping through a collection using a <code>for loop</code>. It looks a little different, but it's called a <code>for-each</code> or a <code>enhanced for loop</code>.</p>
     <p>Different notation and uses a colon.</p> 
   <p>The left is the type of a single value in the collection. The right of the colon is the collection itself.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 4, 9, 16, 25, 36 &#125;;</Indent>
    <Indent>for(int i : arr) &#123;</Indent>
    <Indent space={1}>System.out.print(i + " ");</Indent>
    <Indent>&#125;</Indent>
    <p>// Gives 1 4 9  16 25 36</p>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">For each/enhanced for loop</p>
    <Row>
    <Half>
    <p>This one actually uses colons. The regular for loop uses semi-colons.</p>
    <p><strong>be careful/mindful about the difference!</strong></p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 4, 9, 16, 25, 36 &#125;;</Indent>
    <Indent>for(int i : arr) &#123;</Indent>
    <Indent space={1}>System.out.print(i + " ");</Indent>
    <Indent>&#125;</Indent>
    <p>// Gives 1 4 9  16 25 36</p>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">When?</p>
    <Row>
    <Half>
    <p>Regular for loop:</p>
      <ul>
      <li>Index is necessary</li>
      <li>Changing array with index</li>
      </ul>
    </Half>
    <Half>
    <p>Enhanced for loop</p>
    <ul>
    <li>Index not necessary, just need the value</li>
    <li>Only need to read values from a collection</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 4</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
