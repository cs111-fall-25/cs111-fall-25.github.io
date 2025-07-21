const date_to_weekday = (date: string): string => {
  let dateObj = new Date(`${date}/2025`);
  let day = dateObj.getDay();
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return weekdays[day];
}

const date_passed = (date: string) : boolean => {
  let dateObj = new Date(`${date}/2025`);
  let today = new Date();
  return dateObj < today;
}

const to_date_string = (date: string) : string => {
  let dateObj = new Date(date);
  return dateObj.toLocaleString();
}

export { date_to_weekday, date_passed, to_date_string };
