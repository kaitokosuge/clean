import React from "react";

function Show(props) {
    console.log('show props',props);
    const { folder } = props;
    return (
        <>
            <img src={folder.image}/>
            <p>{folder.title}</p>
            <ul>
                {folder.articles.map((article) => (
                    <>
                        <li className="flex items-center">
                            <img src={article.image}/>
                            <p>{article.title}</p>
                        </li> 
                    </> 
                ))}
            </ul>
        </>
    );
}

export default Show;