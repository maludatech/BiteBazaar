import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <div className="relative w-full bg-primary_color sm:h-screen">
        <div className="absolute top-0 left-0 w-full">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block fill-[#1C2123]">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="body-container bg-primary_color w-full h-full py-20 lg:pt-36 text-white">
            <div className="flex flex-col gap-4 items-center justify-center">
                <Link href={"/"} className="flex items-center justify-center gap-1 pb-4">
                    <FontAwesomeIcon icon={faBurger} className="size-10 text-secondary_color"/>
                    <h1 className="text-secondary_color text-4xl font-bold">BiteBazaar</h1>
                </Link>
                <div className="flex flex-col gap-4 justify-between max-w-[600px] sm:flex-row px-4 sm:px-0">
                    <div className="w-full sm:w-1/2 flex flex-col gap-4 sm:gap-8">
                        <p>Block 114 Plot 4, Akiogun street, Oniru, Victoria island, Lagos state</p> 
                        <p className="font-bold">TEL: +2348163887385</p> 
                        <p className="font-bold">Email: Sales@BiteBazaar.com</p> 
                    </div>
                    <div className="w-full flex flex-col gap-4 sm:w-1/2">
                        <Link href={"https://www.facebook.com/maludatech/"} className="flex flex-row w-full gap-2 items-center">
                            <FontAwesomeIcon icon={faFacebook} className="size-5"/>
                            <h1 className="text-lg">Facebook</h1>
                        </Link>
                        <Link href={"https://www.instagram.com/maludatech/"} className="flex flex-row w-full gap-2 items-center">
                            <FontAwesomeIcon icon={faInstagram} className="size-5"/>
                            <h1 className="text-lg">Instagram</h1>
                        </Link>
                    </div>
                </div>
                <div className="pt-10 flex flex-col gap-4 sm:flex-row items-center w-full justify-between px-4 sm:px-10">
                    <p className="uppercase">© Copyright © {currentYear} bitebazaar. All rights reserved.</p>
                    <h3 className="font-bold text-2xl font-pacifico">Original</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer