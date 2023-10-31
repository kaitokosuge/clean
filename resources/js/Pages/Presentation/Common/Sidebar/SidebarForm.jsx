import { useState } from "react"


function SidebarForm({value,setValue,formValue, handleFormSubmit , setFormValue}) {
    
    return (
        <div className='shadow-custom mt-[50px] pb-[10px] px-[15px]'>
            <form onSubmit={handleFormSubmit}>
                <input onChange={ (e) => { setFormValue({title: e.target.value , id:crypto.randomUUID()});setValue({title: e.target.value , id:crypto.randomUUID()}) } } value={ value.title }name="title" type="text" placeholder="add folder" className="relative outline-none rounded-[5px] w-full bg-[#202020] pr-[50px] duration-500 focus:border-sky-900 focus:ring-sky-900 focus:duration-500" />
                <button type="submit" className="pointer z-30 text-white border  border-gray-600 rounded-md px-[15px] py-[2px] absolute right-[20px] top-[56px] duration-200 hover:bg-sky-900 hover:text-black">▷</button>
            </form>
        </div>
    )
}

export default SidebarForm;