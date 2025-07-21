import { 
  Navbar, 
  Container, 
  Footer, 
  PageContainer, 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent
} from "@/components";
import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react';

const Document = ({ name, iframeSrc }: { name: string, iframeSrc: string })  => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  
  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened} className="py-5">
    <CollapsibleTrigger className="text-2xl flex flex-row space-x-10">
    {isOpened ? <ChevronDown /> : <ChevronUp />}
    {name}
    </CollapsibleTrigger>
    <CollapsibleContent>
    <div className="flex flex-row justify-center align-center py-5">
    <iframe src={iframeSrc} height="600" width="100%" />
    </div>
    </CollapsibleContent>
    </Collapsible>
  )
}

const PoliciesPage = () => {
  return (
    <PageContainer>
    <Navbar />
    <Container className="flex-col">
    <h1 className="text-3xl font-bold">Policies</h1>
    <br />
    <ul className="">
    <li>
    <Document name="Syllabus" iframeSrc="/assets/Syllabus.pdf#view=FitH" />
    </li>
    <li>
    <Document name="Grading System" iframeSrc="/assets/Grading-System.pdf#view=FitH" />
    </li>
    </ul>
    </Container>
    <Footer />
    </PageContainer>
  )
}

export default PoliciesPage;
