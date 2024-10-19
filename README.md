# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// import { Button } from "@mui/material"

import { Button } from "@mui/material"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

const Contact = () => {

    // const form = useRef();

    // const [done, setDone] = useState(false)


    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_osc4e2a', 'template_shqxbz8', form.current, 'CPeQzEFGattc8V4eg')
    //         .then((result) => {
    //             console.log(result.text);
    //             setDone(true)

    //         }, (error) => {
    //             console.log(error.text);
    //         })
    // }
    return (
        <div className="min-h-[400px]">
            <div className="container py-14" id="contact">
                <h1
                    data-aos="fade-up"
                    className="text-3xl lg:text-5xl  font-semibold text-center sm:text-4xl lg:mb-20 sm:mb-10"
                    style={{ marginBottom: "4.5rem" }}
                >
                    Contact <span className="text-primary animate-pulse group-hover:scale-105 duration-200">Me</span>
                </h1>
                <ul className="flex flex-col gap-3">
                    <li className="text-white text-3xl">
                        <span className="pr-2">Email</span>:
                        <span>adetoyedaniel2023@gmail.com</span>
                    </li>
                    <li className="text-white text-3xl">
                        <span className="pr-2">Whatsapp Number</span>: 
                        <span>08125021612</span>
                    </li>
                    
                </ul>
{/*                 <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">


                        <div>
                            <div className="flex flex-col gap-4">
                                <input type="text"
                                    className="w-[100%] h-[40px] bg-transparent border px-4 rounded-full"
                                    placeholder="Full Name"
                                />
                                <input type="email"
                                    className="w-[100%] h-[40px] bg-transparent border px-4 rounded-full"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="flex flex-col gap-4 mt-4">
                                <input type="number"
                                    className="w-[100%] h-[40px] bg-transparent border px-4 rounded-full"
                                    placeholder="phone Number"
                                />
                                <input type="location"
                                    className="w-[100%] h-[40px] bg-transparent border px-4 rounded-full "
                                    placeholder="your Location"
                                />
                            </div>
                        </div>

                        <div>
                            <textarea placeholder="Send Message" cols="30" rows="10" className="w-[100%] h-[210px] bg-transparent border resize-none px-8 py-2 rounded-3xl" />
                        </div>

                        {/* <a className="bg-primary text-center  w-[100%] cursor-pointer py-3 rounded-full font-bold hover:bg-white hover:text-black transition duration-300 ">Send</a> */}
                        <Button variant="contained" style={{ borderRadius: "50px" }} color="success">

                            Send
                        </Button>

                        <span>{done && "Thanks for contacting me. I will give you the feedback"}</span>
                    </div>
                </form> */}
            </div>

        </div>
    )
}

export default Contact
