import { useState, useEffect} from 'react';
import { Navbar, PageContainer, Container, Footer } from '@/components';
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

interface Slide {
  number: string,
  name: string,
  date: string,
  hidden?: boolean
};

import slides from './slides.json';

const Digitify = (weekNumber: string) => {
  const weekNum = parseInt(weekNumber);
  if(isNaN(weekNum)){
    return weekNumber;
  }
  return weekNum;
}

const SlidesPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Container className="flex-col">
        <p className="text-3xl font-bold">Slides</p>
        <div className="py-10 px-5">
        <Table className="text-xl">
        <TableHeader>
        <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Posting Date</TableHead>
        <TableHead className="w-10">Link</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        {slides?.map(({ number, name, date, hidden }: Slide) => (
            hidden ? <></> : 
            <TableRow key={`${name}`}>
            <TableCell>
            <Link to={`/slides/${name}/`}>
            Day {Digitify(number)}: {name}
            </Link>
            </TableCell>
            <TableCell>
            {date}
            </TableCell>
            <TableCell>
            <Link to={`/slides/${name}`}>
            <ChevronRight />
            </Link>
            </TableCell>
            </TableRow>
          )
        )}
        </TableBody>
        </Table>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  )
}

export default SlidesPage;
