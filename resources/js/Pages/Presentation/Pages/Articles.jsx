import { useState } from 'react';
import ArticlesContent from './ArticlesContent';


function Articles() {

    return (
        <div className="w-[70%] mt-10 ml-[25%] pb-[250px]">
            <ul>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
                <ArticlesContent/>
            </ul>
        </div>
    );
}



export default Articles;