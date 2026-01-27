import { getPayload } from "payload";
import config from '@payload-config'

export default async function Home() {
  const payload = await getPayload({ config: config})

  const data = await payload.findGlobal({
    slug: "home"
  })

  console.log(data)

  return(
    <div className="flex w-full justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold">{data.welcomeMessage}</h1>
    </div>
  );
}
