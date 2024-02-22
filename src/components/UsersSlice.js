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
    initialState : {list:DBusers},
    reducers : {
        addUser:(state,action)=>{
            state.list = [...state.list,action.payload]    
        },
        deleteUser:(state,action)=>{

            state.list = state.list.filter(user=>user.id !== action.payload)

        },

        updateUser:(state,action)=>{
            state.list = state.list.map(user=>{
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
