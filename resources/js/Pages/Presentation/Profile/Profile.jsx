


function Profile({ user , folders }) {
    console.log('profile',user)
    return (
        <>
            <div>
                {user.name}
            </div>
            <div>
                {folders.map((folder) => (
                    <>
                        <p>{folder.title}</p>
                    </>
                ))

                }
            </div>
        </>
    );
}

export default Profile;