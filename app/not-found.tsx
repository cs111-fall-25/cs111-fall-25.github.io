import { Navbar, Container, PageContainer, Footer } from '@/components';
import { Separator } from './components/ui/separator';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Container className="flex-col align-center justify-center h-screen">
      <div className="h-16 flex-row flex align-center justify-center w-full px-16">
      <p className="text-4xl pr-10">404</p>
      <Separator orientation='vertical' />
      <p className="text-3xl pl-10">This page could not be found</p>
      </div>
      <br />
      <div className="flex-row justify-center align-center flex">
      <Link className="text-2xl align-center pr-16 justify-center" to="/">Go Home</Link>
      </div>
      </Container>
      <Footer />
    </PageContainer>

  )
}

export default NotFoundPage;
