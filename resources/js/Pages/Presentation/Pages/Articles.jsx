import { useState } from 'react';
import ArticlesContent from './ArticlesContent';


function Articles({ articles ,folders ,handleFormSubmit , setFormValue }) {

    return (
        <div className="w-[70%] pt-10 ml-[22%] h-screen">
            <ul className="">
                {articles.map((article) => (
                    <>
                        <ArticlesContent article={ article } folders={ folders } handleFormSubmit={ handleFormSubmit } setFormValue={ setFormValue }/>
                    </>
                ))}
            </ul>
        </div>
    );
}



export default Articles;