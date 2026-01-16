[![Node.js CI](https://github.com/regissantos1517/Projeto-IA/actions/workflows/workflow.yml/badge.svg)](https://github.com/regissantos1517/Projeto-IA/actions/workflows/workflow.yml)
IA na Prática: Acelerando o Desenvolvimento e Garantindo a Qualidade 

## 1. Análise do Problema (Empresa Simulada) A organização em estudo atua no setor de ferramentas de colaboração online, enfrentando uma fase de crescimento acelerado e pressão constante por novas funcionalidades. O desafio central reside no desequilíbrio entre a agilidade exigida pelo mercado e a estabilidade técnica do software.
+2

Os principais gargalos identificados na equipe de engenharia (composta por níveis júnior e pleno) são:
+1


Desenvolvimento Lento: Grande parte do tempo é consumida por códigos repetitivos (boilerplate).


Inconsistência de Código: Falta de padrões automatizados resultando em soluções fragmentadas.


Baixa Cobertura de Testes: A escrita de testes é vista como uma tarefa que "atrasa" as entregas.


Feedback Lento: Bugs descobertos tardiamente (em QA ou produção), elevando o custo de correção.

2. O Papel da IA no Ciclo de Desenvolvimento 
+1

A integração de IA Generativa e Automação transforma o ciclo de vida do software (SDLC) em três frentes:


Aceleração de Código: Ferramentas como o GitHub Copilot sugerem blocos de código em tempo real, podendo elevar a produtividade em até 55%.


Geração de Testes: A IA analisa a lógica e gera suítes de testes unitários robustos, garantindo qualidade sem sacrificar a velocidade.


CI/CD Automático: A integração com GitHub Actions assegura a execução de testes a cada alteração, proporcionando feedback imediato e reduzindo o custo de correção.

3. Estudo de Caso Real: Duolingo 
+1

O Duolingo implementou o GitHub Copilot para escalar sua engenharia frente a uma base de código em expansão.


Solução: Integração da ferramenta para cerca de 300 desenvolvedores.


Resultados: Aumento médio de 25% na velocidade de desenvolvimento. Engenheiros novos em repositórios específicos ganharam 25% de agilidade no onboarding. A solução permitiu maior foco em inovação ao delegar tarefas mecânicas à IA.
+2

4. Implementação Prática 
+1

O projeto consiste em uma função de negócio desenvolvida com assistência de IA e protegida por um pipeline automatizado.

4.1. GitHub Copilot
A lógica principal foi gerada através de assistência inteligente:


Prompt Utilizado: "Crie uma função em Node.js que calcule o valor total de uma assinatura de ferramenta de colaboração, aplicando um desconto progressivo de 10% para mais de 5 usuários e 20% para mais de 10 usuários.".


Testes: A suíte de testes unitários foi gerada automaticamente pela IA para cobrir cenários de borda e exceções.

4.2. GitHub Actions (CI/CD)
O arquivo workflow.yml automatiza a qualidade a cada push:


Build: Prepara o ambiente e instala as dependências.


Test: Executa os testes unitários; se houver erro, o build é interrompido imediatamente.

5. Referências 

FOWLER, Martin. Test Coverage. 2012.

GITHUB. How to use GitHub Copilot for writing and explaining tests. 2024.

GITHUB. Building and testing Node.js. 2024.

UNIFECAF. AI-Driven Software Engineering. 2025.