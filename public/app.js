document.addEventListener("DOMContentLoaded", () => {
    const filmes = [
      {
        id: 1,
        titulo: "Halloween",
        imagem: "images/halloween.png",
        descricao: "Laurie Strode se vê sendo perseguida por Michael Myers, um assassino psicopata que escapou do sanatório onde estava preso.",
        descricao_longa: "Laurie Strode, uma jovem que sobreviveu ao massacre em sua cidade, se vê novamente no caminho de Michael Myers, um assassino psicopata que escapou do sanatório onde estava preso. Vinte anos depois, Michael retorna para completar o que começou. Agora, Laurie deve lutar por sua sobrevivência, enquanto o perigo crescente ameaça todos ao seu redor. No entanto, ela não é mais a mesma; ela se preparou para a batalha que se aproxima. Halloween é um suspense psicológico, um conto de sobrevivência e o confronto entre o bem e o mal.",
        trailer: "https://www.youtube.com/watch?v=oVgtguYmNBg"
      },
      {
        id: 2,
        titulo: "Pânico",
        imagem: "images/panico.jpg",
        descricao: "Um assassino mascarado começa a perseguir e matar jovens em uma cidade pequena.",
        descricao_longa: "Em uma pequena cidade, um assassino mascarado começa a matar jovens, seguindo um padrão assustador de ataques misteriosos e estratégicos. Ameaçados por um serial killer que parece saber exatamente como jogar o jogo do medo, um grupo de adolescentes luta para descobrir a identidade do assassino antes que sejam suas próximas vítimas. A tensão aumenta à medida que segredos são revelados e ninguém pode ser completamente confiável. Pânico mistura terror, mistério e uma crítica ao gênero de filmes slasher.",
        trailer: "https://www.youtube.com/watch?v=WCzzUe_aOvw"
      },
      {
        id: 3,
        titulo: "O Acampamento",
        imagem: "images/f1ex.png",
        descricao: "Um grupo de jovens vão para um acampamento isolado na floresta, onde começam a acontecer eventos estranhos e misteriosos.",
        descricao_longa: "Um grupo de amigos decide passar o final de semana em um acampamento isolado na floresta. O que começa como uma simples viagem de lazer logo se transforma em um pesadelo quando eventos inexplicáveis começam a ocorrer. Sons estranhos, desaparecimentos e visões perturbadoras os forçam a enfrentar o que pode ser uma presença sobrenatural. À medida que a tensão aumenta, o grupo precisa descobrir se há algo muito mais aterrador do que imaginavam à espreita nas sombras da floresta.",
        trailer: "https://www.youtube.com/watch?v=5-_wIaTtsLM"
      },
      {
        id: 4,
        titulo: "A Freira",
        imagem: "images/a-freira-poster-teaser.png",
        descricao: "Uma jovem freira se suicida em um convento na Romênia, e um padre e uma noviça são enviados para investigar o mistério.",
        descricao_longa: "Em um convento remoto na Romênia, uma jovem freira comete suicídio, levando a Igreja Católica a enviar um padre e uma noviça para investigar as circunstâncias de sua morte. À medida que começam a investigar, eles descobrem uma força demoníaca que assola o convento e ameaça dominar suas vidas. Com um passado de segredos sombrios, eles devem enfrentar o mal ancestral que habita o convento antes que seja tarde demais. A Freira é um filme de terror psicológico que explora a luta contra uma entidade maligna em um cenário claustrofóbico e aterrorizante.",
        trailer: "https://www.youtube.com/watch?v=Tc-r3h6jdNI"
      },
      {
        id: 5,
        titulo: "SchindlersList",
        imagem: "images/f3ex.webp",
        descricao: "Oskar Schindler salva milhares de judeus durante o Holocausto.",
        descricao_longa: "Oskar Schindler, um empresário alemão durante a Segunda Guerra Mundial, começa sua jornada como um homem que busca lucro em tempos de guerra, contratando trabalhadores judeus para suas fábricas. No entanto, à medida que testemunha o horror do Holocausto e a brutalidade do regime nazista, Schindler passa a usar sua posição e recursos para salvar a vida de milhares de judeus. Com coragem e sacrifício, ele arrisca tudo para garantir a sobrevivência daqueles que, de outra forma, teriam sido exterminados. Schindler's List é uma poderosa reflexão sobre a humanidade, a moralidade e o impacto de um ato de bondade no meio da crueldade.",
        trailer: "https://www.youtube.com/watch?v=gG22XNhtnoY"
      },
      {
        id: 6,
        titulo: "As Vantagens de ser invisível",
        imagem: "images/AsVant.png",
        descricao: "A jornada emocional de um adolescente tímido na escola.",
        descricao_longa: "Charlie é um adolescente introvertido que luta com os fantasmas do seu passado. Após a morte de seu melhor amigo e a complexidade de sua vida escolar, ele encontra consolo em dois novos amigos: Patrick e Sam. Juntos, eles o guiam pela tumultuada experiência da adolescência, ensinando-lhe sobre a amizade, o amor e a aceitação. No entanto, conforme ele começa a se abrir e a aceitar a dor de seu passado, Charlie deve confrontar os segredos que tem escondido de si mesmo e do mundo. As Vantagens de Ser Invisível é um conto emocionante sobre a jornada para encontrar o pertencimento e a identidade.",
        trailer: "https://www.youtube.com/watch?v=qhROvhrY1Xg"
      }
    ];
  
    const container = document.querySelector(".lista-filmes .row");
  
    if (container) {
      filmes.forEach(filme => {
        const card = document.createElement("div");
        card.className = "col-sm-6 col-md-4 col-lg-3";
        card.innerHTML = `
          <div class="card h-100 text-center">
            <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
            <div class="card-body">
              <h5 class="card-title">${filme.titulo}</h5>
              <p class="card-text">${filme.descricao}</p>
              <a href="detalhes.html?id=${filme.id}" class="btn btn-dark">Ver Detalhes</a>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }
  
    const exibirDetalhes = () => {
      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get("id"));
    
      if (!id) return;
    
      const filme = filmes.find(f => f.id === id);
    
      const detalhesContainer = document.getElementById("detalhes-filme");
    
      if (!filme || !detalhesContainer) {
        if (detalhesContainer) {
          detalhesContainer.innerHTML = "<p>Filme não encontrado.</p>";
        }
        return;
      }
    
      detalhesContainer.innerHTML = `
      <div class="row align-items-center">
        <div class="col-md-6 text-center">
          <img src="${filme.imagem}" alt="${filme.titulo}" class="img-fluid rounded shadow" />
        </div>
        <div class="col-md-6 mt-4 mt-md-0">
          <h2>${filme.titulo}</h2>
          <p>${filme.descricao_longa}</p> <!-- Aqui estamos usando a descrição longa -->
    
          <div class="botoes-detalhes">
            <a href="${filme.trailer}" target="_blank" class="btn btn-danger">Assistir Trailer</a>
            <button class="btn btn-outline-secondary">Favoritar</button>
          </div>
    
          <a href="index.html" class="btn btn-secondary mt-3 d-block">← Voltar</a>
        </div>
      </div>
      `;
    }
    exibirDetalhes();
  });  