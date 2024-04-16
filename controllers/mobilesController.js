
let mobiles = [
    { id: 1, marca: "Apple", modelo: "Iphone 14" },
    { id: 2, marca: "Apple", modelo: "Iphone 13" },
    { id: 3, marca: "Samsung", modelo: "Galaxy S22" },
];

const getAllMobiles = (req, res) => {
    res.json(mobiles);
};

const getMobileById = (req, res) => {
    const mobileId = parseInt(req.params.id);
    const mobile = mobiles.find((mobile) => mobile.id === mobileId);
    console.log(mobile);
    res.json(mobile);
};

const patchMobile = (req, res) => {
    const mobileId = parseInt(req.params.id);
    const { marca, modelo } = req.body;
    const index = mobiles.findIndex((mobile) => mobile.id === mobileId);
    if (index === -1) {
        return res.json({ error: "No se encuentra ese Id" });
    }
    mobiles[index].marca = marca;
    mobiles[index].modelo = modelo;
    res.json(mobiles[index]);
};

const createMobile = (req, res) => {
    const { marca, modelo } = req.body;
    const index = mobiles.length + 1;
    mobiles.push({ index, marca, modelo });
    res.json(mobiles);
};

const deleteMobile = (req, res) => {
    const mobileId = parseInt(req.params.id);
    const index = mobiles.findIndex((mobile) => mobile.id === mobileId);
    console.log(index);
    if (index === -1) {
        return res.json({ error: "No se encuentra ese Id" });
    }
    mobiles.splice(index, 1);
    return res.json(mobiles);
};

module.exports = {
    getAllMobiles,
    getMobileById,
    createMobile,
    patchMobile,
    deleteMobile,
};