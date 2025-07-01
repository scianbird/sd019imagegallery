import { Button } from "@/components/ui/button";
import { IconCamera, IconHome2 } from "@tabler/icons-react";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import "@/components/components.css";

async function RevalidatePath() {
  "use server";
  revalidatePath("/");
}

export default function Header() {
  return (
    <div className="headerClass">
      <Link href={"/upload"}>
        <Button variant="ghost">
          {" "}
          <IconCamera />
          Upload
        </Button>
      </Link>
      <Link href={"/"}>
        <Button onClick={RevalidatePath} variant="ghost">
          {" "}
          <IconHome2 />
          Home
        </Button>
      </Link>
    </div>
  );
}
