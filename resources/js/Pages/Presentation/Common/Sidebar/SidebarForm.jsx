import { useState } from "react"


function SidebarForm(props) {
    const { handleFormSubmit , setFormValue } = props;
    return (
        <div className='shadow-custom mt-[50px] pb-[10px] px-[15px]'>
            <form onSubmit={handleFormSubmit}>
                <input onChange={(e) => setFormValue({title: e.target.value})} name="title" type="text" placeholder="add folder" className="relative rounded-[5px] w-full bg-[#202020] pr-[50px]"/>
                <button type="submit" className="pointer z-30 text-white border  border-gray-600 rounded-md px-[15px] py-[2px] absolute right-[20px] top-[56px] duration-200 hover:bg-yellow-500 hover:text-black">▷</button>
            </form>
        </div>
    )
}

export default SidebarForm;