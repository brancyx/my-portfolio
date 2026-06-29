import { defineField, defineType } from "sanity";
export const bio = defineType({
  name: "bio", title: "Bio / Profile", type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "taglines", title: "Typewriter taglines", type: "array", of: [{ type: "string" }], description: "e.g. 'software engineer.'" }),
    defineField({ name: "about", title: "About paragraph", type: "text" }),
    defineField({ name: "resumeUrl", title: "Resume URL", type: "url" }),
    defineField({ name: "photo", title: "Profile photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "telegram", title: "Telegram URL", type: "url" }),
  ],
});
