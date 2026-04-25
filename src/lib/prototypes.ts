export type Prototype = {
  iteration: number
  slug: string
  title: string
  material: string
  accentColor: string
  week: string
  description: string
  feedbackDaud?: string
  feedbackVytautas?: string
  imageAlt: string
  imageSrc: string | null
  videoSrc?: string
  imageWidth: number
  imageHeight: number
}

export const PROTOTYPES: Prototype[] = [
  {
    iteration: 1,
    slug: 'wood-cnc',
    title: 'CNC-Routed Wood',
    material: 'Baltic birch plywood',
    accentColor: '#7ec8a4',
    week: 'Week 4',
    description:
      'Our first physical prototype was routed from Baltic birch plywood on the EV building CNC mill. Building outlines were cut as shallow relief channels.',
    imageAlt:
      'CNC-routed Baltic birch plywood prototype showing building outlines as shallow engraved channels with a QR code in the upper right corner.',
    imageSrc: '/cart484-docs/images/prototype-wood.png',
    imageWidth: 2048,
    imageHeight: 1448,
  },
  {
    iteration: 2,
    slug: 'laser-acrylic',
    title: 'Laser-Cut Acrylic',
    material: '3mm clear acrylic',
    accentColor: '#7ab8d4',
    week: 'Week 6',
    description:
      'Switching to laser-cut 3mm acrylic allowed precise lines at consistent depths. We engraved the full floor plan — lobby, auditorium, corridor, and metro entry — with room-level detail and consistent stroke weights.',
    imageAlt:
      'Laser-cut acrylic prototype showing the Hall Building floor plan with auditorium, corridor, and metro entry engraved at consistent depths, with Braille title and QR code.',
    imageSrc: '/cart484-docs/images/prototype-acrylic.png',
    imageWidth: 2048,
    imageHeight: 1447,
  },
  {
    iteration: 3,
    slug: 'embroidery-v1',
    title: 'Embroidery on Fabric — v1',
    material: 'Cotton canvas, hand embroidery',
    accentColor: '#c4a3d4',
    week: 'Week 8',
    description:
      'Inspired by the Tactonom ecosystem\'s soft-surface format, we moved to hand-embroidered cotton canvas. Building perimeters were stitched in dense satin stitch (raised ridge); the metro corridor used a raised chain stitch. Different thread colors distinguish each zone.',
    imageAlt:
      'Embroidered cotton canvas prototype (unframed) showing raised satin stitch outlines and chain stitch corridors in multicolored thread on white fabric, with visible puckering.',
    imageSrc: '/cart484-docs/images/prototype-embroidery-v1.jpg',
    imageWidth: 1536,
    imageHeight: 2048,
  },
  {
    iteration: 4,
    slug: 'embroidery-v2-framed',
    title: 'Embroidery on Fabric — v2 (Framed)',
    material: 'Cotton canvas on rigid backing, hand embroidery',
    accentColor: '#d4a3a3',
    week: 'Week 10',
    description:
      'V2 addressed puckering by stretching the hand-embroidered canvas over a rigid backing and securing it in a shallow wooden frame.',
    imageAlt:
      'Framed embroidered canvas prototype with rigid backing in a wooden frame, showing multicolored stitching of the Hall Building floor plan and metro corridor with Braille title.',
    imageSrc: '/cart484-docs/images/prototype-embroidery-v2.jpg',
    imageWidth: 1453,
    imageHeight: 2048,
  },
  {
    iteration: 5,
    slug: '3d-web',
    title: '3D Web Prototype',
    material: 'Browser-based Three.js visualization',
    accentColor: '#a3c4d4',
    week: 'Week 11',
    description:
      'In parallel with physical fabrication, we built a browser-based 3D prototype using Three.js and the same GeoJSON pipeline. Buildings are extruded to heights proportional to floor count; campus paths are raised polylines; the metro tunnel sits below grade.',
    imageAlt:
      'Screenshot of the browser-based Three.js 3D prototype showing colorful extruded building footprints — pink, yellow, and blue blocks — with cyan path lines on a dark navy grid.',
    imageSrc: '/cart484-docs/images/prototype-3d-web.png',
    imageWidth: 2048,
    imageHeight: 1422,
  },
  {
    iteration: 6,
    slug: '3d-print',
    title: '3D Printed Map',
    material: 'PLA, FDM printing',
    accentColor: '#d4c4a3',
    week: 'Week 13',
    description:
      'The final physical prototype was 3D printed in PLA on Concordia\'s FDM printers. Building perimeters were printed as 2.2mm-high walls; paths as 1.5mm raised lines; entrances as 4mm diameter raised circles — all matching the ProBlind Standard v4 tactile specification. The print was scaled to A4 and includes a north arrow and legend.',
    imageAlt:
      'Video of the 3D printed PLA tactile map — an A4 sheet with raised building walls, path lines, and entrance circles.',
    imageSrc: null,
    videoSrc: '/cart484-docs/images/prototype-3d-print.mov',
    imageWidth: 800,
    imageHeight: 600,
  },
]
