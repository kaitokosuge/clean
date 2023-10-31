import { useState , useEffect } from "react";
import Footer from "../Presentation/Common/Footer/Footer";
import Header from "../Presentation/Common/Header/Header";
import Sidebar from "../Presentation/Common/Sidebar/Sidebar";
import Articles from "../Presentation/Pages/Articles";


function SidebarContainer({ user }) {
    console.log('user',user);
    // form送信関連
    //foldersは子コンポーネントへ送るfolder情報
    const [ folders , setFolders ]  = useState(user.folders);
    //formValueは初期値空、子コンポーネント（sidebarForm）のsetFormValueでフォーム入力内容を格納することができ、ここに渡ってくる
    const [ formValue , setFormValue ] = useState();
    const [ value , setValue ] = useState({
        title:'',
        id:'',
    })
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
                setFolders([ formValue, ...folders ])
                setValue({
                    title:'',
                    id:'',
                });
            } else{
                alert('ページを再読み込みし、もう一度送信してください')
                console.log('no-ok')
            }
        } catch(erros){ 
            console.log('error');
            alert('もう一度送信してください🙇')
        }   
    }
    const [ articles , setArticles ] = useState(user.articles);
    const [ formArticleValue , setFormArticleValue ] = useState({
        url:"",
        folder:[],
    });
    const handleArticleObj = (e) => {
        // setFormArticleValue((prev) => ({...prev , [e.target.name] : [e.target.name] == 'folder' ? [e.target.value] : e.target.value }))
        setFormArticleValue((prev) => {
            if(e.target.name === 'folder'){
                return { ...prev, [e.target.name]: [...prev[e.target.name], e.target.value] };
            } else {
                return { ...prev, [e.target.name]: e.target.value };
            }
        })
    }
    const handleArticleFormSubmit = async (e) => {
        e.preventDefault();
        let csrf_token2 = document.head.querySelector('meta[name="csrf-token"]').content;
        try{
            const res = await fetch('/article',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token2,
                } ,
                body: JSON.stringify(formArticleValue),
            })
            if(res.ok){
                await getArticles();
                setFormArticleValue({
                    url: "",
                    folder: [],
                });
            } else{
                alert('ページを再読み込みし、もう一度送信してください')
                console.log('no-ok')
            }
        } catch(erros){ 
            console.log('error');
            alert('もう一度送信してください🙇🙇🙇')
        }
    }
    const getArticles = async () => {
        return await fetch('/get/articles')
                        .then(res => res.json())
                        .then(data => {setArticles(data.articles)})
                        .catch(error => alert('ページをリロードしてください🙇'))
    };
    const handleSelectFolder = async (id) => {
        // console.log('key',key);
        return await fetch(`/folders/${id}`)
            .then(res => res.json())
            .then(data => {setArticles(data.selectFolderArticles)})
            .then(console.log('articles',articles))
            .catch(error =>  console.log('ページをリロードしてください🙇'));
    };
    return (
        <>
            <Header name={user.name}/>
            <Sidebar value={ value } setValue={ setValue } handleSelectFolder={ handleSelectFolder } folders={ folders } handleFormSubmit={ handleFormSubmit } formValue={ formValue } setFormValue={ setFormValue } />
            <Articles  articles={ articles } folders={ folders } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
            <Footer handleArticleObj={ handleArticleObj } handleArticleFormSubmit={ handleArticleFormSubmit } setFormArticleValue={ setFormArticleValue } formArticleValue ={ formArticleValue }folders={ folders } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
        </>
    );
}

export default SidebarContainer;