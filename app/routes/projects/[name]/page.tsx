"use client";

import { useState, useEffect } from 'react';

import { Navbar, Container, PageContainer, Footer, AssignmentSpecification } from '@/components';
import markdownToHtml from "@/lib/markdownToHtml";
import { getAssignmentByName } from "@/lib/api";
import { toTitleCase } from '@/lib/utils';
import { BackButton } from '@/components';
import { useNavigate, useParams } from 'react-router';
import { DateTime } from 'luxon';

const ProjectsAssignmentPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.name ?? "";
  const [details, setDetails] = useState<any>(null);
  const [content, setContent] = useState<any>(null);
  useEffect(() => {
    getAssignmentByName("projects", name).then((val) => { setDetails(val); return val}).then((details) => markdownToHtml(details?.content || "").then((data) => setContent(data)));
    setDetails(getAssignmentByName("projects", name));
    markdownToHtml(details?.content || "").then((data) => setContent(data));
  }, [content !== null && details !== null])
  if(!details){
    // return <div>No assignment listed</div>
    return navigate("/");
  }
  const due_date_output = details?.due_date ? DateTime.fromFormat(details?.due_date, "yyyy-MM-dd HH:mm:ss").toFormat("EEE LLL d, yyyy @ h:mma") : details?.due_date;
  return (
    <PageContainer>
      <Navbar />
      <Container className="flex-col">
        <div className="flex-row flex py-2"><BackButton /><p className="text-3xl font-bold">Project: {toTitleCase(name)}</p></div>
        <AssignmentSpecification name={name} assignment_type={details.type} due_date={details?.due_date ? due_date_output : ""} content={content} assignment_link={details.assignment_link} demo_links={details.demo_links}/>
      </Container>
      <Footer />
    </PageContainer>
  )
}

export default ProjectsAssignmentPage;
