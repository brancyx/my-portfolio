import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ia8o4hr6",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = createImageUrlBuilder(client as any);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);

export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id, title, subtitle, description, link, repo,
  "image": image.asset->url,
  tags
}`;

export const experienceQuery = `*[_type == "experience"] | order(startDate desc) {
  _id, position, company, startDate, endDate, current, brief, details,
  "logo": logo.asset->url
}`;

export const skillsQuery = `*[_type == "skill"] | order(order asc) {
  _id, category, technologies
}`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, publishedAt, excerpt,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200),
  tags
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, publishedAt, excerpt, body, tags,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
}`;

export const bioQuery = `*[_type == "bio"][0] {
  name, taglines, about, resumeUrl,
  "photo": photo.asset->url,
  linkedin, github, email, telegram
}`;
