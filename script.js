const topicGroups = {
  "Geometria Plana": [
    {
      id: "angulos",
      name: "Ângulos",
      desc: "Medidas e relações entre ângulos.",
      explanation: "Ângulo é a abertura formada por duas semirretas de mesma origem (vértice). Classificam-se em agudo (< 90°), reto (= 90°), obtuso (> 90° e < 180°) e raso (= 180°). Em retas paralelas cortadas por uma transversal, temos ângulos correspondentes iguais, alternos iguais e colaterais suplementares.",
      formulas: [
        "Ângulos complementares: $a + b = 90^\\circ$",
        "Ângulos suplementares: $a + b = 180^\\circ$",
        "Ângulos replementares: $a + b = 360^\\circ$",
        "Ângulos opostos pelo vértice (OPV): $a = b$",
        "Volta completa: $360^\\circ$"
      ],
      example: "Se dois ângulos são suplementares e um mede 65°, o outro mede 180° − 65° = 115°.",
      tip: "Procure primeiro relações conhecidas na figura (como OPV ou suplementares) antes de sair calculando."
    },
    {
      id: "triangulos",
      name: "Triângulos",
      desc: "Classificação, propriedades e áreas.",
      explanation: "Triângulos possuem três lados e a soma dos seus ângulos internos é sempre 180° (a soma dos externos é 360°). Podem ser classificados pelos lados (equilátero, isósceles, escaleno) ou pelos ângulos (acutângulo, retângulo, obtusângulo).",
      formulas: [
        "Soma dos ângulos internos: $A + B + C = 180^\\circ$",
        "Área geral: $A = \\frac{b \\cdot h}{2}$",
        "Área equilátero: $A = \\frac{l^2 \\sqrt{3}}{4}$",
        "Altura equilátero: $h = \\frac{l \\sqrt{3}}{2}$",
        "Área trigonométrica: $A = \\frac{a \\cdot b \\cdot \\sin(\\theta)}{2}$",
        "Fórmula de Heron: $A = \\sqrt{p(p-a)(p-b)(p-c)}$, onde $p = \\frac{a+b+c}{2}$"
      ],
      example: "Um triângulo com base 8 cm e altura 5 cm possui área (8 × 5) / 2 = 20 cm².",
      tip: "Identifique a base e a altura perpendicular a ela antes de aplicar a fórmula da área."
    },
    {
      id: "pitagoras",
      name: "Teorema de Pitágoras",
      desc: "Relação entre os lados do triângulo retângulo.",
      explanation: "Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. É indispensável para encontrar diagonais, alturas e distâncias inacessíveis.",
      formulas: [
        "$a^2 = b^2 + c^2$",
        "Hipotenusa ($a$) = lado oposto ao ângulo de $90^\\circ$",
        "Ternos pitagóricos notáveis: $(3, 4, 5)$, $(5, 12, 13)$"
      ],
      example: "Catetos 3 e 4: a² = 3² + 4² = 25, então a = 5.",
      tip: "A hipotenusa é sempre o maior lado do triângulo retângulo."
    },
    {
      id: "semelhanca",
      name: "Semelhança de triângulos",
      desc: "Proporções entre figuras semelhantes.",
      explanation: "Figuras semelhantes possuem a mesma forma, ângulos correspondentes congruentes e lados homólogos proporcionais. Quando a razão entre lados é k, a razão entre áreas é k² e entre volumes é k³.",
      formulas: [
        "Razão de semelhança: $\\frac{a}{a'} = \\frac{b}{b'} = \\frac{c}{c'} = k$",
        "Razão entre áreas: $\\frac{A_1}{A_2} = k^2$",
        "Teorema de Tales: retas paralelas cortadas por transversais mantêm proporção"
      ],
      example: "Se um lado de 4 cm vira 10 cm, a razão é 10/4 = 2,5. Um lado de 6 cm correspondente passa a medir 15 cm.",
      tip: "Organize sempre os lados correspondentes na mesma ordem para montar a proporção sem errar."
    },
    {
      id: "quadrilateros",
      name: "Quadriláteros",
      desc: "Quadrado, retângulo, losango, paralelogramo e trapézio.",
      explanation: "Quadriláteros são polígonos de quatro lados e a soma de seus ângulos internos é sempre 360°. O ENEM costuma cobrar áreas e propriedades dessas figuras em plantas, pisos e terrenos.",
      formulas: [
        "Retângulo: $A = b \\cdot h$",
        "Quadrado: $A = l^2$ | Diagonal: $d = l\\sqrt{2}$",
        "Paralelogramo: $A = b \\cdot h$",
        "Losango: $A = \\frac{D \\cdot d}{2}$",
        "Trapézio: $A = \\frac{(B + b) \\cdot h}{2}$"
      ],
      example: "Um retângulo de 7 m por 4 m possui área 28 m².",
      tip: "Atenção às unidades: área sempre utiliza medidas ao quadrado (cm², m², km²)."
    },
    {
      id: "poligonos",
      name: "Polígonos",
      desc: "Ângulos, diagonais e áreas.",
      explanation: "Polígonos são figuras planas fechadas formadas por segmentos de reta. Se o polígono for regular, possui todos os lados e ângulos internos iguais.",
      formulas: [
        "Soma dos ângulos internos: $S_i = (n - 2) \\cdot 180^\\circ$",
        "Ângulo interno (regular): $a_i = \\frac{(n - 2) \\cdot 180^\\circ}{n}$",
        "Soma dos ângulos externos: $S_e = 360^\\circ$",
        "Diagonais: $D = \\frac{n(n - 3)}{2}$"
      ],
      example: "Um hexágono tem soma dos ângulos internos igual a (6 − 2) × 180° = 720°.",
      tip: "A letra 'n' representa a quantidade de lados (ou vértices) do polígono."
    },
    {
      id: "circulo",
      name: "Circunferência e círculo",
      desc: "Raio, diâmetro, comprimento, área e setores.",
      explanation: "A circunferência é a linha que delimita o círculo (contorno), enquanto o círculo é a região plana interna. O raio vai do centro à borda e o diâmetro mede duas vezes o raio.",
      formulas: [
        "Diâmetro: $d = 2r$",
        "Comprimento: $C = 2\\pi r$",
        "Área do círculo: $A = \\pi r^2$",
        "Comprimento do arco: $L = \\frac{\\alpha \\cdot 2\\pi r}{360^\\circ}$",
        "Área do setor circular: $A = \\frac{\\alpha \\cdot \\pi r^2}{360^\\circ}$"
      ],
      example: "Com raio 5 cm e π = 3, a área é 3 × 25 = 75 cm².",
      tip: "Confira se a questão pede o contorno (comprimento) ou a região interna (área)."
    },
    {
      id: "escala",
      name: "Escalas e proporcionalidade",
      desc: "Relação entre representação e medida real.",
      explanation: "A escala compara a medida representada no desenho com a medida real correspondente. É muito comum em mapas, maquetes e plantas arquitetônicas.",
      formulas: [
        "Escala linear: $E = \\frac{d}{D}$ (desenho / real)",
        "Escala de área: $\\frac{A_{\\text{desenho}}}{A_{\\text{real}}} = E^2$",
        "$1 : n$ significa $1$ unidade no desenho para $n$ unidades na realidade"
      ],
      example: "Na escala 1:100, 3 cm no desenho representam 300 cm, ou 3 m, na realidade.",
      tip: "Converta sempre as duas medidas para a mesma unidade antes de simplificar ou aplicar a escala."
    }
  ],
  "Geometria Espacial": [
    {
      id: "conceitos-espaciais",
      name: "Conceitos básicos",
      desc: "Ponto, reta, plano, posições e planificação.",
      explanation: "A geometria espacial estuda figuras tridimensionais (comprimento, largura e altura/profundidade). Analisa a posição relativa entre retas e planos, além do processo de planificação de sólidos.",
      formulas: [
        "Grandezas lineares: $\\text{cm}, \\text{m}$",
        "Áreas de superfície: $\\text{cm}^2, \\text{m}^2$",
        "Volumes: $\\text{cm}^3, \\text{m}^3$"
      ],
      example: "Uma caixa pode ser planificada em retângulos que representam suas 6 faces.",
      tip: "Planificar é 'abrir' o sólido sem alterar a forma ou tamanho de suas faces."
    },
    {
      id: "prismas",
      name: "Prismas",
      desc: "Áreas e volumes dos prismas.",
      explanation: "Prisma é um sólido com duas bases poligonais paralelas e congruentes, cujas faces laterais conectam essas bases.",
      formulas: [
        "Volume: $V = A_b \\cdot h$",
        "Área total: $A_t = 2A_b + A_l$",
        "Área lateral ($A_l$): soma das áreas de todas as faces laterais"
      ],
      example: "Uma caixa com base de 6 m² e altura 4 m tem volume 6 × 4 = 24 m³.",
      tip: "Ab é a área da base e h é a altura perpendicular entre as bases."
    },
    {
      id: "cubo-paralelepipedo",
      name: "Cubo e paralelepípedo",
      desc: "Principais prismas retangulares.",
      explanation: "O cubo possui todas as 12 arestas congruentes. O paralelepípedo retângulo possui 6 faces retangulares com dimensões de comprimento, largura e altura.",
      formulas: [
        "Paralelepípedo - Volume: $V = a \\cdot b \\cdot c$",
        "Paralelepípedo - Área total: $A_t = 2(ab + ac + bc)$",
        "Paralelepípedo - Diagonal: $d = \\sqrt{a^2 + b^2 + c^2}$",
        "Cubo - Volume: $V = a^3$",
        "Cubo - Área total: $A_t = 6a^2$",
        "Cubo - Diagonal: $d = a\\sqrt{3}$"
      ],
      example: "Um cubo de aresta 3 cm possui volume 3³ = 27 cm³.",
      tip: "Em problemas práticos de caixas, o volume sempre é comprimento × largura × altura."
    },
    {
      id: "piramides",
      name: "Pirâmides",
      desc: "Área, apótema, altura e volume.",
      explanation: "A pirâmide possui uma base poligonal e faces laterais triangulares que se encontram em um ponto comum chamado vértice.",
      formulas: [
        "Volume: $V = \\frac{A_b \\cdot h}{3}$",
        "Área total: $A_t = A_b + A_l$",
        "Relação do apótema: $g^2 = h^2 + m^2$ ($g$: apótema da pirâmide, $m$: apótema da base)"
      ],
      example: "Uma pirâmide com área da base 12 cm² e altura 6 cm tem volume (12 × 6) / 3 = 24 cm³.",
      tip: "Lembre-se: o volume da pirâmide equivale exatamente a 1/3 do volume do prisma correspondente."
    },
    {
      id: "cilindros",
      name: "Cilindros",
      desc: "Área da base, lateral, total e volume.",
      explanation: "Sólido geométrico formado por duas bases circulares paralelas e congruentes unidas por uma superfície lateral curva.",
      formulas: [
        "Área da base: $A_b = \\pi r^2$",
        "Área lateral: $A_l = 2\\pi r h$",
        "Área total: $A_t = 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)$",
        "Volume: $V = \\pi r^2 h$",
        "Cilindro equilátero: $h = 2r$"
      ],
      example: "Com r = 2 cm, h = 5 cm e π = 3: V = 3 × 4 × 5 = 60 cm³.",
      tip: "Problemas que envolvem a capacidade de reservatórios ou latas pedem o cálculo do volume."
    },
    {
      id: "cones",
      name: "Cones",
      desc: "Volume, geratriz e áreas.",
      explanation: "O cone possui uma base circular e um único vértice superior. A geratriz (g) é a linha reta que liga o vértice à borda da base.",
      formulas: [
        "Relação fundamental: $g^2 = r^2 + h^2$",
        "Área lateral: $A_l = \\pi r g$",
        "Área total: $A_t = \\pi r(r + g)$",
        "Volume: $V = \\frac{\\pi r^2 h}{3}$"
      ],
      example: "Com r = 3 cm, h = 4 cm, a geratriz g é 5 cm (pois 3² + 4² = 5²).",
      tip: "Sempre identifique o triângulo retângulo interno formado por raio, altura e geratriz."
    },
    {
      id: "esferas",
      name: "Esferas",
      desc: "Área da superfície e volume.",
      explanation: "A esfera é um sólido perfeitamente simétrico cujos pontos da superfície estão à mesma distância (raio) do centro.",
      formulas: [
        "Diâmetro: $d = 2r$",
        "Área da superfície: $A = 4\\pi r^2$",
        "Volume: $V = \\frac{4}{3}\\pi r^3$",
        "Secção esférica: $R^2 = d^2 + r_{\\text{seção}}^2$"
      ],
      example: "Uma esfera de raio 3 cm possui volume (4/3) × π × 27 = 36π cm³.",
      tip: "Cuidado com os expoentes: o cálculo da área utiliza r², enquanto o volume utiliza r³."
    },
    {
      id: "troncos",
      name: "Troncos de cone e pirâmide",
      desc: "Sólidos obtidos ao cortar uma pirâmide ou cone.",
      explanation: "O tronco é formado quando a parte superior de uma pirâmide ou cone é seccionada por um plano paralelo à base.",
      formulas: [
        "Tronco de cone - Volume: $V = \\frac{\\pi h}{3}(R^2 + R r + r^2)$",
        "Tronco de pirâmide - Volume: $V = \\frac{h}{3}(A_B + \\sqrt{A_B \\cdot A_b} + A_b)$",
        "$R$ = raio maior; $r$ = raio menor; $A_B$ = base maior; $A_b$ = base menor"
      ],
      example: "Em um tronco de cone, as duas bases são círculos paralelos de tamanhos diferentes.",
      tip: "Identifique sempre as dimensões das duas bases (maior e menor) e a altura do tronco."
    },
    {
      id: "relacoes-espaciais",
      name: "Relações geométricas",
      desc: "Diagonais, alturas, raios, geratrizes e sólidos inscritos.",
      explanation: "A maioria dos problemas espaciais complexos é resolvida identificando cortes bidimensionais (seções) e triângulos retângulos dentro do sólido.",
      formulas: [
        "Diagonal do paralelepípedo: $d = \\sqrt{a^2 + b^2 + c^2}$",
        "Geratriz do cone: $g^2 = r^2 + h^2$",
        "Esfera inscrita no cubo (aresta $a$): $r = \\frac{a}{2}$",
        "Esfera circunscrita ao cubo (aresta $a$): $r = \\frac{a\\sqrt{3}}{2}$"
      ],
      example: "Em uma caixa 3 × 4 × 12, a diagonal é √(9 + 16 + 144) = √169 = 13.",
      tip: "Ao imaginar um corte no sólido, a geometria espacial se reduz a um problema simples de geometria plana."
    }
  ],
  "Fundamentos Básicos": [
    {
      id: "razao-proporcao",
      name: "Razão e proporção",
      desc: "Comparação entre grandezas.",
      explanation: "Razão é a divisão entre dois valores (a/b). Proporção é a igualdade entre duas razões (a/b = c/d), onde o produto dos meios é igual ao dos extremos.",
      formulas: [
        "Razão: $\\frac{a}{b}$",
        "Proporção: $\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c$"
      ],
      example: "2/3 = 8/12 porque ambas representam a mesma proporção (2 × 12 = 3 × 8 = 24).",
      tip: "É a base fundamental para regras de três, escalas e semelhança de figuras."
    },
    {
      id: "regra-tres",
      name: "Regra de três",
      desc: "Resolução de relações entre grandezas.",
      explanation: "Método para encontrar um valor desconhecido a partir de relações de proporcionalidade direta (aumentam juntas) ou inversa (uma aumenta e a outra diminui).",
      formulas: [
        "Diretamente proporcionais: $\\frac{a}{b} = \\frac{c}{x} \\iff a \\cdot x = b \\cdot c$",
        "Inversamente proporcionais: $a \\cdot b = c \\cdot x$"
      ],
      example: "Se 2 caixas custam R$ 20, então 5 caixas custam R$ 50 (diretamente proporcional).",
      tip: "Antes de montar a equação, verifique se as grandezas variam no mesmo sentido ou em sentidos opostos."
    },
    {
      id: "porcentagem",
      name: "Porcentagem",
      desc: "Parte de um total em cada 100.",
      explanation: "Porcentagem é uma razão com denominador 100. É amplamente utilizada para calcular descontos, aumentos, juros, taxas e variações populacionais.",
      formulas: [
        "Definição: $p\\% = \\frac{p}{100}$",
        "Valor percentual = $\\text{Total} \\cdot \\frac{p}{100}$",
        "Fator de aumento ($+x\\%$): multiplicar por $\\left(1 + \\frac{x}{100}\\right)$",
        "Fator de desconto ($-x\\%$): multiplicar por $\\left(1 - \\frac{x}{100}\\right)$"
      ],
      example: "20% de 150 = 150 × (20/100) = 30.",
      tip: "Para contas rápidas: 10% é dividir o total por 10; 1% é dividir por 100."
    },
    {
      id: "unidades",
      name: "Unidades de medida",
      desc: "Comprimento, área, volume e capacidade.",
      explanation: "As grandezas precisam estar padronizadas antes dos cálculos. As unidades variam por fatores de 10 em comprimento, 100 em área e 1.000 em volume.",
      formulas: [
        "$1\\text{ m} = 100\\text{ cm}$ | $1\\text{ km} = 1.000\\text{ m}$",
        "$1\\text{ m}^2 = 10.000\\text{ cm}^2$",
        "$1\\text{ m}^3 = 1.000.000\\text{ cm}^3$",
        "$1\\text{ L} = 1\\text{ dm}^3 = 1.000\\text{ mL}$",
        "$1\\text{ m}^3 = 1.000\\text{ L}$"
      ],
      example: "2 m² não são 200 cm²; são 20.000 cm², pois o fator de conversão de área é levado ao quadrado.",
      tip: "Decore a equivalência fundamental: 1 Litro é exatamente igual a 1 dm³."
    },
    {
      id: "conversao",
      name: "Conversão de unidades",
      desc: "Transformação entre unidades equivalentes.",
      explanation: "Transformar a mesma quantidade para outra escala de unidade mantendo a equivalência numérica das dimensões envolvidas.",
      formulas: [
        "Comprimento (1D): multiplica/divide por $10$ a cada casa",
        "Área (2D): multiplica/divide por $100$ ($10^2$) a cada casa",
        "Volume (3D): multiplica/divide por $1.000$ ($10^3$) a cada casa"
      ],
      example: "0,5 m = 50 cm; 0,5 m² = 5.000 cm²; 0,5 m³ = 500.000 cm³.",
      tip: "Em questões espaciais, faça as conversões de unidade antes de jogar os valores na fórmula do volume."
    },
    {
      id: "trigonometria",
      name: "Trigonometria básica",
      desc: "Seno, cosseno e tangente.",
      explanation: "Relaciona as medidas dos lados de um triângulo retângulo com os seus ângulos internos.",
      formulas: [
        "$\\sin(\\theta) = \\frac{\\text{cateto oposto}}{\\text{hipotenusa}}$",
        "$\\cos(\\theta) = \\frac{\\text{cateto adjacente}}{\\text{hipotenusa}}$",
        "$\\tan(\\theta) = \\frac{\\text{cateto oposto}}{\\text{cateto adjacente}}$",
        "Valores notáveis: $\\sin(30^\\circ) = \\frac{1}{2}$, $\\cos(60^\\circ) = \\frac{1}{2}$, $\\tan(45^\\circ) = 1$"
      ],
      example: "Em um triângulo retângulo com cateto oposto 3 e hipotenusa 5, sen θ = 3/5 = 0,6.",
      tip: "Memorize o macete 'SOH-CAH-TOA' para lembrar rapidamente as três fórmulas."
    },
    {
      id: "notacao",
      name: "Notação científica",
      desc: "Números muito grandes ou muito pequenos.",
      explanation: "Forma padronizada de escrever números usando potências de 10, facilitando o manuseio de valores muito grandes ou microscópicos.",
      formulas: [
        "Formato: $a \\cdot 10^n$",
        "Condição: $1 \\le a < 10$ e $n \\in \\mathbb{Z}$"
      ],
      example: "300.000 = 3 × 10⁵; 0,0000072 = 7,2 × 10⁻⁶.",
      tip: "Conte quantas casas decimais a vírgula anda: para a esquerda o expoente cresce (+), para a direita diminui (-)."
    },
    {
      id: "aproximacoes",
      name: "Aproximações e arredondamentos",
      desc: "Estimativas e valores aproximados.",
      explanation: "Processo de simplificação numérica quando surgem irracionais (como π ou raízes) ou quando o problema pede resultados práticos aproximados.",
      formulas: [
        "Se o dígito a descartar for $\\ge 5$, arredonda para cima ($+1$)",
        "Se for $< 5$, mantém a última casa conservada",
        "Constantes comuns: $\\pi \\approx 3{,}14$ | $\\sqrt{2} \\approx 1{,}41$ | $\\sqrt{3} \\approx 1{,}73$"
      ],
      example: "Se o resultado for 3,14159 e a questão pedir duas casas decimais, utilize 3,14.",
      tip: "Nunca arredonde valores intermediários; faça o arredondamento apenas no resultado final da questão."
    },
    {
      id: "areas-volumes",
      name: "Áreas e volumes",
      desc: "Medidas de superfícies e espaços ocupados.",
      explanation: "Área mede a extensão de uma superfície bidimensional; volume mede a quantidade de espaço ocupada por um sólido em três dimensões.",
      formulas: [
        "Área: medida de superfície (unidades$^2$: $\\text{m}^2, \\text{cm}^2$)",
        "Volume: medida de espaço ocupado (unidades$^3$: $\\text{m}^3, \\text{cm}^3, \\text{L}$)",
        "Prismas/Cilindros: $V = A_b \\cdot h$",
        "Pirâmides/Cones: $V = \\frac{A_b \\cdot h}{3}$"
      ],
      example: "Uma caixa de dimensões 2 × 3 × 5 possui área superficial total e volume de 30 unidades cúbicas.",
      tip: "Lembre-se de que área e volume são grandezas de dimensões diferentes, mesmo em um mesmo objeto."
    },
    {
      id: "escalas",
      name: "Escalas",
      desc: "Relação entre representação e realidade.",
      explanation: "Mantenha a proporção ao reduzir ou ampliar objetos do mundo real em desenhos ou maquetes.",
      formulas: [
        "Escala linear: $E = \\frac{d}{D}$",
        "Escala superficial: $\\frac{A_{\\text{desenho}}}{A_{\\text{real}}} = E^2$",
        "Escala volumétrica: $\\frac{V_{\\text{maquete}}}{V_{\\text{real}}} = E^3$"
      ],
      example: "Uma parede real de 4 m na escala 1:100 é representada por 4 cm no desenho.",
      tip: "Sempre coloque o numerador e o denominador na mesma unidade de medida para calcular a razão da escala."
    }
  ]
};

