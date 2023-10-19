import SidebarForm from "../Presentation/Common/Sidebar/SidebarForm";
import { useState } from "react"; 


function FolderFetch() {

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
        <SidebarForm handleFormSubmit={ handleFormSubmit } formValue={ formValue } setFormValue={ setFormValue } test={ 'test' }/>
    );
}

export default FolderFetch;