import { StateType } from '../../types';

type InputPropsType = {
    id: string,
    label: string,
    type: string,
    value: string,
    workflowState: StateType,
    setValue: (newState: StateType) => any,
    readonly?: boolean,
};

const Input = (props: InputPropsType) => {
    return (
        <div>
            <label htmlFor={props.id}>
                {props.label}
                <input type={props.type}
                    id={props.id}
                    value={props.value}
                    readOnly={props.readonly ? props.readonly : false}
                    onChange={(event) => {
                        const newState = props.workflowState;
                        newState[props.id] = event.target.value;
                        props.setValue({...newState})}}/>
            </label>

        </div>)
};

export default Input;
