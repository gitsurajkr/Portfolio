import github from "@/public/Icon/github.svg";
import linkedin from "@/public/Icon/linkedin.svg";
import x from "@/public/Icon/x.svg";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="px-8 py-6 border-t mt-auto pb-14">
      <div className="flex justify-center space-x-10">
        <a 
          href="https://github.com/gitsurajkr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <Image src={github.src} alt="GitHub" loading="lazy" width={30} height={30} className="drop-shadow-md hover:drop-shadow-lg" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/suraj-kumar-46b43624b/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <Image src={linkedin.src} alt="Linkedin" loading="lazy" width={30} height={30} className="drop-shadow-md hover:drop-shadow-lg" />
        </a>
        
        <a 
          href="https://x.com/x_surajkr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <Image src={x.src} alt="Twitter" loading="lazy" width={30} height={30} className="drop-shadow-md hover:drop-shadow-lg" />
        </a>
      </div>
    </footer>
  );
}

