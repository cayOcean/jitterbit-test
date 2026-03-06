const express = require('express');
const Datastore = require('nedb-promises');
const app = express();

app.use(express.json());

// Cria o "Banco de Dados" em um arquivo local na pasta src
const db = Datastore.create({ filename: './orders.db', autoload: true });

// --- ENDPOINTS ---

// 1. Criar pedido (COM MAPPING OBRIGATÓRIO)
app.post('/order', async (req, res) => {
  try {
    const input = req.body;

    // TRANSFORMAÇÃO DE DADOS (MAPPING)
    const mappedOrder = {
      orderId: input.numeroPedido,
      value: input.valorTotal,
      creationDate: new Date(input.dataCriacao),
      items: input.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const newOrder = await db.insert(mappedOrder);
    console.log('📦 Pedido mapeado e salvo no arquivo orders.db');
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: 'Erro no processamento', detail: error.message });
  }
});

// 2. Obter dados do pedido por ID
app.get('/order/:id', async (req, res) => {
  const order = await db.findOne({ orderId: req.params.id });
  order ? res.json(order) : res.status(404).json({ message: 'Pedido não encontrado' });
});

// 3. Listar todos (Opcional)
app.get('/order/list', async (req, res) => {
  const orders = await db.find({});
  res.json(orders);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API LOCAL PRONTA: http://localhost:${PORT}`);
});