import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "../../../components/ProjectDetail";
import JsonLd from "../../../components/JsonLd";
import { getProjectBySlug, projects, reraLabel, Project } from "../../../data/projects";
import { siteUrl, breadcrumbSchema } from "../../../data/site";

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

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <ProjectDetail project={project} />
    </>
  );
}

// schema.org data for a project page: the page, the residential building (with RERA, approval, geo pin) and its breadcrumb.
function projectSchema(project: Project) {
  const url = `${siteUrl}/projects/${project.slug}`;
  const description = project.seo?.description || `${project.name} by NNK Constructions: ${project.tagline}. Located at ${project.address}.`;
  const [latitude, longitude] = project.coords ? project.coords.split(",").map(Number) : [];

  // Only real values; "Not Disclosed" fields are left out
  const facts = [
    { name: "Configuration", value: project.specs.bhk },
    { name: "Floors", value: project.specs.floors },
    { name: "Built-up area", value: project.specs.builtUp },
    { name: "Plot area", value: project.specs.plotArea },
    { name: "Status", value: project.status === "ongoing" ? "Ongoing" : "Completed" },
  ].filter((fact) => fact.value && fact.value !== "Not Disclosed");

  const identifiers = [
    project.specs.rera && { "@type": "PropertyValue", propertyID: reraLabel(project.slug), value: project.specs.rera },
    project.specs.approvalNumber && { "@type": "PropertyValue", propertyID: `${project.specs.approvalAuthority || "Approval"} permit`, value: project.specs.approvalNumber },
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: project.name,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${siteUrl}/#website` },
        publisher: { "@id": `${siteUrl}/#organization` },
        about: { "@id": `${url}#project` },
        primaryImageOfPage: `${siteUrl}${project.image}`,
      },
      {
        "@type": "ApartmentComplex",
        "@id": `${url}#project`,
        name: project.name,
        description,
        url,
        image: [project.image, ...project.gallery.slice(0, 3)].map((src) => `${siteUrl}${encodeURI(src)}`),
        address: {
          "@type": "PostalAddress",
          streetAddress: project.address,
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        ...(project.coords && { geo: { "@type": "GeoCoordinates", latitude, longitude } }),
        ...(identifiers.length > 0 && { identifier: identifiers }),
        additionalProperty: facts.map((fact) => ({ "@type": "PropertyValue", ...fact })),
      },
      breadcrumbSchema([
        { name: "Projects", path: "/projects" },
        { name: project.name, path: `/projects/${project.slug}` },
      ]),
    ],
  };
}
