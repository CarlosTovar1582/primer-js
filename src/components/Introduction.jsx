import Link from 'next/link'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'



export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Electric Perú Dlc E.I.R.L....
        </p>
        <p className="mt-4">
          Electric Perú DLC EIRL ,somos fabricantes de tableros de distribucion tipo autosoportados,adosados ,empotrados con barras de cobre , PLC HMI ,variadores y automatizacion industrial.
          
        </p>  
          
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Descripcion General 1',
            'Descripcion General 2',
            'Descripcion General 3',
            'Descripcion General 4',
            'Descripcion General 5',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>   
        <p className="mt-10">
         
        </p>
      </Container>
    </section>
  )
}
