import { Navbar, Container, PageContainer, Footer } from '@/components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight } from 'lucide-react';

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
        {/* <TableRow> */}
        {/* <TableCell className="text-center">2</TableCell> */}
        {/* <TableCell className="pl-5 py-5"> */}
        {/* <p>Suggested for Monday:</p> */}
        {/*   <ul className="list-disc pl-5"> */}
        {/*   <li> */}
        {/*   <a href="https://www.w3schools.com/java/java_user_input.asp" target="_blank">W3Schools Article: Java User Input</a> */}
        {/*   </li> */}
        {/*   <li> */}
        {/*   <a href="https://www.geeksforgeeks.org/scanner-class-in-java" target="_blank">GeeksForGeeks Article: Scanner</a> */}
        {/*   </li> */}
        {/* </ul> */}
        {/* <br /> */}
        {/* <p>Suggested for Wednesday: Java Software Solutions</p> */}
        {/*   <ul className="list-disc pl-5"> */}
        {/* <li>5.1: Boolean Expressions</li> */}
        {/* <li>5.2: The If Statement</li> */}
        {/* <li>5.3: Comparing Data</li> */}
        {/* <li>5.4: The While Statement</li> */}
        {/* <li>5.5: Iterators</li> */}
        {/* </ul> */}
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
