import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Actual Work',
  description:
    'Agency work can often be a bit opaque. Here&apos;s a glimpse into some of the projects I&apos;ve been part of. Please note that due to confidentiality agreements, specific details may be limited.'
}


export default function Projects() {
  return (
      <SimpleLayout
        title="Projects I've Worked On"
        intro={
          <>
            Agency work can often be a bit opaque. Here&apos;s a glimpse into some of the projects I&apos;ve been part of. Please note that due to confidentiality agreements, specific details may be limited.
        
            I&apos;ve been fortunate to be at a great agency that has put me in challenging positions to grow over the last six years. I&apos;ve seen enough projects to learn the common factors that lead to success or failure, and I&apos;m excited to continue applying these insights to new projects.
        
            <br /><br />
            The bulk of my work has centered around engineering management, technical team leadership, architecting backend systems, client interactions, culture initiatives, and server consulting. From an engineering perspective, I&apos;ve specialized in Ruby on Rails servers, transaction performance, APIs, databases, and rapidly prototyping features for clients during sprints. When leading a team, I often step back from coding to focus on empowering engineers to excel. This includes pair programming, leading agile ceremonies, architecting systems, or handling client communication.
        
            <br /><br />
            Beyond my technical work and leadership, I&apos;ve been part of several culture initiatives at DEPT. I&apos;ve hosted &quot;Show and Tells,&quot; a series highlighting employees&apos; interests and hobbies outside of work, for over a year. I host our Engineering All Hands meetings, Lunch and Learns, trivia events, manage our popular Watercooler channel, run book clubs, participate in company-wide meetings, and strive to be a positive, public-facing presence. Remote culture is great, but it can feel isolating over time. I love bringing people together from the comfort of their homes.
          </>
        }
      >
      <div className="space-y-20">
        <SpeakingSection title="Places I've Worked">
          <Appearance
            href="https://www.rocketinsights.com/"
            title="Rocket Insights / DEPT"
            description="Rocket Insights, now part of DEPT, is a full-service product agency specializing in custom software development, design, and technology solutions for clients across various industries."
            event="Agency Work"
          />
          <Appearance
            href="https://www.liaisonedu.com/"
            title="Liaison International"
            description="Liaison International provides admissions management and enrollment marketing solutions to higher education institutions, streamlining the application process for students and simplifying admissions workflows for schools."
            event="Higher Education Technology"
          />
          <Appearance
            href="https://www.thefirehoseproject.com/"
            title="The Firehose Project"
            description="The Firehose Project is an online coding bootcamp offering immersive programs in web development, particularly in Ruby on Rails, providing mentorship and real-world projects. I attended the bootcamp and was offered a mentor job after finishing. I've taught several students online as well as in person at Harvard Business School. Both have been instrumental in how I think about instruction."
            event="Coding Bootcamp"
          />
        </SpeakingSection>
        <SpeakingSection title="DEPT Organization & Culture Achievements">
          <Appearance
            title="Management Excellence"
            description="Achieved outstanding Peakon engagement scores with a 9.8 rating, maintained zero team turnover, and implemented excellent hiring practices. Recognized for having some of the highest-rated employees in the global company. My manager and the head of software engineering have called management my 'superpower.'"
            event="Leadership Achievements"
            cta="Learn more"
          />
          <Appearance
            title="Culture Improvement & Fun"
            description="Hosted trivia nights and events centered around employees, including highly attended sessions highlighting employee hobbies and interests that ran for a full year. Managed the watercooler channel, lunch and learns, Engineering All Hands meetings, book club, and game club—always jumping on opportunities to make work life more enjoyable for everyone."
            event="Cultural Initiatives"
            cta="Explore initiatives"
          />
          <Appearance
            title="Efficient Internal Tooling Development"
            description="Developed custom internal tools for employee and organizational management, time logging, staffing allocation, and GitHub security. Managed our global GitHub tool, including custom tooling for validating employee repository access with automated emails and notifications. Built internal platforms for tracking employee skills, project history, portfolios, GitHub links, and resume building for quick client sharing."
            event="Process Improvements"
            cta="View tools"
          />
        </SpeakingSection>
        <SpeakingSection title="Client Projects">
          <Appearance
            href="https://uppababy.com/"
            title="UPPAbaby"
            description="UPPAbaby designs innovative, high-quality strollers and baby products. I worked for years on their server, highlighted by a 50% reduction in server working times through server profiling & performance refactoring. Trusted for everything from internal hiring to product suggestions."
            event="Consumer Products"
          />
          <Appearance
            href="https://www.barglance.com/"
            title="BarGlance"
            description="BarGlance is a mobile application that helps users discover local bars and nightlife spots. I led the engineering team in an AI ideation sprint, then built the backend features with a mobile engineer. We're building innovative solutions backed by AI, realtime occupancy metrics, and user engagement."
            event="Mobile Application"
          />
          <Appearance
            href="https://crystalbridges.org/"
            title="Crystal Bridges Museum"
            description="The Crystal Bridges Museum of American Art offers a world-class collection of American art with a focus on holistic health. I worked with our team on a Discovery Phase & feature ideation with a mission to get people to view the campus as one entitiy instead of disparate entities."
            event="Cultural Institution"
          />
          <Appearance
            href="https://www.pdmovementlab.com/"
            title="PD Movement Lab"
            description="PD Movement Lab focuses on research and innovative therapies for Parkinson’s disease. I've worked with the client as an team and technical lead, backend engineer, and account owner."
            event="Healthcare Research"
          />
          <Appearance
            href="https://horizon.mit.edu/"
            title="MIT Horizon"
            description="MIT Horizon is an initiative by the Massachusetts Institute of Technology that provides in-depth resources on emerging technologies. Working with MIT has been a delight, as we shipped several integral features ranging from better learning paths to integration with the Department of Defense."
            event="Educational Platform"
          />
          <Appearance
            href="https://lovevery.com/"
            title="Lovevery"
            description="Lovevery creates developmental play products and subscriptions for babies and toddlers. I worked with them around holiday shopping crunch time to launch their new subscription platform in new regions and languages."
            event="E-commerce / Child Development"
          />
          <Appearance
            href="https://www.ezcater.com/"
            title="ezCater"
            description="ezCater is an online marketplace for business catering. I worked with their team on a dynamic menu intake system, parsing a multitude of different menu formats into one programmatically dependable intake form. This would be a lot easier now with AI."
            event="Online Marketplace"
          />
          <Appearance
            href="https://www.clevelandbrowns.com/community/foundation"
            title="Cleveland Browns Foundation"
            description="The Cleveland Browns Foundation is the charitable arm of the Cleveland Browns NFL team. I led our team as team lead, account lead, and advisor to the engineers on the project."
            event="Non-Profit Organization"
          />
          <Appearance
            href="https://72disciples.app/"
            title="72 Disciples"
            description="72 Disciples is a mobile application designed to foster community and spiritual growth. I acted as team lead, backend engineer, and was even fortunate enough to go to Waltham to help the client reset their passwords onsite."
            event="Mobile Application"
          />
          <Appearance
            href="https://www.patientslikeme.com/"
            title="PatientsLikeMe"
            description="PatientsLikeMe is an online health community where patients share their experiences, find support, and learn from others with similar conditions. I worked on the API team with several talented team members."
            event="Healthcare Platform"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}