import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "role",
      type: "text",
      label: "Role",
    },
  ],
};

export default Users;
