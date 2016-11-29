import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CharacterService {
    
    constructor(private http: Http) { }

    getCharacters() {
        return this.http.get('api/characters')
            .map(response => <CharactersModel[]>response.json());
    }
}

export class CharactersModel
{
    public Id:any;//mongo id is not a intinger as you might be used to, thats what I set the data type to any
    public Name:string;
}