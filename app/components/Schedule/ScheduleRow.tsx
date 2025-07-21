import React from 'react';
import { Link } from 'react-router';
import { date_to_weekday } from './util';
import type { ScheduleRowProps } from './types';

const format_assignment_name = (name: string, type: string) => {
  switch(type){
    case "inclass":
      return <span className="text-yellow-600 dark:text-yellow-200">[In Class] {name}</span>
    case "lab":
      return <span className="text-orange-600 dark:text-orange-200">[Lab] {name}</span>
    case "project":
      return <span className="text-red-600 dark:text-red-200">[Project] {name}</span>
    default:
      return <span>{name}</span>

  }
}

const ScheduleRow = ({ date, topics, assignments, slides, special} : ScheduleRowProps) => {
  return (
    <tr className="py-10" key={date}>
    <td className="w-1/10">{date}</td>
    <td className="w-1/10">{date_to_weekday(date)}</td>
    <td className="w-1/5 text-left">
    {
      special 
        ? 
          (<strong>{topics[0]}</strong>) 
            :
              (<ul>
               {topics.map((val, i) => <li key={i}>{val}</li>)}
               </ul>)
    }
    </td>
    <td className="w-1/5">
    <ol>
    {
      assignments.map((val: {name?: string, type?: string, hidden?: boolean}, i) => (
        val?.name !== undefined && val?.type !== undefined && !val?.hidden? (
        <li key={i}>
        <Link to={`/${val?.type}/${val?.name}`}>{format_assignment_name(val?.name, val?.type)}</Link>
        </li>
        ) : (<></>)
      ))
    }
    </ol>
    </td>
    <td className="w-1/5">
    <ol>
    {
      // Add a modal open for the slide with the src being the link
      slides.map((val: {name?: string, link?: string}, i) => (
        <li key={i}><a href={val?.link} target="_blank">{val?.name}</a></li>
      ))
    }
    </ol>
    </td>
    </tr>
  )
}
export { ScheduleRow };
