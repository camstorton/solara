import {createContext, useState} from 'react';

const WorkflowContext = createContext({});

export const WorkflowProvider = (props: any) => {
    const [workflowState, setWorkflowState] = useState({address: ""});

    return (
        <WorkflowContext.Provider value={[workflowState, setWorkflowState]}>
            {props.children}
        </WorkflowContext.Provider>
    )
};

export default WorkflowContext;
