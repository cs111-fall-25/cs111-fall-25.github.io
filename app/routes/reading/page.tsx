import { Navbar, Container, PageContainer, Footer } from '@/components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SquareChevronRight } from 'lucide-react';
import { type ReactElement } from 'react';

const ExternalLink = ({ href, name }: { href: string, name: string }): ReactElement => (
  <div className="flex flex-row space-between items-center space-x-2"><a href={href} target="_blank">{name}</a><a href={href} target="_blank"><SquareChevronRight size={20} /></a></div>
) 

const SuggestedReadingPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Container className="flex-col">
        <p className="text-3xl font-bold">Suggested Reading</p>
        <div className="py-10 px-5 ">
        <Table className="text-xl">
        <TableHeader>
        <TableRow>
        <TableHead>Week</TableHead>
        <TableHead>Reading</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
        <TableCell className="text-center">
        0
        </TableCell>
        <TableCell className="pl-5 py-5">
          None
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="text-center">
        1
        </TableCell>
        <TableCell className="pl-5 py-5">
        <p>Suggested for Monday</p>
        <p>Chapter 1 sections:</p>
          <ul className="list-disc pl-5">
          <li>1.4: The Java Programming Language</li>
          <li>1.5: Program Development</li>
          <li>1.6: Object-Oriented Programming: We will return to this section later</li>
        </ul>
        <br />
        <p>Suggested for Wednesday</p>
          <ul className="list-disc pl-5">

        <li>All of Chapter 2</li>
        </ul>
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="text-center">2</TableCell>
        <TableCell className="pl-5 py-5">
        <p>Suggested for Wednesday:</p>
          <ul className="list-disc pl-5">
          <li>
          <ExternalLink href="https://www.w3schools.com/java/java_user_input.asp" name="W3Schools Article: Java User Input" />
          </li>
          <li>
          <ExternalLink href="https://www.geeksforgeeks.org/scanner-class-in-java" name="GeeksForGeeks Article: Scanner"/>
          </li>
        </ul>
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="text-center">3</TableCell>
        <TableCell className="pl-5 py-5">
        <p>Monday: Java Software Solutions</p>
          <ul className="list-disc pl-5">
        <li>5.1: Boolean Expressions</li>
        <li>5.2: The If Statement</li>
        <li>5.3: Comparing Data</li>
        <li>5.4: The While Statement</li>
        <li>5.5: Iterators</li>
        </ul>
        <br />
        <p>Wednesday: Java Software Solutions</p>
        <ul className="list-disc pl-5">
        <li>6.4: The for statement</li>
        </ul>
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell className="text-center">4</TableCell>
        <TableCell className="pl-5 py-5">
        <p>Monday: Java Software Solutions</p>
        <ul className="list-disc pl-5"><li>3.2:  The String class</li></ul>        
        <br />
        <p>Wednesday</p>
        <ul className="list-disc pl-5">
        <li>
          <ExternalLink href="https://www.geeksforgeeks.org/dsa/stack-vs-heap-memory-allocation/" name="GeeksForGeeks Stack v Heap"/>
        </li>
          <li>
          <ExternalLink href="https://www.geeksforgeeks.org/java/garbage-collection-in-java/" name="GeeksForGeeks Garbage Collection" />
          </li>
          <li>
          <ExternalLink href="https://www.geeksforgeeks.org/java/stringbuilder-class-in-java-with-examples/" name="GeeksForGeeks String Builder" />
          </li>
          <li>
          <ExternalLink href="https://www.w3schools.com/java/java_arrays.asp" name="W3Schools Java Arrays" />
          </li>
        </ul>
        </TableCell>
        </TableRow>
        {/* <TableRow> */}
        {/* <TableCell className="text-center">5</TableCell> */}
        {/* <TableCell className="pl-5 py-5"> */}
        {/* <p>Monday: Java Software Solutions</p> */}
        {/* <ul className="list-disc pl-5"> */}
        {/*   <li>Chapter 8 Arrays</li> */}
        {/*   <li>8.1 Array Elements</li> */}
        {/*   <li>8.2 Declaring and Using Arrays</li> */}
        {/*   <li>8.3 Array of Objects</li> */}
        {/*   <li>8.6 Two-Dimensional Arrays</li> */}
        {/* </ul>  */}
        {/* <br /> */}
        {/* <p>Wednesday: Java Software Solutions</p> */}
        {/* <ul className="list-disc pl-5"> */}
        {/*   <li>Chapter 7 Object-Oriented Design</li> */}
        {/*   <li>7.1 Software Development Activities</li> */}
        {/*   <li>7.2 Identifying Classes and Objects</li> */}
        {/*   <li>7.3 Static Class Members</li> */}
        {/* </ul> */}
        {/* </TableCell> */}
        {/* </TableRow> */}
        {/* <TableRow> */}
        {/* <TableCell className="text-center">6</TableCell> */}
        {/* <TableCell className="pl-5 py-5"> */}
        {/* <p>Monday and Wednesday: Java Software Solutions</p> */}
        {/* <ul className="list-disc pl-5"> */}
        {/* <li>Chapter 4: Writing Classes</li> */}
        {/* <li>4.1 Classes and Objects Revisited</li> */}
        {/* <li>4.2 Anatomy of a Class</li> */}
        {/* <li>4.3 Encapsulation</li> */}
        {/* <li>4.4 Anatomy of a Method</li> */}
        {/* <li>4.5 Constructors Revisited</li> */}
        {/* <li>7.4 Class Relationships</li> */}
        {/* <li>7.7 Method Design</li> */}
        {/* </ul> */}
        {/* </TableCell> */}
        {/* </TableRow> */}
        {/* <TableRow> */}
        {/* <TableCell className="text-center">7</TableCell> */}
        {/* <TableCell className="pl-5 py-5"> */}
        {/* <p>No reading; Midterm Prep</p> */}
        {/* </TableCell> */}
        {/* </TableRow> */}
        </TableBody>
        </Table>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  )
}
export default SuggestedReadingPage;
