import React from "react";
import { FooterLinks } from "./footer.types";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinksData: FooterLinks[] = [
  {
    id: 1,
    title: "company",
    children: [
      {
        id: 11,
        label: "about",
        url: "/about",
      },
      {
        id: 12,
        label: "features",
        url: "/features",
      },
     
    ],
  },

  {
    id: 3,
    title: "faq",
    children: [
      {
        id: 31,
        label: "Whatsapp Support",
        url: "/account",
      },
      {
        id: 32,
        label: "manage deliveries",
        url: "/manage-deliveries",
      },
      {
        id: 33,
        label: "orders",
        url: "/orders",
      },
      {
        id: 34,
        label: "payments",
        url: "/payments",
      },
    ],
  },

];

const LinksSection = () => {
  return (
    <>
      {footerLinksData.map((item) => (
        <section className="flex flex-col mt-5" key={item.id}>
          <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
            {item.title}
          </h3>
          {item.children.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className={cn([
                link.id !== 41 && link.id !== 43 && "capitalize",
                "text-brand/60 text-sm md:text-base mb-4 w-fit",
              ])}
            >
              {link.label}
            </Link>
          ))}
        </section>
      ))}
    </>
  );
};

export default LinksSection;
