



function Top({ folders }) {
    return (
        <div>
            {folders.map((folder) => (
                <>
                    <p>{folder.title}</p>
                </>
            ))}
        </div>
    );
}


export default Top;