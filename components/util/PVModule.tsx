type StringMapType = {
    [index: string]: string[];
};

export type PVStatType = {
    [index: string]: number
}

type PVStatByModelType = {
    [index: string]: PVStatType
}

export const PV_MODELS_BY_MAKE: StringMapType = {
    Ablytek: [
        "5MN6C175-A0",
        "5MN6C180-A0",
        "5MN6C185-A0",
    ],
    "Advance Power": [
        "API-P210",
        "API-P215",
        "API-P220",
    ]
};

export const PV_STATS_BY_MODEL: PVStatByModelType = {
    "5MN6C175-A0": {
        nameplate_pmax: 175,
        isc: 5.17,
        voc: 43.99,
        imp: 4.78,
        vmp: 36.63,
        avg_noct: 49.9,
        tvoc: -0.3616
    },
    "5MN6C180-A0": {
        nameplate_pmax: 180,
        isc: 5.31,
        voc: 44.06,
        imp: 4.9,
        vmp: 36.72,
        avg_noct: 49.9,
        tvoc: -0.3616
    },
    "5MN6C185-A0": {
        nameplate_pmax: 185,
        isc: 5.43,
        voc: 44.14,
        imp: 5.03,
        vmp: 36.72,
        avg_noct: 49.9,
        tvoc: -0.3616
    },
    "API-P210": {
        nameplate_pmax: 210,
        isc: 7.6,
        voc: 35.94,
        imp: 7.09,
        vmp: 29.64,
        avg_noct: 47.6,
        tvoc: -0.3342
    },
    "API-P215": {
        nameplate_pmax: 215,
        isc: 7.83,
        voc: 36,
        imp: 7.18,
        vmp: 29.94,
        avg_noct: 47.6,
        tvoc: -0.3342
    },
    "API-P220": {
        nameplate_pmax: 220,
        isc: 7.95,
        voc: 36.06,
        imp: 7.3,
        vmp: 30.12,
        avg_noct: 47.6,
        tvoc: -0.3342
    },
}

export const getPVModelsForMake = (pvMake: string | undefined) => {
    return (pvMake && (pvMake in PV_MODELS_BY_MAKE) ? PV_MODELS_BY_MAKE[pvMake] : PV_MODELS_BY_MAKE["Ablytek"])

};

export const getPVStatsForModel = (pvModel: string | undefined) => {
    return (pvModel && (pvModel in PV_STATS_BY_MODEL) ? PV_STATS_BY_MODEL[pvModel] : PV_STATS_BY_MODEL["5MN6C175-A0"]);
}
