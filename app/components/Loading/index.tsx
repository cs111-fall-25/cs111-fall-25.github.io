import { Spinner } from "../ui"

const Loading = () => {
  return (
    <div className="flex h-96 justify-center align-center">
    <Spinner size="large">
      <span className="text-lg">Loading...</span>
    </Spinner>
    </div>
  )
}

export { Loading };
