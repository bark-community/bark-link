import Link from 'next/link';
import Image from 'next/image';
import { PanelsTopLeft } from 'lucide-react';
import { ArrowRightIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-[50] w-full border-b border-border/40 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6]">
        <div className="container flex h-14 items-center">
          <Link href="/" passHref>
            <a className="flex items-center justify-start transition-opacity duration-300 hover:opacity-85">
              <PanelsTopLeft className="mr-3 h-6 w-6" />
              <span className="font-bold text-primary-foreground text-lg md:text-xl">BARK | Fundraising</span>
              <span className="sr-only">BARK | Fundraising</span>
            </a>
          </Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-background" asChild>
              <a href="https://github.com/bark-community/crowdfunding-platform" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] text-accent" />
              </a>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter text-primary-foreground md:text-5xl lg:leading-[1.1]">
              BARK | Charity Aid
            </h1>
            <p className="max-w-[750px] text-center text-lg font-light text-secondary-foreground mt-4">
              A decentralized crowdfunding application on Solana, empowering global charitable initiatives with transparency and efficiency.
            </p>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default">
                <Link href="/dashboard">
                  <a className="flex items-center gap-2">
                    Demo <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </Link>
              </Button>
              <Button variant="outline">
                <a href="https://solana.com/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground">
                  Documentation
                </a>
              </Button>
            </div>
          </section>
          <div className="relative flex w-full justify-center">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="rounded-xl border shadow-sm dark:hidden"
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="hidden rounded-xl border border-border dark:block dark:shadow-gray-500/5"
            />
            <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden rounded-xl border dark:hidden lg:block"
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="absolute bottom-0 right-0 hidden rounded-xl border border-border dark:lg:block"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 md:py-0 bg-primary">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-secondary-foreground">
            Built on top of{' '}
            <a
              href="https://solana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 text-accent"
            >
              Solana Blockchain
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/bark-community/crowdfunding-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 text-accent"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
