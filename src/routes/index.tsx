import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

const expertise = [
  {
    number: '01',
    title: 'Quality system',
    text: 'I build practical quality management systems that stand up in daily operations and under audit.',
  },
  {
    number: '02',
    title: 'Complaint resolution',
    text: '8D reports, root cause analysis, and actions that prevent the same issue from returning under a new name.',
  },
  {
    number: '03',
    title: 'Supplier quality',
    text: 'Supplier assessments, supply chain development, and control of critical inputs.',
  },
]

const situations = [
  'Internal and customer complaints are increasing',
  'An IATF 16949 or ISO 9001 audit is approaching',
  'Quality is slowing the launch of a new project',
  'Corrective actions have no clear owner',
]

function Arrow() {
  return <span aria-hidden="true" className="text-lg leading-none">→</span>
}

function App() {
  return (
    <main data-testid="quality-manager-page" data-state="ready" className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <section className="relative isolate min-h-[760px] overflow-hidden border-b border-border">
        <div className="blueprint-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background))_37%,hsl(var(--background)_/_0.22)_66%,hsl(var(--background)_/_0.06)_100%)]" />
        <img
          src="https://assets.macaly-user-data.dev/emw073dwgg7gun5drji53lyu/mz963v8hbg836kll1kwj56so/hTCIbv--kE5_ePflb8WWo/generated-M3vc-CdD.png"
          alt="Precision measurement of a machined automotive part with calipers"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center] opacity-90"
        />
        <div className="absolute inset-y-0 left-[4.5%] w-px bg-primary/80 max-md:hidden" />

        <header className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <a href="#introduction" className="group flex items-center gap-3" aria-label="Fast Help home">
            <span className="relative grid size-10 place-items-center border border-primary bg-primary font-mono text-[13px] font-semibold tracking-[-0.12em] text-primary-foreground">
              MD
              <span aria-hidden="true" className="absolute bottom-2 left-1/2 h-px w-5 -translate-x-1/2 bg-primary-foreground/70" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-primary">Fast Help</span>
              <span className="block text-xs uppercase tracking-[0.18em] text-foreground">Quality engineering</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.17em] text-foreground/80 lg:flex">
            <a href="#services" className="transition hover:text-primary">Services</a>
            <a href="#approach" className="transition hover:text-primary">Approach</a>
            <a href="#when" className="transition hover:text-primary">When I can help</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-4 bg-primary px-4 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-primary-foreground transition hover:brightness-110 sm:px-6">
            Consultation <Arrow />
          </a>
        </header>

        <div id="introduction" className="relative mx-auto flex min-h-[650px] max-w-[1440px] items-center px-6 pb-16 pt-12 md:px-12 md:pb-24 lg:px-28">
          <div className="max-w-3xl">
            <p className="reveal mb-7 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-10 bg-primary" /> Quality with direction
            </p>
            <h1 className="reveal reveal-delay font-display text-[clamp(4.25rem,10vw,9.75rem)] leading-[0.92] tracking-[-0.055em] text-foreground">
              <span className="block">Fast adaptation to</span>
              <span className="block">company</span>
              <span className="mt-[0.3em] block">quality problems =</span>
              <em className="mt-[0.3em] block">Fast Help.</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-10 max-w-lg text-base leading-7 text-foreground/75 md:text-lg">
              Independent quality management for the automotive industry. From the first part to a reliable process.
            </p>
            <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-5 border border-primary bg-primary px-6 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition hover:brightness-110">
                My services <Arrow />
              </a>
              <a href="#contact" className="inline-flex items-center gap-5 border border-border bg-background/50 px-6 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-foreground backdrop-blur-sm transition hover:border-primary hover:text-primary">
                Book a consultation <Arrow />
              </a>
            </div>
          </div>
          <p className="absolute bottom-8 right-6 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/45 md:right-12 lg:right-16">Tolerance · process · result</p>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-[1440px] divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['Results-focused', 'Measurable impact on quality, cost, and delivery performance.'],
            ['Practical approach', 'Solutions built on data, experience, and operational reality.'],
            ['Independent perspective', 'Objective assessment and recommendations without conflicts of interest.'],
          ].map(([title, text], index) => (
            <article key={title} className="px-7 py-9 md:px-10 md:py-11">
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              <h2 className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.16em]">{title}</h2>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Areas of collaboration</p>
            <h2 className="mt-5 max-w-md font-display text-5xl leading-[0.88] tracking-[-0.04em] md:text-7xl">Solutions that work <em>on the shop floor.</em></h2>
          </div>
          <div className="border-t border-border">
            {expertise.map((item) => (
              <article key={item.number} className="grid gap-4 border-b border-border py-8 sm:grid-cols-[72px_1fr] sm:gap-8">
                <span className="font-mono text-sm text-primary">{item.number}</span>
                <div>
                  <h3 className="font-display text-3xl tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="blueprint-grid relative min-h-[360px] overflow-hidden border-b border-border p-8 md:p-12 lg:min-h-[540px] lg:border-b-0 lg:border-r">
            <div className="absolute left-[16%] top-[18%] size-[54%] rounded-full border border-primary/50" />
            <div className="absolute left-[26%] top-[28%] size-[34%] rounded-full border border-primary/50" />
            <div className="absolute left-[43%] top-[8%] h-[75%] w-px bg-primary/50" />
            <div className="absolute left-[8%] top-[45%] h-px w-[76%] bg-primary/50" />
            <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Method / 01–04</p>
            <p className="absolute bottom-8 right-8 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/45">Root cause → action</p>
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 lg:py-20">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">How I work</p>
            <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.04em] md:text-6xl">Do more than find a deviation. <em>Remove its cause.</em></h2>
            <p className="mt-7 max-w-xl leading-7 text-muted-foreground">Every assignment starts in operations, not in a presentation. Together, we name the risk, set priorities, and establish controls so the result lasts after the project ends.</p>
            <ol className="mt-10 grid gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/80 sm:grid-cols-2">
              <li className="border-t border-border pt-4"><span className="mr-3 text-primary">01</span>Diagnosis</li>
              <li className="border-t border-border pt-4"><span className="mr-3 text-primary">02</span>Prioritisation</li>
              <li className="border-t border-border pt-4"><span className="mr-3 text-primary">03</span>Action</li>
              <li className="border-t border-border pt-4"><span className="mr-3 text-primary">04</span>Stabilisation</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="when" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">When collaboration makes sense</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.9] tracking-[-0.04em] md:text-7xl">When quality is not a detail, but <em>is holding back the whole project.</em></h2>
        </div>
        <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2">
          {situations.map((situation, index) => (
            <article key={situation} className="min-h-44 border-b border-r border-border p-6 md:p-8">
              <p className="font-mono text-xs text-primary">0{index + 1}</p>
              <h3 className="mt-10 max-w-sm font-display text-3xl leading-none tracking-[-0.025em]">{situation}</h3>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:px-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]">First step</p>
            <h2 className="mt-5 max-w-3xl font-display text-6xl leading-[0.82] tracking-[-0.05em] md:text-8xl">Let&apos;s talk about your <em>project.</em></h2>
          </div>
          <div className="self-end border-t border-primary-foreground/35 pt-6">
            <p className="max-w-sm text-base leading-7">Describe the situation, timeline, and goal. The site owner can add contact details before publishing.</p>
            <a href="#introduction" className="mt-8 inline-flex items-center gap-5 border border-primary-foreground bg-primary-foreground px-6 py-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-primary-foreground transition hover:bg-transparent hover:text-primary-foreground">
              Back to top <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-7 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-12 lg:px-16">
        <p>Automotive quality management</p>
        <p>© {new Date().getFullYear()} · Independent consultant</p>
      </footer>
    </main>
  )
}
