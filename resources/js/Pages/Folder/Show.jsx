
import { useForm , Link } from "@inertiajs/react";




function Show({folder , folders}) {
    console.log('show props',folder);
    //const { folder } = folder;
    console.log('show folder.articles',folder.articles);
    const [ indexFolder , setIndexFolder] = useState(folder.articles);
    const { data , setData ,post} = useForm({
        title:'',
        memo:'',
        url:'',
    })
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    let textToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log(textToHtml);
    const handleCreateArticle = async (e) => {
        e.preventDefault();
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        const fileData = new FormData();
        const imageData = document.querySelector(`input[name=image]`);
        fileData.append('uploadfile' , imageData.files[0])
        try{
            const response = await fetch(`/article/${folder.id}`,{
                method: 'POST',
                headers: {
                    //file dataを送信するときはcontent-type指定しないように
                    // 'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token,
                },
                //folderのオブジェクトをjsonに変換して送る
                // body: JSON.stringify(data),
                body:fileData,
            })
            if (response.ok) {
                console.log('data',data);
                // const newFolder = [data,...folder.articles]
                // setIndexFolder(newFolder);
                console.log('response-ok');
                // await showSendText();
                alert('送信あざす！！！')
                await getArticles();
            } else {
                console.log('data',data);
                console.log('error-json')
            }
        } catch (error) {
            console.log('async-error')
        }
    }
    const getArticles = async () => {
        return await fetch(`/get/folder/${folder.id}`)
        .then(res => res.json())
        .then(data => {setIndexFolder(data.folder.articles)})
        .catch(error => console.error('Error fetching folders', error))
    }
    const handleSendImage = () =>{

    }
    return (
        <>
        <div className="flex justify-between">
            <div className="w-[20%]">
                <h1><Link href="/">clean</Link></h1>
                
            </div>
            <div className="w-[70%]">
                <div className="flex mx-auto">
                    <div className="w-[90px] h-[90px] rounded-full shadow" style={{ backgroundColor: `rgb(${folder.rgb})`, }}></div>
                    <div className="flex items-center ml-10">
                        {/* <img className="w-[30px] h-[30px] rounded-xl"src={folder.image}/> */}
                        <p className="font-bold text-md ml-5">{folder.title}</p>
                    </div>
                </div>
                <form onSubmit={handleCreateArticle} className="mt-10">
                    <p className="font-bold text-xs">article area</p>
                    <input className="bg-black rounded-md"type="text" name="url"onChange={(e) => setData("url" , e.target.value)} placeholder="url"/>
                    <input className="bg-black rounded-md"type="text" name="title"onChange={(e) => setData("title" , e.target.value)} placeholder="title"/>
                    <input className="bg-black" type="file" accept="image/*" name="image"/>
                    <button type="submit">save</button>
                </form>
                {/* <form onSubmit={handleSendImage} encType="multipart/form-data">
                    <input className="bg-black" type="file" accept="image/*" name="image"/>
                    <button type="submit">save</button>
                </form> */}
                <div className="editor text-black bg-white">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={setEditorState}
                        className="text-black border p-10"
                        toolbar={{
                            options: ["inline", "fontSize"],
                        }}
                    />
                    {/* <textarea className="text-black"rows="30" cols="100" disabled></textarea> */}
                </div>
                <ul className="mt-10">
                    {indexFolder.map((article) => (
                        <>
                            <li className="">
                                <span className="text-xs">{article.id}</span>
                                <a href={article.url} target="_blank" className="w-[80%] flex items-center p-1 rounded-md pointer duration-500 hover:bg-slate-600 hover:duration-300">
                                    <img className="w-[30px] rounded-md mr-5"src={article.img}/>
                                    <p className="mr-5 text-md">{article.title}</p>
                                    <p className="font-bold text-blue-200 mr-5 text-xs">{article.url}</p>
                                    <p className="text-xs font-weight mr-5">{article.memo}</p>
                                </a>
                            </li> 
                        </> 
                    ))}
                </ul>
                <div className="notification--area"></div>
            </div>
        </div>  
        </>
    );
}

export default Show;