import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project", title: "Project", type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "subtitle", title: "Tech stack / subtitle", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "image", title: "Demo image / GIF", type: "image", options: { hotspot: true } }),
    defineField({ name: "link", title: "Live link", type: "url" }),
    defineField({ name: "repo", title: "Repo / drive link", type: "url" }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});

export const experience = defineType({
  name: "experience", title: "Work Experience", type: "document",
  fields: [
    defineField({ name: "position", title: "Job title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "startDate", title: "Start date", type: "string" }),
    defineField({ name: "endDate", title: "End date", type: "string" }),
    defineField({ name: "current", title: "Current role?", type: "boolean" }),
    defineField({ name: "brief", title: "One-line summary", type: "text" }),
    defineField({ name: "details", title: "Bullet points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "logo", title: "Company logo", type: "image", options: { hotspot: true } }),
  ],
});

export const skill = defineType({
  name: "skill", title: "Skill", type: "document",
  fields: [
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "technologies", title: "Technologies", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});

export const post = defineType({
  name: "post", title: "Blog Post", type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
  ],
});
