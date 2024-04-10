"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { addMailerliteContact } from "@/lib/actions";
export default function LeadForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit", "clicked");
    const formData = new FormData(e.target);
    addMailerliteContact(formData);
  };

  return (
    <section
      className="py-12 px-4 bg-sky-900 flex flex-col items-center justify-center"
      id="contactBlock"
    >
      <div className="bg-white py-8 px-12 rounded-lg max-w-[600px] w-full">
        <div className="py-8 mx-auto text-center">
          <h2>Get Started and Contact Us</h2>
          <p>Simply fill in the form and we&apos;ll be in touch</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full mx-auto max-w-[600px]"
          id="contactForm"
        >
          <div>
            <label className="text-base font-medium">First name</label>
            <Input name="name" type="text" />
          </div>
          <div>
            <label className="text-base font-medium">Email</label>
            <Input type="email" name="email" />
          </div>
          <div>
            <label className="text-base font-medium">Phone</label>
            <Input type="phone" name="phone" />
          </div>
          <div>
            <label className="text-base font-medium">
              Let us know anything
            </label>
            <Textarea name="info" />
          </div>
          <div className="py-4 w-2/3 relative mx-auto">
            <Button
              variant="default"
              size="lg"
              type="submit"
              className="bg-orange-500 w-full"
            >
              Contact Us
            </Button>
            <Image
              src={"/logos/ndis.svg"}
              width={32}
              height={32}
              alt="ndis-logo"
              className="absolute top-1/2 right-[-20%] -translate-y-[50%]"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
