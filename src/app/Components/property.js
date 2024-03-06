
import TheadProperty from "./TableProperty/thead";
import TheadBody from "./TableProperty/tbody";
import PropertyFooter from './TableProperty/footer';

export default function Property({ data }) {
    return (
        <div className="w-[1061px] h-[205px] top-[368px] bg-white rounded-[25px] mt-[4rem] overflow-hidden">
            <div className="relative overflow-x-auto pt-[30px]">
                <table className="w-full md:border-spacing-4">
                    <TheadProperty />
                    <TheadBody data={data} />
                </table>
            </div>
            <PropertyFooter />
        </div>
    );
}