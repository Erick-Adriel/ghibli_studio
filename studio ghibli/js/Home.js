// Adiciona um evento de rolagem ao cabeçalho
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 200);
});

// Aguarda o carregamento do conteúdo do DOM
document.addEventListener("DOMContentLoaded", () => {
    let conteudo;

    // Carregar dados do JSON externo
    async function carregarDados() {
        try {
            const response = await fetch('conteudo.json');
            if (!response.ok) throw new Error('Erro ao carregar o JSON');
            conteudo = await response.json();
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    // Função de pesquisa
    function pesquisar(event) {
        event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário

        const pesquisa = document.getElementById("searchInput").value.toLowerCase();
        const resultadosDiv = document.getElementById("filmes");
        resultadosDiv.innerHTML = ""; // Limpa os resultados anteriores

        if (!pesquisa) {
            resultadosDiv.innerHTML = "<p>Por favor, digite algo para pesquisar.</p>";
            return;
        }

        const resultados = [];

        conteudo.forEach(categoria => {
            const itensEncontrados = categoria.itens.filter(item =>
                item.titulo.toLowerCase().includes(pesquisa)
            );

            if (itensEncontrados.length > 0) {
                resultados.push({
                    categoria: categoria.categoria,
                    itens: itensEncontrados
                });
            }
        });

        if (resultados.length > 0) {
            resultados.forEach(resultado => {
                const categoriaTitulo = document.createElement("h2");
                categoriaTitulo.textContent = resultado.categoria;
                resultadosDiv.appendChild(categoriaTitulo);

                resultado.itens.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.classList.add("item");

                    const titulo = document.createElement("p");
                    titulo.textContent = item.titulo;
                    itemDiv.appendChild(titulo);

                    if (item.imagem) {
                        const imagem = document.createElement("img");
                        imagem.src = item.imagem;
                        imagem.alt = item.titulo;
                        imagem.style.width = "100px";
                        itemDiv.appendChild(imagem);
                    }

                    resultadosDiv.appendChild(itemDiv);
                });
            });
        } else {
            resultadosDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        }
    }

    // Função para redirecionar para a página de resultados
    function redirectToPage() {
        const page = document.getElementById('searchPage').value; // Adicionando um campo oculto ou select para a página
        const query = document.getElementById('searchInput').value;
        window.location.href = `${page}?query=${encodeURIComponent(query)}`;
        return false; // Evita o envio padrão do formulário
    }

    // Carrega os dados e define o evento de submit para o formulário de pesquisa
    carregarDados(); // Carrega os dados ao carregar a página

    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", (event) => {
        if (searchForm.action.includes('Filmes.html')) {
            redirectToPage(); // Redireciona para a página de resultados se a ação for a correta
        } else {
            pesquisar(event); // Caso contrário, executa a pesquisa
        }
    });
});
