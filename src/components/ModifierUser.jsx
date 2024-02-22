import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UsersSlice";

const ModifierUser = () => {
    const { id } = useParams();
    const data = useSelector(state => state.users);
    const user = data.find(user => user.id == id);

    const [nom, setNom] = useState(user.nom);
    const [prenom, setPrenom] = useState(user.prenom);
    const [age, setAge] = useState(user.age);
    const [sexe, setSexe] = useState(user.sexe);
    const [loisires, setLoisirs] = useState(user.loisires);

    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleLoisir = (v) => {
        if (!loisires.includes(v)) {
            setLoisirs([...loisires, v]);
        } else {
            setLoisirs(loisires.filter(l => l !== v));
        }
    };

    const sexes = ['Feminin', 'Masculin', 'Autre'];

    const list_loisirs = ["Lecture", "Sport", "Peinture", "Cuisine", "Jardinage"];

    const modifier = () => {
        const newValues = { id, nom, prenom, age, sexe, loisires };
        dispatch(updateUser(newValues));
        nav('/');
    };

    return (
        <div className="container mt-5">

            <h1 className="mb-4 fs-bold text-primary">Modifier user</h1>
            <hr />
            <form className="w-25 m-auto">
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom :</label>
                    <input type="text" className="form-control" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom :</label>
                    <input type="text" className="form-control" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age :</label>
                    <input type="text" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sexe :</label>
                    {sexes.map(s =>
                        <div key={s} className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexe" value={s} checked={sexe === s} onChange={e => setSexe(e.target.value)} />
                            <label className="form-check-label">{s}</label>
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <p className="form-label">Loisirs :</p>
                    {list_loisirs.map(loisir =>
                        <div key={loisir} className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value={loisir} checked={loisires.includes(loisir)} onChange={(e) => handleLoisir(e.target.value)} />
                            <label className="form-check-label">{loisir}</label>
                        </div>
                    )}
                </div>
                <button type="button" className="btn btn-primary" onClick={modifier}>Modifier</button>
            </form>
        </div>
    );
};

export default ModifierUser;
