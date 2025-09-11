import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/java.pdf';

const title: string = "Day 8: 2D Arrays";
const agenda: string[] = ["Quiz 3", "Array Review", "2D Arrays", "In class"];

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
    <p className="text-usf-yellow">Quiz 3</p>
    </section>
    <section>
    <p className="text-usf-yellow">Array Review</p>
    </section>
    <section>
    <p className="text-usf-yellow">Initializing Arrays</p>
    <Row>
    <Half>
    <p>Reminder, in order to initialize an array, we must use the following syntax:</p>
    </Half>
    <HalfCode>
    <Indent>&lt;type&gt;[] &lt;name&gt; = new &lt;type&gt;[size];</Indent>
    <Indent>&lt;type&gt;[] &lt;name&gt; = &#123; &lt; vals &gt; &#125;;</Indent>
    <p>For example</p>
      <Indent>int[] arr = new int[10];</Indent>
    <Indent>int[] arr = &#123; 1, 2, 3, 4, 5 &#125;;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Get/Set</p>
    <Row>
    <Half>
    <p>With an array, we can only get and set values. We cannot add or remove values.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = new int[10];</Indent>
    <Indent>arr[0] = 1;</Indent>
    <Indent>arr[1] = 3;</Indent>
    <Indent>System.out.println(arr[0]); // 1</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Length</p>
    <Row>
    <Half>
    <p>We can use the <code>.length</code> property of arrays to get their length.</p>
    <p>This is useful for iterating through an array.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = new int[10];</Indent>
    <Indent>arr.length; // gives 10</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Iteration</p>
    <Row>
    <HalfCode>
    <Indent>int[] arr = new int[10];</Indent>
    <Indent>for(int i = 0; i &lt; arr.length; i++) &#123;</Indent>
    <Indent space={1}>System.out.println(arr[i]);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    <HalfCode>
    <Indent>int[] arr = new int[10];</Indent>
    <Indent>for(int val : arr) &#123;</Indent>
    <Indent space={1}>System.out.println(val);</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section><p className="text-usf-yellow">2D Array</p></section>
    <section>What if we want an array with a row and a column?</section>
    <section>
    <Row>
    <Half>
    <p>We can use a 2D Array!</p>
    <p>We set the number of rows and number of columns.</p>
    <p>In the case to the right, there are 5 rows and 5 columns.</p>
    </Half>
    <HalfCode>
    <Indent>int[][] nums = new int[5][5];</Indent>
    <Indent>nums[0][0] = 1;</Indent>
    <Indent>System.out.println(nums[0][0]); // 1</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>We can still only get and set values though!</p>
    </Half>
    <HalfCode>
    <Indent>int[][] nums = new int[5][5];</Indent>
    <Indent>nums[0][0] = 1;</Indent>
    <Indent>System.out.println(nums[0][0]); // 1</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>What about iterating through it?</p>
    </Half>
    <HalfCode>
    <Indent>int[][] nums = new int[5][5];</Indent>
    <Indent>for(int i = 0; i &lt; nums.length; i++) &#123;</Indent>
    <Indent space={1}>for(int j = 0; j &lt; nums[i].length; j++) &#123;</Indent>
    <Indent space={2}>System.out.print(nums[i][j] + " ");</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>System.out.println();</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <Row>
    <Half>
    <p>Or alternatively:</p>
    </Half>
    <HalfCode>
    <Indent>int[][] nums = new int[5][5];</Indent>
    <Indent>for(int[] rows : nums) &#123;</Indent>
    <Indent space={1}>for(int col : rows) &#123;</Indent>
    <Indent space={2}>System.out.print(col + " ");</Indent>
    <Indent space={1}>&#125;</Indent>
    <Indent space={1}>System.out.println();</Indent>
    <Indent>&#125;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className='text-usf-yellow'>Initializing with preset values</p>
    <Row>
    <Half>
    <p>We can also initialize our 2D Array with pre-set values using the notation to the right.</p>
    </Half>
    <HalfCode>
    <Indent>int[][] nums = &#123; &#123; 1, 2, 3 &#125;, &#123; 4, 5, 6 &#125; &#125;;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">2D Array Practice</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
