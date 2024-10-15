import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'
import '@/styles/tailwind.css'

const GTM_ID = 'GTM-TBXXHCM7'

export const metadata = {
  title: {
    template: '%s - Ben Ricker',
    default:
      'Ben Ricker - Software Engineer, Managing Leader, Culture Fanatic, and Guy Who\s Happy You\'re Here',
  },
  description:
    "I'm Ben Ricker, a Director of Engineering and Engineering Manager living a little north of Boston. I'm passionate about helping engineers grow and thrive, thinking through and building engaging features for clients, running creative product sprints with my teamm, and finding any way I can to make work a bit more fun for anyone interested",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <GoogleTagManager gtmId={GTM_ID} />
      </head>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <GoogleTagManagerNoScript gtmId={GTM_ID} />
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
