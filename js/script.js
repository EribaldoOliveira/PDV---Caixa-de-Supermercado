let itens = [];

function adicionarItem() {
  const nome = document.getElementById('produto-nome').value;
  const qtd = parseInt(document.getElementById('produto-quantidade').value);
  const preco = parseFloat(document.getElementById('produto-preco').value);

  if (!nome || qtd <= 0 || preco <= 0) return alert('Preencha todos os campos corretamente.');

  const item = { nome, qtd, preco, total: qtd * preco };
  itens.push(item);

  atualizarLista();
  calcularTotais();

  document.getElementById('produto-nome').value = '';
  document.getElementById('produto-quantidade').value = '';
  document.getElementById('produto-preco').value = '';
}

function atualizarLista() {
  const lista = document.getElementById('lista-itens');
  lista.innerHTML = '';

  itens.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - Qtd: ${item.qtd} - R$ ${(item.total).toFixed(2)}`;
    lista.appendChild(li);
  });
}

function calcularTotais() {
  const total = itens.reduce((acc, item) => acc + item.total, 0);
  const desconto = parseFloat(document.getElementById('desconto').value) || 0;
  const totalComDesconto = total - desconto;

  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('total-com-desconto').textContent = totalComDesconto.toFixed(2);
}

function imprimirRecibo(tipo) {
  const nomeCliente = document.getElementById('cliente-nome').value || 'Cliente não informado';
  const cpf = document.getElementById('cliente-cpf').value || '-';
  const cnpj = document.getElementById('cliente-cnpj').value || '-';
  const pagamento = document.getElementById('meioPagamento').value;
  const desconto = parseFloat(document.getElementById('desconto').value) || 0;
  const total = itens.reduce((acc, item) => acc + item.total, 0);
  const totalComDesconto = total - desconto;

  let reciboHTML = `<h2>${tipo === 'nota' ? 'Nota Fiscal' : 'Recibo Térmico'}</h2>`;
  reciboHTML += `<p><strong>Cliente:</strong> ${nomeCliente}</p>`;
  if (cpf) reciboHTML += `<p><strong>CPF:</strong> ${cpf}</p>`;
  if (cnpj) reciboHTML += `<p><strong>CNPJ:</strong> ${cnpj}</p>`;
  reciboHTML += `<ul>`;
  itens.forEach(item => {
    reciboHTML += `<li>${item.nome} - Qtd: ${item.qtd} - R$ ${(item.total).toFixed(2)}</li>`;
  });
  reciboHTML += `</ul>`;
  reciboHTML += `<p><strong>Desconto:</strong> R$ ${desconto.toFixed(2)}</p>`;
  reciboHTML += `<p><strong>Total:</strong> R$ ${totalComDesconto.toFixed(2)}</p>`;
  reciboHTML += `<p><strong>Pagamento:</strong> ${pagamento}</p>`;
  reciboHTML += `<p>Data: ${new Date().toLocaleString()}</p>`;

  const reciboDiv = document.getElementById('recibo-impressao');
  reciboDiv.innerHTML = reciboHTML;

  window.print();
}

function imprimirRecibo(tipo) {
  const nomeCliente = document.getElementById('cliente-nome').value || 'Cliente não informado';
  const cpf = document.getElementById('cliente-cpf').value || '-';
  const cnpj = document.getElementById('cliente-cnpj').value || '-';
  const pagamento = document.getElementById('meioPagamento').value;
  const desconto = parseFloat(document.getElementById('desconto').value) || 0;
  const total = itens.reduce((acc, item) => acc + item.total, 0);
  const totalComDesconto = total - desconto;

  let reciboHTML = `<h2>${tipo === 'nota' ? 'NOTA FISCAL' : 'RECIBO'}</h2>`;
  reciboHTML += `<p><strong>Cliente:</strong> ${nomeCliente}</p>`;
  if (cpf) reciboHTML += `<p><strong>CPF:</strong> ${cpf}</p>`;
  if (cnpj) reciboHTML += `<p><strong>CNPJ:</strong> ${cnpj}</p>`;
  reciboHTML += `<ul>`;
  itens.forEach(item => {
    reciboHTML += `<li>${item.nome} - Qtd: ${item.qtd} - R$ ${(item.total).toFixed(2)}</li>`;
  });
  reciboHTML += `</ul>`;
  reciboHTML += `<p><strong>Desconto:</strong> R$ ${desconto.toFixed(2)}</p>`;
  reciboHTML += `<p><strong>Total:</strong> R$ ${totalComDesconto.toFixed(2)}</p>`;
  reciboHTML += `<p><strong>Pagamento:</strong> ${pagamento}</p>`;
  reciboHTML += `<p><strong>Data:</strong> ${new Date().toLocaleString()}</p>`;

  const reciboDiv = document.getElementById('recibo-impressao');
  reciboDiv.innerHTML = reciboHTML;

  // Aplica classe de estilo diferente por tipo
  reciboDiv.className = tipo === 'nota' ? 'nota-fiscal-print' : 'recibo-termico-print';

  window.print();
}
