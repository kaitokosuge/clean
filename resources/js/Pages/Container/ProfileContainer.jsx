import Profile from "../Presentation/Profile/Profile";


function ProfileContainer( { user , folders } ) {
    return (
        <>
            <Profile user = { user } folders = { folders } />
        </>
    );
}


export default ProfileContainer;