document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });
    });
    
    // Gráfico de indicadores
    const ctx = document.getElementById('graficoIndicadores').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
            datasets: [
                {
                    label: 'Acesso à Água Potável',
                    data: [75, 80, 88, 92, 90],
                    backgroundColor: '#0099CC',
                    borderColor: '#006699',
                    borderWidth: 1
                },
                {
                    label: 'Saneamento Básico',
                    data: [45, 50, 65, 75, 70],
                    backgroundColor: '#66CC66',
                    borderColor: '#339933',
                    borderWidth: 1
                },
                {
                    label: 'Qualidade da Água',
                    data: [65, 70, 80, 85, 82],
                    backgroundColor: '#66CCCC',
                    borderColor: '#339999',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentual (%)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
    
    // Dados para a tabela
    const dados = [
        { regiao: 'Norte', agua: 75, saneamento: 45, qualidade: 65, ano: 2023 },
        { regiao: 'Nordeste', agua: 80, saneamento: 50, qualidade: 70, ano: 2023 },
        { regiao: 'Centro-Oeste', agua: 88, saneamento: 65, qualidade: 80, ano: 2023 },
        { regiao: 'Sudeste', agua: 92, saneamento: 75, qualidade: 85, ano: 2023 },
        { regiao: 'Sul', agua: 90, saneamento: 70, qualidade: 82, ano: 2023 },
        // Dados para 2022
        { regiao: 'Norte', agua: 72, saneamento: 42, qualidade: 62, ano: 2022 },
        { regiao: 'Nordeste', agua: 78, saneamento: 48, qualidade
        // Continuação do script.js após o gráfico

    // Preencher tabela com dados
    const tabelaBody = document.getElementById('dados-tabela');
    
    function preencherTabela(dados) {
        tabelaBody.innerHTML = '';
        dados.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.regiao}</td>
                <td>${item.agua}%</td>
                <td>${item.saneamento}%</td>
                <td>${item.qualidade}%</td>
                <td>${item.ano}</td>
            `;
            tabelaBody.appendChild(row);
        });
    }
    
    // Filtros de dados
    const filtroRegiao = document.getElementById('regiao');
    const filtroAno = document.getElementById('ano');
    const filtroTipo = document.getElementById('tipo');
    
    function filtrarDados() {
        const regiao = filtroRegiao.value;
        const ano = filtroAno.value;
        
        let dadosFiltrados = dados.filter(item => {
            return (regiao === 'todos' || item.regiao.toLowerCase().includes(regiao)) && 
                   (ano === 'todos' || item.ano.toString() === ano);
        });
        
        preencherTabela(dadosFiltrados);
        
        // Atualizar gráfico com os dados filtrados
        if (regiao === 'todos') {
            atualizarGraficoComDadosAgregados(dadosFiltrados);
        }
    }
    
    function atualizarGraficoComDadosAgregados(dadosFiltrados) {
        const regioes = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];
        
        const dadosAgua = regioes.map(regiao => {
            const item = dadosFiltrados.find(d => d.regiao === regiao && d.ano === parseInt(filtroAno.value));
            return item ? item.agua : 0;
        });
        
        const dadosSaneamento = regioes.map(regiao => {
            const item = dadosFiltrados.find(d => d.regiao === regiao && d.ano === parseInt(filtroAno.value));
            return item ? item.saneamento : 0;
        });
        
        const dadosQualidade = regioes.map(regiao => {
            const item = dadosFiltrados.find(d => d.regiao === regiao && d.ano === parseInt(filtroAno.value));
            return item ? item.qualidade : 0;
        });
        
        chart.data.datasets[0].data = dadosAgua;
        chart.data.datasets[1].data = dadosSaneamento;
        chart.data.datasets[2].data = dadosQualidade;
        chart.update();
    }
    
    // Event listeners para filtros
    filtroRegiao.addEventListener('change', filtrarDados);
    filtroAno.addEventListener('change', filtrarDados);
    filtroTipo.addEventListener('change', function() {
        // Mostrar/ocultar colunas da tabela baseado no tipo selecionado
        const colunas = document.querySelectorAll('tbody td, th');
        const tipo = this.value;
        
        colunas.forEach((col, index) => {
            if (index % 5 === 0) return; // Sempre mostra a coluna de região
            
            if (tipo === 'todos') {
                col.style.display = '';
            } else if (
                (tipo === 'agua' && (index % 5 === 1)) ||
                (tipo === 'saneamento' && (index % 5 === 2)) ||
                (tipo === 'qualidade' && (index % 5 === 3))
            ) {
                col.style.display = '';
            } else if (index % 5 !== 4) { // Mantém a coluna de ano visível
                col.style.display = 'none';
            }
        });
    });
    
    // Inicializar tabela com todos os dados
    preencherTabela(dados);
    
    // Formulário de contato
    const formContato = document.getElementById('formulario-contato');
    
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Simular envio (em uma aplicação real, seria uma requisição AJAX)
        console.log('Mensagem enviada:', { nome, email, mensagem });
        
        alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
        formContato.reset();
    });
    
    // Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        
        // Simular cadastro
        console.log('Email cadastrado:', email);
        alert('Obrigado por se inscrever em nossa newsletter!');
        this.reset();
    });
    
    // Acessibilidade
    const btnContraste = document.getElementById('contraste');
    const btnFonteMais = document.getElementById('fonte-mais');
    const btnFonteMenos = document.getElementById('fonte-menos');
    
    btnContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
        
        // Salvar preferência no localStorage
        if (document.body.classList.contains('alto-contraste')) {
            localStorage.setItem('altoContraste', 'true');
        } else {
            localStorage.removeItem('altoContraste');
        }
    });
    
    btnFonteMais.addEventListener('click', function() {
        alterarTamanhoFonte(1);
    });
    
    btnFonteMenos.addEventListener('click', function() {
        alterarTamanhoFonte(-1);
    });
    
    function alterarTamanhoFonte
