const sinesp = require("sinesp-api");

module.exports = async (req, res) => {
  const { placa } = req.query;

  if (!placa) {
    return res.status(400).json({
      erro: "Informe a placa"
    });
  }

  try {
    const veiculo = await sinesp.search(placa);

    res.status(200).json({
      placa: veiculo.placa,
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      cor: veiculo.cor,
      ano: veiculo.ano,
      anoModelo: veiculo.anoModelo,
      municipio: veiculo.municipio,
      uf: veiculo.uf,
      situacao: veiculo.situacao
    });

  } catch (e) {
    res.status(500).json({
      erro: "Falha na consulta"
    });
  }
};
