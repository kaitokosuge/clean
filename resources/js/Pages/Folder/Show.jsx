import React from "react";
import { useForm } from "@inertiajs/react";


function Show(folder) {
    console.log('show props',folder);
    //const { folder } = folder;
    console.log('show folder.articles',folder.folder.articles)
    return (
        <>
            <img src={folder.image}/>
            <p>{folder.title}</p>
            <form onSubmit={handleCreateArticle}>
                <input type="text" onChange={}/>
            </form>
            <ul>
                {folder.folder.articles.map((article) => (
                    <>
                        <li className="">
                            <a href={article.url} target="_blank" className="flex items-center">
                                <img className="w-[30px] rounded-md mr-5"src={article.image}/>
                                <p className="text-xs mr-5">{article.title}</p>
                                <p className="font-bold text-blue-200 mr-5">{article.url}</p>
                                <p className="text-xs font-weight mr-5">{article.memo}</p>
                            </a>
                        </li> 
                    </> 
                ))}
            </ul>
        </>
    );
}

export default Show;