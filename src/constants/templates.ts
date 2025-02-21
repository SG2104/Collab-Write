export const templates = [
  { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg" },

  { id: "resume", label: "Resume", imageUrl: "/resume.svg" },

  { id: "cover-letter", label: "Cover Letter", imageUrl: "/cover-letter.svg" },

  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
    <h2>Executive Summary</h2>
    <p>Brief description of the project proposal.</p>

    <h2>Project Goals</h2>
    <p>Key Objectives of the project.</p>

    <h2>Implementation Plan</h2>
    <p>Strategy and methodology for project execution.</p>

    <h2>Resources Required</h2>
    <p>Team, equipment, and budget required.</p>
  `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    h1>Business Letter</h1>
    <p>This is a business letter template</p>`,
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the software development project.</p>

      <h2>Scope of the work</h2>
      <p>Detailed breakdown of the project's scope and requirements.</p>

      <h2>Timeline</h2>
      <p>Estimated timeline for project completion.</p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
  },
];
