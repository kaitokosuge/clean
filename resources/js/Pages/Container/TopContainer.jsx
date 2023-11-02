import { useState } from 'react';
import Header from '../Presentation/Common/Header/Header';



function TopContainer({ user }) {

    return (
        <>
            <Header name={user.name}/>
        </>
    );
}


export default TopContainer;