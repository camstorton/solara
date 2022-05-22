import { StateType } from '../types';

type InputDropdownPropsType = {
    id: string,
    label: string,
    options: string[],
    workflowState: StateType;
    setValue: (newState: StateType) => any,
}

const DCDataInputDropdown = (props: InputDropdownPropsType) => {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <select onChange={(event) => {
                const newState = props.workflowState;
                newState[props.id] = event.target.value;
                props.setValue({...newState})}}>
                {props.options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    )
};

export default DCDataInputDropdown;
