import Image from "next/image";

export default function Footer() {
    return (
        <div
            className="w-full bg-[#007E66] mt-[25px] flex h-[73px] justify-center items-center font-['Montserrat'] space-x-[35rem]">
            <div className="flex space-x-5">
                <Image
                    src="/images/img.png"
                    width={25}
                    height={25}
                    alt="Picture of the author"
                />

                <a role="button">View Property Map</a>
            </div>
            <div>
                <a role="button"
                   className="bg-[#FFB20C] hover:bg-red-700 text-black text-sm font-bold px-4 py-2 text-[14.19px] rounded-full">
                    View Property Full Details
                </a>
            </div>
        </div>
    )
}