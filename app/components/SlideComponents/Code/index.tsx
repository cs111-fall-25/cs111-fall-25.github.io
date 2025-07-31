const Code = ({children}: {children: any}) => {
  return (
    <section>
    <pre>
    <code data-trim data-noescape>
    {children}
    </code>
    </pre>
    </section>
  )
}

export { Code };
