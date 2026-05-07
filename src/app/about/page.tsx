// import { cn } from "@/lib/utils";
// import { integralCF } from "@/styles/fonts";

// export default function AboutPage() {
//   return (
//     <main>
//       <div className="max-w-2xl mx-auto px-4 xl:px-0 py-16 sm:py-24">
//         <h1
//           className={cn([
//             integralCF.className,
//             "text-3xl sm:text-4xl text-brand mb-10",
//           ])}
//         >
//           About Us
//         </h1>

//         <div className="space-y-6 text-brand/70 text-[15px] sm:text-base leading-[1.85]">
//           <p>
//             Luxy Galleria is your destination for imported snacks, chocolates,
//             instant ramen, drinks, candies, gums, and worldwide treats in Kerala.
//             Founded by two brothers who grew up in the Gulf, Luxy Galleria was created
//             from a passion for discovering international flavours and bringing those
//             experiences closer to people in Kerala.
//           </p>
//           <p>
//             Having grown up around snacks and treats from different parts of the world,
//             we wanted to build more than just a store — a place where people can explore
//             global flavours, discover rare finds, and relive nostalgic favourites. From
//             Korean ramen and imported chocolates to viral drinks, candies, biscuits, chips,
//             gums, and limited-edition treats, every product is carefully selected to offer
//             something unique.
//           </p>
//           <p>
//             Based in Thalassery, Kerala, Luxy Galleria serves customers through both
//             in-store shopping and home delivery across Kerala. We focus on authentic
//             imported products, affordable pricing, careful packaging, and creating a
//             memorable snacking experience for every customer.
//           </p>
//           <p>
//             Whether you are searching for trending international snacks, rare imported
//             chocolates, Korean noodles, unique beverages, or gift hampers, Luxy Galleria
//             brings the world of snacks closer to you.
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-semibold text-[#b77a45] mb-10 text-center">
          About Us
        </h1>

        <p className="text-[#c49a74] text-lg leading-9 text-center">
          Welcome to Luxy Galleria, your destination for imported snacks,
          chocolates, instant ramen, drinks, candies, gums, and worldwide
          treats in Kerala. Founded by two brothers who grew up in the Gulf,
          Luxy Galleria was created from a passion for discovering
          international flavours and bringing those experiences closer to
          people in Kerala.
          <br />
          <br />
          Having grown up around snacks and treats from different parts of
          the world, we wanted to build more than just a store — a place
          where people can explore global flavours, discover rare finds, and
          relive nostalgic favourites. From Korean ramen and imported
          chocolates to viral drinks, candies, biscuits, chips, gums, and
          limited-edition treats, every product is carefully selected to
          offer something unique.
          <br />
          <br />
          Based in Thalassery, Kerala, Luxy Galleria serves customers through
          both in-store shopping and home delivery across Kerala. We focus on
          authentic imported products, affordable pricing, careful packaging,
          and creating a memorable snacking experience for every customer.
          <br />
          <br />
          Whether you are searching for trending international snacks, rare
          imported chocolates, Korean noodles, unique beverages, or gift
          hampers, Luxy Galleria brings the world of snacks closer to you.
        </p>

      </div>
    </div>
  );
};

export default AboutUs;