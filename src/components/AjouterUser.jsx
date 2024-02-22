import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UsersSlice";
import { useNavigate } from "react-router-dom";

const AjouterUser = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [sexe, setSexe] = useState('');
    const [loisires, setLoisires] = useState([]);

    const sexes = ['Feminin', 'Masculin', 'Autre'];

    const list_loisires = ["Lecture", "Sport", "Peinture", "Cuisine", "Jardinage"];

    const data = useSelector(state => state.users);
    const nav = useNavigate();
    const handleLoisir = (v) => {
        if (!loisires.includes(v)) {
            setLoisires([...loisires, v]);
        } else {
            setLoisires(loisires.filter(l => l !== v));
        }
    };

    const ajouter = () => {
        const id = data[data.length - 1].id + 1;
        const newUser = { id: id, nom: nom, prenom: prenom, age: age, loisires: loisires, sexe: sexe };
        dispatch(addUser(newUser));
        nav('/');
    };

    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <h1 className="mb-4 fs-bold text-primary">Add User</h1>
            <hr />
            <form className="w-25 m-auto">
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom :</label>
                    <input type="text" className="form-control" id="nom" onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom :</label>
                    <input type="text" className="form-control" id="prenom" onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age :</label>
                    <input type="text" className="form-control" id="age" onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sexe :</label>
                    {sexes.map(s =>
                        <div key={s} className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="sexe" value={s} onChange={e => setSexe(e.target.value)} />
                            <label className="form-check-label">{s}</label>
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <p className="form-label">Loisires :</p>
                    {list_loisires.map(loisir =>
                        <div key={loisir} className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" value={loisir} onChange={(e) => handleLoisir(e.target.value)} />
                            <label className="form-check-label">{loisir}</label>
                        </div>
                    )}
                </div>
                <button type="button" className="btn btn-primary" onClick={ajouter}>Ajouter</button>
            </form>
        </div>
    );
};

export default AjouterUser;
