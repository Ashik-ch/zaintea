import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import eidZain from "../assets/eid zain.mp4";

export default function Landing() {
    return (
        <div className="">
            <div className="w-full h-screen overflow-hidden">
                <video
                    src={eidZain}
                    alt="Ramadan Background"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
