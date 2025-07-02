import "@/components/components.css";
//i know this isnt a component but i just didn't want to make a new css file..
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function writeup() {
  return (
    <>
      <section className="textSection">
        <div className="introText">
          Let us guess: you want to be able to upload images and then display
          them on screen. So did we.
          <p>So we set out to learn!</p>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="accorDian">
              ⭐️ We used Supabase Buckets for storage
            </AccordionTrigger>
            <AccordionContent className="accordContent">
              Although this is not the only online storage solution, since we
              have been using Supabase in class to store data, it also made
              sense that we stretched the limits of what we could make it do for
              us. There are plenty of online resources about setting up your
              bucket, but for us, we set up a public bucket with a policy to
              allow users to INSERT, UPDATE and DELETE
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="accorDian">
              ⭐️ We used SQL to query our bucket
            </AccordionTrigger>
            <AccordionContent className="accordContent">
              Funny story about this.. we actually could NOT find an online
              resource that suggests querying your storage database in the same
              way we have been querying our data tables. Could it be a security
              concern? It might be, but we also could not find anything
              suggesting so. So once you have your images uploaded, feel free to
              query using a query like SELECT * from storage.objects where
              bucket_id = BUCKET NAME
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="accorDian">
              ⭐️ We used Subabase Component Gallery to create the upload
              component
            </AccordionTrigger>
            <AccordionContent className="accordContent">
              YES. Subabase has a component gallery as of 2 months ago. We found
              this out and reported back to Manny & Joe. And now we are
              reporting to you. Now GO FORTH and CREATE AN IMAGE UPLOAD 🥳
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
