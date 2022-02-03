import { action, computed, makeObservable, observable } from "mobx";
import { ILocalStore } from "utils/useLocalStore/useLocalStore";

type PrivateFileds =  "_inputValue" | "_dropdownValue" | "_result" | "_resultArr";

export default class WordStore implements ILocalStore{
    private _inputValue: string = '';
    private _dropdownValue: string = 'И';
    private _resultArr: any = {'И': '', 'Р': '', 'Д': '', 'В': '', 'Т': '', 'П_о': ''};
    private _result: string = 'Здесь будет результат';

    get inputValue() {
        return this._inputValue;
    }

    get dropdownValue() {
        return this._dropdownValue;
    }

    get result() {
        return this._result;
    }
    
    constructor() {
        makeObservable<WordStore, PrivateFileds>(this, {
            _inputValue: observable,
            _dropdownValue: observable,
            _result: observable,
            _resultArr: observable,
            onChangeInput: action,
            onChangeDropdown: action,
            getWord: action,
            inputValue: computed,
            dropdownValue: computed,
            result: computed
        })
    }


    onChangeInput = (event: React.FormEvent): void => {
        
        let element = event.target as HTMLInputElement;
        
        this._inputValue = element.value;

        this._resultArr = {'И': '', 'Р': '', 'Д': '', 'В': '', 'Т': '', 'П_о': ''};
    }

    onChangeDropdown = (event: React.FormEvent): void => {

        let element = event.target as HTMLSelectElement;

        this._dropdownValue = element.value;

        this.getWord();

        this._result = this._resultArr[this._dropdownValue];
    }

    getWord = async() => {
        if(!this._resultArr['И']) {
            const lastLetter = this._inputValue[this._inputValue.length - 1];
            if(lastLetter === 'а' || lastLetter === 'я') {
                let word = this._inputValue.slice(0, this._inputValue.length - 1);
                this._resultArr = {
                    'И': this._inputValue, 
                    'Р': word + 'ы', 
                    'Д': word + 'е', 
                    'В': word + 'у', 
                    'Т': word + 'ой', 
                    'П_о': 'о ' + word + 'е'
                };
            } else if(lastLetter === 'е' || lastLetter === 'о') {
                let word = this._inputValue.slice(0, this._inputValue.length - 1);
                this._resultArr = {
                    'И': this._inputValue, 
                    'Р': word + 'а', 
                    'Д': word + 'у', 
                    'В': word + 'о', 
                    'Т': word + 'ом', 
                    'П_о': 'о ' + word + 'е'
                };
            } else if(lastLetter === 'ь') {
                let word = this._inputValue.slice(0, this._inputValue.length - 1);
                this._resultArr = {
                    'И': this._inputValue, 
                    'Р': word + 'и', 
                    'Д': word + 'и', 
                    'В': word + '', 
                    'Т': word + 'ью', 
                    'П_о': 'о ' + word + 'и'
                };
            } else {
                let word = this._inputValue;
                this._resultArr = {
                    'И': this._inputValue, 
                    'Р': word + 'а', 
                    'Д': word + 'у', 
                    'В': word + '', 
                    'Т': word + 'ом', 
                    'П_о': 'о ' + word + 'е'
                };
            }
        }
    }

    destroy(): void {
        this._inputValue = '';
        this._dropdownValue = '';
    }
}