import SidebarForm from "../Presentation/Common/Sidebar/SidebarForm";
import { useState } from "react"; 


function SidebarFormContainer() {
    const [ formValue , setFormValue ] = useState();
    // console.log('sfc.jsx formValue',formValue)
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
                alert(`folder 「${formValue.title}」 が追加されました`)
                // getFolder();
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
        <SidebarForm handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
    );
}

export default SidebarFormContainer;