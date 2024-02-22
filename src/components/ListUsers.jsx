import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./UsersSlice";
import { Link } from "react-router-dom";

const ListUsers = () => {
    const data = useSelector(state => state.users);
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
        const ok = window.confirm(`Voulez-vous vraiment supprimer cet utilisateur ?`);
        if (ok) {
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Liste des utilisateurs</h1>
            <Link to={'/ajouter'} className="btn btn-primary mb-4">Ajouter</Link>
            <div className="row">
                {data.map(user => (
                    <div className="col-md-4 mb-4" key={user.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Nom : {user.nom}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Prénom : {user.prenom}</h6>
                                <p className="card-text">Sexe : {user.sexe}</p>
                                <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(user.id)}>Supprimer</button>
                                <Link to={`/modifier/${user.id}`} className="btn btn-primary">Modifier</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListUsers;
