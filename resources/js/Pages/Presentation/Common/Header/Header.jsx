


function Header({ name }) {
    return (
        <div className="bg-[#202020] border-b border-zinc-700 w-full px-[15px] py-1 fixed z-30">
            <h1 className="text-xl font-bold flex items-center"><img className="w-[25px] h-[25px] rounded-full mr-[10px]" src="https://kaiton-blog.space/img/tony.png"/><p>{ name }</p></h1>
        </div>
    )
}



export default Header;