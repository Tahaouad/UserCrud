import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./UsersSlice"

const ModifierUser=()=>{
    const {id} = useParams()
    const data = useSelector(state=>state.users.list)
    const user = data.find(user=>user.id==id)

    const [nom,setNom] = useState(user.nom)
    const [prenom,setPrenom] = useState(user.prenom)
    const [age,setAge] = useState(user.age)
    const [sexe,setSexe] = useState(user.sexe)
    const [loisires,setLoisirs] = useState(user.loisires)

    const dispatch = useDispatch()
    const nav = useNavigate()

    
    const handleLoisir=(v)=>{
        if(!loisires.includes(v)){
            setLoisirs([...loisires,v])
        }else{
            setLoisirs(loisires.filter(l=>l!=v))
        }  
    }

    const sexes = ['Feminin','Masculin','Autre']

    const list_loisirs = ["Lecture", "Sport", "Peinture", "Cuisine", "Jardinage"]

    const modifier=()=>{
        const newValues = {id,nom,prenom,age,sexe,loisires}
        dispatch(updateUser(newValues))
        nav('/')
        // const newValues = {nom:nom,prenom:prenom,sexe:sexe,loisirs:loisirs}
    }

    return(
        <>
        <h1>Modifier user</h1>
        <hr />
        <form action="#">
                <p>
                    Nom :
                </p>
                <p>
                    <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} />
                </p>
                <p>
                    Prenom :
                </p>
                <p>
                    <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} />
                </p>
                <p>
                    Age :
                </p>
                <p>
                    <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
                </p>
                <p>
                    Sexe :
                </p>
                {sexes.map(s=>
                <span>
                    {s} <input type="radio" name="sexe" checked={sexe==s&&'checked'} value={s} onChange={e=>setSexe(e.target.value)} />
                </span>
                )}
                <p>
                    <p>loisirs :</p>
                    {list_loisirs.map(loisir=> 
                    <>
                        {loisir}
                        <input type="checkbox" checked={loisires.includes(loisir)&&'checked'}value={loisir} onChange={(e)=>handleLoisir(e.target.value)}   />
                    </>)}
                </p>
                <button type="button" onClick={modifier}>Modifier</button>
            </form>
        </>
    )
}
export default ModifierUser ;