const allTopics = Object.entries(topicGroups).flatMap(([category, items]) =>
  items.map(item => ({...item, category}))
);

const contentMenu = document.getElementById("contentMenu");
const topicDetail = document.getElementById("topicDetail");
const topicSearch = document.getElementById("topicSearch");

function renderMenu(filter = "") {
  const term = filter.toLowerCase().trim();
  let html = "";

  for (const [category, items] of Object.entries(topicGroups)) {
    const visible = items.filter(t => `${t.name} ${t.desc}`.toLowerCase().includes(term));
    if (!visible.length) continue;

    html += `<div class="menu-category">${category}</div>`;
    visible.forEach((topic) => {
      const globalIndex = allTopics.findIndex(t => t.id === topic.id) + 1;
      html += `
        <button class="menu-item" data-topic="${topic.id}">
          <span class="num">${String(globalIndex).padStart(2,"0")}</span>
          <span>${topic.name}</span>
        </button>`;
    });
  }

  contentMenu.innerHTML = html || `<div class="empty-search">Nenhum conteúdo encontrado.</div>`;

  contentMenu.querySelectorAll(".menu-item").forEach(button => {
    button.addEventListener("click", () => openTopic(button.dataset.topic));
  });
}

function openTopic(id) {
  const topic = allTopics.find(t => t.id === id);
  if (!topic) return;

  document.querySelectorAll(".menu-item").forEach(button => {
    button.classList.toggle("active", button.dataset.topic === id);
  });

  topicDetail.innerHTML = `
    <div class="detail-header">
      <span class="topic-tag">${topic.category}</span>
      <h3>${topic.name}</h3>
      <p>${topic.desc}</p>
    </div>

    <div class="detail-block">
      <h4>O que é?</h4>
      <p>${topic.explanation}</p>
    </div>

    <div class="detail-block">
      <h4>Fórmulas e relações principais</h4>
      <div class="formula">${topic.formulas.join("<br>")}</div>
    </div>

    <div class="detail-block">
      <h4>Exemplo</h4>
      <div class="example"><strong>Aplicando na prática</strong><span>${topic.example}</span></div>
    </div>

    <div class="tip"><strong>💡 Dica ENEM:</strong> ${topic.tip}</div>
  `;

  // Renderiza as fórmulas em LaTeX via MathJax
  if (window.MathJax && window.MathJax.typesetPromise) {
    MathJax.typesetPromise([topicDetail]).catch((err) => console.error(err));
  }

  if (window.innerWidth < 850) {
    topicDetail.scrollIntoView({ behavior:"smooth", block:"start" });
  }
}

