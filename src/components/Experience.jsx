import { Expericence } from "../constants/Expericence"
const Experience = () => {
    return (
        <>
            <div className="py-12  min-h-[450px]" id="experience" >
                <div className="container my-14 ">
                    <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl  font-semibold text-center  lg:mb-20 sm:mb-10"
                        style={{ marginBottom: '4rem' }}
                    >MY <span className="text-primary animate-pulse group-hover:scale-105 duration-200">EXPERIENCE</span></h1>
                    <div style={{ marginTop: "2rem" }} className="flex items-center justify-center">
                        <div className=" grid  grid-cols-1 lg:grid-cols-3 gap-4 gap-y-8 place-items-center ">
                            {/* <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 "> */}
                            {Expericence.map(({ id, images, yearEx, newpro }) => {
                                return (
                                    <>
                                        <div key={id}
                                            data-aos="fade-up"
                                            data-aos-delay={id.aosDelay}
                                            className="flex items-center sm:flex-row gap-7  border py-4 px-4 w-[350px] h-[60px]
                                 hover:bg-primary to-secondary hover:shadow-[0_0_40px_#fe9808] cursor-pointer  hover:text-black rounded-lg duration-300">
                                            <img src={images}
                                                width={50}
                                                height={50}
                                                alt="" />
                                            <div>
                                                <span className="lg:text-xl font-bold">{yearEx}</span>
                                                <h3 className=" text-sm">{newpro}</h3>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience