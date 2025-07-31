function Card({ servizio, username, password }) {
    
    return (
        <div className="rounded-md  bg-zinc-950 " >
            <h2 className="text-2xl text.white font-bold">{servizio}</h2>
            <div className="flex flex-col p-4">
            <p className="text-gray-500">{username}</p>
            <h2 className="text-gray-500">{password}</h2>
            </div>
        </div>      
    )
}

export default Card;