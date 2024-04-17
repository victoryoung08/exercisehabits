"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { addMailerliteContact } from "@/lib/actions";
import { useState } from "react";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
export default function LeadForm() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(isLoading);
    try {
      const formData = new FormData(e.target);
      addMailerliteContact(formData).then(() => {
        setIsLoading(false);
      });
    } catch (error) {
      console.log("Something went wrong!", error);
      setIsLoading(false);
    }
  };

  const list = [
    "Discuss your goals and needs",
    "Learn how exercise can help",
    "Talk about the best treatment plan for you",
  ];

  return (
    <section
      className="py-12 px-4 bg-sky-900  flex flex-col items-center justify-center"
      id="contactBlock"
    >
      <div className="bg-white py-8 px-4 lg:px-12 rounded-lg max-w-[600px] w-full">
        <div className="py-8 mx-auto flex flex-col text-center gap-4">
          <div className="flex flex-col gap-2">
            <h2>Get your Free Initial Consultation</h2>
            <p>Simply fill in the form and we&apos;ll be in touch</p>
          </div>
          <div>
            {list.map((l) => (
              <div className="flex items-center gap-2" key={l}>
                <SealCheck size={20} />
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full mx-auto max-w-[600px]"
          id="contactForm"
        >
          <div>
            <label className="text-base font-medium">First name</label>
            <Input name="name" type="text" required />
          </div>
          <div>
            <label className="text-base font-medium">Email</label>
            <Input type="email" name="email" required />
          </div>
          <div>
            <label className="text-base font-medium">Phone</label>
            <Input type="phone" name="phone" required />
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
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Contact Us"}
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
