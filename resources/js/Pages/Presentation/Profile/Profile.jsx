


function Profile({ user , folders }) {
    console.log('profile',user)
    console.log('folders' , folders)
    return (
        <>
            <div>
                {user.name}
            </div>
            <div>
                {folders.map((folder) => (
                    <>
                        <div>
                            <span>first</span>
                            {folder.articles.map((article) => (
                                <>
                                    <img src={article.image} className="w-[300px] h-[170px]"/>
                                </>
                            ))}
                        </div>
                        <p>{folder.title}</p>
                    </>
                ))
                }
            </div>
        </>
    );
}

export default Profile;