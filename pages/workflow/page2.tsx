import React, { useState } from 'react';

import DCDataOutputRow from '../../components/DCDataOutputRow';
import Input from '../../components/util/Input';
import InputDropdown from '../../components/util/InputDropdown';
import Link from 'next/link';
import NavBar from '../../components/Workflow/NavBar';
import type { NextPage } from 'next';
import PageContainer from '../../components/Workflow/PageContainer';
import {StateType} from '../../types';

const PageTwo = ({workflowState, setWorkflowState}: {workflowState: StateType, setWorkflowState: (newState: StateType) => any}) => {
    const [newSize, setNewSize] = useState(0);
    const [newQty, setNewQty] = useState(0);
    const [newWireLen, setNewWireLen] = useState(0);
    const [newCondTempRating, setNewCondTempRating] = useState(0);

    return (
        <>
            <NavBar/>
            <PageContainer>
                <h3>Set Up DC Strings</h3>
                <label>
                    {"DC String Size: "}
                    <input
                        id='page2_newdc_size'
                        type='number'
                        value={newSize}
                        onChange={(event) => {
                            if (event.target.value != "") {
                                setNewSize(parseInt(event.target.value))
                            }
                        }}>
                    </input>
                </label>
                <label>
                    {"Conductor Quantity Per Conduit: "}
                    <input
                        id='page2_newdc_qty'
                        type='number'
                        value={newQty}
                        onChange={(event) => {
                            if (event.target.value != "") {
                                setNewQty(parseInt(event.target.value))
                            }
                        }}>
                    </input>
                </label>
                <label>
                    {"Wire Length: "}
                    <input
                        id='page2_newdc_wirelen'
                        type='number'
                        value={newWireLen}
                        onChange={(event) => {
                            if (event.target.value != "") {
                                setNewWireLen(parseInt(event.target.value))
                            }
                        }}>
                    </input>
                </label>
                <InputDropdown
                    id="page2_newdc_material"
                    label="Conductor Material: "
                    options={["Al", "Cu"]}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <label>
                    {"Conductor Temp Rating: "}
                    <input
                        id='page2_newdc_temprating'
                        type='number'
                        value={newCondTempRating}
                        onChange={(event) => {
                            if (event.target.value != "") {
                                setNewCondTempRating(parseInt(event.target.value))
                            }
                        }}>
                    </input>
                    {" Deg. Celsius"}
                </label>
                <InputDropdown
                    id="page2_newdc_disttoroof"
                    label="Distance Above Roof: "
                    options={["Less than 7/8\"", "Greater than 7/8\""]}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <button type="button"
                    onClick={() => {
                        const newState = workflowState;
                        newState.page2_dcstring_data.push({id: workflowState.page2_dcstring_data.length, size: newSize});
                        setWorkflowState({...newState})}}>
                    Add New String
                </button>
                <h3>Strings</h3>
                {workflowState.page2_dcstring_data.map(({id, size}) =>
                    <DCDataOutputRow key={id} dcstring_data={workflowState.page2_dcstring_data[id]}
                        workflowState={workflowState}/>
                )}
            </PageContainer>
        </>
    );
};

export default PageTwo;
