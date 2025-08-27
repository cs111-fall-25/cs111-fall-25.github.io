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


import variablesWorksheet from "./sheets/variables.pdf"
import dataTypesWorksheet from "./sheets/variables.pdf"

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
        <TableCell>A worksheet to introduce and define variables and data types</TableCell>
        <TableCell><Link to={variablesWorksheet} target="_blank"><ChevronRight size={30}/></Link></TableCell>
        </TableRow>
        {/* <TableRow> */}
        {/* <TableCell>Data Types</TableCell> */}
        {/* <TableCell>A worksheet to introduce data types.</TableCell> */}
        {/* <TableCell><Link to={dataTypesWorksheet} target="_blank"><ChevronRight size={30} /></Link></TableCell> */}
        {/* </TableRow> */}
        </TableBody>
        </Table>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  </>
}

export default WorksheetsPage;
