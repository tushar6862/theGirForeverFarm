import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const IMAGES = [
  { src: "/images/room1.jpeg", alt: "Luxurious Bedroom" },
  { src: "/images/exterior.jpeg", alt: "Farm House Exterior" },
  { src: "/images/pool.jpeg", alt: "Swimming Pool" },
  { src: "/images/farm-path.jpeg", alt: "Green Walkway" },
  { src: "/images/playground.jpeg", alt: "Children's Playground" },
  { src: "/images/walkway.jpeg", alt: "Nature Path" },
  { src: "/images/bed1.jpeg", alt: "Cozy Double Bed" },
  { src: "/images/bed2.jpeg", alt: "Spacious Room" },
];

export function ImageGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-white" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y">
          {IMAGES.map((img, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0 relative aspect-[4/3]" key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative h-full w-full overflow-hidden rounded-xl cursor-zoom-in">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-black/95 border-none p-0 overflow-hidden">
                  <div className="relative w-full h-[80vh]">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/90 hover:bg-white text-primary border-primary/10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg bg-white/90 hover:bg-white text-primary border-primary/10"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      <div className="flex justify-center gap-2 mt-6">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === selectedIndex ? "bg-primary" : "bg-primary/20 hover:bg-primary/40"
            }`}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
