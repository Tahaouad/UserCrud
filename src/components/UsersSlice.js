import { createSlice } from "@reduxjs/toolkit"

const DBusers = [
    {
        id:1,
        nom : 'Rahili' ,
        prenom : 'ILyas',
        age : 22 ,
        sexe : 'Autre',
        loisires : ['Sport','Peinture','Jardinage']
    },
    {
        id:2,
        nom : 'Jadid' ,
        prenom : 'Khadija',
        age : 19 ,
        sexe : 'Feminin',
        loisires : ['Cuisine','Sport']
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
