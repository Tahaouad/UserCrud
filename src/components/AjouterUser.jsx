import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "./UsersSlice"
import { useNavigate } from "react-router-dom"

const AjouterUser =()=>{
    const [nom,setNom] = useState('')
    const [prenom,setPrenom] = useState('')
    const [age,setAge] = useState('')
    const [sexe,setSexe] = useState('')
    const [loisires,setloisires] = useState([])

    const sexes = ['Feminin','Masculin','Autre']

    const list_loisires = ["Lecture", "Sport", "Peinture", "Cuisine", "Jardinage"]

    const data = useSelector(state=>state.users)
    const nav = useNavigate(    )
    const handleLoisir=(v)=>{
        if(!loisires.includes(v)){
            setloisires([...loisires,v])
        }else{
            setloisires(loisires.filter(l=>l!=v))
        }  
    }




    const ajouter=()=>{
        const id = data[data.length-1].id+1
        const newUser = {id:id,nom:nom,prenom:prenom,age:age,loisires:loisires,sexe:sexe}
        dispatch(addUser(newUser))
        nav('/')
    }

    const dispatch = useDispatch()

    return(
        <>
            <h1>Add User</h1>
            <form action="#">
                <p>
                    Nom :
                </p>
                <p>
                    <input type="text" onChange={(e)=>setNom(e.target.value)} />
                </p>
                <p>
                    Prenom :
                </p>
                <p>
                    <input type="text" onChange={(e)=>setPrenom(e.target.value)} />
                </p>
                <p>
                    Age :
                </p>
                <p>
                    <input type="text" onChange={(e)=>setAge(e.target.value)} />
                </p>
                <p>
                    Sexe :
                </p>
                {sexes.map(s=>
                <span>
                    {s} <input type="radio" name="sexe" value={s} onChange={e=>setSexe(e.target.value)} />
                </span>
                )}
                <p>
                    <p>loisires :</p>
                    {list_loisires.map(loisir=> 
                    <>
                        {loisir}
                        <input type="checkbox" value={loisir} onChange={(e)=>handleLoisir(e.target.value)} />
                    </>)}
                </p>
                <button type="button" onClick={ajouter}>Ajouter</button>
            </form>
        </>
    )
}
export default AjouterUser ;