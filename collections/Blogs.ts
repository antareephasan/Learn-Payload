import { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "title",
      type: "text",
      label: "Blog Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Blog Description",
    },
  ],
};
