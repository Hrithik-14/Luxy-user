import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { SocialNetworks } from "./footer.types";
import { FaFacebookF, FaInstagram, FaTwitter,FaSnapchat, FaYoutube, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import LinksSection from "./LinksSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  { id: 1, icon: <FaSnapchat />, url: "https://www.snapchat.com/add/luxygalleria" },
  { id: 2, icon: <FaFacebookF />, url: "https://facebook.com" },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/luxygalleria?igsh=aDhpM2Zoc3FvejQw",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/luxysnackstation?igsh=MXAyNWQwZmZtaHoydQ==",
  },
  {
    id: 5,
    icon: <FaFacebook />,
    url: "https://www.facebook.com/share/1BLZJWnKyP/?mibextid=wwXIfr",
  },
  {
    id: 6,
    icon: <FaYoutube />,
    url: "https://youtube.com/@luxysnackstation?si=oqzX6swsa1f5hYBz",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        <div className="absolute bottom-0 w-full h-1/2 bg-[#f5ede4]" />
      </div>
      <div className="pt-8 md:pt-[50px] bg-[#f5ede4] px-4 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1
                className={cn([
                  integralCF.className,
                  "text-[28px] lg:text-[32px] mb-6",
                ])}
              >
                LUXY GALLERIA
              </h1>
              <p className="text-brand/60 text-sm mb-9">
              it’s an experience that brings joy and comfort.
               Every bite tells a story of culture, flavor, and love.
              </p>
              <div className="flex items-center">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    className="bg-white hover:bg-brand hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-brand/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              <LinksSection />
            </div>
            <div className="grid lg:hidden grid-cols-2 sm:grid-cols-4">
              <LinksSection />
            </div>
          </nav>
          <hr className="h-[1px] border-t-brand/10 mb-6" />
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;