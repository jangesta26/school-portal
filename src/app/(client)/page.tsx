import Background from "@/components/Background/Background";
import Navbar from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image (Layered Behind) */}
      <Background />

      {/* Navbar (Layered Above) */}
      <div className="relative z-[99999]">
        <Navbar />
      </div>

      {/* Other content goes here */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[700px] px-6 text-center text-white">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-4xl text-xl font-bold">Welcome to AcadOne College</h1>
            <h2 className="md:text-3xl text-lg font-bold">Provincial School</h2>
          </div>
          <div>
            <p className="text-white/80 text-[15px] leading-relaxed mt-6">
              Shaping minds and building features since 1965
            </p>
            <div className="max-w-lg mx-auto flex flex-wrap items-center justify-center gap-4 mt-12">
              <Button variant="default" className="w-50 px-6 py-4 bg-blue-900 rounded-[2px]">
                Explore Programs
              </Button>
              <Button variant="default" className="w-50 px-6 py-4 bg-blue-900 rounded-[2px]">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}
