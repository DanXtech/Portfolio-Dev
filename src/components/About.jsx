import AboutImage from "../assets/About-image-2.jpg"



const About = () => {
    return (
        <div className="py-12 sm:py-0 relative" id="about">
            <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl  font-semibold text-center "
                style={{ marginTop: '2.5rem', marginBottom: '1rem' }}
            >ABOUT <span className="text-primary animate-pulse group-hover:scale-105 duration-200">ME</span></h1>
            <div className="container min-h-[500px] flex items-center"
                style={{ marginTop: '2rem' }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 place-items-center">
                    {/* image section */}
                    <div data-aos="fade-up" data-aos-once="false">
                        {/* <img src={BannerPng} alt="" className="w-full max-w-[400px]" /> */}
                        <img className="w-full max-w-[500px] border " src={AboutImage} alt="" />
                    </div>
                    {/* text content section */}
                    <div className=" lg:pr-20 relative">
                        <div className="relative z-10 space-y-5">
                            <h1
                                data-aos="fade-up"
                                data-aos-delay="300"
                                className="text-3xl lg:text-4xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-300"
                                style={{ marginBottom: '1.5rem' }}
                            >
                                LIKE TO KNOW ABOUT ME
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="500" >
                                A Computer Science with B.s.c.  A self-taught  Software developer looking for an opportunity in web development. The mindset to fulfill life with wonderful memories and knowledge. I deal with any kind of project as a frontend developer with my Skills.
                            </p>

                        </div>
                        {/* backgrond color blob */}
                        <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
