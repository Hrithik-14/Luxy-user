import { SocialNetworks } from "./footer.types";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaSnapchatGhost } from "react-icons/fa";
import Image from "next/image";
import LinksSection from "./LinksSection";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  { id: 1, icon: <FaTwitter />, url: "https://twitter.com" },
  { id: 2, icon: <FaFacebookF />, url: "https://facebook.com" },
  { id: 3, icon: <FaInstagram />, url: "https://www.instagram.com/auravault06?igsh=NzBudmE1YTlsemNo" },
  { id: 4, icon: <FaSnapchatGhost />, url: "https://snapchat.com" },
  { id: 5, icon: <FaYoutube />, url: "https://youtube.com" },
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
              <div className="mb-6">
                <Image
                  src="/images/company.jpeg"
                  alt="Company Logo"
                  width={192}
                  height={72}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-brand/60 text-sm mb-9">
                It&apos;s an experience that brings joy and comfort. Every bite tells a story of culture, flavor, and love.
              </p>
              <div className="flex items-center flex-wrap gap-2">
                {socialsData.map((social) => (
                  <a
                    href={social.url}
                    key={social.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-brand hover:text-white transition-all w-7 h-7 rounded-full border border-brand/20 flex items-center justify-center p-1.5"
                  >
                    {social.icon}
                  </a>
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