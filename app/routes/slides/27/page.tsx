import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';
import linearSearchPseudocode from './img/pseudocode/Linear Search.png';
import binarySearchPseudocode from './img/pseudocode/Binary Search.png';
import bubbleSortPseudocode from './img/pseudocode/Bubble Sort.png';
import selectionSortPseudocode from './img/pseudocode/Selection Sort.png';
import linearSearchFound from './img/algorithms/Linear Search (found).png';
import linearSearchNotFound from './img/algorithms/Linear Search (not found).png';
import binarySearchFoundLeft from './img/algorithms/Binary Search (found-left).png';
import binarySearchFoundRight from './img/algorithms/Binary Search (found-right).png';
import binarySearchNotFound from './img/algorithms/Binary Search (not found).png';
import selectionSortTop from './img/algorithms/Selection Sort (top).png';
import selectionSortBottom from './img/algorithms/Selection Sort (bottom).png';
import bubbleSortTop from './img/algorithms/Bubble Sort (top).png';
import bubbleSortBottom from './img/algorithms/Bubble Sort (bottom).png';

const title: string = "Day 27: Algorithms";
const agenda: string[] = ["Algorithms", "Search", "Sort", "Inclass"];

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
    <p className="text-usf-yellow">Algorithms</p>
    </section>
    <section>
    <p className="text-usf-yellow">What is an algorithm?</p>
    </section>
    <section>
    <ul>
    <li>Set of instructions to complete a specified task</li>
    <li>All code written so far</li>
    <li>Instructions to complete a task</li>
    <li>Help solve some problem, compute some calculation</li>
    <li>Simple, complex, common, niche</li>
    <li>Replicable regardless of programming language</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Examples</p>
    <ul>
    <li><strong>Searching Algorithms</strong></li>
    <li><strong>Sorting Algorithms</strong></li>
    <li>Recursive, Backtracking Algorithms</li>
    <li>Data Structure</li>
    <li>String Algorithms</li>
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Search</p>
    </section>
    <section>
    <p className="text-usf-yellow">Sequential/Linear Search</p>
    </section>
    <section>
    <p>Searches a collection from left to right</p>
    </section>
    <section>
    <img src={linearSearchPseudocode} alt="Pseudocode for Linear Search" width="100%"/>
    </section>
    <section>
    <Row>
    <Half>
    <p>Linear Search: Found Values</p>
    </Half>
    <Half>
    <img src={linearSearchFound} alt="Linear Search found values" height="100%" />
    </Half>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Linear Search: Not Found Values</p>
    </Half>
    <Half>
    <img src={linearSearchNotFound} alt="Linear Search not found values"  style={{width: "50%"}} />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Binary Search</p>
    </section>
    <section>
    <ul>
    <li>Searches a sorted collection</li>
    <li>Splits the index in half</li>
    <li>Keeps checking the values</li>
    </ul>
    </section>
    <section>
    <div className="flex-row flex justify-center">
    <img src={binarySearchPseudocode} alt="Pseudocode of Binary Search" style={{width: "42%"}}/>
    </div>
    </section>
    <section>
    <p>Binary Search: Left found</p>
    <div className="justify-center flex flex-row">
    <img src={binarySearchFoundLeft} alt="Found left: Binary Search" style={{width: "50%"}} />
    </div>
    </section>
    <section>
    <p>Binary Search: Right found</p>
    <div className="justify-center flex flex-row">
    <img src={binarySearchFoundRight} alt="Found right: Binary Search" style={{width: "50%"}} />
    </div>
    </section>
    <section>
    <p>Binary Search: not found</p>
    <div className="justify-center flex flex-row">
    <img src={binarySearchNotFound} alt="Not found: Binary Search" style={{width: "40%"}} />
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Sort</p>
    </section>
    <section>
    <p className="text-usf-yellow">Selection Sort</p>
    </section>
    <section>
    <ul>
    <li>Sort by smallest to largest</li>
    <li>Keep placing smallest value in correct spots</li>
    <li>Continue until list is sorted by placing smallest value correctly</li>
    <li>Minimum correct first</li>
    <li>Keep swapping smaller values to the left</li>
    </ul>
    </section>
    <section>
    <div className="flex flex-row justify-center">
    <img src={selectionSortPseudocode} alt="Pseudocode for Selection Sort" className="w-1/2"/>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Selection Sort</p>
    <Row>
    <Half>
    <img src={selectionSortTop} alt="Left side of Selection sort" />
    </Half>
    <Half>
    <img src={selectionSortBottom} alt="Right side of Selection sort" />
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Bubble Sort</p>
    </section>
    <section>
    <ul>
    <li>Sort by placing largest value in the correct spots</li>
    <li>Compare adjacent elements, swapping them</li>
    <li>Get out maximum first, keep placing largest value in the right place</li>
    <li>Effectively moving larger values to the right.</li>
    </ul>
    </section>
    <section>
    <div className="flex flex-row justify-center">
    <img src={bubbleSortPseudocode} alt="Pseudocode for Bubble Sort" className="w-5/8"/>
    </div>
    </section>
    <section>
    <Row>
    <Half>
    <img src={bubbleSortTop} alt="Bubble Sort left" className="w-3/4"/>
    </Half>
    <Half>
    <img src={bubbleSortBottom} alt="Bubble Sort right" className="w-3/4"/>
    </Half>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">In Class: Algorithms</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
