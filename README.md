# Desafio Técnico Jitterbit - Gerenciamento de Pedidos

API desenvolvida em Node.js para o processo seletivo da Jitterbit. A aplicação realiza o gerenciamento de pedidos (CRUD) com transformação de dados (Mapping).

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- MongoDB (Mongoose)

## 🚀 Como Rodar o Projeto
1. Clone o repositório: `git clone https://github.com/cayOcean/jitterbit-test.git`
2. Instale as dependências: `npm install`
3. Certifique-se de que o MongoDB está rodando localmente ou altere a string de conexão no `index.js`.
4. Inicie o servidor: `node index.js`
5. A API estará disponível em `http://localhost:3000`

## 📌 Endpoints
- **POST /order**: Cria um novo pedido (realiza o Mapping automático).
- **GET /order/:id**: Busca um pedido pelo número do pedido.
- **GET /order/list**: Lista todos os pedidos salvos.
- **PUT /order/:id**: Atualiza um pedido existente.
- **DELETE /order/:id**: Remove um pedido do banco de dados.