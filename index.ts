import Expansion from "./expansion";

let MSG: Expansion = {
    commonCount: 49,
    rareCount: 36,
    epicCount: 27,
    legendaryCount: 20,

    commonFreq: 0.7164,
    rareFreq: 0.2284,
    epicFreq: 0.0442,
    legendaryFreq: 0.011,

    commonGoldenFreq: 0.0206,
    rareGoldenFreq: 0.0554,
    epicGoldenFreq: 0.0452,
    legendaryGoldenFreq: 0.0731
}
let MSGBugged: Expansion =  {
    commonCount: 55,
    rareCount: 42,
    epicCount: 27,
    legendaryCount: 26,

    commonFreq: 0.7164,
    rareFreq: 0.2284,
    epicFreq: 0.0442,
    legendaryFreq: 0.011,

    commonGoldenFreq: 0.0206,
    rareGoldenFreq: 0.0554,
    epicGoldenFreq: 0.0452,
    legendaryGoldenFreq: 0.0731
}

function simulate(packCount: number, expansion: Expansion): number[] {
    let type: number = Math.random()
}