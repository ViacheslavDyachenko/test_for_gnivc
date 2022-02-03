import DropDown from "components/DropDown";
import Input from "components/Input";
import { observer } from "mobx-react-lite";
import React from "react";
import WordStore from "store/WordStore/WordStore";
import useLocalStore from "utils/useLocalStore";
import style from "./MainPage.module.scss";

const MainPage = () => {
    const getData = useLocalStore(() => new WordStore());

    return (
        <div className={style['word-block']}>
            <Input placeholder='Введите слово' value={getData.inputValue} onChange={getData.onChangeInput} />
            <DropDown value={getData.dropdownValue} onChange={getData.onChangeDropdown} />
            <div className={style['word-block__result']}>результат: {getData.result}</div>
        </div>
    )
}
export default observer(MainPage);