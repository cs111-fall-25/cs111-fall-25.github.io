import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/schedule", "routes/schedule/page.tsx"),
  route("/policies", "routes/policies/page.tsx"),
  route("/inclass", "routes/inclass/page.tsx"),
  route("/inclass/:name", "routes/inclass/[name]/page.tsx"),
  route("/labs", "routes/labs/page.tsx"),
  route("/labs/:name", "routes/labs/[name]/page.tsx"),
  route("/projects", "routes/projects/page.tsx"),
  route("/projects/:name", "routes/projects/[name]/page.tsx"),
  route("/resources", "routes/resources/page.tsx"),
  route("/worksheets", "routes/worksheets/page.tsx"),
  route("/reading", "routes/reading/page.tsx"),
  route("/slides", "routes/slides/page.tsx"),
  route("/slides/00/intro", "routes/slides/00/intro/page.tsx")
] satisfies RouteConfig;
