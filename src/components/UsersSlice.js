import { createSlice } from "@reduxjs/toolkit"

const DBusers = [
    {
        'id': 1,
        'nom': 'Rahili',
        'prenom': 'ILyas',
        'age': 22,
        'sexe': 'Autre',
        'loisires': ['Sport', 'Peinture', 'Jardinage'],
        'nationalite': 'Marocaine',
        'ville': 'Casablanca',
        'profession': 'Étudiant'
    },
    {
        'id': 2,
        'nom': 'Jadid',
        'prenom': 'Khadija',
        'age': 19,
        'sexe': 'Feminin',
        'loisires': ['Cuisine', 'Sport'],
        'nationalite': 'Marocaine',
        'ville': 'Rabat',
        'profession': 'Étudiante'
    },
    {
        'id': 3,
        'nom': 'El Amrani',
        'prenom': 'Ahmed',
        'age': 25,
        'sexe': 'Masculin',
        'loisires': ['Voyage', 'Lecture', 'Photographie'],
        'nationalite': 'Marocaine',
        'ville': 'Marrakech',
        'profession': 'Ingénieur'
    },
    {
        'id': 4,
        'nom': 'Idrissi',
        'prenom': 'Fatima',
        'age': 30,
        'sexe': 'Féminin',
        'loisires': ['Musique', 'Cuisine', 'Danse'],
        'nationalite': 'Marocaine',
        'ville': 'Fès',
        'profession': 'Enseignante'
    },
    {
        'id': 5,
        'nom': 'Bouhaddou',
        'prenom': 'Youssef',
        'age': 28,
        'sexe': 'Masculin',
        'loisires': ['Football', 'Cinéma', 'Voyage'],
        'nationalite': 'Marocaine',
        'ville': 'Tanger',
        'profession': 'Commercial'
    },
    {
        'id': 6,
        'nom': 'Hassani',
        'prenom': 'Sara',
        'age': 23,
        'sexe': 'Féminin',
        'loisires': ['Lecture', 'Théâtre', 'Voyage'],
        'nationalite': 'Marocaine',
        'ville': 'Agadir',
        'profession': 'Journaliste'
    },
    {
        'id': 7,
        'nom': 'Amiri',
        'prenom': 'Omar',
        'age': 35,
        'sexe': 'Masculin',
        'loisires': ['Peinture', 'Cuisine', 'Randonnée'],
        'nationalite': 'Marocaine',
        'ville': 'Oujda',
        'profession': 'Artiste'
    },
    {
        'id': 8,
        'nom': 'Tazi',
        'prenom': 'Lina',
        'age': 26,
        'sexe': 'Féminin',
        'loisires': ['Fitness', 'Photographie', 'Cuisine'],
        'nationalite': 'Marocaine',
        'ville': 'Meknès',
        'profession': 'Photographe'
    },
    {
        'id': 9,
        'nom': 'Cherkaoui',
        'prenom': 'Khalid',
        'age': 40,
        'sexe': 'Masculin',
        'loisires': ['Pêche', 'Jardinage', 'Voyage'],
        'nationalite': 'Marocaine',
        'ville': 'Tétouan',
        'profession': 'Agriculteur'
    },
    {
        'id': 10,
        'nom': 'El Fassi',
        'prenom': 'Amina',
        'age': 29,
        'sexe': 'Féminin',
        'loisires': ['Danse', 'Cuisine', 'Lecture'],
        'nationalite': 'Marocaine',
        'ville': 'Salé',
        'profession': 'Avocate'
    }
]

const UserSlice = createSlice({
    name :'users',
    initialState : DBusers,
    reducers : {
        addUser:(state,action)=>{
            return [...state,action.payload]    
        },
        deleteUser:(state,action)=>{

            return state.filter(user=>user.id !== action.payload)

        },

        updateUser:(state,action)=>{
            return state.map(user=>{
                if(user.id == action.payload.id){
                    return {...user,...action.payload}
                }else{
                    return user
                }
            })
        }
    }
})

export const {addUser,deleteUser,updateUser} = UserSlice.actions
export default UserSlice.reducer
