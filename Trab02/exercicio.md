## 1. O que é JavaScript?
JavaScript é uma linguagem de programação interpretada de alto nível, essencial para criar sites dinâmicos e interativos. Ela funciona no navegador do usuário (front-end), permitindo animações, validação de formulários e atualizações de conteúdo em tempo real, além de ser usada no servidor (back-end) com Node.js.

---

## 2. É a mesma coisa que Java? Se não, quais as semelhanças e quais as diferenças?
JavaScript é uma linguagem de programação interpretada, focada em tornar páginas web interativas e dinâmicas, rodando principalmente no navegador (cliente) ou no servidor (Node.js). Não é a mesma coisa que Java, são linguagens completamente distintas, com propósitos e funcionamento diferentes, que compartilham apenas o nome por razões de marketing na época de seu lançamento. 

---

## 3. Quais são as utilizações mais comuns de JavaScript em HTML básico?
JavaScript é a linguagem de programação fundamental para tornar páginas HTML estáticas em aplicações web dinâmicas e interativas. Em um contexto de HTML básico, ele é usado para manipular o DOM (Document Object Model), respondendo a eventos do usuário sem precisar recarregar a página.

---

## 4. Qual o nome da notação de objetos em JavaScript? Como ela funciona?
A notação de objetos em JavaScript é chamada de JSON (JavaScript Object Notation), embora no código usemos frequentemente os Objetos Literais. Ela funciona como uma "lista de etiquetas": você organiza as informações dentro de chaves { } usando pares de chave e valor. A "chave" é o nome da propriedade (como nome ou idade) e o "valor" é o dado real associado a ela (como "João" ou 25), sempre separados por dois-pontos. É uma forma simples e organizada de agrupar diferentes características de uma mesma coisa em uma única variável.

---

## 5. Como JavaScript faz referência a objetos? Qual a diferença entre elemento.nome e elemento["nome"]?
A diferença principal é que a notação de ponto (elemento.nome) é a forma mais simples e direta de acessar uma propriedade fixa, enquanto a notação de colchetes (elemento["nome"]) é obrigatória quando o nome da propriedade possui espaços, caracteres especiais ou quando você precisa usar uma variável para decidir qual valor acessar dinamicamente.

---

## 5. O documento HTML pode ser considerado como um conjunto de objetos? É possível manipulá-lo via JavaScript Como?
Sim, o documento HTML é tratado pelo navegador como o DOM (Document Object Model), uma estrutura de árvore onde cada tag, atributo e texto se torna um objeto independente que o JavaScript pode "enxergar". Essa manipulação é feita através de seletores, como o document.querySelector(), que permitem ao código localizar um elemento e alterar em tempo real suas propriedades, como o conteúdo de texto (textContent), estilos CSS (style) ou até mesmo criar e remover elementos da página dinamicamente.