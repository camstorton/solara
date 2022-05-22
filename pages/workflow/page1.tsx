import { PVStatType, getPVModelsForMake, getPVStatsForModel } from '../../components/util/PVModule';

import Input from '../../components/util/Input';
import InputDropdown from '../../components/util/InputDropdown';
import NavBar from '../../components/Workflow/NavBar';
import type { NextPage } from 'next';
import PageContainer from '../../components/Workflow/PageContainer';
import React from 'react';
import { StateType } from '../../types';

const PageOne = ({workflowState, setWorkflowState}: {workflowState: StateType, setWorkflowState: (newState: StateType) => any}) => {
    const pvModels = getPVModelsForMake(workflowState.page1_pvmodule_make);
    const pvStats: PVStatType = getPVStatsForModel(workflowState.page1_pvmodule_model);

    return (
        <>
            <NavBar/>
            <PageContainer>
                <h3>Enter Project Data</h3>
                <Input type="text"
                    id="page1_address"
                    label="Address: "
                    value={workflowState.page1_address}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <Input type="number"
                    id="page1_tmin"
                    label="T min (C): "
                    value={workflowState.page1_tmin}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <Input type="number"
                    id="page1_thigh"
                    label="T High 2% (C): "
                    value={workflowState.page1_thigh}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <Input type="number"
                    id="page1_pwropt"
                    label="Power Optimizer: "
                    value={workflowState.page1_pwropt}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <h3>Choose A PV Module</h3>
                <InputDropdown
                    id="page1_pvmodule_make"
                    label="PV Module Brand: "
                    options={["Ablytek", "Advance Power"]}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <InputDropdown
                    id="page1_pvmodule_model"
                    label="PV Module Model: "
                    options={pvModels}
                    workflowState={workflowState}
                    setValue={setWorkflowState}/>
                <br/>
                <br/>
                <h3>Output:</h3>
                <Input type="text"
                    id="page1_output_mw"
                    label="Module Wattage (W): "
                    value={pvStats.nameplate_pmax.toString()}
                    workflowState={workflowState}
                    setValue={setWorkflowState}
                    readonly={true}/>
                <Input type="text"
                    id="page1_output_voc"
                    label="Open Circuit Voltage (Voc): "
                    value={pvStats.voc.toString()}
                    workflowState={workflowState}
                    setValue={setWorkflowState}
                    readonly={true}/>
                <Input type="text"
                    id="page1_output_vmp"
                    label="Voltage Maximum Point (Vmp): "
                    value={pvStats.vmp.toString()}
                    workflowState={workflowState}
                    setValue={setWorkflowState}
                    readonly={true}/>
                <Input type="text"
                    id="page1_output_isc"
                    label="Short Circuit Current (Isc): "
                    value={pvStats.isc.toString()}
                    workflowState={workflowState}
                    setValue={setWorkflowState}
                    readonly={true}/>
                <Input type="text"
                    id="page1_output_imp"
                    label="Current Maxpoint (Imp): "
                    value={pvStats.imp.toString()}
                    workflowState={workflowState}
                    setValue={setWorkflowState}
                    readonly={true}/>
                <Input type="text"
                    id="page1_output_tvoc"
                    label="Temperature Coefficient (Voc): "
                    value={(pvStats.tvoc / 100).toString()}
                    workflowState={workflowState}
                    setValue={setWorkflowState}
                    readonly={true}/>
            </PageContainer>
        </>
    );
};

export default PageOne;
