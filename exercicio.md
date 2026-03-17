## 1. É possível representar tabelas em HTML?
Sim, é possível representar tabelas em HTML utilizando a tag `<table>`, que permite organizar dados em linhas e colunas dentro de uma página web. Essa estrutura é muito usada para apresentar informações tabulares, como listas de dados, horários ou resultados. Dentro da tabela, utilizam-se outras tags específicas para organizar o conteúdo, como linhas e células, permitindo que as informações fiquem bem estruturadas e fáceis de visualizar no navegador.

---

## 2. Como estruturar as tags para representar o conteúdo de uma tabela?
Para estruturar o conteúdo de uma tabela em HTML, utiliza-se a tag `<table>` como elemento principal. Dentro dela, as linhas são representadas pela tag `<tr>` (table row). Cada linha possui células que podem ser definidas com `<td>` (table data) para dados comuns ou `<th>` (table header) quando se trata de cabeçalhos. Essa organização permite criar uma estrutura clara de linhas e colunas, facilitando a apresentação de informações de forma organizada.

---

## 3. Existe diferença entre as tags de cabeçalho e rodapé e as demais tags? Se sim, qual?
Sim, existe diferença. Em HTML, as tags `<thead>`, `<tbody>` e `<tfoot>` são usadas para separar logicamente as partes da tabela: cabeçalho, corpo e rodapé. O `<thead>` contém normalmente os títulos das colunas, o `<tbody>` concentra os dados principais da tabela e o `<tfoot>` pode conter resumos ou informações finais. Essa separação melhora a organização do código, facilita a estilização com CSS e também ajuda navegadores e leitores de tela a interpretar melhor a estrutura da tabela.

---

## 4. Como se faz para incluir uma legenda em uma tabela?
Para incluir uma legenda em uma tabela em HTML utiliza-se a tag `<caption>`. Essa tag deve ser colocada logo após a abertura da tag `<table>` e serve para descrever o conteúdo ou o propósito da tabela. A legenda ajuda o usuário a entender rapidamente o que os dados representam, além de melhorar a acessibilidade e a organização da página.

---

## 5. É possível representar em HTML tabelas em que uma coluna corresponda a mais de uma linha (ou o contrário)? Se sim, como?
Sim, isso é possível utilizando os atributos `rowspan` e `colspan` nas células da tabela. O atributo `rowspan` permite que uma célula ocupe várias linhas, enquanto o `colspan` permite que ela ocupe várias colunas. Dessa forma é possível criar tabelas mais complexas, em que certas informações se estendem por múltiplas linhas ou colunas, permitindo uma representação mais flexível e organizada dos dados.