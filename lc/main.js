// Arrays para armazenar produtos e pessoas
let produtos = [];
let pessoas = [];

// Função para cadastrar um produto
function cadastrarProduto() {
    const produto = prompt("Digite o nome do produto:");
    produtos.push(produto);
    console.log(`Produto "${produto}" cadastrado com sucesso.`);
}

// Função para cadastrar uma pessoa
function cadastrarPessoa() {
    if (pessoas.length < 3) {
        const pessoa = prompt("Digite o nome da pessoa:");
        pessoas.push(pessoa);
        console.log(`Pessoa "${pessoa}" cadastrada com sucesso.`);
    } else {
        console.log("Número máximo de pessoas atingido (3).");
    }
}

// Função para sortear e exibir o produto ganhador
function sortearProduto() {
    if (produtos.length === 0 || pessoas.length === 0) {
        console.log("Não há produtos ou pessoas cadastrados para realizar o sorteio.");
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * produtos.length);
    const produtoGanhador = produtos[numeroSorteado];
    
    const numeroPessoaSorteada = Math.floor(Math.random() * pessoas.length);
    const pessoaGanhadora = pessoas[numeroPessoaSorteada];

    console.log(`A pessoa sorteada "${pessoaGanhadora}" ganhou o produto: "${produtoGanhador}"`);
}

// Loop para manter o menu em execução
let opcao;
while (opcao !== "4") {
    opcao = prompt(`Menu de opções:
1. Cadastrar Produto
2. Cadastrar Pessoas
3. Sortear
4. Sair
Digite a opção desejada:`);

    switch (opcao) {
        case "1":
            cadastrarProduto();
            break;
        case "2":
            cadastrarPessoa();
            break;
        case "3":
            sortearProduto();
            break;
        case "4":
            console.log("Saindo do programa.");
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
    }
}

