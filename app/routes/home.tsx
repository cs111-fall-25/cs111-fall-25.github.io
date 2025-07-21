import type { Route } from "./+types/home";
import { Navbar, Schedule, Footer, PageContainer, Container, Button } from '@/components/';

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogClose } from '@/components';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CS 111" },
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
        <div className="w-1/4 flex flex-row">
        <Dialog>
        <DialogTrigger className="dark:bg-usf-green dark:text-usf-yellow bg-usf-yellow text-usf-green p-4 rounded-2xl">Course Syllabus</DialogTrigger>
        <DialogContent className="max-w-screen w-full lg:min-w-[512pt]">
        <DialogHeader>Course Syllabus</DialogHeader>
        <iframe width="100%" height="600pt" src="/assets/Syllabus.pdf#view=FitH" />
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
