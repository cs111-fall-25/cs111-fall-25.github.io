import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 24: BlackJack Lab";
const agenda: string[] = ["Feedback", "List Recap", "Lab 13: BlackJack"];

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
      <p className="text-usf-yellow">Teaching Effectiveness Survey</p>
    </section>
    <section>
    <p className="text-usf-yellow">ArrayList Recap</p>
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
    <p className="text-usf-yellow">LinkedList Recap</p>
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
    <p className="text-usf-yellow">Functions</p>
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
    <p className="text-usf-yellow">Final Project</p>
    </section>
    <section>
    <p className="text-usf-yellow">Final Project</p>
    <p>Just Kidding. I'm dropping it.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Lab 13: BlackJack</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
