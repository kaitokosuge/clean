import { useState } from 'react';
import Header from '../Presentation/Common/Header/Header';
import Top from '../Presentation/Top/Top';


function TopContainer({ user , folders}) {

    return (
        <>
            <Header name = { user.name }/>
            <Top folders = { folders }/>
        </>
    );
}


export default TopContainer;