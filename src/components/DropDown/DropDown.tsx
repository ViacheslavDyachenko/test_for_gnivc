import React from "react";
import { ChangeEventHandler } from "react";
import style from "./DropDown.module.scss"

type DropDownProps = {
    value: string,
    onChange: ChangeEventHandler<HTMLSelectElement>;
}

const DropDown = ({value, onChange}: DropDownProps) => {
    return (
        <select className={style.dropdown} value={value} onChange={onChange}>
            <option value="И">Именительный</option>
            <option value="Р">Родительный</option>
            <option value="Д">Дательный</option>
            <option value="В">Винительный</option>
            <option value="Т">Творительный</option>
            <option value="П_о">Предложный</option>
        </select>
    )
}
export default React.memo(DropDown);