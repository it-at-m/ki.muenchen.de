import { createContentLoader } from "vitepress";

export default createContentLoader("ki-systeme/*.md", {
  includeSrc: true,
  render: true,
  excerpt: true,
});
