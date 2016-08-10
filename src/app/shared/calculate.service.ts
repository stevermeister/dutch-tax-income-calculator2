import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
@Injectable()
export class CalculateService {
    private static _inputSubject: Subject<any> = new Subject();
    private static _outputSubject: Subject<any> = new Subject();

    constructor() {
        CalculateService._inputSubject.subscribe(input=>{
            CalculateService._outputSubject.next(input)
        })
    }

    set input(value){
        CalculateService._inputSubject.next(value);
    }


    public get calculateResult(){
        return CalculateService._outputSubject;
    }
}
