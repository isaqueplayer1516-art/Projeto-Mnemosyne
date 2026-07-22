// ===========================
// BARRA DE PESQUISA
// ===========================

const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");

function pesquisar() {

    if (!input) return;

    const texto = input.value.trim().toLowerCase();

    if (texto === "") {
        alert("Digite um termo para pesquisar.");
        return;
    }

    const paginas = {

        "instituto": "pages/instituto.html",

        "pesquisas": "pages/pesquisas.html",

        "equipe": "pages/equipe.html",

        "contato": "pages/contato.html",

        "memória": "pages/pesquisas.html",

        "memoria": "pages/pesquisas.html",

        "cognição": "pages/pesquisas.html",

        "cognicao": "pages/pesquisas.html",

        "percepção": "pages/pesquisas.html",

        "percepcao": "pages/pesquisas.html",

        "mnemosyne": "pages/projeto-mnemosyne.html"

    };

    if (paginas[texto]) {

        window.location.href = paginas[texto];

    } else {

        alert(`Nenhum resultado encontrado para "${texto}".`);

    }

}

if (button) {

    button.addEventListener("click", pesquisar);

}

if (input) {

    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            pesquisar();

        }

    });

}

// ===========================
// MODAL DAS PESQUISAS
// ===========================

const modal = document.getElementById("researchModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.querySelector(".close-modal");

const pesquisas = {

    memoria: {

        titulo: "Pesquisa em Memória",

        texto: "A área de Memória investiga como lembranças são formadas, armazenadas e recuperadas. Os pesquisadores estudam memória de curto e longo prazo, aprendizagem, esquecimento e neuroplasticidade, buscando compreender os mecanismos responsáveis pelo armazenamento de informações no cérebro."

    },

    percepcao: {

        titulo: "Pesquisa em Percepção",

        texto: "A linha de pesquisa em Percepção analisa como o cérebro interpreta estímulos visuais, auditivos e sensoriais. O laboratório desenvolve estudos sobre atenção, percepção espacial, reconhecimento de padrões e integração sensorial."

    },

    cognicao: {

        titulo: "Pesquisa em Cognição",

        texto: "A pesquisa em Cognição busca compreender processos como raciocínio, tomada de decisão, resolução de problemas e aprendizagem. Os estudos unem neurociência, psicologia cognitiva e inteligência artificial."

    }

};

const botoesPesquisa = document.querySelectorAll(".open-modal");

if (modal && botoesPesquisa.length > 0) {

    botoesPesquisa.forEach(botao => {

        botao.addEventListener("click", function(e){

            e.preventDefault();

            const pesquisa = pesquisas[this.dataset.modal];

            modalTitle.textContent = pesquisa.titulo;
            modalText.textContent = pesquisa.texto;

            modal.style.display = "flex";

        });

    });

    if (closeModal) {

        closeModal.addEventListener("click", () => {

            modal.style.display = "none";

        });

    }

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}   