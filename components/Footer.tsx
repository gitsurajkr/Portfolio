import github from "@/public/Icon/github.svg";
import linkedin from "@/public/Icon/linkedin.svg";
import x from "@/public/Icon/x.svg";

export function Footer() {
  return (
    <footer className="px-8 py-6 border-t mt-auto pb-14">
      <div className="flex justify-center space-x-6">
        <a 
          href="https://github.com/gitsurajkr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <img src={github.src} alt="GitHub" loading="lazy" className="w-10 h-10 drop-shadow-md hover:drop-shadow-lg" />
        </a>
        
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <img src={linkedin.src} alt="Linkedin" loading="lazy" className="w-10 h-10 drop-shadow-md hover:drop-shadow-lg" />
        </a>
        
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <img src={x.src} alt="Twitter" loading="lazy" className="w-10 h-10 drop-shadow-md hover:drop-shadow-lg" />
        </a>
      </div>
    </footer>
  );
}

