import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRocket from '@/images/logos/rocket.svg'
import logoLiaison from '@/images/logos/liaison.svg'
import logoFirehose from '@/images/logos/firehose.svg'
import logoUPPAbaby from '@/images/logos/rocket.svg'
import logoBarGlance from '@/images/logos/rocket.svg'
import logoCrystalBridges from '@/images/logos/rocket.svg'
import logoPDMovementLab from '@/images/logos/rocket.svg'
import logoMITHorizon from '@/images/logos/rocket.svg'
import logoLovevery from '@/images/logos/rocket.svg'
import logoEzCater from '@/images/logos/rocket.svg'
import logoClevelandBrowns from '@/images/logos/rocket.svg'
import logo72Disciples from '@/images/logos/rocket.svg'
import logoPatientsLikeMe from '@/images/logos/rocket.svg'


const projects = [
  {
    name: 'Rocket Insights/DEPT',
    description:
      'Rocket Insights is a full-service product agency specializing in custom software development, design, and technology. Acquired by DEPT, a global digital agency, they focus on delivering high-quality web and mobile applications for clients across various industries.',
    link: { href: 'https://www.rocketinsights.com/', label: 'rocketinsights.com' },
    logo: logoRocket,
  },
  {
    name: 'Liaison International',
    description:
      'Liaison International provides admissions management and enrollment marketing solutions to higher education institutions. Their platforms streamline the application process for students and simplify admissions workflows for educational organizations.',
    link: { href: 'https://www.liaisonedu.com/', label: 'liaisonedu.com' },
    logo: logoLiaison,
  },
  {
    name: 'UPPAbaby',
    description:
      'UPPAbaby designs innovative, high-quality strollers and baby products. They focus on creating intuitive, stylish, and sleek juvenile gear that meets the needs of new parents while appealing to their sense of style.',
    link: { href: 'https://uppababy.com/', label: 'uppababy.com' },
    logo: logoUPPAbaby,
  },
  {
    name: 'BarGlance',
    description:
      'BarGlance is a mobile application aimed at enhancing nightlife experiences by providing real-time information on local bars and venues. Users can discover new spots, check crowd levels, and stay updated on events and promotions.',
    link: { href: 'https://www.bar-glance.com/', label: 'bar-glance.com' },
    logo: logoBarGlance,
  },
  {
    name: 'Crystal Bridges Museum',
    description:
      'The Crystal Bridges Museum of American Art, located in Bentonville, Arkansas, offers a world-class collection of American art. The museum features stunning architecture, indoor galleries, and outdoor trails, integrating art with the natural beauty of the Ozarks.',
    link: { href: 'https://crystalbridges.org/', label: 'crystalbridges.org' },
    logo: logoCrystalBridges,
  },
  {
    name: 'PD Movement Lab',
    description:
      'PD Movement Lab focuses on research and innovative therapies for Parkinson’s disease. The lab collaborates with clinicians, researchers, and patients to develop movement-based interventions that improve quality of life for those affected by the condition.',
    link: { href: 'https://www.pdmovementlab.com/', label: 'pdmovementlab.com' },
    logo: logoPDMovementLab,
  },
  {
    name: 'MIT Horizon',
    description:
      'MIT Horizon is an initiative by the Massachusetts Institute of Technology that provides in-depth resources on emerging technologies. It offers articles, videos, and interactive content to help professionals and organizations stay ahead in a rapidly evolving tech landscape.',
    link: { href: 'https://horizon.mit.edu/', label: 'horizon.mit.edu' },
    logo: logoMITHorizon,
  },
  {
    name: 'Lovevery',
    description:
      'Lovevery creates developmental play products and subscriptions for babies and toddlers. Their products are designed by experts to support brain development and make learning fun for both children and parents.',
    link: { href: 'https://lovevery.com/', label: 'lovevery.com' },
    logo: logoLovevery,
  },
  {
    name: 'ezCater',
    description:
      'ezCater is the largest online marketplace for business catering. They connect businesses with over 100,000 local caterers and restaurants, making it easy to order food for meetings, events, and employee meals nationwide.',
    link: { href: 'https://www.ezcater.com/', label: 'ezcater.com' },
    logo: logoEzCater,
  },
  {
    name: 'Cleveland Browns Foundation',
    description:
      'The Cleveland Browns Foundation is the charitable arm of the Cleveland Browns NFL team. Dedicated to education and youth development, the foundation works to improve the quality of education and make a lasting impact in Northeast Ohio communities.',
    link: { href: 'https://www.clevelandbrowns.com/community/foundation', label: 'clevelandbrowns.com' },
    logo: logoClevelandBrowns,
  },
  {
    name: '72 Disciples',
    description:
      '72 Disciples is a mobile application designed to foster community and spiritual growth. It offers daily readings, reflections, and tools for users to engage with their faith and connect with others.',
    link: { href: 'https://72disciples.app/', label: '72disciples.app' },
    logo: logo72Disciples,
  },
  {
    name: 'PatientsLikeMe',
    description:
      'PatientsLikeMe is an online health community where patients share their experiences, find support, and learn from others with similar conditions. The platform helps users track their health and contributes valuable data to medical research.',
    link: { href: 'https://www.patientslikeme.com/', label: 'patientslikeme.com' },
    logo: logoPatientsLikeMe,
  },
  {
    name: 'The Firehose Project',
    description:
      'The Firehose Project is an online coding bootcamp offering immersive programs in web development, particularly in Ruby on Rails. It provides mentorship, real-world projects, and a supportive community to help students transition into tech careers.',
    link: { href: 'https://www.thefirehoseproject.com/', label: 'thefirehoseproject.com' },
    logo: logoFirehose,
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Projects I\'ve worked on.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I've contributed to"
      intro=""
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
