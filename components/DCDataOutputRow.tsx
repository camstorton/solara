import { DCStringDataType, StateType } from '../types';

import { getPVStatsForModel } from './util/PVModule';

type DCDataOutputRowType = {
    dcstring_data: DCStringDataType,
    workflowState: StateType,
}

const DCDataOutputRow = (props: DCDataOutputRowType) => {
    const pvStats = getPVStatsForModel(props.workflowState.page1_pvmodule_model);

    return (
        <div>
            <p>
                String ID: {props.dcstring_data.id},
                <br/>
                String Size: {props.dcstring_data.size}
                <br/>
                Max Circuit Voltage: {props.dcstring_data.size * (pvStats.voc + (pvStats.voc * (parseInt(props.workflowState.page1_tmin) - 25) * pvStats.tvoc / 100))}
                <br/>
                Circuit Operating Voltage: {props.dcstring_data.size * (pvStats.vmp + (pvStats.vmp * (parseInt(props.workflowState.page1_thigh) - 25) * pvStats.tvoc / 100))}
            </p>
        </div>
    )
};

export default DCDataOutputRow;
