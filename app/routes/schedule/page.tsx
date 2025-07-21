import { Navbar, Schedule, Footer, PageContainer, Container } from "@/components";
const SchedulePage = () => {

  return (
    <PageContainer>
      <Navbar />
      <Container className="p-5 m-0 flex w-full h-1/2 flex-col ">
        <p className="text-3xl font-bold text-center p-10">Schedule</p>
        <div className="p-5 h-3/4 overflow-clip flex flex-col">
          <Schedule showPrevious={true} />
        </div>
      </Container>
      <Footer />
    </PageContainer>
  )
}

export default SchedulePage;
