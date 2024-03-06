export default function TbodyProperty({ data }) {
    return (

        <tbody>
        <tr className="font-['Montserrat'] text-black">
            <th scope="row" className="px-6 py-3 font-normal text-[14.19px] leading-[17.3px]">
                {data.name}
            </th>
            <th scope="row"  className="px-6 py-3 font-normal text-[14.19px] leading-[17.3px]">
                {data.model}
            </th>
            <th scope="row"  className="px-6 py-3 font-normal text-[14.19px] leading-[17.3px]">
                {data.location}
            </th>
            <th scope="row" className="px-6 py-3 font-normal text-[14.19px] leading-[17.3px]">
                {data.area}
            </th>
            <th scope="row"  className="px-6 py-3 font-normal text-[14.19px] leading-[17.3px]">
                {data.price}
            </th>
            <th scope="row"  className="px-6 py-3 font-normal text-[#007E66] text-[14.19px] leading-[17.3px]">
                {data.availability}
            </th>
        </tr>
        </tbody>
    )
}