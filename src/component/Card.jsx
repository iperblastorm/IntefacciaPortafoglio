function Card({ id, servizio, username, password}) {
    
    return ( 
        <div className="m-2 rounded-md bg-blue-800/75" >
            <h2>ID : {id}</h2>
            <p>servizio</p>
            <h2 className="text-2xl text.white font-bold">{servizio}</h2>
            <div className="flex flex-col p-4">
                <p>username</p>
                <p className="text-gray-950 font-bold">{username}</p>
                <p>password</p>
            <h2 className="text-gray-950 font-bold">{password}</h2>
            </div>
        </div>      
    )
}

export default Card;