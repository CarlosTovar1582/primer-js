import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'

const testimonials = [
  [
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage3,
      },
    },
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage4,
      },
    },
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage9,
      },
    },
  ],
  [
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage7,
      },
    },
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage11,
      },
    },
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage8,
      },
    },
  ],
  [
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage5,
      },
    },
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage10,
      },
    },
    {
      content:
        'Lo Mejor en Productos',
      author: {
        name: 'Carlitos',
        role: 'Desarrollo',
        image: avatarImage6,
      },
    },
  ],
]

function Testimonial({ author, children }) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="ml-4">
          <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section className="py-8 sm:py-10 lg:py-16">
      <Container className="text-center">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Este testimonio es casi expresivo...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-600">
          Estas cosas si estab en su lugar por si falta algun comentario.
        </p>
      </Container>
      <Expandable className="group mt-16">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          {testimonials
            .map((column) => column[0])
            .map((testimonial, testimonialIndex) => (
              <li key={testimonialIndex} className="lg:hidden">
                <Testimonial author={testimonial.author}>
                  {testimonial.content}
                </Testimonial>
              </li>
            ))}
          {testimonials.map((column, columnIndex) => (
            <li
              key={columnIndex}
              className="hidden group-data-[expanded]:list-item lg:list-item"
            >
              <ul role="list">
                <ExpandableItems>
                  {column.map((testimonial, testimonialIndex) => (
                    <li
                      key={testimonialIndex}
                      className={clsx(
                        testimonialIndex === 0 && 'hidden lg:list-item',
                        testimonialIndex === 1 && 'lg:mt-8',
                        testimonialIndex > 1 && 'mt-8',
                      )}
                    >
                      <Testimonial author={testimonial.author}>
                        {testimonial.content}
                      </Testimonial>
                    </li>
                  ))}
                </ExpandableItems>
              </ul>
            </li>
          ))}
        </ul>
        <ExpandableButton>Continuar</ExpandableButton>
      </Expandable>
    </section>
  )
}
