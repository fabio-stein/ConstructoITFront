import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MoradorModel } from './model/MoradorModel';

@Injectable()
export class MoradorService {
    constructor(private _http: HttpClient) {
    }

    GetAll() {
        return this._http.get<any[]>(environment.API_ENDPOINT + "/api/morador").toPromise();
    }

    GetMorador(id: number) {
        return this._http.get<MoradorModel>(environment.API_ENDPOINT + "/api/morador/" + id).toPromise();
    }

    AddMorador(data: MoradorModel) {
        return this._http.post<MoradorModel>(environment.API_ENDPOINT + "/api/morador", data).toPromise();
    }

    EditMorador(id: number, data: MoradorModel) {
        return this._http.put<MoradorModel>(environment.API_ENDPOINT + "/api/morador/" + id, data).toPromise();
    }

    GetFamilias() {
        return this._http.get<any[]>(environment.API_ENDPOINT + "/api/familia").toPromise();
    }

    DeleteMorador(id: number) {
        return this._http.delete(environment.API_ENDPOINT + "/api/morador/" + id).toPromise();
    }
}