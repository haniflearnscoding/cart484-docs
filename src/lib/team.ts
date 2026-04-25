export type TeamMember = {
  name: string
  role: string
  bio: string
  imageSrc: string | null
}

export const TEAM: TeamMember[] = [
  {
    name: 'Catherine Zaloshnja',
    role: 'ProBlind Platform & User Research',
    bio: 'Catherine led user research with Daud and managed our work on the ProBlind platform — the system that overlays audio descriptions onto tactile maps. She coordinated the compliance review process with Vytautas and drove co-design feedback across all iterations.',
    imageSrc: null,
  },
  {
    name: 'Suchetha Thyamagundlam',
    role: 'Soft-Surface Prototyping',
    bio: 'Suchetha led the soft-surface prototype series — machine-embroidered cotton canvas maps that explored texture and tactile contrast as an alternative to rigid materials. She also designed the audio wayfinding script for the Hall–metro corridor.',
    imageSrc: null,
  },
  {
    name: 'Hanif Hashim',
    role: 'SVG Pipeline & 3D Prototyping',
    bio: 'Hanif built the pipeline that converts OpenStreetMap data into print-ready tactile SVG files, and created the browser-based 3D prototype. He also maintains the open-source repository so future students can generate updated maps when the campus changes.',
    imageSrc: null,
  },
]
