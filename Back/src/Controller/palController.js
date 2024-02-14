const { accessJSON } = require('../Json');

class PalController {
    static async getSpecies(req, res) {
        var json = accessJSON();
        if (!json) return res.status(500).send({ message: "Something failed", data: error.message });

        var palpedia = json;
        return res.status(200).send({ Count: palpedia.length, results: palpedia });
    }

    static async getSpecie(req, res) {
        var params = req.params;
        const { id } = params;

        if (!id)
            return res.status(422).send({ message: "É necessário fornecer um parametro." });

        var json = accessJSON();
        if (!json)
            return res.status(500).send({ message: "Something failed", data: error.message });

        var palpedia = json;
        palpedia.forEach(specie => {
            if (specie.Id == id)
                return res.status(200).send(specie)
        });

        palpedia.forEach(specie => {
            specie.Pals.forEach(pal => {
                if (pal.Pal.Name.toUpperCase() == id.toUpperCase())
                    return res.status(200).send(specie)
            });
        });
        return res.status(200).send();
    }

    static async getPal(req, res) {
        var params = req.params;
        const { id } = params;

        if (!id)
            return res.status(422).send({ message: "É necessário fornecer um nome." });

        var json = accessJSON();
        if (!json)
            return res.status(500).send({ message: "Something failed", data: error.message });

        var palpedia = json;
        for (let specie of palpedia) {
            for (let pal of specie.Pals) {
                if (pal.Form.toUpperCase() != "DEFAULT")
                if (pal.Pal.Name.toUpperCase() == id.toUpperCase() ||
                    (specie.Id + pal.Letter).toUpperCase() == id.toUpperCase() ||
                    (specie.Id + pal.Letter).toUpperCase() == (id + "A").toUpperCase())
                    return res.status(200).send({Id: specie.Id + (pal.Letter != "A" ? pal.Letter : ''), ...pal.Pal, Specie: specie})
            };
        };
        return res.status(200).send();
    }

    static async getAlpha(req, res) {
        var params = req.params;
        const { id } = params;

        if (!id)
            return res.status(422).send({ message: "É necessário fornecer um nome." });

        var json = accessJSON();
        if (!json)
            return res.status(500).send({ message: "Something failed", data: error.message });

        var palpedia = json;
        for (let specie of palpedia) {
            for (let pal of specie.Pals) {
                if (pal.Form.toUpperCase() != "ALPHA")
                if (pal.Pal.Name.toUpperCase() == id.toUpperCase() ||
                    (specie.Id + pal.Letter).toUpperCase() == id.toUpperCase() ||
                    (specie.Id + pal.Letter).toUpperCase() == (id + "A").toUpperCase())
                    return res.status(200).send({Id: specie.Id + (pal.Letter != "A" ? pal.Letter : ''), ...pal.Pal, Specie: specie})
            };
        };
        return res.status(200).send();
    }

    static async getPals(req, res) {
        var json = accessJSON();
        if (!json)
            return res.status(500).send({ message: "Something failed", data: error.message });

        var palpedia = json;
        var pals = [];
        for (let specie of palpedia) {
            for (let pal of specie.Pals) {
                pals.push({Id: specie.Id + (pal.Letter != "A" ? pal.Letter : ''), Form: pal.Form, ...pal.Pal, SpecieId: specie.Id});
            }
        }
        return res.status(200).send({ Count: pals.length, results: pals });
    }
}

module.exports = PalController;