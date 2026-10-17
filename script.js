/* =========================================================
   Marcelo Cavalcante — Portfólio
   Estrutura: DADOS → RENDER → COMPORTAMENTOS → INIT
   ========================================================= */

/* ---------- DADOS: habilidades ----------
   Edite aqui para incluir/remover tecnologias.
   Mantenha apenas o que você realmente usa. */
const HABILIDADES = [
    {
        titulo: "Front-end",
        icone: "i-layers",
        itens: [
            {
                nome: "HTML5",
                desc: "Estrutura semântica e acessível, preparada para leitores de tela e para SEO."
            },
            {
                nome: "CSS3",
                desc: "Layouts com Flexbox e Grid, variáveis de tema, animações e responsividade."
            },
            {
                nome: "JavaScript (ES6+)",
                desc: "Interfaces interativas, manipulação do DOM e consumo de APIs."
            },
            {
                nome: "React",
                desc: "Componentes reutilizáveis e controle de estado em interfaces mais complexas."
            },
            {
                nome: "Desenvolvimento responsivo",
                desc: "Mobile-first: o mesmo layout funciona do celular pequeno ao desktop grande."
            }
        ]
    },
    {
        titulo: "Back-end e dados",
        icone: "i-server",
        itens: [
            {
                nome: "Node.js",
                desc: "Criação de rotas e serviços para dar suporte ao front-end."
            },
            {
                nome: "SQL",
                desc: "Modelagem simples e consultas em bancos de dados relacionais."
            },
            {
                nome: "APIs REST",
                desc: "Integração de dados externos com tratamento de erro e estados de carregamento."
            }
        ]
    },
    {
        titulo: "Ferramentas e práticas",
        icone: "i-branch",
        itens: [
            {
                nome: "Git e GitHub",
                desc: "Versionamento, branches e publicação dos projetos via GitHub Pages."
            },
            {
                nome: "VS Code e DevTools",
                desc: "Depuração no navegador, inspeção de layout e testes de responsividade."
            },
            {
                nome: "UI/UX e acessibilidade",
                desc: "Hierarquia visual, contraste, foco por teclado e textos alternativos."
            }
        ]
    }
];

/* ---------- DADOS: projetos ----------
   Os links já estão nos endereços reais dos seus repositórios. */
const PROJETOS = [
    {
        nome: "Confeitaria",
        imagem: "img/Card_01.png",
        tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
        desc: "Site institucional de uma confeitaria artesanal, com catálogo de bolos em cards, página sobre e área de contato.",
        problema: "Dá ao negócio um catálogo próprio e um canal de contato direto, sem depender apenas das redes sociais.",
        demo: "https://marcelo-cavalcante.github.io/Confeitaria/",
        repo: "https://github.com/Marcelo-Cavalcante/Confeitaria"
    },
    {
        nome: "Conversor de Moedas",
        imagem: "img/Card_02.png",
        tags: ["HTML", "CSS", "JavaScript"],
        desc: "Conversor com seleção de moeda de origem e destino, campo de valor e resultado calculado em JavaScript.",
        problema: "Resolve a conversão rápida de valores sem abrir planilha ou buscar a cotação manualmente.",
        demo: "https://marcelo-cavalcante.github.io/Conversor-de-Moedas/",
        repo: "https://github.com/Marcelo-Cavalcante/Conversor-de-Moedas"
    },
    {
        nome: "Perfumaria",
        imagem: "img/Card_03.png",
        tags: ["HTML", "CSS", "JavaScript", "UI"],
        desc: "Loja de perfumes com menu de navegação, vitrine de produtos, área de login e carrinho na interface.",
        problema: "Organiza a vitrine de produtos e o caminho até o contato em uma identidade visual consistente.",
        demo: "https://marcelo-cavalcante.github.io/Site-de-Perfumaria/",
        repo: "https://github.com/Marcelo-Cavalcante/Site-de-Perfumaria"
    },
    {
        nome: "Tecno Store",
        imagem: "img/Card_04.png",
        tags: ["HTML", "CSS", "JavaScript", "Grid"],
        desc: "Vitrine de eletrônicos com carrossel de destaques navegável e listagem de produtos em grid.",
        problema: "Mostra lançamentos em rotação na primeira tela e permite incluir novos produtos sem refazer o layout.",
        demo: "https://marcelo-cavalcante.github.io/Tecno-Store/",
        repo: "https://github.com/Marcelo-Cavalcante/Tecno-Store"
    },
    {
        nome: "Vlog Cats",
        imagem: "img/Card_05.png",
        tags: ["HTML", "CSS", "JavaScript"],
        desc: "Página de vlog sobre gatos, com seção de apresentação, cards temáticos, área de vídeos e chamada para assinatura.",
        problema: "Reúne em um só lugar o conteúdo que antes ficava espalhado entre vídeos e redes sociais.",
        demo: "https://marcelo-cavalcante.github.io/Vlog-Cats/",
        repo: "https://github.com/Marcelo-Cavalcante/Vlog-Cats"
    },
    {
        nome: "UMIC Acaracuzinho",
        imagem: "img/Card_06.png",
        tags: ["HTML", "CSS", "JavaScript", "Lógica"],
        desc: "Site da juventude da Igreja de Cristo no Acaracuzinho, desenvolvido  para apresentar as células, facilitar a escolha de um grupo conforme a faixa etária e perfil, além de conhecer a liderança.",
        problema: "Facilita o primeiro contato do jovens, ajudando-os a encontrar uma célula adequada ao seu perfil.",
        demo: "https://marcelo-cavalcante.github.io/Site-da-Umic/",
        repo: "https://github.com/Marcelo-Cavalcante/Site-da-Umic"
    }
];

