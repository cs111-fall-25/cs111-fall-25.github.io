import { Navbar, Container, PageContainer, Footer } from '@/components';
import { Link } from 'react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight } from 'lucide-react';

import variablesWorksheet from "./sheets/variables.pdf";
import dataTypesWorksheet from "./sheets/data types.pdf";
import printWorksheet from './sheets/print.pdf';
import scannerWorksheet from './sheets/scanner.pdf';
import conditionalWorksheet from './sheets/conditional statements.pdf';
import whileWorksheet from './sheets/while loops.pdf';
import forLoopWorksheet from './sheets/for loops.pdf';
import stringWorksheet from './sheets/strings.pdf';
import mathOperatorsWorksheet from './sheets/math-operators.pdf';
import arrayWorksheet from './sheets/arrays.pdf';
import twodarrayWorksheet from './sheets/2d arrays.pdf'
import staticFunctionsWorksheet from './sheets/static functions.pdf'

const WorksheetsPage = () => {
  return <>
    <PageContainer>
      <Navbar />
      <Container className="flex-col">
        <p className="text-3xl font-bold">Worksheets</p>
        <div className="py-10 px-5 w-3/4">
        <Table className="text-xl">
        <TableHeader>
        <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>View</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
        <TableCell>Variables and Data Types</TableCell>
        <TableCell>What is a Variable and what is a Data Type?</TableCell>
        <TableCell><Link to={variablesWorksheet} target="_blank"><ChevronRight size={30}/></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Data Types</TableCell>
        <TableCell>A more detail look into the question of "What is a Data Type" in Java.</TableCell>
        <TableCell><Link to={dataTypesWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Print</TableCell>
        <TableCell>A deeper dive into printing out values and variables.</TableCell>
        <TableCell><Link to={printWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Scanner (Input)</TableCell>
        <TableCell>A review on how to take in input using Scanner</TableCell>
        <TableCell><Link to={scannerWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Math Operators</TableCell>
        <TableCell>Detailed explanation of Math Operators in Java.</TableCell>
        <TableCell><Link to={mathOperatorsWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Conditional Statements</TableCell>
        <TableCell>How do we run code only when some conditions are met?</TableCell>
        <TableCell><Link to={conditionalWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>While Loops</TableCell>
        <TableCell>How do we repeat code when certain conditions are true?</TableCell>
        <TableCell><Link to={whileWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>For Loops</TableCell>
        <TableCell>How do we repeat code a set number of times?</TableCell>
        <TableCell><Link to={forLoopWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Strings</TableCell>
        <TableCell>What are strings? How do they work in Java?</TableCell>
        <TableCell><Link to={stringWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Arrays</TableCell>
        <TableCell>What is an array?</TableCell>
        <TableCell><Link to={arrayWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>2D Arrays</TableCell>
        <TableCell>What is a 2D array?</TableCell>
        <TableCell><Link to={twodarrayWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Static Functions</TableCell>
        <TableCell>How do we write functions in Java without classes?</TableCell>
        <TableCell><Link to={staticFunctionsWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell>
        </TableRow>
        </TableBody>
        </Table>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  </>
}

export default WorksheetsPage;
