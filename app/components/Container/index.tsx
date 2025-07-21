
type Props = {
  children: any,
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <main className={`flex p-10 flex-grow  ${className}`}>
      {children}
    </main>
  )
}
export { Container };
