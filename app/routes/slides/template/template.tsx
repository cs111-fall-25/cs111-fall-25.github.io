import { Slides, SlideNavbar } from '@/components';
import { type ReactNode, type ReactElement } from 'react';

import slidesPdf from '@/static/slides/java.pdf';

const Row = ({ children }: {children: ReactNode}): ReactNode => <div className="flex flex-row text-[16pt] text-left space-x-10 space-around">{children}</div>;

const Half = ({ children }: { children: ReactNode }): ReactNode => <div className="w-1/2">{children}</div>;

const title: string = "Day N: Name";
const agenda: string[] = ["Variables", "Primitive Data Types", "Naming Conventions", "Brief Intro to Strings", "Output", "Lab 1: Printing Data"]

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

    </section>
    </Slides>
    </>
  )
}

export default Slide;
