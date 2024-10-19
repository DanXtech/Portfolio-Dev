// import { GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import ProfileHero from "../assets/profile-view.png"
// import { NotebookIcon } from "lucide-react";
import CvDocument from "../assets/My-Cv.pdf";


import { useTypewriter } from "react-simple-typewriter"
const Hero = () => {

    const [typewriter] = useTypewriter({
        words: ['Frontend Developer', 'Graphics Designer', 'UI/UX Designer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = CvDocument;
        link.download = 'Daniel_Kehinde_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="py-14 dark:bg-black duration-300" id="/">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-[30px] place-items-center " >
                    <div className="space-y-5 sm:p-7 pb-6">
                        {/* <span className="mb-5 border">My Portfilo</span> */}
                        <h1
                            data-aos="fade-up"
                            className="text-3xl lg:text-5xl font-bold">Hi, It`s <span className="text-main-color">Daniel Kehinde</span></h1>
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="leading-8 tracking-wide text-2xl lg:text-3xl ">
                            I`m a
                            <span style={{ fontWeight: 'bold', color: 'green', marginLeft: '5px' }}>{typewriter}</span>

                        </h2>



                        <div className="flex space-x-3">
                            <a href="#contact"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className=" button-outline border py-1 px-4 rounded-2xl text-main-color transition duration-300 
                                hover:text-text-color hover:bg-white hover:text-black">Hire</a>
                            <button
                                onClick={handleDownloadCV}
                                className="flex items-center button-outline border py-1 px-4 rounded-2xl text-main-color transition duration-300 
                                hover:text-text-color hover:bg-white hover:text-black"
                            >
                                <span>Download CV</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div>
                        <img
                            data-aos="fade-up"
                            data-aos-offset="0"
                            className="border element p-10 rounded-full"
                            // className="animate-pulse group-hover:scale-105 duration-200"
                            width={350}
                            height={350}
                            src={ProfileHero} alt="" />
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Hero;
