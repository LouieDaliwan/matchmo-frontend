import items from "@/utilities/items";
import Property from "./property";

export default function Content() {

    const listItems = items.map((item, key) => <Property data={item} key={key}></Property>);

    return (
        <div className="w-full flex items-center justify-items-center">
            <div className="m-auto">
                <div className="mt-[3rem]">
                    {listItems}
                </div>
            </div>
        </div>
    )
}