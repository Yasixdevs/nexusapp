const si = require("systeminformation");

async function Informationglobal()
{
const cpu = await si.cpu();
const osInfo = await si.osInfo();
console.log(cpu);
console.log(osInfo);
return {
    cpuname: cpu.brand,
    cpucores: cpu.cores,
    cpusocket: cpu.socket,
    cpuLoad: await si.currentLoad
}
}
