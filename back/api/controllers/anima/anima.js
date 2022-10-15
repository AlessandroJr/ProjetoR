module.exports = app => {
    const controller = {};

    controller.inserirInscricao = function (req, res) {
        db.MongoClient.connect(db.url, function (err, db) {
            if (err) throw err;
            var dbo = db.db('desafio');
            let dto = {
                idinscricao: Token.genGuid(),
                name: req.body.nome,
                phone: req.body.fone,
                aceitoLGPD: req.body.aceitolgpd,
                otherResults: req.body.otherResults,
                perguntasSelecionadas: req.body.pgts,
                respondidas: req.body.respondidas,
                acertos: req.body.acertos,
                pontos: {
                    Rock:req.body.pontos.Rock,
                    Lofi:req.body.pontos.Lofi,
                    Sertanejo:req.body.pontos.Sertanejo,
                    Eletronica:req.body.pontos.Eletronica,
                    Pop:req.body.pontos.Pop,
                    Funk:req.body.pontos.Funk,
                    Pagode:req.body.pontos.Pagode,
                    Rap:req.body.pontos.Rap
                }
            };



            dbo.collection('inscricao').insertOne(dto, function (error, response) {
                if (error) response.error = error;

                res.status(200).json(response);
            });

        });
    };

    return controller;
}