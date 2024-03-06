import HeroTitle from "@/app/Components/herotitle";

export default function Header()
{
    return (
        <div className="w-full h-60 bg-banner-bg bg-[50%_25%] bg-[length:100%]">
            <div
                className="backdrop-blur-[1px] bg-white/30 h-full w-full flex flex-none items-center justify-items-center">
                <HeroTitle></HeroTitle>
            </div>
        </div>
    );
}