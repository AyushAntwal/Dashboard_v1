import React from 'react'
export const navLink = [
    {
        "title": "Where",
        "sub_heading": "Check-in"
    },
    {
        "title": "Check-out",
        "sub_heading": "Who"
    },
    {
        "title": "Search destinations",
        "sub_heading": "Add dates"
    },
    {
        "title": "Add dates",
        "sub_heading": "Add guests"
    }
]



function Navigation() {
    return (
        <nav className="flex justify-center items-center">
            <div className="w-[743px] h-[63px] p-1.5 bg-white rounded-[500px] shadow border border-neutral-300 justify-start items-center gap-px flex ">
                {navLink.map((link, i) => (
                    <>
                        <div className="w-[209px] px-6 bg-white rounded-tl-[500px] rounded-bl-[500px] flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-neutral-800 text-xs font-['SF Pro']">{link.title}</div>
                            <div className="text-neutral-500 text-sm font-normal font-['SF Pro']">{link.sub_heading}</div>
                        </div>
                        {i != navLink.length - 1 && <div className="h-6 w-px bg-neutral-300"></div>}
                    </>
                ))}
                <img src="/icons/group-2.svg" alt="" srcset="" />
            </div>
        </nav>
    )
}

export default Navigation