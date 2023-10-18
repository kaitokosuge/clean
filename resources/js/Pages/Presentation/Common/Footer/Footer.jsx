function Footer() {
    return (
        <div className="w-[82%] min-w-[50%] h-[150px] fixed bottom-0 z-10 right-0 bg-shadow flex items-center">
            <input type='text' placeholder="add article" className="mt-[40px] ml-[150px] w-[60%] min-w-[200px] h-[60px] p-[5px] rounded-md bg-[#202020]"/>
            <div className="mt-[40px] ml-5 border border-zinc-500 bg-zinc-800 rounded-[5px] w-[50px] h-[50px] text-xs font-bold flex items-center justify-around text-center text-zinc-300 cursor-pointer"><p className="">Folder</p></div>
        </div>
    );
}

export default Footer;