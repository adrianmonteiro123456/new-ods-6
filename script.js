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
