import { Button } from "@mui/material";
import { useState } from "react";
import { ShowAllProject } from "../constants/ShowAllProject";

const ListProjectShow = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleToggleOverlay = (id) => {
        setActiveCard(activeCard === id ? null : id);
    };

    return (
        <div className="container py-14 mt-5">
            <div>
                <h1
                    data-aos="fade-up"
                    className="text-3xl font-semibold text-center sm:text-4xl lg:mb-20 sm:mb-10"
                    style={{ marginBottom: "2.5rem" }}
                >
                    MY FRONTEND{" "}
                    <span className="text-primary animate-pulse group-hover:scale-105 duration-200">
                        PROJECT
                    </span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {ShowAllProject.map(({ id, images, title, description, projectDate, ProjectProgress, demoLink }) => (
                        <div
                            key={id}
                            className="relative text-center group space-y-3 mb-6 sm:space-y-6  py-5 bg-dark to-secondary hover:shadow-[0_0_40px_#fe9808] text-white cursor-pointer rounded-lg duration-300"
                        >
                            <div className="px-4">
                                <div className="grid place-items-center">
                                    <img src={images} className="border" alt="" />
                                </div>
                                <h1 className="text-left text-2xl py-3 px-3">{title}</h1>
                                <div className="flex items-center justify-between px-3">
                                    <div className="flex items-center gap-2">
                                        <label>Project Date:</label>
                                        <span>{projectDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2  ">
                                        <span className="bg-white text-black px-[5px] rounded-full">{ProjectProgress}</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`absolute inset-0 flex items-center justify-center bg-opacity-80 bg-black h-[280px]  text-white transition-opacity duration-300 rounded-lg ${activeCard === id ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <p className="px-4">{description}</p>
                            </div>

                            {/* Button to toggle background and description */}
                            <div className="flex items-center  justify-center  gap-2 border-t pt-5 pb-1" style={{ position: 'relative', zIndex: 10 }}>
                                <Button variant="contained" color="primary" onClick={() => handleToggleOverlay(id)}>
                                    Show Description
                                </Button>

                                <a className="cursor-pointer" href={demoLink}>
                                    <Button variant="contained" color="success">
                                        Show Demo
                                    </Button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListProjectShow;

