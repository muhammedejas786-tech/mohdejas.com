import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import rccImage from "@/assets/project-rcc.jpg";
import foundationsImage from "@/assets/project-foundations.jpg";
import canalCrown from "@/assets/damac-canal-crown.jpg";

const resumeUrl = "https://github.com/muhammedejas786-tech/mohdejas.com/releases/download/untagged-b2aacec4383ae707cc4c/Muhammed_Ejas_Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Ejas | Lead Structural Engineer" },
      { name: "description", content: "Portfolio of Muhammed Ejas, a Riyadh-based lead structural engineer with 10 years of international design experience." },
      { property: "og:title", content: "Muhammed Ejas | Lead Structural Engineer" },
      { property: "og:description", content: "Steel, concrete, and timber structural design across Saudi Arabia, the UAE, UK, US, and India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const roles = [
  { period: "Jan 2025 to Present", title: "Structural Design Engineer", company: "Dar Al Riyadh", place: "Riyadh, Saudi Arabia", summary: "Provides technical direction for building projects, leads a 15-member engineering and BIM team, and coordinates structural delivery across offices in the Philippines, Egypt, and Jordan.", projects: "PSS & HRDC, Saudi Arabia" },
  { period: "Aug 2024 to Dec 2024", title: "Structural Design Engineer", company: "AECOM GDC", place: "Bengaluru, India", summary: "Designed foundations, columns, beams, slabs, and walls for hotels and high-rise buildings up to 30 storeys. Coordinated with other disciplines and completed design quality checks.", projects: "Al Marjan, UAE" },
  { period: "Apr 2024 to Jul 2024", title: "Structural Design Engineer", company: "WSP Consultants India Pvt. Ltd.", place: "Bengaluru, India", summary: "Designed lateral load transfer systems to ACI standards for US buildings up to 54 storeys, including shear wall and coupling beam layouts.", projects: "255 East 77th St., New York · 259 George Street, New Brunswick" },
  { period: "Feb 2023 to Apr 2024", title: "Structural Design Engineer", company: "Khatib and Alami Engineering Consultants", place: "Bengaluru, India", summary: "Completed seismic analysis, flat slab design, nonlinear deflection checks, and a complex foundation system with more than 1,500 piles for major UAE developments.", projects: "Canal Heights-1 · Canal Crown-1 · Museum Parking, Cultural District" },
  { period: "Mar 2022 to Feb 2023", title: "Structural Design Engineer", company: "Enginate Consultants Pvt. Ltd.", place: "Srinagar, India", summary: "Designed timber and steel structures for UK residential and industrial projects to European standards and prepared detailed calculation reports.", projects: "Elsea Park Bourne · Bishops Stortford North, Parcels L&M" },
  { period: "Mar 2020 to Mar 2022", title: "Structural Design Engineer", company: "Structural Solutions", place: "Bengaluru, India", summary: "Analyzed, designed, and detailed RCC and steel structures for large residential, high-rise, and commercial buildings." },
  { period: "2018 to 2019", title: "Assistant Professor", company: "Royal College & Malabar College of Engineering", place: "Thrissur, India", summary: "Taught structural analysis, RCC, and steel design while continuing independent structural design assignments." },
  { period: "Aug 2016 to Jul 2018", title: "Freelance Structural Design Engineer", company: "Engineering Consultancy Services", place: "India · Remote", summary: "Designed RCC structural elements, performed frame analysis and feasibility assessments, and prepared value engineering recommendations." },
  { period: "Jun 2015 to Feb 2016", title: "Site Supervisor", company: "Energy Development Company Ltd.", place: "Pathanamthitta, India", summary: "Supervised dam construction work and interpreted design and shop drawings for site execution." },
];

const projects = [
  { image: canalCrown, number: "01", location: "Dubai, UAE", title: "High-rise buildings", note: "DAMAC Canal Crown 1 & 2" },
  { image: rccImage, number: "02", location: "Concrete structures", title: "RCC design", note: "Columns · Beams · Slabs · Shear walls" },
  { image: foundationsImage, number: "03", location: "United Arab Emirates", title: "Complex foundations", note: "1,500+ piles · Cultural District" },
];

