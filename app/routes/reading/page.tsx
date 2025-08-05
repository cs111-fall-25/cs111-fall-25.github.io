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
        <div className="py-10 px-5 w-3/4">
        <Table className="text-xl">
        <TableHeader>
        <TableRow>
        <TableHead>Week</TableHead>
        <TableHead>Reading</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {/* <TableRow> */}
        {/* <TableCell> */}
        {/* Week 1 */}
        {/* </TableCell> */}
        {/* <TableCell> */}
        {/* None<br/>None */}
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
