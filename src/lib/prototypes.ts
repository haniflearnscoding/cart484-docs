export type Prototype = {
  iteration: number
  slug: string
  title: string
  material: string
  accentColor: string
  week: string
  description: string
  feedbackDaud: string
  feedbackVytautas: string
  imageAlt: string
  imageSrc: string | null
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
      'Our first physical prototype was routed from Baltic birch plywood on the EV building CNC mill. Building outlines were cut as shallow relief channels; the Hall Building was distinguished by a deeper pocket. The map covered the Hall–metro corridor at 1:500 scale.',
    feedbackDaud:
      'Daud noted that the raised channels were hard to distinguish from the routed depressions — the haptic hierarchy was inverted from what he expected. He also found the scale too compressed: individual corridor branches were not fingertip-readable.',
    feedbackVytautas:
      'Wood grain introduced tactile noise perpendicular to navigational lines, and the material would not survive repeated handling. Recommended switching to a more durable substrate.',
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
    feedbackDaud:
      'Better. The smooth acrylic surface eliminated material noise. However, the engraved path depth was too shallow for reliable finger tracking, and sharp edges at sheet boundaries caught his fingertip uncomfortably.',
    feedbackVytautas:
      'The engraved path depth (0.4mm) was too shallow — ProBlind standard requires a minimum of 0.6mm relief height for paths. Stroke widths also needed to match the v4 specification more closely.',
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
    material: 'Cotton canvas, machine embroidery',
    accentColor: '#c4a3d4',
    week: 'Week 8',
    description:
      'Inspired by the Tactonom ecosystem\'s soft-surface format, we moved to machine-embroidered cotton canvas. Building perimeters were stitched in dense satin stitch (raised ridge); the metro corridor used a raised chain stitch. Different thread colors distinguish each zone.',
    feedbackDaud:
      'He immediately preferred the soft surface — warmer and more comfortable than acrylic. He could distinguish building outlines from corridors reliably. Problem: the canvas substrate puckered along dense stitch lines, distorting geographic relationships between spaces.',
    feedbackVytautas:
      'The satin stitch ridge height was good (~0.8mm). Recommended a stiffer interfacing to prevent puckering, and suggested adding Braille labels at building entry points using a separate adhesive overlay.',
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
    material: 'Cotton canvas on rigid backing, machine embroidery + Braille overlay',
    accentColor: '#d4a3a3',
    week: 'Week 10',
    description:
      'V2 addressed puckering by stretching the embroidered canvas over a rigid backing and securing it in a shallow wooden frame. Braille adhesive dots were applied at building entry points. Scale was adjusted to 1:300 for the most critical corridor segment.',
    feedbackDaud:
      'This was the first prototype he could use without guidance. He traced the Hall Building perimeter, found the metro corridor path, and identified two of the four Braille entry labels correctly. He asked for a tactile north arrow and a Braille legend.',
    feedbackVytautas:
      'Approved the format for Tactonom compatibility. Suggested that the next iteration move to digital fabrication for scale reproducibility, and noted the Braille dots should be integrated into the embroidery rather than adhesive-applied.',
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
    feedbackDaud:
      'The 3D web prototype was demonstrated with audio descriptions read by a screen reader as he hovered over geometry. He found the audio-first interaction more useful than he expected, and suggested turn-by-turn audio navigation would be more valuable than the visual 3D rendering.',
    feedbackVytautas:
      'Confirmed geographic accuracy of the building footprints against the ProBlind database. The 3D web format is compatible with Tactonom\'s digital layer system. Recommended developing the audio interaction in parallel with the physical map.',
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
      'The final physical prototype was 3D printed in PLA on Concordia\'s FDM printers. Building perimeters were printed as 2.2mm-high walls; paths as 1.5mm raised lines; entrances as 4mm diameter raised circles — all matching the ProBlind Standard v4 tactile specification. The print was scaled to A4 and includes a Braille title, north arrow, and legend.',
    feedbackDaud:
      'The best yet. He navigated independently from the Hall Building lobby marker to the metro tunnel entrance without any verbal guidance — the first time any prototype had achieved that. He requested a smaller-scale version for his backpack.',
    feedbackVytautas:
      'Fully compliant with ProBlind Standard v4. Approved for upload to the ProBlind global database under an Open Access Creative Commons license. Recommended submitting the SVG pipeline as an open-source tool for other campuses.',
    imageAlt:
      '3D printed PLA prototype (photo pending) — A4 footprint with 2.2mm building perimeter walls, 1.5mm raised path lines, and 4mm entrance circles.',
    imageSrc: null,
    imageWidth: 800,
    imageHeight: 600,
  },
]
