import { Button } from "@/components/ui/button";
import { IconCamera, IconHome2, IconMoodPuzzled } from "@tabler/icons-react";
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
      <Link href={"/"}>
        <Button
          className="headerButton"
          onClick={RevalidatePath}
          variant="ghost"
        >
          {" "}
          <IconHome2 />
          Home
        </Button>
      </Link>
      <Link href={"/upload"}>
        <Button className="headerButton" variant="ghost">
          {" "}
          <IconCamera />
          Upload
        </Button>
      </Link>
      <Link href={"/writeup"}>
        <Button className="headerButton" variant="ghost">
          {" "}
          <IconMoodPuzzled />
          How?
        </Button>
      </Link>
    </div>
  );
}