/* ---------- Utilidades ---------- */
const $ = (seletor, escopo = document) => escopo.querySelector(seletor);
const $$ = (seletor, escopo = document) => [...escopo.querySelectorAll(seletor)];

/** Evita que qualquer texto dos dados quebre o HTML. */
function escapar(texto) {
    return String(texto).replace(/[&<>"']/g, (c) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
}

function icone(id, classe = "icone") {
    return `<svg class="${classe}" aria-hidden="true"><use href="#${id}"></use></svg>`;
}

/* ---------- RENDER: habilidades ---------- */
function renderizarHabilidades() {
    const alvo = $("#habilidades-grid");
    if (!alvo) return;

    alvo.innerHTML = HABILIDADES.map((grupo) => `
        <article class="habilidades-grupo reveal">
            <h3 class="habilidades-grupo-titulo">${icone(grupo.icone)}${escapar(grupo.titulo)}</h3>
            <dl class="habilidades-itens">
                ${grupo.itens.map((item) => `
                    <div>
                        <dt>${escapar(item.nome)}</dt>
                        <dd>${escapar(item.desc)}</dd>
                    </div>
                `).join("")}
            </dl>
        </article>
    `).join("");
}

/* ---------- RENDER: projetos ---------- */
function renderizarProjetos() {
    const alvo = $("#projetos-grid");
    if (!alvo) return;

    alvo.innerHTML = PROJETOS.map((projeto, i) => `
        <article class="projeto-card reveal">
            <figure class="projeto-figura">
                <img class="projeto-imagem" src="${escapar(projeto.imagem)}" width="900" height="405"
                     loading="${i < 3 ? "eager" : "lazy"}" decoding="async"
                     alt="Captura de tela do projeto ${escapar(projeto.nome)}">
            </figure>
            <div class="projeto-corpo">
                <h3 class="projeto-titulo">${escapar(projeto.nome)}</h3>
                <p class="projeto-desc">${escapar(projeto.desc)}</p>
                <p class="projeto-problema"><strong>Problema que resolve</strong>${escapar(projeto.problema)}</p>
                <ul class="projeto-tags">
                    ${projeto.tags.map((tag) => `<li>${escapar(tag)}</li>`).join("")}
                </ul>
                <div class="projeto-links">
                    <a class="btn btn-primario" href="${escapar(projeto.demo)}" target="_blank" rel="noopener noreferrer">
                        ${icone("i-external")} Ver projeto
                        <span class="sr-only">— ${escapar(projeto.nome)}</span>
                    </a>
                    <a class="btn btn-contorno" href="${escapar(projeto.repo)}" target="_blank" rel="noopener noreferrer">
                        ${icone("i-github")} Código
                        <span class="sr-only">— ${escapar(projeto.nome)}</span>
                    </a>
                </div>
            </div>
        </article>
    `).join("");
}

/* ---------- Animação de entrada ----------
   Um único observer é reutilizado por todos os elementos .reveal. */
const observadorReveal = "IntersectionObserver" in window
    ? new IntersectionObserver((entradas, obs) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            entrada.target.classList.add("visivel");
            obs.unobserve(entrada.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

function observarReveal() {
    const elementos = $$(".reveal:not(.visivel)");
    if (!observadorReveal) {
        elementos.forEach((el) => el.classList.add("visivel"));
        return;
    }
    elementos.forEach((el) => observadorReveal.observe(el));
}

/* ---------- Menu: uma lista, dois comportamentos ---------- */
function configurarMenu() {
    const botao = $("#nav-toggle");
    const nav = $("#nav");
    const fundo = $("#nav-fundo");
    if (!botao || !nav || !fundo) return;

    const rotulo = $(".sr-only", botao);
    let aberto = false;

    const abrir = () => {
        aberto = true;
        fundo.hidden = false;
        botao.setAttribute("aria-expanded", "true");
        if (rotulo) rotulo.textContent = "Fechar menu";
        // um frame antes de animar, para a transição do fundo acontecer
        requestAnimationFrame(() => document.body.classList.add("menu-aberto"));
        $(".nav-link", nav)?.focus({ preventScroll: true });
    };

    const fechar = ({ devolverFoco = false } = {}) => {
        if (!aberto) return;
        aberto = false;
        document.body.classList.remove("menu-aberto");
        botao.setAttribute("aria-expanded", "false");
        if (rotulo) rotulo.textContent = "Abrir menu";
        // espera a transição do fundo antes de escondê-lo
        setTimeout(() => { if (!aberto) fundo.hidden = true; }, 280);
        if (devolverFoco) botao.focus();
    };

    botao.addEventListener("click", () => (aberto ? fechar({ devolverFoco: true }) : abrir()));
    fundo.addEventListener("click", () => fechar());
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) fechar(); });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            fechar({ devolverFoco: true });
            return;
        }

        // com a gaveta aberta, o Tab circula entre o botão e os links do menu
        if (e.key !== "Tab" || !aberto) return;

        const focaveis = [botao, ...$$("a", nav)];
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];

        if (e.shiftKey && document.activeElement === primeiro) {
            e.preventDefault();
            ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
            e.preventDefault();
            primeiro.focus();
        }
    });

    // se a tela crescer até o layout de barra, o estado de gaveta é descartado
    const barra = window.matchMedia("(min-width: 1024px)");
    barra.addEventListener("change", (e) => { if (e.matches) fechar(); });
}

/* ---------- Cabeçalho: borda ao rolar ---------- */
function configurarCabecalho() {
    const cabecalho = $("#cabecalho");
    if (!cabecalho) return;

    const atualizar = () => cabecalho.classList.toggle("rolado", window.scrollY > 12);
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
}

/* ---------- Link ativo no menu ---------- */
function configurarLinkAtivo() {
    const secoes = $$("main section[id]");
    const links = $$(".nav-link");
    if (!secoes.length || !links.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            const id = entrada.target.id;
            links.forEach((link) => {
                const ativo = link.getAttribute("href") === `#${id}`;
                if (ativo) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    secoes.forEach((secao) => observer.observe(secao));
}

/* ---------- Ano do rodapé ---------- */
function atualizarAno() {
    const ano = $("#ano");
    if (ano) ano.textContent = new Date().getFullYear();
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
    renderizarHabilidades();
    renderizarProjetos();
    observarReveal();
    configurarMenu();
    configurarCabecalho();
    configurarLinkAtivo();
    atualizarAno();
});
