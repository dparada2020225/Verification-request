import { Dispatch, SetStateAction } from 'react';

export interface UserProps{
    photo: Photo
    setPhoto: Dispatch<SetStateAction<Photo>>
}

export interface Photo{
    url: String,
}