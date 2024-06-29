import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: "o-RDS Docs",
      sidebar: [
        {label: 'Getting Started', 
          autogenerate: {directory: 'getting-started'},
        },
        {label: 'Backend Server', 
          autogenerate: {directory: 'backend-server'},
        },
        {label: 'Survey Design', 
          autogenerate: {directory: 'survey-design'},
        },
        {label: 'Admin Dashboard', 
          autogenerate: {directory: 'admin-dashboard'},
        },
      ]
    }),
  ],
});
