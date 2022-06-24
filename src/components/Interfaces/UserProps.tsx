import { Dispatch, SetStateAction } from 'react';

export interface UserProps{
    userData: UserData
    setUserData: Dispatch<SetStateAction<UserData>>
}

export interface UserData{
    userName: string
}

