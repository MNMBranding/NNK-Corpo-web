import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "../../../components/ProjectDetail";
import { getProjectBySlug, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const cleanName = project.name;
  const projectType = project.specs.type || (project.specs.bhk ? `${project.specs.bhk} Apartments` : "Apartments");
  const locationArea = project.address.split(',')[0] || "Hyderabad";

  // Use explicit custom SEO if written on the project in projects.ts; otherwise generate defaults
  const title = project.seo?.title || `${cleanName} | ${projectType} in ${locationArea}`;
  const description = project.seo?.description || `${cleanName} by NNK Constructions: ${project.tagline}. Located at ${project.address}.${project.specs.rera ? ` RERA Reg: ${project.specs.rera}.` : ''} View floor plans, master layout, amenities, and specifications.`;
  const keywords = project.seo?.keywords || [
    cleanName,
    `${cleanName} Hyderabad`,
    `${cleanName} Floor Plans`,
    `${cleanName} Brochure`,
    `${projectType} in ${locationArea}`,
    "NNK Constructions",
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${title} | NNK Constructions`,
      description,
      url: `/projects/${slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 675,
          alt: cleanName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | NNK Constructions`,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
