import { client, projectsQuery, experienceQuery, skillsQuery, bioQuery } from "@/lib/sanity";
import type { Project, Experience, Skill, Bio } from "@/types";
import { fallbackProjects, fallbackExperiences, fallbackSkills } from "@/lib/fallback";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/Experience";
import Inspirations from "@/components/Inspirations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

async function getData() {
  try {
    const [bio, projects, experiences, skills] = await Promise.all([
      client.fetch<Bio>(bioQuery),
      client.fetch<Project[]>(projectsQuery),
      client.fetch<Experience[]>(experienceQuery),
      client.fetch<Skill[]>(skillsQuery),
    ]);
    return {
      bio,
      projects: projects?.length ? projects : fallbackProjects,
      experiences: experiences?.length ? experiences : fallbackExperiences,
      skills: skills?.length ? skills : fallbackSkills,
    };
  } catch {
    return { bio: null, projects: fallbackProjects, experiences: fallbackExperiences, skills: fallbackSkills };
  }
}

export default async function Home() {
  const { bio, projects, experiences, skills } = await getData();
  return (
    <main className="text-gray-400 bg-gray-900 font-sans">
      <Navbar />
      <About bio={bio} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <ExperienceSection experiences={experiences} />
      <Inspirations />
      <Contact />
      <Footer />
    </main>
  );
}
