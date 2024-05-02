import Image from "next/image";
import { z } from "zod";

const galleryImageParser = z.object({
  images: z.array(
    z.object({
      id: z.string(),
      origin: z.string(),
      thumb: z.string(),
    })
  ),
  lastEvaluatedKey: z.string().optional(),
});

export default async function Gallery() {
  const image_cdn_domain = process.env.IMAGE_CDN_DOMAIN ?? "";
  const json = await fetch(
    "http://localhost:3000/api/image/list?limit=10"
  ).then((res) => res.json());

  const response = galleryImageParser.parse(json);

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {response.images.map((image) => (
          <li key={image.id}>
            <Image
              src={`${image_cdn_domain}/${image.thumb}`}
              alt={image.id}
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
