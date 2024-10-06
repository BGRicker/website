import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I&apos;m Ben Ricker.'
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hey, I&apos;m Ben Ricker.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m a Director of Engineering and Engineering Manager based just north of Boston.
            </p>
            <p>
              From a young age, I&apos;ve been captivated by figuring out how things tick and making them even better. My adventure in software kicked off over a decade ago, and it&apos;s been an amazing journey filled with growth, learning, and the chance to collaborate with both brilliant coworkers and incredibly creative clients.
            </p>
            <p>
              Throughout my career, I&apos;ve donned many hats—leading a variety of engineering projects, facilitating energizing ideation sprints, delving into AI architecture and implementations, and embracing all the quirky roles that come with agency life. Tackling challenges, crafting innovative products, and wowing with creative solutions is what really gets me excited.
            </p>
            <p>
              But what truly makes my day is being an engineering manager. There&apos;s nothing more rewarding than helping others grow and thrive—building strong relationships and fostering an environment where my team can learn and genuinely enjoy their work, which shines through in our outstanding engagement scores.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/bgricker" icon={GitHubIcon} className="mt-4">
              GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/benrickeronline/" icon={LinkedInIcon} className="mt-4">
              LinkedIn
            </SocialLink>
            <SocialLink href="https://www.instagram.com/sketchharvey/" icon={InstagramIcon} className="mt-4">
              Steve Harvey Art Project
            </SocialLink>
            <SocialLink
              href="mailto:hey@bgricker.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hey@bgricker.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
