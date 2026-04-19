export type TeamMember = {
  name: string
  role: string
  bio: string
  imageSrc: string | null
}

export const TEAM: TeamMember[] = [
  {
    name: 'Catherine Zaloshnja',
    role: 'UX Researcher & Prototype Lead',
    bio: 'Catherine led client engagement with ACSD and conducted the primary user research sessions with Daud. She directed fabrication for the embroidery prototype series and managed the co-design feedback cycles across all iterations.',
    imageSrc: null,
  },
  {
    name: 'Suchetha Thyamagundlam',
    role: 'Interaction Designer',
    bio: 'Suchetha designed the Tactonom audio interaction layer and the wayfinding script for the Hall–metro corridor. She also managed the ProBlind compliance review process and coordinated with Vytautas throughout the project.',
    imageSrc: null,
  },
  {
    name: 'Hanif Hashim',
    role: 'Technical Lead',
    bio: 'Hanif built the SVG pipeline — five stages from OpenStreetMap GeoJSON to ProBlind Standard v4 SVG export — and the Three.js 3D web prototype. He also maintains the open-source pipeline repository.',
    imageSrc: null,
  },
]
