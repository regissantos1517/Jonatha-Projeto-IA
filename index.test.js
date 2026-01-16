const calcularAssinatura = require('./index');

test('Deve calcular o valor sem desconto para 3 usuários', () => {
    expect(calcularAssinatura(3)).toBe(150);
});

test('Deve aplicar 10% de desconto para 6 usuários', () => {
    expect(calcularAssinatura(6)).toBe(270);
});

test('Deve aplicar 20% de desconto para 12 usuários', () => {
    expect(calculateAssinatura(12)).toBe(480);
});