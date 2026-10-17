# Portfólio — Marcelo Cavalcante

Arquivos: `index.html`, `style.css`, `script.js`, `img/`, `Marcelo_Cavalcante_-_CV.pdf`.
Basta copiar tudo para a raiz do repositório e publicar. Não há build, dependência ou biblioteca externa.

---

## O que mudou

**Estrutura**
- O menu agora tem **uma única lista** no HTML. No desktop ela vira barra horizontal; no mobile, gaveta lateral. Antes existiam dois menus duplicados (desktop + mobile) com os mesmos links.
- Nova seção **Trajetória** (experiência + formação), preenchida só com o que está no seu currículo.
- Cada projeto ganhou o campo **"Problema que resolve"**, além de descrição, tags e os dois links.
- Adicionados `<header>`, `<main>`, `<footer>`, link "Pular para o conteúdo" e hierarquia de títulos correta (um `h1`, `h2` por seção).

**Bugs corrigidos**
- Caminhos de imagem com espaço (`img/Card 01.png`) → `img/Card_01.png`.
- `img/favicon.png` não existia e gerava 404 → criado `img/favicon.svg`.
- A foto do hero estava com `loading="lazy"`, o que atrasa justamente a maior imagem da primeira tela → agora `fetchpriority="high"`.
- `.btn-fechar` era uma `<div>` com `role="button"` → agora é um `<button>` de verdade.
- O menu mobile não travava o scroll do fundo e o overlay não fechava de forma consistente.
- `height: 100vh` na gaveta cortava o conteúdo em navegadores de celular com barra dinâmica → `100dvh`.

**Performance**
- Removidos o CDN do **Bootstrap Icons** (uma fonte inteira baixada para usar ~10 ícones) e substituído por um sprite SVG embutido no HTML. Menos uma requisição externa e menos ~100 KB.
- Imagens redimensionadas e recomprimidas: **2,7 MB → 308 KB** no total, sem perda visível.
- Fontes com menos pesos carregados.

**Acessibilidade**
- Foco visível em todos os elementos interativos, navegação por teclado na gaveta (Tab circula dentro do menu, Esc fecha e devolve o foco ao botão).
- `aria-current` no link da seção ativa, `aria-expanded` no botão do menu, `alt` descritivo nas imagens.
- Botões com altura mínima de 46px (alvo de toque confortável no celular).
- `prefers-reduced-motion` desliga todas as animações.

**SEO**
- `<title>` e descrição falando "Desenvolvedor Full Stack", canonical, Open Graph completo com imagem de preview 1200×630 (`img/og-image.jpg`) e JSON-LD (schema.org/Person).

---

## Pendências para você revisar

1. **URL do site** — em `index.html` há três lugares com `https://marcelo-cavalcante.github.io/` (canonical, `og:url`, `og:image`). Troque pela URL real assim que publicar; senão o preview no LinkedIn/WhatsApp não carrega.
2. **Node.js e SQL** — entraram na seção de habilidades porque constam no seu currículo. Se você não se sente confortável em responder sobre isso numa entrevista, remova de `script.js` (constante `HABILIDADES`).
3. **Conversor de Moedas** — o texto antigo dizia "cotações em tempo real via API". Não consegui confirmar isso no código, então descrevi sem citar API. Se o projeto realmente consome uma API, adicione `"API"` nas tags e ajuste a descrição.
4. **"Aberto a oportunidades"** — o selo verde no topo. Se não fizer sentido no momento, apague o `<p class="hero-disponibilidade">`.
5. **Repositórios ausentes** — o currículo cita "login de Petshop" e "Hamburgueria", que não estão no portfólio. Se estiverem publicados, adicione um objeto novo no array `PROJETOS` em `script.js`.

---

## Como editar

- **Textos de projetos e habilidades**: tudo em `script.js`, nos arrays `PROJETOS` e `HABILIDADES` (topo do arquivo). O HTML é gerado a partir deles.
- **Cores e espaçamentos**: variáveis no `:root` de `style.css`. Mudando `--marca` você troca o laranja do site inteiro.
- **Nova seção**: crie a `<section class="secao" id="...">`, adicione o link em `.nav-lista` e ponha `reveal` nos blocos que devem animar na entrada.

## Testado em

Chromium headless nas larguras 320, 390, 768, 1024, 1280 e 1440 px: sem scroll horizontal, sem erro no console, gaveta abrindo/fechando por botão, link, clique fora e Esc.
