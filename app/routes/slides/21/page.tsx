import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 21: HashSet/HashMap";
const agenda: string[] = ["Quiz 9", "Java Data Structures", "HashSet", "Wrapper Types", "HashMap", "Inclass"];

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
    <p className="text-usf-yellow">Quiz 9</p>
    </section>
    <section>
    <p className="text-usf-yellow">Java Data Structures</p>
    </section>
    <section>
    <ul>
    <li>Set</li>
    <ul>
    <li><strong>HashSet</strong></li>
    <li>TreeSet</li>
    </ul>
    <li>Map</li>
    <ul>
    <li><strong>HashMap</strong></li>
    <li>TreeMap</li>
    </ul>
    <li>List</li>
    <ul>
    <li>ArrayList</li>
    <li>LinkedList</li>
    </ul>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">HashSet</p>
    </section>
    <section>
    <p className="text-usf-yellow">HashSet</p>
    <ul>
    <li>Most basic data structure</li>
    <li>A Set</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">What is a Set?</p>
    </section>
    <section>
    <p className="text-usf-yellow">Set</p>
    <ul>
    <li>Unordered</li>
    <li>Unique</li>
    <li>Data structure</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">HashSet</p>
    <ul>
    <li>Add</li>
    <li>Remove</li>
    <li>Contains</li>
    </ul>
    </section>
    <section>
    <ul>
    <li>Get all unique values in another collection</li>
    <li>Print out <code>HashSet</code></li>
    <li>Use a <code>for-each</code>/<code>enhanced for loop</code> to iterate the values inside.</li>
    </ul>
    </section>
    <section>
    <ul>
    <li>Cannot be indexed</li>
    <li>No <code>get</code> function/method</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Set up</p>
    <Row>
    <Half>
    <p>Here's the basic outline of creating a new HashSet</p>
    </Half>
    <HalfCode>
    <Indent>import java.util.HashSet;</Indent>
    <Indent>HashSet&lt;T&gt; set = new HashSet&lt;T&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Set up</p>
    <Row>
    <Half>
    <p>What is the &lt;T&gt;?</p>
    </Half>
    <HalfCode>
    <Indent>import java.util.HashSet;</Indent>
    <Indent>HashSet&lt;T&gt; set = new HashSet&lt;T&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Set up</p>
    <Row>
    <Half>
    <ul>
    <li>Define the type of data inside of the HashSet</li>
    <li>T is called a Generic</li>
    <li>Generics should come in in 112 and 245</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>import java.util.HashSet;</Indent>
    <Indent>HashSet&lt;T&gt; set = new HashSet&lt;T&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Set up</p>
    <Row>
    <Half>
    <ul>
    <li>Set of Integers</li>
    <li>Use Wrapper class</li>
    <li>Generics cannot be primitives</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>import java.util.HashSet;</Indent>
    <Indent>HashSet&lt;Integer&gt; nums = new HashSet&lt;Integer&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Set up</p>
    <Row>
    <Half>
    <ul>
    <li>Set of String</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>import java.util.HashSet;</Indent>
    <Indent>HashSet&lt;String&gt; names = new HashSet&lt;String&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Wrapper Classes?</p>
    </section>
    <section>
    <ul>
    <li>Object types that wrap on top of primitive types</li>
    <li>Useful when using Generics</li>
    </ul>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Capitalized and spelled out version of primitives</li>
    </ul>
    </Half>
    <Half>
    <ul>
    <li>int &#8594; Integer</li>
    <li>float &#8594; Float</li>
    <li>double &#8594; Double</li>
    <li>char &#8594; Character</li>
    <li>boolean &#8594; Boolean</li>
    <li>byte &#8594; Byte</li>
    <li>short &#8594; Short</li>
    <li>long &#8594; Long</li>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>HashSet of Characters</p>
    </Half>
    <HalfCode>
    <Indent>HashSet&lt;Character&gt; s = new HashSet&lt;Character&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>In newer versions of Java, you don't need to redeclare the type within the &lt;&gt; on the right, since it can assume the type</p>
    </Half>
    <HalfCode>
    <Indent>HashSet&lt;Character&gt; s = new HashSet&lt;Character&gt;();</Indent>
    <Indent>OR</Indent>
    <Indent>HashSet&lt;Character&gt; s = new HashSet&lt;&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Adding</p>
    <Row>
    <Half>
    <p>How do we add a value?</p>
    </Half>
    <HalfCode>
    <Indent>HashSet&lt;String&gt; s = new HashSet&lt;&gt;();</Indent>
    <Indent>s.add("hello");</Indent>
    <Indent>s.add("hello");</Indent>
    <Indent>s.add("world");</Indent>
    <Indent>System.out.println(s); &#8594; ["world", "hello"]</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Iterate</p>
    <Row>
    <Half>
    <p>Use a for-each/enhanced for-loop to iterate through Hash Set</p>
    </Half>
    <HalfCode>
    <Indent>HashSet&lt;String&gt; s = new HashSet&lt;&gt;();</Indent>
    <Indent>s.add("hello");</Indent>
    <Indent>s.add("hello");</Indent>
    <Indent>s.add("world");</Indent>
    <Indent>s.add("plants");</Indent>
    <Indent>for(String name : s) &#123;</Indent>
    <Indent space={1}>System.out.println(name);</Indent>
    <Indent>&#125;</Indent>
    <Indent>// hello</Indent>
    <Indent>// world</Indent>
    <Indent>// plants</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">HashMap</p>
    </section>
    <section>
    <ul>
    <li>Python Dictionary</li>
    <li>Key-value paired</li>
    <li>Lookup Key, Paired Value</li>
    <li>Think real-life dictionary, table of contents, address book/phone book/contacts, user id to user account pairing, etc.,</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">HashMap Object</p>
    <Indent>HashMap&lt;K,V&gt; map = new HashMap&lt;K,V&gt;();</Indent>
    <p>OR</p>
    <Indent>HashMap&lt;K,V&gt; map = new HashMap&lt;&gt;();</Indent>
    </section>
    <section>
    <Row>
    <Half>
    <p>The <code>key</code> of count are Strings and <code>value</code> are the occurrences.</p>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Get values</li>
    <li>Put values</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.get("word"); // Gives us 1</Indent>
    <Indent>count.get("hello"); // Gives null</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>If value already there, put replaces</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.put("word", 3); // replaces "word":3 into HashMap</Indent>
    <Indent>count.get("word"); // Gives us 3</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Updating values</li>
    <li>Use put and get together</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.put("word", count.get("word") + 1); // stores "word":2 into HashMap</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Get or Default</li>
    <li>If key not present, instead of null, return a default value</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.getOrDefault("hello", 0); // gives 0 instead of null</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>check if key in map</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.containsKey("word"); // true</Indent>
    <Indent>count.containsKey("hello"); // false</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Keys are unique</li>
    <li>HashMaps use HashSet to store keys</li>
    <li>keySet gives keys to iterate through</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.put("hello", 2); // places "hello":2 into HashMap</Indent>
    <Indent>count.keySet() &#8594; ["hello", "word"]</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <ul>
    <li>Key value pairs can be removed</li>
    </ul>
    </Half>
    <HalfCode>
    <Indent>HashMap&lt;String, Integer&gt; count = new HashMap&lt;&gt;();</Indent>
    <Indent>count.put("word", 1); // places "word":1 into HashMap</Indent>
    <Indent>count.put("hello", 2); // places "hello":2 into HashMap</Indent>
    <Indent>count.remove("hello");</Indent>
    <Indent>count &#8594; &#123; "word": 1 &#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">In Class: Collections 1: String Analysis</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
