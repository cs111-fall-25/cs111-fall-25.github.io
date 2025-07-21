import { Navbar, Container, PageContainer, Footer } from '@/components';
import { getAllAssignmentsByType } from '@/lib/api';
import { Link } from 'react-router';
import { toTitleCase } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight } from 'lucide-react';
import { to_date_string } from "@/lib/utils";
import { useState, useEffect } from 'react';
import { type Assignment } from '@/interfaces';

const InclassPage = () => {
  const [assignments, setAssignments] = useState<Assignment[] | null>(null);
  useEffect(() => {
    getAllAssignmentsByType("inclass").then((data) => setAssignments(data));
  }, [assignments !== null]);
  return (
    <PageContainer>
      <Navbar />
      <Container className="flex-col">
        <p className="text-3xl font-bold">In-class Assignments</p>
        <div className="py-10 px-5 w-3/4">
        <Table className="text-xl">
        <TableHeader>
        <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Due Date</TableHead>
        <TableHead className="w-10">Link</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {assignments?.map((assignment: Assignment) => (
          <TableRow key={assignment.name}>
          <TableCell>
          <Link to={`/inclass/${assignment.name}`}>
          {toTitleCase(assignment.name)}
          </Link>
          </TableCell>
          <TableCell>{to_date_string(assignment.due_date)}</TableCell>
          <TableCell>
          <Link to={`/inclass/${assignment.name}`}>
          <ChevronRight />
          </Link>
          </TableCell>
          </TableRow>
        ))}
        </TableBody>
        </Table>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  )
}

export default InclassPage;
