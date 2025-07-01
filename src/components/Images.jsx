import { FileUpload } from "@/components/FileUpload";
import { db } from "@/utils/dbConnection";
import Image from "next/image";

export default async function Images() {
  const query = await db.query(
    "SELECT * from storage.objects where bucket_id = 'sd019'"
  );
  const data = query.rows;
  console.log(data);

  return (
    <>
      {data.map((image) => (
        <div key={image.id}>
          <Image
            src={`https://nqaqonpeiviufcjuzsjx.supabase.co/storage/v1/object/public/sd019/${image.name}`}
            alt={image.name}
            width={300}
            height={200}
          />
        </div>
      ))}
    </>
  );
}
