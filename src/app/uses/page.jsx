import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Things I use to do stuff.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Things I use to do stuff."
      intro="Sometimes you need things to do stuff, and there are lots of things. Here are my things."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Mac Laptop for Work">
            Nothing too tricky, but this is just about every engineer&apos;s standard now. All my tools are based around this,
            and even if they could be ported to Windows it&apos;d be a pain.
          </Tool>
          <Tool title="iMac for Personal">
            I like to separate work from personal stuff as best I can. With my iMac, I have a center for both music 
            production & experimentation as well as for coding projects and writing. Music, text, photo, and phone 
            integration makes this all too convenient. I&apos;m ready for my Apple tatoo.
          </Tool>
          <Tool title="Sony WH-1000XM4">
            Joe suggested I buy these when we visited a Best Buy in Miami since I had left my headphones at home. I&apos;ve loved 
            them ever since. Perfect for blocking out everything else and getting into the zone.
          </Tool>
          <Tool title="A Standing Desk Dave Gave Me">
            I don&apos;t want to say I&apos;m glad Dave moved to San Diego, but the desk has been excellent and it was free.
          </Tool>
          <Tool title="SecretLab Titan Evo">
            Don&apos;t judge me for getting a fancy chair, I sit a bunch.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="NeoVim">
            I use NeoVim for most coding tasks, but also mix it up with VS Code every now and then for frontend heavy tasks especially.
          </Tool>
          <Tool title="Warp Terminal">
            I&apos;ve liked using this, it integrates with NeoVim well, and there are AI powered suggestions for whenever I forget how to start an interactive rebase.
          </Tool>
          <Tool title="Notion">
            My favorite note taking system, I use it for everything from work notes to personal tasks.
          </Tool>
          <Tool title="Things to-do list">
            I&apos;ve loved Things, and I have centered my productivity around whatever is on top of the to-do list. I struggled with trying to multitask, but this has done wonders for focus.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            The more I learn about it, and the more I see talented people use it, the more I like it.
          </Tool>
          <Tool title="iPad">
            The iPad is my favorite tool for drawing, doodling, and sketching for designs.
          </Tool>
          <Tool title="Procreate">
            Procreate is a near perfect app for drawing on the ipad, for work or personal.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Music Gear">
          <Tool title="Fractal FM9 MkII Turbo">
            The best modeler, it&apos;s perfect. Loading in tons of amps & effects is always fun.
          </Tool>
          <Tool title="Electro-Voice PXM-12MP">
            Great FRFR speaker that pairs well with the Fractal and my audio interface.
          </Tool>
          <Tool title="Ableton">
            I don&apos;t love Ableton, but it&apos;s about as intuitive as you can get for a DAW.
          </Tool>
          <Tool title="Too Many Guitars">
            Don&apos;t worry, I will sell some soon.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
