import { getPayload } from "payload";
import config from "@payload-config";
import Link from "next/link";

const Blogs = async () => {
  const payload = await getPayload({ config });

  const blogs = await payload.find({
    collection: "blogs",
    limit: 10,
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Blogs List</h1>
      <ul className="grid grid-cols-4 gap-2">
        {blogs.docs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <li key={blog.slug} className="mb-4 p-4 border border-gray-300">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p>{blog.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Blogs;
