import { getPayload } from "payload";
import config from "@payload-config";
const Home = async () => {
  const payload = await getPayload({ config: config });

  const data = await payload.findGlobal({
    slug: "home",
  });

  console.log(data);

  return (
    <div className="flex-col w-full justify-center items-center min-h-screen">
      <h1 className="text-8xl font-bold text-red-400">Home Page</h1>
      <h1 className="text-2xl font-bold">{data.welcomeMessage}</h1>
    </div>
  );
};
