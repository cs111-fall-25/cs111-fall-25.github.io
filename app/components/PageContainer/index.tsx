
type Props = {
  children: any 
}

const PageContainer = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  )
}

export { PageContainer };
