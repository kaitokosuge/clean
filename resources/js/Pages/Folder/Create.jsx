import React from "react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

function Create(props) {
    //保存するものは一旦titleのみでOK
    const {data , setData ,post} = useForm({
        title:'',
    })
    const handleCreateFolder = (e) => {
        e.preventDefault();
        post('/folder');
    }

    return (
        <div>
            <form onSubmit={handleCreateFolder}>
                <h2>title</h2>
                <input className="text-black"type="text" onChange= {(e) => setData("title" , e.target.value)}/>
                <button type="submit">保存</button>
            </form> 
        </div>
    );
}

export default Create;