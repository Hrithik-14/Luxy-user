import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { ReactNode } from "react";

type InfoPageProps = {
  title: string;
  children: ReactNode;
};

export default function InfoPage({ title, children }: InfoPageProps) {
  return (
    <main className="min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 xl:px-0 py-14 sm:py-20">
        <h1
          className={cn([
            integralCF.className,
            "text-3xl sm:text-4xl text-brand mb-8",
          ])}
        >
          {title}
        </h1>
        <div className="space-y-5 text-brand/70 text-[15px] sm:text-base leading-[1.85]">
          {children}
        </div>
      </div>
    </main>
  );
}
