import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'


const tableOfContents = {
  'Getting started': {
    'Getting started': 1,
    'Intro to Figma': 15,
    'Setting up your first artboard': 20,
  },
  Fundamentals: {
    'Strokes and fills': 21,
    'End points': 22,
    'Bezier curves': 26,
    'Designing on a grid': 31,
    'Vector shapes': 45,
  },
  'Boolean operations': {
    'Combining shapes': 50,
    'Subtracting shapes': 57,
    'Intersecting shapes': 66,
    Flattening: 78,
  },
  'Optimizing for production': {
    'Preparing for SVG': 82,
    'Configuring your export settings': 88,
    'Minifying and removing metadata': 95,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-20 sm:py-15 lg:py-20"
    >
      <Container>
        <SectionHeading number="2" id="table-of-contents-title">
          Nosotros
        </SectionHeading>
        <p className="mt-4">
          
            Electric Perú DLC EIRL ,somos fabricantes de tableros de distribucion tipo autosoportados,
            adosados ,empotrados con barras de cobre , PLC HMI ,variadores y automatizacion industrial
            Electric Perú DLC EIRL ,somos fabricantes de tableros de distribucion tipo autosoportados,
            adosados ,empotrados con barras de cobre , PLC HMI ,variadores y automatizacion industrial
            
          
        </p>  
      </Container>
    </section>
  )
}
