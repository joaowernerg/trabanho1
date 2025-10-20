
/* ============================================================
   TP1 - Biblioteca Dinâmica | João de Cristo Werner Gonçalves Moreira
   ============================================================ */

const dados = {
  livros: [
    {
      id: 1,
      titulo: "Dom Casmurro",
      autor: "Machado de Assis",
      descricao: "A história começa com o envolvimento romântico entre dois adolescentes.",
      conteudo: "A narrativa relata fatos ocorridos no século XIX, sem especificar as datas, com exceção do ano de 1857, quando Bentinho tem 15 anos de idade; 1865, quando Bentinho e Capitu se casam; e, por fim, 1871, ano da morte de Escobar. Porém, o relato prossegue, de forma que é possível concluir que o tempo da narração, isto é, quando o narrador conta a história, está situado na década de 1890",
      ano: 2020,
      genero: "Romance psicológico",
      paginas: 208,
      idioma: "Português",
      editora: "Principis",

      destaque: true,
      imagem_principal: "https://s3.static.brasilescola.uol.com.br/be/2021/06/capa-do-livro-dom-casmurro.jpg",
      fotos: [
        { titulo: "Dom Casmurro", imagem: "https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-pcqgdl.jpg" },
      ]
    },
    {
      id: 2,
      titulo: "O Pequeno Príncipe",
      autor: "Antoine de Saint-Exupéry",
      descricao: "O pequeno príncipe é uma obra atemporal, com metáforas pertinentes e aprendizados sobre afeto, sonhos, esperança e tudo aquilo que é invisível aos olhos. .",
      conteudo: "Considerado uma das obras mais lidas no mundo todo, O Pequeno Príncipe continua a encantar seus leitores com sua doçura e sensibilidade. A história, ilustrada com as aquarelas do próprio autor, relata o encontro do piloto de avião que cai no deserto do Saara com o garotinho com cabelos dourados. O Pequeno Príncipe conta ao piloto sobre seu pequeno planeta B 612, sua rosa solitária, seu encontro com os moradores dos outros planetas e também com a sábia raposa. Um clássico da literatura que promete nos relembrar de nossa infância e ver a vida com outros olhos.",
      ano: 1943,
      genero: "Fábula",
      paginas: 96,
      idioma: "Português",
      editora: "Agir",
      preco: "R$ 24,90",
      destaque: true,
      imagem_principal: "https://m.media-amazon.com/images/I/81TmOZIXvzL.jpg",
      fotos: [
        { titulo: "", imagem: "https://upload.wikimedia.org/wikipedia/commons/6/68/Antoine_de_Saint-Exup%C3%A9ry.jpg" },
    
      ]
    },
    {
      id: 3,
      titulo: "Memórias Póstumas de Brás Cubas",
      autor: "Machado de Assis",
      descricao: "O narrador conta sua vida depois da morte com ironia e filosofia.",
      conteudo: "Memórias Póstumas de Brás CubasMemórias Póstumas de Brás Cubas é um romance escrito por Machado de Assis. O livro marca um tom cáustico e novo estilo na obra de Machado de Assis, bem como audácia e inovação temática no cenário literário nacional — um dos fatores que fizeram com que fosse amplamente considerada a obra que iniciou o Realismo no Brasil.Memórias Póstumas de Brás Cubas retrata a escravidão, as classes sociais, o cientificismo e o positivismo da época, chegando a criar, inclusive, uma nova filosofia, mais bem desenvolvida posteriormente em Quincas Borba (1891) — o Humanitismo, sátira à lei do mais forte. Críticos escrevem que, com esse romance, Machado de Assis precedeu elementos do Modernismo e do realismo mágico de escritores como Jorge Luis Borges e Julio Cortázar, e, de fato, alguns autores chamam-na \"primeira narrativa fantástica do Brasil\". O livro influenciou pequenos escritores como John Barth, Donald Barthelme e Ciro dos Anjos e é notado como uma das obras mais revolucionárias e inovadoras da literatura brasileira. Mesmo depois de mais de um século de sua publicação original, ainda tem recebido inúmeros estudos e interpretações, adaptações para diversas mídias e traduções para outras línguas..",
      ano: 1881,
      genero: "Romance Realista",
      paginas: 142,
      idioma: "Português",
      editora: "Montecristo Editora",
      preco: "R$ 22,90",
      destaque: true,
      imagem_principal: "https://m.media-amazon.com/images/I/91GAAzBixYL._SY425_.jpg",
      fotos: [
        { titulo: "Capa Brás Cubas", imagem: "assets/img/books/bras_cubas_1.png" },
        { titulo: "Trechos famosos", imagem: "assets/img/books/bras_cubas_2.png" }
      ]
    },
    {
      id: 4,
      titulo: "Vidas Secas",
      autor: "Graciliano Ramos",
      descricao: "A única edição autorizada pelo Instituto Graciliano Ramos, onde parte dos direitos autorais são direcionados a ONG Inoccence Brasil. Vidas secas é reconhecidamente o mais importante livro de Graciliano Ramos e um dos maiores clássicos da literatura nacional. Publicado pela primeira vez em 1938.",
      conteudo: "Graciliano Ramos nasceu em 1892, no interior de Alagoas, e cresceu na fazenda do pai antes de se mudar para a capital do estado e, posteriormente, para o Rio de Janeiro, onde começou a trabalhar na imprensa. Em 1937, foi preso sob vagas acusações de defender ideologias comunistas. Ao deixar a prisão, procurou trabalho como jornalista em um jornal do Rio de Janeiro. O editor então lhe permitiu publicar um texto curto, e Graciliano escreveu um conto chamado “Baleia”, sobre o sofrimento e a morte da cachorrinha de uma família de retirantes sertanejos. O conto fez sucesso e o jornal encomendou outros no mesmo estilo. Graciliano produziu então um conto para cada membro da família: o pai, a mãe e os dois filhos. Nascia assim Vidas secas, narrado em terceira pessoa, com treze capítulos que, por não terem uma linearidade temporal, podem ser lidos fora de ordem, como contos.",
      ano: 2019,
      genero: "Romance Regionalista",
      paginas: 176,
      idioma: "Português",
      editora: "Record",
      preco: "R$ 29,90",
      destaque: false,
      imagem_principal: "https://m.media-amazon.com/images/I/71NYL2AbBIL.jpg",
      fotos: [
        { titulo: "Capa Vidas Secas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbZ9tmXK_qM9GMEzjYR9iWp9FPql7Zl09ug&s" },
      ]
    },

    {
      id: 6,
      titulo: "Grande Sertão: Veredas",
      autor: "Guimarães Rosa",
      descricao: "O  correr da vida embrulha tudo, a vida é assim: esquenta e esfria, aperta e daí afrouxa, sossega e depois desinquieta. O que ela quer da gente é coragem.",
      conteudo: "Publicado originalmente em 1956, Grande sertão: veredas é uma das obras mais apaixonantes da literatura brasileira. Ao narrar o mundo através dos olhos de Riobaldo, Guimarães Rosa constrói um romance fascinante, que mescla sofrimento, luta, alegria, violência, amor e morte .",
      ano: 1956,
      genero: "Romance",
      paginas: 504,
      idioma: "Português",
      editora: "Companhia de Bolso",
      preco: "R$ 69,90",
      destaque: true,
      imagem_principal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu0SeyzK-awppMhupyq6GKt6VoluUPL08t0g&s",
      fotos: [
        { titulo: "Capa GSV", imagem: "https://s2.glbimg.com/uASnw-njrXFSSXgQ9fMpTrahmoY=/e.glbimg.com/og/ed/f/original/2015/09/22/escritor-guimaraes-rosa-ok.jpg" },
      ]
    },
    {
      id: 7,
      titulo: "O Alienista",
      autor: "Machado de Assis",
      descricao: "Publicado em 1882, quando aparece incorporado ao volume de contos .",
      conteudo: "O livro conta a história do Dr. Bacamarte, um alienista (a designação de psiquiatra na época), que cria a Casa Verde, um local para realizar estudos inéditos sobre a mente humana, mas acaba perdendo-se na sua própria loucura.",
      ano: 1882,
      genero: "Novela",
      paginas: 112,
      idioma: "Português",
      editora: "Principis",
      preco: "R$ 18,90",
      destaque: false,
      imagem_principal: "https://upload.wikimedia.org/wikipedia/pt/c/c1/Resumo-do-livro-o-alienista-de-machado-de-assis.jpg",
      fotos: [
        { titulo: "Capa Alienista", imagem: "https://riomemorias.com.br/wp-content/uploads/2025/02/Captura-de-Tela-2025-02-10-as-06.41.44-1-791x1024.png" },
      ]
    },
    {
      id: 8,
      titulo: "A Hora da Estrela",
      autor: "Clarice Lispector",
      descricao: "Último livro escrito por Clarice Lispector, A hora da estrela é também uma despedida. Lançada pouco antes de sua morte em 1977, a obra conta os momentos de criação do escritor Rodrigo S. M. (a própria Clarice) narrando a história de Macabéa, uma alagoana órfã, virgem e solitária, criada por uma tia tirana, que a leva para o Rio de Janeiro, onde trabalha como datilógrafa.",
      conteudo: " Em A hora da estrela Clarice escreve sabendo que a morte está próxima e põe um pouco de si nas personagens Rodrigo e Macabéa. Ele, um escritor à espera da morte; ela, uma solitária que gosta de ouvir a Rádio Relógio e que passou a infância no Nordeste, como Clarice.",
      ano: 1998,
      genero: "Romance Existencial",
      paginas: 96,
      idioma: "Português",
      editora: "Rocco",
      preco: "R$ 28,90",
      destaque: true,
      imagem_principal: "https://m.media-amazon.com/images/I/810Vj9zyi-L._AC_UF1000,1000_QL80_.jpg",
      fotos: [
        { titulo: "Capa A Hora da Estrela", imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7c/%281920-1977%29_Clarice_Lispector_6zxkp_please_credit%28palette.fm%29_%28cropped%29.png" },
      ] 
    },
    {
      id: 9,
      titulo: "Quarto de Despejo",
      autor: "Carolina Maria de Jesus",
      descricao: ".",
      conteudo: "O diário da catadora de papel Carolina Maria de Jesus deu origem à este livro, que relata o cotidiano triste e cruel da vida na favela. A linguagem simples, mas contundente, comove o leitor pelo realismo e pelo olhar sensível na hora de contar o que viu, viveu e sentiu nos anos em que morou na comunidade do Canindé, em São Paulo, com três filhos.",
      ano: 2015,
      genero: "Diário",
      paginas: 200,
      idioma: "Português",
      editora: "Ática",
      preco: "R$ 27,90",
      destaque: false,
      imagem_principal: "https://m.media-amazon.com/images/I/71z42zpEwbL.jpg",
      fotos: [
        { titulo: "Capa QD", imagem: "https://cdn-images-1.medium.com/max/1200/1*eyY3w_h-hC2Y41nym3YZ3Q.jpeg" },
      ]
    },
    {
      id: 10,
      titulo: "1984",
      autor: "George Orwell",
      descricao: "Publicado em 1949, o texto de Orwell nasceu destinado à polêmica. Traduzido em mais de sessenta países, virou minissérie, filmes, quadrinhos, mangás e até uma ópera. Ganhou holofotes em 1999, quando uma produtora holandesa batizou seu reality show de Big Brother..",
      conteudo: "Publicado em 1949, o texto de Orwell nasceu destinado à polêmica. Traduzido em mais de sessenta países, virou minissérie, filmes, quadrinhos, mangás e até uma ópera. Ganhou holofotes em 1999, quando uma produtora holandesa batizou seu reality show de Big Brother. 1984 foi responsável pela popularização de muitos termos e conceitos, como Grande Irmão, duplopensar, novidioma, buraco da memória e 2 2 5. O trabalho de Winston, o herói de 1984, é reescrever artigos de jornais do passado, de modo que o registro histórico sempre apoie a ideologia do Partido. Grande parte do Ministério também destrói os documentos que não foram revisados, dessa forma não há como provar que o governo esteja mentindo. Winston é um trabalhador diligente e habilidoso, mas odeia secretamente o Partido e sonha com a rebelião contra o Grande Irmão..",
      ano: 1949,
      genero: "Distopia",
      paginas: 328,
      idioma: "Português",
      editora: "Companhia das Letras",
      preco: "R$ 44,90",
      destaque: true,
      imagem_principal: "https://m.media-amazon.com/images/I/61t0bwt1s3L.jpg",
      fotos: [
        { titulo: "", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/960px-George_Orwell_press_photo.jpg" },
      ]
    }
  ]
};

// ---------- FUNÇÕES GERAIS ----------
const qs = (sel) => document.querySelector(sel);
const params = () => new URLSearchParams(window.location.search);

// ---------- INDEX ----------
function montarCarousel() {
  const destaques = dados.livros.filter(l => l.destaque);
  const indicators = qs('#carouselIndicators');
  const inner = qs('#carouselInner');
  if (!indicators || !inner) return;

  indicators.innerHTML = '';
  inner.innerHTML = '';

  destaques.forEach((livro, idx) => {
    indicators.innerHTML += `
      <button type="button" data-bs-target="#destaquesCarousel" data-bs-slide-to="${idx}"
        ${idx === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${idx + 1}"></button>`;
    
    inner.innerHTML += `
      <div class="carousel-item ${idx === 0 ? 'active' : ''}">
        <div class="row align-items-center py-4 px-3 px-md-5">
          <div class="col-md-6 order-2 order-md-1">
            <h2 class="hero-title">${livro.titulo}</h2>
            <p class="lead mb-2">${livro.descricao}</p>
            <div class="mb-3 text-muted small">
              Autor: <strong>${livro.autor}</strong> • ${livro.ano} • ${livro.genero}
            </div>
            <a href="detalhe.html?id=${livro.id}" class="btn btn-primary btn-lg shadow-sm">Ver detalhes</a>
          </div>
          <div class="col-md-6 order-1 order-md-2 mb-3 mb-md-0">
            <img src="${livro.imagem_principal}" class="d-block w-100 rounded custom-shadow" alt="${livro.titulo}" />
          </div>
        </div>
      </div>`;
  });
}

function montarCards() {
  const grid = qs('#cardsGrid');
  if (!grid) return;

  grid.innerHTML = dados.livros.map(l => `
    <div class="col">
      <div class="card h-100 custom-shadow">
        <img src="${l.imagem_principal}" class="card-img-top" alt="${l.titulo}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${l.titulo}</h5>
          <p class="card-text text-muted small mb-2">${l.autor} • ${l.ano}</p>
          <p class="card-text flex-grow-1">${l.descricao}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <span class="badge text-bg-light border">Preço: ${l.preco}</span>
            <a href="detalhe.html?id=${l.id}" class="btn btn-outline-primary btn-sm">Detalhes</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---------- DETALHE ----------
function montarDetalhe() {
  const id = Number(params().get('id'));
  const livro = dados.livros.find(l => l.id === id);
  if (!livro) return;

  const hero = qs('#detailHero');
  hero.innerHTML = `
    <div class="container py-5">
      <div class="row align-items-center">
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <img src="${livro.imagem_principal}" class="img-fluid rounded custom-shadow" alt="${livro.titulo}">
        </div>
        <div class="col-md-8">
          <h1 class="display-6">${livro.titulo}</h1>
          <p class="text-muted">${livro.descricao}</p>
          <div class="mb-3">
            <span class="info-chip">Autor: ${livro.autor}</span>
            <span class="info-chip">Ano: ${livro.ano}</span>
            <span class="info-chip">Gênero: ${livro.genero}</span>
            <span class="info-chip">Páginas: ${livro.paginas}</span>
            <span class="info-chip">Idioma: ${livro.idioma}</span>
            <span class="info-chip">Preço: ${livro.preco}</span>
          </div>
          <a href="index.html#lista" class="btn btn-outline-primary">← Voltar</a>
        </div>
      </div>
    </div>
  `;

  const conteudo = qs('#detailContent');
  conteudo.innerHTML = `
    <div class="container pb-5">
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="card custom-shadow">
            <div class="card-body">
              <h4>Sobre a Obra</h4>
              <p>${livro.conteudo}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card custom-shadow">
            <div class="card-body">
              <h5>Fotos vinculadas</h5>
              <div class="row g-3">
                ${livro.fotos.map(f => `
                  <div class="col-6 col-md-6">
                    <img src="${f.imagem}" class="gallery-img rounded w-100" alt="${f.titulo}">
                    <p class="small text-center mt-1">${f.titulo}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

// ---------- INICIALIZAÇÃO ----------
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === 'index') {
    montarCarousel();
    montarCards();
  } else if (document.body.dataset.page === 'detalhe') {
    montarDetalhe();
  }
})