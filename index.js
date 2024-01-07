function calcularSaldoVitoriasDerrotas(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  function determinarNivel(saldo) {
    let nivel = "";
    if (saldo <= 10) {
      nivel = "Ferro";
    } else if (saldo <= 20) {
      nivel = "Bronze";
    } else if (saldo <= 50) {
      nivel = "Prata";
    } else if (saldo <= 80) {
      nivel = "Ouro";
    } else if (saldo <= 90) {
      nivel = "Diamante";
    } else if (saldo <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
    return nivel;
  }
  
  function exibirResultado() {
    let saldoVitoriasDerrotas = calcularSaldoVitoriasDerrotas(50, 20);
    let nivel = determinarNivel(saldoVitoriasDerrotas);
    return `O Herói tem um saldo de ${saldoVitoriasDerrotas} e está no nível de ${nivel}`;
  }
  
  console.log(exibirResultado());
  