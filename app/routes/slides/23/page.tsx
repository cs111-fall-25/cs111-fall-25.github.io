import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 23: Lists";
const agenda: string[] = ["Lists", "ArrayList", "LinkedList", "Quiz 10", "In Class"];

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
    <p className="text-usf-yellow">Lists</p>
    </section>
    <section>
    <ul>
    <li>Next type of collection!</li>
    <li>Two types:</li>
    <ul>
    <li>ArrayList</li>
    <li>LinkedList</li>
    </ul>
    <li>Functionally the same</li>
    <li>Different implementations</li>
    <li>Both indexable, addable, removable, and iterable</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">ArrayList</p>
    </section>
    <section>
    <ul>
    <li>Array in the background</li>
    <li>Automatically expands array when full</li>
    <li>Quick to read and access data</li>
    <li>Slower to remove or insert data in middle due to data shifts</li>
    </ul>
    </section>
    <section>
    <Indent>ArrayList&lt;E&gt; list = new ArrayList&lt;&gt;();</Indent>
    <Indent>ArrayList&lt;Integer&gt; nums = new ArrayList&lt;&gt;();</Indent>
    </section>
    <section>
    <p className="text-usf-yellow">LinkedList</p>
    </section>
    <section>
    <ul>
    <li>Head and Tail</li>
    <li>Nodes with next and/or previous pointers connecting nodes</li>
    <li>Boxes with chains or ropes connecting the boxes to each other; one connection in front and one behind per box.</li>
    <li>Quick to add at start or end, quick to insert or remove values</li>
    <li>Slow to read data if data is central due to traversal</li>
    </ul>
    </section>
    <section>
    <Indent>LinkedList&lt;E&gt; list = new LinkedList&lt;&gt;();</Indent>
    <Indent>LinkedList&lt;Integer&gt; nums = new LinkedList&lt;&gt;();</Indent>
    </section>
    <section>
    <p className="text-usf-yellow">Functions</p>
    </section>
    <section>
    <p>LinkedLists and ArrayLists have many functions in common</p>
    </section>
    <section>
    <p>Both can do the following</p>
    <Row>
    <Half>
    <ul>
    <li>add(E element)</li>
    <ul>
    <li>Adds an element to the end of the list</li>
    </ul>
    <li>add(int index, E element)</li>
    <ul>
    <li>Adds an element at the given index (shifts other elements)</li>
    </ul>
    <li>get(int index)</li>
    <ul>
    <li>Gets the element at the index</li>
    </ul>
    </ul>
    </Half>
    <Half>
    <ul>
    <li>remove(int index)</li>
    <ul><li>Removes the element at the index</li></ul>
    <li>remove(E element)</li>
    <ul><li>Removes the element given the element itself</li></ul>
    <li>set(int index, E element)</li>
    <ul><li>Sets the element at the given index</li></ul>
    <li>size()</li>
    <ul><li>Gets the size of the List / number of elements in the list</li></ul>
    </ul>
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Using an enhanced for-loop/for each loop on either List will give you each element</p>
    </Half>
    <HalfCode>
    <Indent>LinkedList&lt;String&gt; list = new LinkedList&lt;&gt;();</Indent>
    <Indent>for(String s : list) &#123;</Indent>
    <Indent space={1}>// gives each string in the list</Indent>
    <Indent>&#125;</Indent>
    <Indent>// works the same with an ArrayList</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p>Come in for the last quiz!</p>
    <p>You'll leave after the quiz, make sure you come back on time for your time slot.</p>
    <p>Work on the Collections 2 In-Class in the mean time. This will be posted before class.</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
