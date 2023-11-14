import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

constructor() { }

public registrarLog(log:string){
    console.log("Se va a registrar el log"+log);
}

}
