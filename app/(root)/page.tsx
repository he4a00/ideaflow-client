import Hero from "@/components/shared/Hero";
import Template from "@/components/shared/Template";
import HowItWorks from "@/components/shared/HowItWork";
import Features from "@/components/shared/Feature";
import Widget from "@/components/shared/Widget";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Hero />
      <Template />
      <div className="container">
        <Features />
      </div>
      <HowItWorks />
      <Widget/>
    </div>
  );
}
