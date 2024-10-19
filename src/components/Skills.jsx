import Marquee from "react-fast-marquee"
import { SkillsData } from "../constants/SkillsData"

const Skills = () => {
    return (
        <div>
            <div className="container w-full  flex flex-col items-center justify-center
            items-cente min-h-[400px]"
                style={{ marginTop: '2rem' }}
            >
                {/* bg-[#181818]  */}
                <div className="w-[95%] flex flex-col">
                    <div className="flex space-y-2 flex-col text-center lg:mb-20 sm:mb-10"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <span className="text-3xl lg:text-5xl  font-bold text-center">
                            SKILLS <span className="text-primary animate-pulse group-hover:scale-105 duration-200">INFO</span>
                        </span>
                        <span className="text-2xl text-center"
                            style={{ marginBottom: '2rem' }}
                        >
                            These are the technologies I`ve worked with
                        </span>
                    </div>
                    <Marquee
                        autoFill
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                    >
                        {SkillsData.map(({ id, images, title }) => {
                            return (
                                <div key={id} className="bg-[#202020] m-1 rounded-xl w-[120px] h-[120px] flex flex-col items-center justify-center gap-4 cursor-pointer"
                                    data-aos="zoom-in">
                                    <img src={images} className="w-[40px]" alt="" data-aos="zoom-in" />
                                    <h3 className=" cursor-pointer text-white " data-aos="fade-up">{title}</h3>
                                </div>
                            )
                        })}

                    </Marquee>
                </div>
            </div>
        </div>
    )

}
export default Skills
