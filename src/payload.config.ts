import { postgresAdapter } from "@payloadcms/db-postgres";

export default buildConfig({
  collections: [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
