import { type AssignmentSpecificationProps } from "./types";
import markdownStyles from "@/styles/markdown-styles.module.css";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui';

const AssignmentSpecification = ({
  due_date,
  content,
  assignment_link,
  demo_links
}: AssignmentSpecificationProps) => {
  return (
    <div>
      <p className="font-bold text-xl pt-2">Due: {due_date}</p>
      <br />
      <a href={assignment_link} target="_blank" className="p-2 bg-usf-green text-gray-100 rounded">Clone/Go to Assignment</a>
      {demo_links && (
        <>
        <p className="font-bold text-xl pt-2">Demo</p>
        <Carousel className="px-10 mx-20">
        <CarouselContent>
        {demo_links.map((val, i) =>  {
          return(
          <CarouselItem key={i}>
          <p className="text-2xl text-center">{val.title}</p>
          <video className="w-screen" width="1024" controls >
          <source src={(val.link)}></source>
          {/*<!-- Fix the issue with mobile -->*/}
          </video>
          </CarouselItem>
          )
        })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
        </Carousel>
        </>
      )}
      <p className="font-bold text-xl pt-2">Specification</p>
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export { AssignmentSpecification };
