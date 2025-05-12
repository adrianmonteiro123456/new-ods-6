<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ODS 6 - Água Potável e Saneamento</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="img/logo-ods6.png" alt="Logo ODS 6">
        </div>
        <nav>
            <ul>
                <li><a href="#">Início</a></li>
                <li><a href="#metas">Metas</a></li>
                <li><a href="#indicadores">Indicadores</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="principal">
            <h1>ODS 6 – Água Potável e Saneamento</h1>
            <p>Garantir a disponibilidade e gestão sustentável da água e saneamento para todos.</p>
            <div class="indicadores-rapidos">
                <div class="grafico">
                    <h3>Acesso à Água Potável</h3>
                    <canvas id="aguaPotavelChart"></canvas>
                </div>
                <div class="grafico">
                    <h3>Saneamento Básico</h3>
                    <canvas id="saneamentoBasicoChart"></canvas>
                </div>
                <div class="grafico">
                    <h3>Qualidade da Água</h3>
                    <canvas id="qualidadeAguaChart"></canvas>
                </div>
            </div>
        </section>

        <section id="metas" class="destacadas">
            <h2>Metas</h2>
            <ul class="lista-metas">
                <li><a href="#">6.1 Acesso universal e equitativo à água potável e segura</a></li>
                <li><a href="#">6.2 Acesso a saneamento e higiene adequados e equitativos</a></li>
                <li><a href="#">6.3 Melhorar a qualidade da água, tratamento de efluentes e reutilização</a></li>
                <li><a href="#">6.4 Aumentar a eficiência do uso da água em todos os setores</a></li>
                <li><a href="#">6.5 Implementar a gestão integrada dos recursos hídricos</a></li>
                <li><a href="#">6.6 Proteger e restaurar ecossistemas relacionados com a água</a></li>
                <li><a href="#">6.a Expandir a cooperação internacional e o apoio aos países em desenvolvimento</a></li>
                <li><a href="#">6.b Apoiar e fortalecer a participação das comunidades locais</a></li>
            </ul>
        </section>

        <section id="indicadores" class="destacadas">
            <h2>Indicadores</h2>
            <div class="painel-indicadores">
                <div class="filtros">
                    <label for="regiao">Região:</label>
                    <select id="regiao">
                        <option value="todos">Todas</option>
                        <option value="norte">Norte</option>
                        <option value="nordeste">Nordeste</option>
                        <option value="centro-oeste">Centro-Oeste</option>
                        <option value="sudeste">Sudeste</option>
                        <option value="sul">Sul</option>
                    </select>
                    <label for="ano">Ano:</label>
                    <select id="ano">
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
                    <label for="tipo-dado">Tipo de Dado:</label>
                    <select id="tipo-dado">
                        <option value="acesso-agua">Acesso à Água Potável</option>
                        <option value="saneamento-basico">Saneamento Básico</option>
                        <option value="qualidade-agua">Qualidade da Água</option>
                    </select>
                    <button id="filtrar">Filtrar</button>
                </div>
                <div id="mapa-brasil">
                    <p>Mapa interativo será carregado aqui.</p>
                </div>
                <div id="dados-filtrados">
                    <p>Dados filtrados serão exibidos aqui.</p>
                </div>
            </div>
        </section>

        <section id="projetos" class="destacadas">
            <h2>Projetos em Andamento</h2>
            <div class="lista-projetos">
                <article>
                    <h3>Projeto 1: Água para Todos no Sertão</h3>
                    <p>Descrição breve do projeto e seus objetivos...</p>
                    <a href="#">Saiba Mais</a>
                </article>
                <article>
                    <h3>Projeto 2: Saneamento Ecológico em Comunidades Ribeirinhas</h3>
                    <p>Descrição breve do projeto e seus objetivos...</p>
                    <a href="#">Saiba Mais</a>
                </article>
            </div>
        </section>

        <section id="servicos-brasil" class="destacadas">
            <h2>Serviços e Informações do Brasil</h2>
            <div class="servicos-lista">
                <a href="#">Governo Digital</a>
                <a href="#">ANA (Agência Nacional de Águas e Saneamento Básico)</a>
                <a href="#">ONU Brasil</a>
            </div>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <p>Entre em contato conosco para mais informações.</p>
        </section>
    </main>

    <footer>
        <div class="links-institucionais">
            <a href="#">Governo Digital</a>
            <a href="#">ANA</a>
            <a href="#">ONU</a>
        </div>
        <div class="informacoes-contato">
            <p>Endereço: [Inserir Endereço]</p>
            <p>Telefone: [Inserir Telefone]</p>
            <p>Email: [Inserir Email]</p>
        </div>
        <div class="redes-sociais">
            <a href="#"><img src="img/facebook.png" alt="Facebook"></a>
            <a href="#"><img src="img/twitter.png" alt="Twitter"></a>
            <a href="#"><img src="img/instagram.png" alt="Instagram"></a>
        </div>
    </footer>

    <script src="js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>
