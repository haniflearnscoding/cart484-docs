export type TeamMember = {
  name: string
  role: string
  bio: string
  imageSrc: string | null
}

export const TEAM: TeamMember[] = [
  {
    name: 'Daud',
    role: 'Co-designer',
    bio: 'Daud is a low-vision student who navigates the Hall Building every day. He evaluated every prototype we made — not as a test subject, but as the person whose actual experience was on the line. His feedback directly changed what we built at each stage, making him as much an author of this project as anyone on the team.',
    imageSrc: null,
  },
  {
    name: 'Catherine Zaloshnja',
    role: 'ProBlind Platform & User Research',
    bio: 'Catherine led user research with Daud and managed our work on the ProBlind platform — the system that overlays audio descriptions onto tactile maps. She drove the co-design feedback process across all iterations.',
    imageSrc: null,
  },
  {
    name: 'Suchetha Thyamagundlam',
    role: 'Soft-Surface Prototyping',
    bio: 'Suchetha led the soft-surface prototype series — hand-embroidered cotton canvas maps that explored texture and tactile contrast as an alternative to rigid materials.',
    imageSrc: null,
  },
  {
    name: 'Hanif Hashim',
    role: 'SVG Pipeline & 3D Prototyping',
    bio: 'Hanif built the pipeline that converts OpenStreetMap data into print-ready tactile SVG files and created the browser-based 3D prototype. He also maintains the open-source repository so future students can generate updated maps when the campus changes.',
    imageSrc: null,
  },
]
