import schedule from "@/static/schedule.json"
import { date_passed } from './util';
import { ScheduleRow } from './ScheduleRow';
import type { ScheduleProps } from './types';


const Schedule = ({ showPrevious } : ScheduleProps) => {
  return (
    <>
    <table className="table-fixed w-full px-10 h-20">
    <thead className="sticky top-0">
    <tr className="border">
    <th className="w-1/10">Date</th>
    <th className="w-1/10">Weekday</th>
    <th className="w-1/5">Topics</th>
    <th className="w-1/5">Assignment</th>
    <th className="w-1/5">Slides/Resources</th>
    </tr>
    </thead>
    </table>
    <div className="flex-1 overflow-y-auto w-full">
    <table className="table-fixed border-separate border-spacing-y-5 w-full border divide-y divide-solid">
    <tbody className="text-center h-80 overflow-y-auto divide-y ">
    {schedule.map(({ date, topics, assignments, slides, special }) => (
      !date_passed(date) || showPrevious ? (
        <ScheduleRow key={date} date={date} topics={topics} assignments={assignments} slides={slides} special={special} />
      ) : <></>
    ))}
    </tbody>
    </table>
    </div>
    </>
  )
}

export { Schedule };
