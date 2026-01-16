// Gerado com o prompt: "Crie uma função em Node.js que calcule o valor total de uma assinatura de ferramenta de colaboração, aplicando um desconto progressivo de 10% para mais de 5 usuários e 20% para mais de 10 usuários."

function calcularAssinatura(quantidadeUsuarios) {
    const precoBase = 50.00;
    let total = quantidadeUsuarios * precoBase;

    if (quantidadeUsuarios > 10) {
        total *= 0.80; // 20% de desconto
    } else if (quantidadeUsuarios > 5) {
        total *= 0.90; // 10% de desconto
    }

    return total;
}

module.exports = calcularAssinatura;