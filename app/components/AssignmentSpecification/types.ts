type AssignmentSpecificationProps = {
  name: string,
  assignment_type: string,
  due_date: string,
  content: string,
  assignment_link: string,
  demo_links?: {"title": string, "link": string}[]
};

type VideoCarouselProps = {
  sectionName: string,
  videos: {'title': string, 'link': string}[]
}

export type { AssignmentSpecificationProps, VideoCarouselProps };
