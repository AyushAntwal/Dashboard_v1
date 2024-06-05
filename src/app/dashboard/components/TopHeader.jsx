import React from 'react'

function TopHeader() {
    return (
<div className="w-[1511px] h-14 py-2 flex-col justify-start items-start gap-[15px] inline-flex">
    <div className="w-[1511px] px-20 justify-between items-center inline-flex">
        <img className="w-[110px] h-[39px]" src="/images/image-1.png" />
        <div className="justify-center items-center gap-6 flex">
            <div className="text-neutral-800 text-[13px] font-bold font-['SF Pro Display']">Stays</div>
            <div className="text-neutral-500 text-[13px] font-normal font-['SF Pro Display']">Experiences</div>
            <div className="text-neutral-500 text-[13px] font-normal font-['SF Pro Display']">Online Experiences</div>
        </div>
        <div className="justify-start items-center gap-[27px] flex">
            <div className="text-neutral-800 text-sm font-medium font-['Roboto']">Airbnb your home</div>
            <div className="h-10 p-1.5 rounded-[100px] border border-neutral-200 justify-end items-center gap-3.5 flex">
                <div className="flex-col justify-start items-start gap-1 inline-flex" />
                <div className="w-7 h-7 bg-neutral-500 rounded-full" />
            </div>
        </div>
    </div>
</div>
    )
}

export default TopHeader