import { Email, GitHub, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";


const Contact = () => {


    return (
        <div className="min-h-[400px]">
            <div className="container py-14" id="contact">
                <h1
                    data-aos="fade-up"
                    className="text-3xl lg:text-5xl  font-semibold text-center sm:text-4xl mb-3 "
                    style={{ marginBottom: "4.5rem" }}
                >
                    Contact <span className="text-primary animate-pulse group-hover:scale-105 duration-200">Me</span>
                </h1>

                <div className="flex items-center justify-center  ">
                    <div className="flex items-center justify-center space-x-6 bg-gray-300 w-[500px] py-3 rounded-full"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <a href="https://wa.me/08125021612" className="flex items-center justify-center w-12 h-12 bg-primary  border-2 border-main-color rounded-full lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer  hover:bg-main-color transform hover:scale-125">
                            <WhatsApp />
                        </a>
                        <a href="https://linkedin.com/in/adetoye-kehinde-a2b914240/" className="flex items-center justify-center w-12 h-12 bg-primary border-2 border-main-color rounded-full  lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer hover:bg-main-color transform hover:scale-125">
                            <LinkedIn />
                        </a>
                        <a href="https://github.com/DanXtech?page=2&tab=repositories" className="flex items-center justify-center w-12 h-12 bg-primary border-2 border-main-color rounded-full lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer hover:bg-main-color transform hover:scale-125">
                            <GitHub />
                        </a>
                        <a href="mailto:adetoyedaniel2020@gmai.com" className="flex items-center justify-center w-12 h-12 bg-primary  border-2 border-main-color rounded-full lg:text-2xl sm:text-[16px] text-main-color transition duration-300 hover:text-text-color cursor-pointer hover:bg-main-color transform hover:scale-125">
                            <Email />
                        </a>
                    </div>
                </div>
                {/* <ul className="flex flex-col gap-3">
                    <li className="text-white text-3xl">
                        <span className="pr-2">Email</span>:
                        <span>adetoyedaniel2023@gmail.com</span>
                    </li>
                    <li className="text-white text-3xl">
                        <span className="pr-2">Whatsapp Number</span>: 
                        <span>08125021612</span>
                    </li>      
                </ul> */}
            </div>

        </div>
    )
}

export default Contact
