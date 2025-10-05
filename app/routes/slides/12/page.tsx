import { Slides, SlideNavbar } from '@/components';
import { type ReactElement } from 'react';
import { Row, Half, HalfCode, Indent } from '../components';

import slidesPdf from '@/static/slides/midterm-review.pdf';
import decimalBinary1 from './img/Decimal to Binary 1.jpg';
import decimalBinary2 from './img/Decimal to Binary 2.jpg';

const title: string = "Day 12: Midterm Review";
const agenda: string[] = ["Quiz 5", "Variables", "Primitive Data Types", "Casting", "Random", "Binary", "Conditional Statements", "While Loops", "For Loops", "Strings", "Arrays", "2D Arrays", "Static Functions"];

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
    {agenda.map((event: string, index: number) => <li className="text-[25pt]" key={index}>{event}</li>)}
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">Quiz 5</p>
    </section>
    <section>
    <p className='text-usf-yellow'>Variables</p>
    </section>
    <section>
    <p className="font-mono">
    <span className="text-red-700 dark:text-red-400">data type&nbsp;</span>
    <span className="text-green-700 dark:text-green-400">variable name</span>
    <span> = </span>
    <span className="text-blue-700 dark:text-blue-400">value</span>
    <span>;</span>
    </p>
    <p>Store a value into a variable with a specific data type.</p>
    <p className="font-mono">
    <span className="text-red-700 dark:text-red-400">int&nbsp;</span>
    <span className="text-green-700 dark:text-green-400">x</span>
    <span> = </span>
    <span className="text-blue-700 dark:text-blue-400">5</span>
    <span>;</span>
    </p>
    <p className="font-mono">
    <span className="text-red-700 dark:text-red-400">String&nbsp;</span>
    <span className="text-green-700 dark:text-green-400">name</span>
    <span> = </span>
    <span className="text-blue-700 dark:text-blue-400">"Edward"</span>
    <span>;</span>
    </p>
    </section>
    <section>
    <p className="text-usf-yellow">Primitive Data Types</p>
    </section>
    <section>
    <ul className="list-disc">
    {["byte", "short", "int", "long", "char", "boolean", "float", "double"].map((type: string, i: number) => <li key={i}>{type}</li>)}
    </ul>
    </section>
    <section>
    <p className="text-usf-yellow">byte</p>
    <Row>
    <Half>
    <p>Values between -2<sup>7</sup> to 2<sup>7</sup> - 1</p>
    </Half>
    <HalfCode>
    <Indent>byte a = 127;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">short</p>
    <Row>
    <Half>
    <p>Values between -2<sup>15</sup> to 2<sup>15</sup> - 1</p>
    </Half>
    <HalfCode>
    <Indent>short a = 10830;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">int</p>
    <Row>
    <Half>
    <p>Values between -2<sup>31</sup> to 2<sup>31</sup> - 1</p>
    </Half>
    <HalfCode>
    <Indent>int a = 1038147;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">long</p>
    <Row>
    <Half>
    <p>Values between -2<sup>63</sup> to 2<sup>63</sup> - 1</p>
    <p>Require an <code>L</code> or <code>l</code> at the end.</p>
    </Half>
    <HalfCode>
    <Indent>long a = 391038147L;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">char</p>
    <Row>
    <Half>
    <p>Unicode 16-bit single character</p>
    </Half>
    <HalfCode>
    <Indent>char e = 'i';</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">boolean</p>
    <Row>
    <Half>
    <p>True/False value</p>
    </Half>
    <HalfCode>
    <Indent>boolean b = true;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">float</p>
    <Row>
    <Half>
    <p>Decimal value, up to 7 decimals</p>
    <p>require <code>f</code> at the end.</p>
    </Half>
    <HalfCode>
    <Indent>float f = 1.0f;</Indent> 
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">double</p>
    <Row>
    <Half>
    <p>Decimal value, up to 15 decimals</p>
    </Half>
    <HalfCode>
    <Indent>double d = 1.35;</Indent> 
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Casting</p>
    </section>
    <section>
    <p className="text-usf-yellow">Casting</p>
    <Row>
    <Half>
    <p>Converting between one primitive to another primitive</p>
    </Half>
    <HalfCode>
    <Indent>float a = 64.0138;</Indent>
    <Indent>int f = (int) a;</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Random Numbers</p>
    </section>
    <section>
    <p className="text-usf-yellow">Random numbers</p>
    <div className="font-mono text-[24pt]">
    <span className="text-red-700 dark:text-red-400">(int) </span><span className="text-blue-700 dark:text-blue-400">(
      <span className="text-green-700 dark:text-green-400">(Math.random() * <span className="text-yellow-700 dark:text-yellow-400">(
        <span className="text-orange-700 dark:text-orange-400">max</span> - <span className="text-purple-700 dark:text-purple-400">min</span>
      ) + <span className="text-purple-700 dark:text-purple-400">min</span></span>)</span>
    )</span>;
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Random numbers (3-25)</p>
    <div className="font-mono text-[24pt]">
    <span className="text-red-700 dark:text-red-400">(int) </span><span className="text-blue-700 dark:text-blue-400">(
      <span className="text-green-700 dark:text-green-400">(Math.random() * <span className="text-yellow-700 dark:text-yellow-400">(
        <span className="text-orange-700 dark:text-orange-400">25</span> - <span className="text-purple-700 dark:text-purple-400">3</span>
      ) + <span className="text-purple-700 dark:text-purple-400">3</span></span>)</span>
    )</span>;
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Binary</p>
    </section>
    <section>
    <p className="text-usf-yellow">Decimal to Binary</p>
    <img src={decimalBinary1} alt="Method of Decimal to Binary" />
    </section>
    <section>
    <p className="text-usf-yellow">Alternative Approach</p>
    <img src={decimalBinary2} alt="Method of Decimal to Binary" />
    </section>
    <section>
    <p className="text-usf-yellow">Conditional Statements</p>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>if (condition) &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>if (condition) &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125; else &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>if (condition 1) &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125; else if(condition 2) &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125; else &#123;</Indent>
    <Indent space={1}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>if (condition 1) &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125; else if(condition 2) &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125; else if(condition 3) &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125; else &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>if (condition 1) &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125; else if(condition 2) &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125; else if(condition 3) &#123;</Indent>
    <Indent space={2}>...</Indent>
    <Indent>&#125; else if(condition N) &#123;</Indent>
    <Indent space={2}>...</Indent>
    <Indent>&#125; else &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Nested Conditional Statements</p>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>if (condition 1) &#123;</Indent>
    <Indent space={2}>if (inner cond 1) &#123;</Indent>
    <Indent space={4}>// code</Indent>
    <Indent space={2}>&#125; else &#123;</Indent>
    <Indent space={4}>// code</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125; else &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">While Loops</p>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>while (condition) &#123;</Indent>
    <Indent space={2}>// code</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>int x = 1;</Indent>
    <Indent>while (true) &#123;</Indent>
    <Indent space={2}>System.out.println(x);</Indent>
    <Indent space={2}>x++;</Indent>
    <Indent space={2}>if (x &gt; 10) &#123;</Indent>
    <Indent space={4}>break;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>int x = 1;</Indent>
    <Indent>while (x &lt; 10) &#123;</Indent>
    <Indent space={2}>System.out.println(x);</Indent>
    <Indent space={2}>x++;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>while (outer condition) &#123;</Indent>
    <Indent space={2}>while (inner condition) &#123;</Indent>
    <Indent space={4}>// code</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">For Loops</p>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <p>for (<span className="text-red-700 dark:text-red-400">var init</span>; <span className="text-blue-700 dark:text-blue-400">condition</span>; <span className="text-green-700 dark:text-green-400">var change</span>)</p>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <p>for (<span className="text-red-700 dark:text-red-400">int i = 0</span>; <span className="text-blue-700 dark:text-blue-400">i &lt; 100</span>; <span className="text-green-700 dark:text-green-400">i++</span>) &#123;</p>
    <Indent space={1}>System.out.println(i);</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <p>for (<span className="text-red-700 dark:text-red-400">int i = 100</span>; <span className="text-blue-700 dark:text-blue-400">i &gt;= 0</span>; <span className="text-green-700 dark:text-green-400">i--</span>) &#123;</p>
    <Indent space={1}>System.out.println(i);</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <p>for (<span className="text-red-700 dark:text-red-400">int i = 1</span>; <span className="text-blue-700 dark:text-blue-400">i &lt;= 2000</span>; <span className="text-green-700 dark:text-green-400">i *= 2</span>) &#123;</p>
    <Indent space={1}>System.out.println(i);</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <div className="font-mono text-[24pt] text-left">
    <Indent>for (<span className="text-red-700 dark:text-red-400">int i = 1</span>; <span className="text-blue-700 dark:text-blue-400">i &lt;= 2000</span>; <span className="text-green-700 dark:text-green-400">i *= 2</span>) &#123;</Indent>
    <Indent space={2}>for (<span className="text-red-700 dark:text-red-400">int j = 1</span>; <span className="text-blue-700 dark:text-blue-400">j &lt;= i</span>; <span className="text-green-700 dark:text-green-400">j *= 2</span>) &#123;</Indent>
    <Indent space={4}>System.out.println(i);</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Strings</p>
    </section>
    <section>
    <p className="text-usf-yellow">
    Immutability
    </p>
    <p>Strings cannot be changed nor removed from, but they can be "concatenated" (added) to.</p>
    </section>
    <section>
    <p className="text-usf-yellow">length()</p>
    <Row>
    <Half>
    <p>We can get the length of a string using the <code>.length()</code> method.</p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>str.length(); // Gives us 11</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">equals()</p>
    <Row>
    <Half>
    <p>We cannot check if two Strings are equal using the <code>==</code> operators.</p>
    <p>Instead, we must use the <code>.equals()</code> method.</p>
    <p>Case sensitive</p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>String str1 = "Hello World";</Indent>
    <Indent>str.equals(str1); // true</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">equals()</p>
    <Row>
    <Half>
    <p>We cannot check if two Strings are equal using the <code>==</code> operators.</p>
    <p>Instead, we must use the <code>.equals()</code> method.</p>
    <p>Case sensitive</p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>String str1 = "hello world";</Indent>
    <Indent>str.equals(str1); // false</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">equalsIgnoreCase()</p>
    <Row>
    <Half>
    <p>Case insensitive method to check equality</p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>String str1 = "hello world";</Indent>
    <Indent>str.equalsIgnoreCase(str1); // true</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">compareTo()</p>
    <Row>
    <Half>
    <p>Case sensitive method to compare strings</p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>String str1 = "hello world";</Indent>
    <Indent>str.compareTo(str1); // -32</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">compareToIgnoreCase()</p>
    <Row>
    <Half>
    <p>Case insensitive method to compare strings</p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>String str1 = "hello world";</Indent>
    <Indent>str.compareToIgnoreCase(str1); // 0</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">charAt()</p>
    <Row>
    <Half>
    <p>Index a string using <code>charAt(index)</code></p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>str.charAt(0); // 'H'</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">substring()</p>
    <Row>
    <Half>
    <p>Get a portion of a string using <code>substring(startIndex, endIndex)</code></p>
    </Half>
    <HalfCode>
    <Indent>String str = "Hello World";</Indent>
    <Indent>str.substring(0, 6); // "Hello"</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Arrays</p>
    </section>
    <section>
    <p className="text-usf-yellow">Array</p>
    <p>Collection of same-typed data</p>
    </section>
    <section>
    <p className="text-usf-yellow">Initialization</p>
    <div className="font-mono text-[20pt] text-left">
    <p><span className="text-red-800 dark:text-red-400">data type[]</span> <span className="text-green-800 dark:text-green-400">variable</span> = new <span className="text-blue-800 dark:text-blue-400">data type[size]</span>;</p>
    <p><span className="text-red-800 dark:text-red-400">data type[]</span> <span className="text-green-800 dark:text-green-400">variable</span> = <span className="text-blue-800 dark:text-blue-400">&#123; val1, val2, val3, ... valN &#125;</span>;</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Initialization</p>
    <div className="font-mono text-[20pt] text-left">
    <p><span className="text-red-800 dark:text-red-400">int[]</span> <span className="text-green-800 dark:text-green-400">nums</span> = new <span className="text-blue-800 dark:text-blue-400">int[10]</span>;</p>
    <p><span className="text-red-800 dark:text-red-400">int[]</span> <span className="text-green-800 dark:text-green-400">nums</span> = <span className="text-blue-800 dark:text-blue-400">&#123; 1, 1, 2, 3, 5, 8 &#125;</span>;</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Get</p>
    <Row>
    <Half>
    <p>Remember, arrays in Java cannot be added to or removed from. Values are either retrieved using indexes or set using indexes.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 2, 3 &#125;;</Indent>
    <Indent>System.out.println(arr[0]); // 1</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Set</p>
    <Row>
    <Half>
    <p>Remember, arrays in Java cannot be added to or removed from. Values are either retrieved using indexes or set using indexes.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 1, 2, 3 &#125;;</Indent>
    <Indent>arr[1] = 10;</Indent>
    <Indent>System.out.println(arr[1]); // 10</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">length</p>
    <Row>
    <Half>
    <p>We can get the number of elements in an array using the <code>length</code> property of every array.</p>
    </Half>
    <HalfCode>
    <Indent>int[] arr = &#123; 7, 2, 8, 4, 1 &#125;;</Indent>
    <Indent>System.out.println(arr.length); // gives 5</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Iteration</p>
    <div className="font-mono text-[20pt] text-left">
    <Indent>int[] arr = new int[10];</Indent>
    <Indent>for(int i = 0; i &lt; arr.length; i++) &#123;</Indent>
    <Indent space={2}>arr[i] = i * i;</Indent>
    <Indent>&#125;</Indent>
    <Indent>for(int i = 0; i &lt; arr.length; i++) &#123;</Indent>
    <Indent space={2}>System.out.print(arr[i] + " ");</Indent>
    <Indent>&#125;</Indent>
    <p>Gives: 0 1 4 9 16 25 36 49 64 81</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Iteration</p>
    <div className="font-mono text-[20pt] text-left">
    <Indent>int[] arr = new int[10];</Indent>
    <Indent>for(int i = 0; i &lt; arr.length; i++) &#123;</Indent>
    <Indent space={2}>arr[i] = i * i;</Indent>
    <Indent>&#125;</Indent>
    <Indent>for(int num : arr) &#123;</Indent>
    <Indent space={2}>System.out.print(num + " ");</Indent>
    <Indent>&#125;</Indent>
    <p>Gives: 0 1 4 9 16 25 36 49 64 81</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">2D Arrays</p>
    </section>
    <section>
    <p className="text-usf-yellow">2D Arrays</p>
    <p>Conceptually, an array inside of an array.</p>
    </section>
    <section>
    <p className="text-usf-yellow">Initialization</p>
    <div className="font-mono text-[16pt] text-left">
    <p><span className="text-red-800 dark:text-red-400">data type[][]</span> <span className="text-green-800 dark:text-green-400">variable</span> = new <span className="text-blue-800 dark:text-blue-400">data type[row size][col size]</span>;</p>
    <p><span className="text-red-800 dark:text-red-400">data type[][]</span> <span className="text-green-800 dark:text-green-400">variable</span> = <span className="text-blue-800 dark:text-blue-400">&#123; &#123; val1, val2, &#125;, &#123; val3, ... valN &#125; &#125;</span>;</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Initialization</p>
    <div className="font-mono text-[16pt] text-left">
    <p><span className="text-red-800 dark:text-red-400">int[][]</span> <span className="text-green-800 dark:text-green-400">nums</span> = new <span className="text-blue-800 dark:text-blue-400">int[3][5]</span>;</p>
    <p><span className="text-red-800 dark:text-red-400">int[][]</span> <span className="text-green-800 dark:text-green-400">nums</span> = <span className="text-blue-800 dark:text-blue-400">&#123; &#123; 1, 2, 3 &#125;, &#123; 4, 5, 1 &#125; &#125;</span>;</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Accessing values</p>
    <Row>
    <Half>
    <p>Similar to a regular 1D array, we can only get and set values using indexes.</p>
    </Half>
    <HalfCode>
    <Indent>int[][] arr = new int[6][6];</Indent>
    <Indent>System.out.println(arr[1][2]); // gives 0</Indent>
    <Indent>arr[1][2] = 3;</Indent>
    <Indent>System.out.println(arr[1][2]); // gives 3</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">arr.length</p>
    <Row>
    <Half>
    <p>Using <code>length</code> on the array variable will give you the number of rows.</p>
    </Half>
    <HalfCode>
    <Indent>int[][] arr = new int[3][8];</Indent>
    <Indent>System.out.println(arr.length); // Gives 3</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">arr[0].length</p>
    <Row>
    <Half>
    <p>However, if you use <code>length</code> on an indexed value, it will give you the number of columns.</p>
    </Half>
    <HalfCode>
    <Indent>int[][] arr = new int[3][8];</Indent>
    <Indent>System.out.println(arr[0].length); // Gives 8</Indent>
    </HalfCode>
    </Row>
    </section>
    <section>
    <p className="text-usf-yellow">Static Functions</p>
    </section>
    <section>
    <p className="text-usf-yellow">Static Functions</p>
    <p className="text-[20pt]">Must have a return type and a name.</p>
    <div className="font-mono text-[20pt] text-left">
    <p><span className="text-purple-800 dark:text-purple-400">privacy</span> static <span className="text-red-800 dark:text-red-400">return type</span> <span className="text-green-800 dark:text-green-400">function name</span>(<span className="text-blue-800 dark:text-blue-400">parameters</span>)</p>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Static Functions</p>
    <div className="font-mono text-[20pt] text-left">
    <Indent><span className="text-purple-800 dark:text-purple-400">public</span> static <span className="text-red-800 dark:text-red-400">void</span> <span className="text-green-800 dark:text-green-400">sum</span>(<span className="text-blue-800 dark:text-blue-400">int[] arr</span>)&#123;</Indent>
    <Indent space={2}>int total = 0;</Indent>
    <Indent space={2}>for(int num : arr) &#123;</Indent>
    <Indent space={4}>total += num;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>System.out.println(total);</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Static Functions</p>
    <div className="font-mono text-[20pt] text-left">
    <Indent><span className="text-purple-800 dark:text-purple-400">private</span> static <span className="text-red-800 dark:text-red-400">int</span> <span className="text-green-800 dark:text-green-400">sum</span>(<span className="text-blue-800 dark:text-blue-400">int[] arr</span>)&#123;</Indent>
    <Indent space={2}>int total = 0;</Indent>
    <Indent space={2}>for(int num : arr) &#123;</Indent>
    <Indent space={4}>total += num;</Indent>
    <Indent space={2}>&#125;</Indent>
    <Indent space={2}>return total;</Indent>
    <Indent>&#125;</Indent>
    </div>
    </section>
    <section>
    <p className="text-usf-yellow">Midterm Review</p>
    </section>
    </Slides>
    </>
  )
}

export default Slide;
