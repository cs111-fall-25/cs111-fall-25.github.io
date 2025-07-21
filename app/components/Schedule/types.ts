interface Assignment {
  name?: string,
  link?: string,
  desc?: string,
  deadline?: string,
  type?: string
}

interface Slide {
  name?: string,
  link?: string
}

type ScheduleRowProps = {
  date: string,
  topics: string[],
  assignments: Assignment[],
  slides: Slide[],
  special?: boolean
}

type ScheduleProps = {
  showPrevious: boolean
}
export type { ScheduleRowProps, ScheduleProps }
