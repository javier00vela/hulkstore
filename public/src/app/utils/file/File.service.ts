
import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn : 'root'
})
export class FileService {

    public static getBase64(file , callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
    
        reader.onload = function() {
            callback(reader.result);
        };
        reader.onerror = function() {
            console.error('error : el archivo no es compatible');
        };
    }    
    
    
}
          
          