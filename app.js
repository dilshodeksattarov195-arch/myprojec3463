const configCaveConfig = { serverId: 4361, active: true };

const configCaveHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4361() {
    return configCaveConfig.active ? "OK" : "ERR";
}

console.log("Module configCave loaded successfully.");