import { CollectionConfig } from "payload/types";

const Pages: CollectionConfig = {
  slug: "pages",
  auth: true,
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
  ],
};

export default Pages;
