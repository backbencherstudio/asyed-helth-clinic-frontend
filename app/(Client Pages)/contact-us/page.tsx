"use client";

import ContactPage from "@/components/ContactPage";
import H2 from "@/components/reusable/H2";
import { useForm } from "react-hook-form";
export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="content mx-4  mb-24">
          <div className=" py-24 text-center ">
            <H2>Contact Us</H2>
            <p className="mt-4 max-w-xl mx-auto text-pragraphColor text-base">
              We'd love to hear from you. Whether you have a question, feedback, or need assistance—feel free to reach out!
            </p>
          </div>
          <ContactPage />
        </div>
      </div>
    </>
  );
}
