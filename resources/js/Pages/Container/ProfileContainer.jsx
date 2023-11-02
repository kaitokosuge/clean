import Profile from "../Presentation/Profile/Profile";


function ProfileContainer( { user } ) {
    return (
        <>
            <Profile profile = { user } />
        </>
    );
}


export default ProfileContainer;