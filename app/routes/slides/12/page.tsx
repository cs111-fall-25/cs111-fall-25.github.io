import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 12: Midterm Review";
const agenda: string[] = ["Variables", "Primitive Data Types", "Casting", "Random", "Binary", "Conditional Statements", "While Loops", "For Loops", "Strings", "Arrays", "2D Arrays", "Static Functions"];

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
    <p className='text-usf-yellow'>Variables</p>
    </section>
    <section>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
