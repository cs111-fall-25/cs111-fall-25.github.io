import type { Route } from "./+types/home";
import { Navbar, Schedule, Footer, PageContainer, Container, Button, PDFViewer } from '@/components/';

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogClose } from '@/components';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CS 111 Course Page" },
    { name: "description", content: "CS 111 Class Page" },
  ];
}

export default function Home() {
  return (
    <PageContainer>
      <Navbar />
      <Container className="flex-col pt-5">
        <div className="pb-5">
          <p className="text-4xl py-5 font-bold">Welcome</p>
          <p className="text-lg">Welcome to CS 111: Foundation of Program Design for Fall 2025.</p>
        </div>
        <div className=" flex flex-row">
        <Dialog>
        <DialogTrigger className="dark:bg-usf-green dark:text-usf-yellow bg-usf-yellow text-usf-green p-4 rounded-2xl">Course Syllabus</DialogTrigger>
        <DialogContent className="align-center justify-center w-full min-w-[50vw] ">
        <DialogHeader>Course Syllabus</DialogHeader>
        <PDFViewer src="/assets/Syllabus.pdf" />
        <DialogFooter>
        <Button type="button" variant="default">
          <a href="/assets/Syllabus.pdf" download>Download</a>
        </Button>
        <DialogClose>
          <Button type="button" variant="secondary">Close</Button>
        </DialogClose>
        </DialogFooter>
        </DialogContent>
        </Dialog>

        </div>
        <div className="py-5 h-96 overflow-clip flex flex-col">
          <Schedule showPrevious={false}/>
        </div>
      </Container>
      <Footer />
    </PageContainer>
  );
}
