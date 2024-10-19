import { GitHub } from "@mui/icons-material"
import { Button } from "@mui/material"
import { CornerUpLeft } from "lucide-react"
import { Link } from "react-router-dom"

const NavBackPage = () => {
    return (
        <div className="static z-10 shadow-md w-full flex items-center justify-between  dark:bg-black dark:text-white duration-300 py-4 px-4 cursor-pointer ">
            <Link to="/">
                <Button variant="contained" style={{ borderRadius: "100px", cursor: "pointer" }} color="success"
                >
                    <CornerUpLeft />
                </Button>
            </Link>
            <Link to="https://github.com/DanXtech?tab=repositories">
                <Button variant="contained" style={{ borderRadius: "100px" }} color="success">
                    <GitHub />
                </Button>
            </Link>


        </div>
    )
}

export default NavBackPage