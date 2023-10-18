import { useState } from "react"


function SidebarForm() {
    const [ formValue , setFormValue ] = useState();
    console.log(formValue)
    const handleFormSubmit = async (e) => {

        e.preventDefault();
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;

        try{
            const res = await fetch('/folder',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token,
                },
                body: JSON.stringify(formValue),
            })
            if(res.ok){
                alert('sended!!!')
                console.log(formValue)
            } else{
                alert('ページを再読み込みし、もう一度送信してください')
                console.log('no-ok')
            }
        } catch(erros){
            console.log('error');
            alert('もう一度送信してください🙇')
        }
    }
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