import { getPayload } from "payload";
import config from "@payload-config";

const BlogUniversal = async ({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await paramsPromise;

  const payload = await getPayload({ config });

  const blog = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (blog.totalDocs === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-400 text-5xl ">
          Blog not found for slug: {slug}
        </h1>
      </div>
    );
  }

  console.log(blog);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-red-400 text-5xl ">Blog slug: {slug}</h1>
      <h1 className="text-red-400 text-5xl font-bold ">
        Blog Title: {blog.docs[0].title}
      </h1>
      <p className="text-red-400 text-5xl ">
        Blog description: {blog.docs[0].description}{" "}
      </p>
    </div>
  );
};
export default BlogUniversal;
