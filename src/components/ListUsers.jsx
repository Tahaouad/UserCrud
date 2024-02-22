import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "./UsersSlice"
import { Link } from "react-router-dom"

const ListUsers = () =>{
    const data = useSelector(state=>state.users)
    const dispatch = useDispatch()
     
    const handleDelete = (id) =>{
        alert(id)
        const ok = window.confirm(`vous etes sur de supprimer `)
        ok&&dispatch(deleteUser(id))
    } 
    return(
        <>
            <h1>List Users</h1>
            <Link to={'/ajouter'}>
                <button>Ajouter</button>
            </Link>
            <div className="container">
                {
                    data.map(user=>
                            <div className="card">
                                <h4>Nom : {user.nom}</h4>
                                <h4>Prenom : {user.prenom}</h4>
                                <h4>Sexe : {user.sexe}</h4>
                                <button type="button" onClick={()=>handleDelete(user.id)}>Supprimer</button>
                                <Link to={`/modifier/${user.id}`}>
                                    <button>Modifier</button>
                                </Link>
                            </div>
                        )
                }
            </div>
        </>
    )
}
export default ListUsers