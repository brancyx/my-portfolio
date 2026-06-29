import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { bio } from "./sanity/schemas/bio";
import { project, experience, skill, post } from "./sanity/schemas/schemas";

export default defineConfig({
  name: "default",
  title: "Brandon Chen — Portfolio CMS",
  projectId: "ia8o4hr6",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: [bio, project, experience, skill, post] },
});
