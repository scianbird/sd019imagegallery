import { FileUpload } from "@/components/FileUpload";
import "@/components/components.css";

export default function upload() {
  return (
    <>
      <section className="theDropzone">
        <h1>Please upload an image here!</h1>
        <FileUpload />
      </section>
    </>
  );
}