topicSearch.addEventListener("input", e => renderMenu(e.target.value));

renderMenu();

const questions = [
  {
    source: "ENEM 2021",
    topic: "Geometria Plana",
    text: "Uma empresa produz medalhas circulares de dois tamanhos. A medalha menor tem raio r = 4 cm e a maior tem raio R = 8 cm. A razão entre a área da medalha maior e a área da medalha menor é igual a:",
    options: ["2", "3", "4", "8", "16"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="60" r="25" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" stroke-width="2"/><circle cx="140" cy="60" r="45" fill="#a78bfa" opacity="0.5" stroke="#a78bfa" stroke-width="2"/><line x1="50" y1="60" x2="75" y2="60" stroke="#fff" stroke-width="2"/><text x="55" y="55" fill="#fff" font-size="12">r=4</text><line x1="140" y1="60" x2="185" y2="60" stroke="#fff" stroke-width="2"/><text x="150" y="55" fill="#fff" font-size="12">R=8</text></svg>`
  },
  {
    source: "ENEM 2022",
    topic: "Geometria Espacial",
    text: "Um casal planeja construir em sua chácara uma piscina com o formato de um paralelepípedo reto-retângulo com capacidade para 90.000 litros (90 m³) de água. Sabendo que a largura da piscina será de 5 m e o comprimento de 6 m, qual deve ser a profundidade dessa piscina?",
    options: ["1,5 m", "2,0 m", "2,5 m", "3,0 m", "3,5 m"],
    answer: 3,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="20,40 120,40 160,20 60,20" fill="none" stroke="#a78bfa" stroke-width="2"/><polygon points="20,40 120,40 120,90 20,90" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><polygon points="120,40 160,20 160,70 120,90" fill="none" stroke="#a78bfa" stroke-width="2"/><text x="60" y="108" fill="#fff" font-size="12">6 m</text><text x="145" y="50" fill="#fff" font-size="12">5 m</text><text x="5" y="70" fill="#fff" font-size="12">h=?</text></svg>`
  },
  {
    source: "ENEM 2020",
    topic: "Geometria Plana",
    text: "O piso retangular de uma sala com 3,2 m de largura e 3,6 m de comprimento será revestido com peças quadradas de porcelanato com lado medindo 80 cm (0,8 m). O número mínimo de peças necessárias sem cortes é:",
    options: ["12", "16", "18", "20", "24"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="140" height="80" fill="none" stroke="#a78bfa" stroke-width="2"/><rect x="30" y="20" width="35" height="35" fill="#a78bfa" opacity="0.4" stroke="#fff" stroke-width="1.5"/><text x="85" y="15" fill="#fff" font-size="12">3,6 m</text><text x="5" y="65" fill="#fff" font-size="12">3,2 m</text><text x="32" y="42" fill="#fff" font-size="10">80cm</text></svg>`
  },
  {
    source: "ENEM 2019",
    topic: "Geometria Espacial",
    text: "Um reservatório em formato de cilindro circular reto possui raio da base igual a 2 m e altura de 5 m. Sabendo que 1 m³ = 1.000 L, a quantidade total de água (considerando π = 3,14) é de:",
    options: ["31.400 L", "62.800 L", "125.600 L", "15.700 L", "314.000 L"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="25" rx="40" ry="12" fill="none" stroke="#a78bfa" stroke-width="2"/><path d="M 60,25 L 60,95 A 40 12 0 0 0 140,95 L 140,25" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><line x1="100" y1="25" x2="140" y2="25" stroke="#fff" stroke-width="1.5"/><text x="110" y="20" fill="#fff" font-size="11">r=2m</text><text x="148" y="65" fill="#fff" font-size="11">h=5m</text></svg>`
  },
  {
    source: "ENEM 2023",
    topic: "Geometria Plana",
    text: "Um canteiro de flores possui o formato de um triângulo equilátero com lado medindo 6 m. Sabendo que a área do triângulo equilátero é A = (a²√3)/4 e adotando √3 ≈ 1,73, a área do canteiro é:",
    options: ["12,15 m²", "15,57 m²", "18,00 m²", "20,42 m²", "31,14 m²"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 40,100 160,100" fill="#a78bfa" opacity="0.25" stroke="#a78bfa" stroke-width="2"/><text x="95" y="115" fill="#fff" font-size="12">6 m</text><text x="55" y="55" fill="#fff" font-size="12">6 m</text></svg>`
  },
  {
    source: "ENEM 2021",
    topic: "Geometria Espacial",
    text: "Uma caixa de papelão no formato de paralelepípedo reto-retângulo sem tampa tem dimensões de 40 cm de comprimento, 30 cm de largura e 20 cm de altura. A quantidade mínima de papelão para fabricá-la é:",
    options: ["2.800 cm²", "3.200 cm²", "4.000 cm²", "5.200 cm²", "6.000 cm²"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="30,50 110,50 150,30 70,30" fill="none" stroke="#fff" stroke-dasharray="3,3" stroke-width="1.5"/><polygon points="30,50 110,50 110,100 30,100" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" stroke-width="2"/><polygon points="110,50 150,30 150,80 110,100" fill="#a78bfa" opacity="0.15" stroke="#a78bfa" stroke-width="2"/><text x="60" y="115" fill="#fff" font-size="11">40 cm</text><text x="135" y="95" fill="#fff" font-size="11">30 cm</text><text x="10" y="80" fill="#fff" font-size="11">20 cm</text></svg>`
  },
  {
    source: "Concurso VUNESP",
    topic: "Geometria Plana",
    text: "Um terreno em formato de trapézio retângulo possui base maior medindo 20 m, base menor medindo 12 m e altura medindo 15 m. A área total desse terreno é de:",
    options: ["180 m²", "240 m²", "270 m²", "300 m²", "480 m²"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="40,20 110,20 170,95 40,95" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><text x="65" y="15" fill="#fff" font-size="11">b = 12m</text><text x="90" y="112" fill="#fff" font-size="11">B = 20m</text><text x="15" y="60" fill="#fff" font-size="11">h = 15m</text></svg>`
  },
  {
    source: "ENEM 2020",
    topic: "Geometria Espacial",
    text: "Uma casquinha de sorvete possui formato de cone circular reto com raio da base r = 3 cm e altura h = 10 cm. O volume interno dessa casquinha (considerando π = 3,14) é de:",
    options: ["31,4 cm³", "62,8 cm³", "94,2 cm³", "125,6 cm³", "282,6 cm³"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="25" rx="40" ry="10" fill="none" stroke="#a78bfa" stroke-width="2"/><polygon points="60,25 100,105 140,25" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><line x1="100" y1="25" x2="140" y2="25" stroke="#fff" stroke-width="1.5"/><text x="110" y="20" fill="#fff" font-size="11">r=3</text><text x="110" y="65" fill="#fff" font-size="11">h=10</text></svg>`
  },
  {
    source: "ENEM 2018",
    topic: "Geometria Plana",
    text: "Um vitral é composto por 4 losangos idênticos. Cada losango possui diagonal maior D = 10 cm e diagonal menor d = 6 cm. A área total ocupada pelos 4 losangos é:",
    options: ["60 cm²", "120 cm²", "180 cm²", "240 cm²", "300 cm²"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="100,20 140,60 100,100 60,60" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" stroke-width="2"/><line x1="100" y1="20" x2="100" y2="100" stroke="#fff" stroke-dasharray="3,3"/><line x1="60" y1="60" x2="140" y2="60" stroke="#fff" stroke-dasharray="3,3"/><text x="105" y="40" fill="#fff" font-size="11">D=10</text><text x="70" y="55" fill="#fff" font-size="11">d=6</text></svg>`
  },
  {
    source: "ENEM 2022",
    topic: "Geometria Espacial",
    text: "Uma esfera perfeitamente inscrita em uma caixa cúbica toca todas as suas 6 faces. Se a aresta do cubo mede 10 cm, qual é o volume da esfera? (Considere π = 3).",
    options: ["250 cm³", "500 cm³", "750 cm³", "1.000 cm³", "1.500 cm³"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="80" height="80" fill="none" stroke="#a78bfa" stroke-width="2"/><circle cx="90" cy="60" r="40" fill="#a78bfa" opacity="0.3" stroke="#fff" stroke-width="2"/><text x="135" y="65" fill="#fff" font-size="11">a = 10cm</text></svg>`
  },
  {
    source: "Concurso FCC",
    topic: "Geometria Plana",
    text: "A soma dos ângulos internos de um polígono convexo de n lados é dada por S = (n - 2) * 180°. Qual é a medida de cada ângulo interno de um hexágono regular (n = 6)?",
    options: ["108°", "120°", "135°", "140°", "150°"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="100,15 145,35 145,85 100,105 55,85 55,35" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><text x="90" y="40" fill="#fff" font-size="12">α = ?</text></svg>`
  },
  {
    source: "ENEM 2017",
    topic: "Geometria Espacial",
    text: "Uma pirâmide regular de base quadrada tem aresta da base medindo 6 cm e altura medindo 4 cm. O volume dessa pirâmide é:",
    options: ["24 cm³", "36 cm³", "48 cm³", "72 cm³", "144 cm³"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="50,90 110,90 140,70 80,70" fill="none" stroke="#a78bfa" stroke-width="1.5"/><line x1="95" y1="20" x2="50" y2="90" stroke="#a78bfa" stroke-width="2"/><line x1="95" y1="20" x2="110" y2="90" stroke="#a78bfa" stroke-width="2"/><line x1="95" y1="20" x2="140" y2="70" stroke="#a78bfa" stroke-width="2"/><line x1="95" y1="20" x2="95" y2="80" stroke="#fff" stroke-dasharray="3,3"/><text x="100" y="50" fill="#fff" font-size="11">h=4</text><text x="75" y="105" fill="#fff" font-size="11">6 cm</text></svg>`
  },
  {
    source: "Concurso FGV",
    topic: "Geometria Plana",
    text: "Um atleta corre ao redor de uma pista circular cujo raio é de 50 metros. Quantos metros o atleta percorre ao dar 10 voltas completas nessa pista? (Considere π = 3,14).",
    options: ["1.570 m", "3.140 m", "4.710 m", "6.280 m", "10.000 m"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="45" fill="none" stroke="#a78bfa" stroke-width="3" stroke-dasharray="6,4"/><line x1="100" y1="60" x2="145" y2="60" stroke="#fff" stroke-width="2"/><text x="105" y="55" fill="#fff" font-size="11">R=50m</text></svg>`
  },
  {
    source: "ENEM 2023",
    topic: "Geometria Espacial",
    text: "Um reservatório de água cilíndrico com altura de 6 m tem capacidade máxima de 120.000 litros. Quando o nível da água atinge a altura de 2 m, qual é o volume armazenado?",
    options: ["20.000 L", "30.000 L", "40.000 L", "60.000 L", "80.000 L"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M 70,70 L 70,100 A 30 8 0 0 0 130,100 L 130,70" fill="#a78bfa" opacity="0.6" stroke="#a78bfa"/><ellipse cx="100" cy="70" rx="30" ry="8" fill="#a78bfa" opacity="0.8" stroke="#fff"/><ellipse cx="100" cy="20" rx="30" ry="8" fill="none" stroke="#a78bfa" stroke-width="2"/><line x1="70" y1="20" x2="70" y2="100" stroke="#a78bfa" stroke-width="2"/><line x1="130" y1="20" x2="130" y2="100" stroke="#a78bfa" stroke-width="2"/><text x="135" y="85" fill="#fff" font-size="10">2 m</text><text x="135" y="45" fill="#fff" font-size="10">6 m</text></svg>`
  },
  {
    source: "ENEM 2019",
    topic: "Geometria Plana",
    text: "Uma praça tem o formato de uma coroa circular delimitada por duas circunferências concêntricas de raios R = 10 m e r = 6 m. A área da região da coroa circular (com π = 3) é:",
    options: ["64 m²", "100 m²", "144 m²", "192 m²", "256 m²"],
    answer: 3,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="45" fill="#a78bfa" opacity="0.4" stroke="#a78bfa" stroke-width="2"/><circle cx="100" cy="60" r="25" fill="#1e1b4b" stroke="#a78bfa" stroke-width="2"/><line x1="100" y1="60" x2="125" y2="60" stroke="#fff" stroke-width="1.5"/><text x="105" y="55" fill="#fff" font-size="10">r=6</text><line x1="100" y1="60" x2="100" y2="15" stroke="#fff" stroke-width="1.5"/><text x="103" y="35" fill="#fff" font-size="10">R=10</text></svg>`
  },
  {
    source: "Concurso CESPE",
    topic: "Geometria Espacial",
    text: "Qual é a medida da diagonal principal de um cubo cuja aresta mede 5√3 cm?",
    options: ["5 cm", "10 cm", "15 cm", "20 cm", "25 cm"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="35" width="60" height="60" fill="none" stroke="#a78bfa" stroke-width="2"/><rect x="75" y="15" width="60" height="60" fill="none" stroke="#a78bfa" stroke-dasharray="3,3" stroke-width="1.5"/><line x1="50" y1="35" x2="75" y2="15" stroke="#a78bfa"/><line x1="110" y1="35" x2="135" y2="15" stroke="#a78bfa"/><line x1="50" y1="95" x2="75" y2="75" stroke="#a78bfa"/><line x1="110" y1="95" x2="135" y2="75" stroke="#a78bfa"/><line x1="50" y1="95" x2="135" y2="15" stroke="#fff" stroke-width="2"/><text x="75" y="60" fill="#fff" font-size="11">D = ?</text></svg>`
  },
  {
    source: "ENEM 2020",
    topic: "Geometria Plana",
    text: "Para medir a altura de um prédio, um estudante colocou uma vara vertical de 1,5 m no chão, gerando uma sombra de 2,0 m. No mesmo instante, a sombra do prédio mediu 24,0 m. A altura do prédio é:",
    options: ["12,0 m", "16,0 m", "18,0 m", "20,0 m", "32,0 m"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="30,20 30,100 130,100" fill="none" stroke="#a78bfa" stroke-width="2"/><polygon points="140,76 140,100 170,100" fill="none" stroke="#fff" stroke-width="1.5"/><text x="15" y="60" fill="#fff" font-size="11">H = ?</text><text x="70" y="112" fill="#fff" font-size="11">24 m</text><text x="128" y="90" fill="#fff" font-size="9">1.5m</text></svg>`
  },
  {
    source: "ENEM 2018",
    topic: "Geometria Espacial",
    text: "Uma embalagem de suco no formato de paralelepípedo reto-retângulo possui dimensões de 6 cm x 10 cm x 15 cm. A capacidade total dessa embalagem em mililitros (mL) é:",
    options: ["450 mL", "600 mL", "750 mL", "900 mL", "1.200 mL"],
    answer: 3,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,35 120,35 145,20 85,20" fill="none" stroke="#a78bfa" stroke-width="1.5"/><polygon points="60,35 120,35 120,100 60,100" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" stroke-width="2"/><polygon points="120,35 145,20 145,85 120,100" fill="#a78bfa" opacity="0.15" stroke="#a78bfa" stroke-width="2"/><text x="80" y="112" fill="#fff" font-size="11">10 cm</text><text x="135" y="95" fill="#fff" font-size="11">6 cm</text><text x="35" y="70" fill="#fff" font-size="11">15 cm</text></svg>`
  },
  {
    source: "Concurso VUNESP",
    topic: "Geometria Plana",
    text: "Um terreno quadrado possui perímetro total igual a 80 metros. Qual é a área desse terreno em metros quadrados?",
    options: ["200 m²", "300 m²", "400 m²", "600 m²", "800 m²"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="20" width="80" height="80" fill="#a78bfa" opacity="0.25" stroke="#a78bfa" stroke-width="2"/><text x="75" y="115" fill="#fff" font-size="11">P = 80m</text></svg>`
  },
  {
    source: "ENEM 2021",
    topic: "Geometria Espacial",
    text: "Uma bola de futebol infantil é uma esfera com raio R = 10 cm. Sabendo que a área da superfície esférica é A = 4πR², qual é essa área considerando π = 3,14?",
    options: ["314 cm²", "628 cm²", "1.256 cm²", "2.512 cm²", "3.140 cm²"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="60" r="40" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><ellipse cx="100" cy="60" rx="40" ry="12" fill="none" stroke="#a78bfa" stroke-dasharray="4,3"/><line x1="100" y1="60" x2="140" y2="60" stroke="#fff" stroke-width="1.5"/><text x="110" y="55" fill="#fff" font-size="11">R=10</text></svg>`
  },
  {
    source: "Concurso IBFC",
    topic: "Geometria Plana",
    text: "Uma pizza circular de raio 20 cm foi dividida em 8 fatias iguais. A área de uma única fatia (setor circular de 45°), com π = 3,14, é aproximadamente:",
    options: ["78,5 cm²", "112,0 cm²", "157,0 cm²", "314,0 cm²", "628,0 cm²"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><path d="M 100,60 L 140,60 A 40 40 0 0 0 128,32 Z" fill="#a78bfa" opacity="0.6" stroke="#fff" stroke-width="1.5"/><circle cx="100" cy="60" r="40" fill="none" stroke="#a78bfa" stroke-width="2"/><text x="105" y="80" fill="#fff" font-size="11">R=20cm</text></svg>`
  },
  {
    source: "ENEM 2022",
    topic: "Geometria Espacial",
    text: "Um pilar de concreto tem o formato de um prisma reto com base hexagonal regular de lado a = 2 m e altura h = 5 m. Se a área do hexágono é A = (3a²√3)/2, com √3 ≈ 1,73, o volume do pilar é:",
    options: ["25,95 m³", "34,60 m³", "51,90 m³", "60,00 m³", "103,80 m³"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="100,10 125,20 125,40 100,50 75,40 75,20" fill="none" stroke="#a78bfa" stroke-width="1.5"/><polygon points="100,70 125,80 125,100 100,110 75,100 75,80" fill="#a78bfa" opacity="0.3" stroke="#a78bfa" stroke-width="1.5"/><line x1="75" y1="20" x2="75" y2="80" stroke="#a78bfa"/><line x1="125" y1="20" x2="125" y2="80" stroke="#a78bfa"/><line x1="100" y1="50" x2="100" y2="110" stroke="#a78bfa"/><text x="132" y="60" fill="#fff" font-size="11">h=5m</text><text x="95" y="25" fill="#fff" font-size="10">a=2m</text></svg>`
  },
  {
    source: "ENEM 2023",
    topic: "Geometria Plana",
    text: "Um terreno no formato de paralelogramo possui base de 25 m e altura correspondente de 12 m. A área total desse terreno é de:",
    options: ["150 m²", "200 m²", "300 m²", "400 m²", "600 m²"],
    answer: 2,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="50,30 150,30 130,90 30,90" fill="#a78bfa" opacity="0.25" stroke="#a78bfa" stroke-width="2"/><line x1="50" y1="30" x2="50" y2="90" stroke="#fff" stroke-dasharray="3,3"/><text x="75" y="105" fill="#fff" font-size="11">b = 25 m</text><text x="55" y="65" fill="#fff" font-size="11">h = 12 m</text></svg>`
  },
  {
    source: "Concurso IDECAN",
    topic: "Geometria Espacial",
    text: "Um balde metálico tem formato de cilindro circular reto com diâmetro de 30 cm (raio de 15 cm) e altura de 40 cm. Quantos litros de água cabem nesse balde? (Considere π = 3,14 e 1 L = 1.000 cm³).",
    options: ["12,28 L", "28,26 L", "35,40 L", "56,52 L", "113,04 L"],
    answer: 1,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="25" rx="35" ry="10" fill="none" stroke="#a78bfa" stroke-width="2"/><path d="M 65,25 L 65,95 A 35 10 0 0 0 135,95 L 135,25" fill="#a78bfa" opacity="0.2" stroke="#a78bfa" stroke-width="2"/><line x1="100" y1="25" x2="135" y2="25" stroke="#fff" stroke-width="1.5"/><text x="102" y="20" fill="#fff" font-size="10">r=15cm</text><text x="140" y="65" fill="#fff" font-size="10">h=40cm</text></svg>`
  },
  {
    source: "ENEM 2020 PPL",
    topic: "Geometria Plana",
    text: "Um terreno retangular foi dividido ao meio por uma diagonal, formando um triângulo retângulo com hipotenusa medindo 25 m e um dos catetos medindo 15 m. A área desse terreno triangular é:",
    options: ["150 m²", "187,5 m²", "200 m²", "250 m²", "300 m²"],
    answer: 0,
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><polygon points="40,20 40,95 150,95" fill="#a78bfa" opacity="0.25" stroke="#a78bfa" stroke-width="2"/><text x="15" y="60" fill="#fff" font-size="11">15 m</text><text x="85" y="110" fill="#fff" font-size="11">b = ?</text><text x="95" y="50" fill="#fff" font-size="11">25 m</text></svg>`
  }
];

let currentQuestion=0,selectedAnswer=null;
let answered=Array(questions.length).fill(false),correct=Array(questions.length).fill(false);

const questionText=document.getElementById("questionText"), alternatives=document.getElementById("alternatives"), feedback=document.getElementById("feedback");
const checkButton=document.getElementById("checkButton"), nextButton=document.getElementById("nextButton"), questionNumber=document.getElementById("questionNumber"), questionProgress=document.getElementById("questionProgress"), questionProgressText=document.getElementById("questionProgressText"), questionList=document.getElementById("questionList");

function renderQuestionList(){
  questionList.innerHTML=questions.map((_,i)=>`<button class="question-index ${i===currentQuestion?"active":""} ${answered[i]?"done":""}" data-index="${i}">Questão ${String(i+1).padStart(2,"0")}</button>`).join("");
  questionList.querySelectorAll(".question-index").forEach(b=>b.addEventListener("click",()=>{currentQuestion=Number(b.dataset.index);loadQuestion()}));
}
function loadQuestion(){
  const q=questions[currentQuestion]; selectedAnswer=null;
  questionNumber.textContent=String(currentQuestion+1).padStart(2,"0");
  questionProgress.style.width=`${((currentQuestion+1)/questions.length)*100}%`;
  questionProgressText.textContent=`${currentQuestion+1} de ${questions.length}`;
  document.getElementById("questionSource").textContent=q.source; document.getElementById("questionTopic").textContent=q.topic; questionText.textContent=q.text;
  feedback.textContent="";feedback.className="feedback";checkButton.disabled=false;nextButton.disabled=!answered[currentQuestion];
  alternatives.innerHTML=q.options.map((o,i)=>`<button class="alternative" data-answer="${i}"><span class="letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join("");
  alternatives.querySelectorAll(".alternative").forEach(b=>b.addEventListener("click",()=>{if(answered[currentQuestion])return;alternatives.querySelectorAll(".alternative").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedAnswer=Number(b.dataset.answer)}));
  if(answered[currentQuestion])showAnswered();
  renderQuestionList();
}
function showAnswered(){
  const q=questions[currentQuestion];
  alternatives.querySelectorAll(".alternative").forEach((b,i)=>{if(i===q.answer)b.classList.add("correct");if(i===selectedAnswer&&i!==q.answer)b.classList.add("wrong")});
  checkButton.disabled=true;
}
function updateStats(){
  const a=answered.filter(Boolean).length,c=correct.filter(Boolean).length;
  document.getElementById("progressCount").textContent=a;
  document.getElementById("hitCount").textContent=a?`${Math.round(c/a*100)}%`:"0%";
}
checkButton.addEventListener("click",()=>{
  if(selectedAnswer===null){feedback.textContent="Selecione uma alternativa antes de confirmar.";feedback.className="feedback error";return}
  const q=questions[currentQuestion];answered[currentQuestion]=true;correct[currentQuestion]=selectedAnswer===q.answer;
  feedback.textContent=correct[currentQuestion]?"Resposta correta! Boa.":`Resposta incorreta. A alternativa correta é ${String.fromCharCode(65+q.answer)}.`;
  feedback.className=`feedback ${correct[currentQuestion]?"success":"error"}`;showAnswered();nextButton.disabled=false;updateStats();renderQuestionList();
});
nextButton.addEventListener("click",()=>{currentQuestion=currentQuestion<questions.length-1?currentQuestion+1:0;loadQuestion()});

document.getElementById("topicCount").textContent=allTopics.length;
loadQuestion();

