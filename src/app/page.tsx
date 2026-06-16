import Image from "next/image";
import {
  foundation,
  gallery,
  photoStories,
  projects,
  stats,
  timeline,
} from "./site-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#14231d]">
      <SiteHeader />
      <Hero />
      <ImpactStrip />
      <Projects />
      <PhotoStory />
      <Gallery />
      <Timeline />
      <ContactPanel />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#14231d]/10 bg-[#f7f5ef]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a href="#home" className="min-w-0">
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold uppercase tracking-[0.18em] text-[#1f513d]">
              Welfare Foundation
            </span>
            <span className="block truncate text-base font-semibold">
              {foundation.village}
            </span>
          </span>
        </a>
        <nav aria-label="Primary navigation" className="hidden gap-6 text-sm font-medium md:flex">
          <a className="hover:text-[#9a3d24]" href="#projects">
            Projects
          </a>
          <a className="hover:text-[#9a3d24]" href="#photos">
            Photos
          </a>
          <a className="hover:text-[#9a3d24]" href="#gallery">
            Gallery
          </a>
          <a className="hover:text-[#9a3d24]" href="#timeline">
            Timeline
          </a>
          <a className="hover:text-[#9a3d24]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="hidden rounded-sm bg-[#9a3d24] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#7d301c] sm:inline-flex"
          href={`mailto:${foundation.email}`}
        >
          Get involved
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={foundation.heroImage}
          alt="A visual placeholder representing the Mohra Syedan village development project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#10241c]/70" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#10241c] via-[#10241c]/75 to-transparent" />
      </div>
      <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl content-center px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-3xl text-white">
          <div className="relative mb-8 size-40 overflow-hidden rounded-full border border-white/35 bg-white shadow-2xl sm:size-52 lg:size-64">
            <Image
              src={foundation.logoImage}
              alt={`${foundation.name} logo`}
              fill
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 208px, 160px"
              className="object-contain p-3 sm:p-4"
            />
          </div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#f1c36b]">
            {foundation.region}
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            Building a place to pray, learn, and gather in {foundation.village}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {foundation.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#f1c36b] px-6 text-base font-semibold text-[#14231d] transition hover:bg-[#ffd27d]"
            >
              View the work
            </a>
            <a
              href="#photos"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/45 px-6 text-base font-semibold text-white transition hover:bg-white/10"
            >
              See progress
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactStrip() {
  return (
    <section aria-label="Foundation highlights" className="bg-[#14231d] text-white">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-6 sm:grid-cols-3 sm:px-8">
        {stats.map((item) => (
          <div key={item.label} className="py-4 sm:px-6">
            <p className="text-3xl font-semibold text-[#f1c36b]">{item.value}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-white/65">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Current work"
          title="A village foundation built around daily life."
          text="The site is structured so each project can grow into its own page later. For now, these cards give visitors a clear overview."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[280px] flex-col justify-between border border-[#14231d]/12 bg-white p-6 shadow-sm"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a3d24]">
                  {project.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-[#4b5b53]">{project.description}</p>
              </div>
              <p className="mt-8 w-fit rounded-sm bg-[#e8eee7] px-3 py-2 text-sm font-semibold text-[#1f513d]">
                {project.status}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoStory() {
  return (
    <section id="photos" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Photo record"
          title="Before, progress, and after updates can live here."
          text="Swap in real images as you collect them. The layout is ready for construction photos, school updates, benches, and village improvements."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {photoStories.map((story) => (
            <article key={story.label} className="overflow-hidden border border-[#14231d]/12 bg-[#f7f5ef]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-[#14231d] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  {story.label}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="mt-3 leading-7 text-[#4b5b53]">{story.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Timeline"
          title="Show the story as it unfolds."
          text="Visitors should be able to understand what happened first, what is active now, and what comes next."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {timeline.map((event) => (
            <article key={event.title} className="border-l-4 border-[#1f513d] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9a3d24]">
                {event.date}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{event.title}</h3>
              <p className="mt-3 leading-7 text-[#4b5b53]">{event.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-[#14231d] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f1c36b]">
            Gallery
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
            Real photos from the foundation work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            This section is ready to become a living archive of masjid progress,
            school work, benches, and village improvements.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.image}
              className="overflow-hidden border border-white/12 bg-white/8"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-white/82">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section id="contact" className="bg-[#14231d] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f1c36b]">
            Get involved
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Help turn village needs into lasting spaces for worship, education, and care.
          </h2>
        </div>
        <div className="border border-white/15 bg-white/8 p-6">
          <p className="text-white/75">
            Add verified donation details, contact names, bank information, or a Vercel-hosted form here when you are ready.
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <a className="font-semibold text-[#f1c36b]" href={`mailto:${foundation.email}`}>
              {foundation.email}
            </a>
            <a className="font-semibold text-[#f1c36b]" href={`tel:${foundation.phone.replaceAll(" ", "")}`}>
              {foundation.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a3d24]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#4b5b53]">{text}</p>
    </div>
  );
}
