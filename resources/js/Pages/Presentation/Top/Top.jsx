
import { Link } from '@inertiajs/react'


function Top({ folders }) {
    console.log('top,folders',folders);
    
    return (
        <div className="pt-10">
            {folders.map((folder) => (
                <div >
                    <Link href={`/profile/${folder.user.id}`}>{folder.user.name}</Link>
                    <p>{folder.title}</p>
                </div>
            ))}
        </div>
    );
}


export default Top;