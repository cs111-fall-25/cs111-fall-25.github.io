export type Assignment = {
  name: string;
  type: string;
  due_date: string;
  assignment_link: string;
  demo_links: {"title": string, "link": string}[]
  content: string;
};
