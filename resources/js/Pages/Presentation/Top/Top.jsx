
import { Link } from '@inertiajs/react'


function Top({ folders }) {
    console.log('top,folders',folders);
    
    return (
        <div>
            {folders.map((folder) => (
                <>
                    <Link href={`/profile/${folder.user.id}`}>{folder.user.name}</Link>
                    <p>{folder.title}</p>
                </>
            ))}
        </div>
    );
}


export default Top;