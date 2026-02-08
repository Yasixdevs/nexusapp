const si = require("systeminformation");

async function Informationglobal()
{
const cpu = await si.cpu();
const osInfo = await si.osInfo();
const cpuLoad = await si.currentLoad();
return {
    cpuname: cpu.brand,
    cpucores: cpu.cores,
    cpusocket: cpu.socket,
    cpuLoad: cpuLoad.currentLoad
}
}

async function CpuLoad() {
    const cpuLoad = await si.currentLoad();
    return {
        cpuLoad : cpuLoad
    }
}
module.exports = { Informationglobal, CpuLoad };
