import { useState , useEffect } from "react";
import Footer from "../Presentation/Common/Footer/Footer";
import Header from "../Presentation/Common/Header/Header";
import Sidebar from "../Presentation/Common/Sidebar/Sidebar";
import Articles from "../Presentation/Pages/Articles";


function SidebarContainer({ user }) {
    console.log('user',user);
    // form送信関連
    const [ folders , setFolders ]  = useState(user.folders);
    const [ formValue , setFormValue ] = useState();
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
                setFolders([ formValue, ...user.folders ])
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
        <>
            <Header name={user.name}/>
            <Sidebar folders={ folders } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue } formValue={ formValue } />
            <Articles articles={ user.articles } folders={ folders } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
            <Footer folders={ folders } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
        </>
    );
}

export default SidebarContainer;