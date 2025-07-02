import Link from "next/link";
import "@/components/components.css";

export default function Footer() {
  return (
    <div className="footerText">
      Made after personal research on Week 10 of{" "}
      <Link className="footerLink" href={"https://techeducators.co.uk"}>
        Tech Educators
      </Link>{" "}
    </div>
  );
}