const skillGroups = [
  { label: "Design", text: "Advanced structural analysis, finite element analysis, seismic and dynamic analysis, reinforced concrete, steel and timber design, foundations, flat slabs and value engineering" },
  { label: "Leadership", text: "Design direction, structural review, QA/QC audits, team mentorship, multidisciplinary coordination, client communication and technical reporting" },
  { label: "Software", text: "ETABS, SAFE, SAP2000, STAAD.Pro, Tekla, Tedds, Ansys, Master Series, Revit, Navisworks, BIM 360, AutoCAD and Bluebeam" },
  { label: "Standards", text: "Saudi Building Code, ACI, ASCE 7, IS Code and European standards" },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-t-8 border-t-primary border-b border-border bg-background/90 text-foreground backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#top" className="font-display text-lg font-bold uppercase tracking-tight">ME<span className="text-accent">.</span></a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest md:flex">
            <a className="transition-colors hover:text-accent" href="#work">Selected work</a>
            <a className="transition-colors hover:text-accent" href="#experience">Experience</a>
            <a className="transition-colors hover:text-accent" href="#credentials">Credentials</a>
          </nav>
          <a href="mailto:muhammedejas786@gmail.com" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-accent">
            Contact <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="relative w-full overflow-hidden border-b border-border bg-background">
        <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 opacity-10" width="420" height="420" viewBox="0 0 100 100" fill="none">
          <path d="M0 100L100 0M100 100L0 0M50 0V100M0 50H100" stroke="currentColor" strokeWidth="0.4" />
        </svg>
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-24 pb-20 pt-36 md:px-10 md:py-32 lg:px-16 lg:pb-28">
          <span className="mb-6 block font-display text-sm font-bold uppercase tracking-widest text-accent">Structural Engineering · Riyadh, Saudi Arabia</span>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
            Muhammed <span className="text-accent">Ejas</span><br />
            Lead Structural Engineer
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-foreground/80 md:text-xl">
            Structural design leadership for high-rise buildings, reinforced concrete structures, and complex foundations across five countries.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-13 bg-accent px-8 text-sm font-bold uppercase tracking-widest text-accent-foreground shadow-none hover:bg-accent/90">
              <a href={resumeUrl} target="_blank" rel="noreferrer">Resume <Download /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 border-foreground/25 bg-transparent px-8 text-sm font-bold uppercase tracking-widest text-foreground shadow-none hover:border-foreground hover:bg-transparent hover:text-foreground">
              <a href="#work">View work <ArrowDown /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-border bg-secondary/25 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[1fr_2fr] md:px-10 lg:px-16">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">Profile / 01</p>
            <div className="mt-8 flex gap-10">
              <div><strong className="font-display text-4xl font-bold">10</strong><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Years</p></div>
              <div><strong className="font-display text-4xl font-bold">05</strong><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Countries</p></div>
              <div><strong className="font-display text-4xl font-bold">15</strong><p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Team led</p></div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">Senior structural design and <span className="text-accent">team leadership</span>.</h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-foreground/70 md:text-lg">Lead-level structural engineer with 10 years of experience across Saudi Arabia, the UAE, the UK, the US, and India. Experienced in design management, technical review, QA/QC, multidisciplinary coordination, and leading engineering and BIM teams. Works across concrete, steel, timber, high-rise buildings, and complex foundation systems.</p>
          </div>
        </div>
      </section>

      <section id="work" className="w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <div className="mb-14 flex items-end justify-between border-b-2 border-primary pb-5">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">Structural range</h2>
            <p className="hidden font-display text-sm font-bold uppercase tracking-widest text-accent md:block">Global portfolio</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="group">
                <div className="relative mb-6 aspect-[16/10] overflow-hidden bg-primary">
                  <img src={project.image} alt={project.title} className="absolute inset-0 size-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" loading="lazy" width={1200} height={750} />
                  <span className="absolute bottom-0 left-0 bg-accent px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-accent-foreground">{project.number} · {project.location}</span>
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                <div className="my-4 h-px w-full bg-border" />
                <p className="text-sm leading-6 text-foreground/70">{project.note}</p>
              </article>

            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-y border-border bg-secondary/25 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:sticky md:top-12">
                Core<br /><span className="text-accent">capabilities</span>
                <span className="mt-5 block h-1 w-12 bg-accent" />
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-2 md:w-2/3">
              {skillGroups.map((group, i) => (
                <div key={group.label}>
                  <span className="mb-2 block font-display text-xs font-bold uppercase tracking-widest text-accent">0{i + 1} · {group.label}</span>
                  <p className="text-sm leading-7 text-foreground/75">{group.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="w-full py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <h2 className="mb-14 font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">Professional <span className="text-accent">timeline</span></h2>
          <div className="space-y-10">
            {roles.map((role, i) => (
              <article key={`${role.company}-${role.period}`} className="relative border-l-2 border-border pl-6 md:pl-8">
                <span className={`absolute -left-[7px] top-2 h-3 w-3 ${i === 0 ? "bg-accent" : "bg-primary"}`} />
                <p className={`font-display text-sm font-bold uppercase tracking-widest ${i === 0 ? "text-accent" : "text-foreground/45"}`}>{role.period}</p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight md:text-2xl">{role.title}</h3>
                <p className="mt-1 text-sm font-medium">{role.company}</p>
                <p className="text-sm text-muted-foreground">{role.place}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70">{role.summary}</p>
                {role.projects && <p className="mt-3 text-sm"><span className="font-semibold">Selected projects:</span> <span className="text-foreground/70">{role.projects}</span></p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="w-full border-t border-border bg-card py-20 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:px-16">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">Education / 05</p>
            <div className="mt-8 space-y-8">
              <div className="border-l-2 border-accent pl-5">
                <h3 className="font-display text-xl font-bold tracking-tight">M.Tech, Structural Engineering & Construction Management</h3>
                <p className="mt-2 leading-6 text-foreground/70">APJ Abdul Kalam Technological University · TKM College of Engineering<br />2018 · CGPA 8.36/10</p>
              </div>
              <div className="border-l-2 border-border pl-5">
                <h3 className="font-display text-xl font-bold tracking-tight">B.Tech, Civil Engineering</h3>
                <p className="mt-2 leading-6 text-foreground/70">University of Calicut<br />2015 · CGPA 6.79/10</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">Credentials / 06</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-4 bg-primary p-5 text-primary-foreground"><span className="flex h-11 w-11 items-center justify-center bg-accent font-display font-bold">PMP</span><span className="text-[11px] font-bold uppercase leading-tight tracking-wide">PMI Certified<br /><span className="font-normal opacity-60">No. 4511323<br />Valid to Sep 2029</span></span></div>
              <div className="flex items-center gap-4 border border-border bg-background p-5"><span className="flex h-11 w-11 items-center justify-center bg-primary font-display font-bold text-primary-foreground">SCE</span><span className="text-[11px] font-bold uppercase leading-tight tracking-wide">Professional Accreditation<br /><span className="font-normal opacity-60">No. 1111027</span></span></div>
              <div className="flex items-center gap-4 border border-border bg-background p-5"><span className="flex h-11 w-11 items-center justify-center bg-primary font-display font-bold text-primary-foreground">GATE</span><span className="text-[11px] font-bold uppercase leading-tight tracking-wide">Graduate Aptitude Test<br /><span className="font-normal opacity-60">Qualified 2016</span></span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-accent">Contact</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">Available for senior and lead structural engineering roles.</h2>
          <div className="mt-12 grid gap-8 border-t border-primary-foreground/15 pt-8 md:grid-cols-3">
            <a href="mailto:muhammedejas786@gmail.com" className="flex items-center gap-3"><Mail className="size-4" /><span className="break-all">muhammedejas786@gmail.com</span></a>
            <a href="https://linkedin.com/in/muhammedejas" target="_blank" rel="noreferrer" className="flex items-center gap-3"><Linkedin className="size-4" />linkedin.com/in/muhammedejas</a>
            <div className="flex items-center gap-3"><MapPin className="size-4" />Riyadh, Saudi Arabia</div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/15 pt-7 font-display text-[10px] uppercase tracking-widest text-primary-foreground/50">
            <p>© 2026 Muhammed Ejas</p>
            <p>Precision // Strength // Longevity</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
