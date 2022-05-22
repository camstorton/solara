export type DCStringDataType = {
    id: number,
    size: number,
};

export type StateType = {
    [index: string]: string | DCStringDataType[];
    page1_address: string,
    page1_tmin: string,
    page1_thigh: string,
    page1_pwropt: string,
    page1_pvmodule_make: string,
    page1_pvmodule_model: string,
    page2_dcstring_data: DCStringDataType[]
}
