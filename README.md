<!DOCTYPE html>
<html lang="pt-BR">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Renato Saldanha - Desenvolvedor Fullstack</title>
	<meta name="description"
		content="Desenvolvedor Delphi e Web Fullstack com experiência em React, Node.js e desenvolvimento mobile">
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			margin: 0;
			padding: 0;
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
			min-height: 100vh;
			line-height: 1.6;
		}

		.conteiner {
			max-width: 1200px;
			margin: 0 auto;
			padding: 20px;
		}

		header {
			background: linear-gradient(135deg, #0073e6 0%, #0056b3 100%);
			color: white;
			text-align: center;
			padding: 30px 20px;
			border-radius: 15px;
			box-shadow: 0 8px 32px rgba(0, 115, 230, 0.3);
			margin-bottom: 30px;
		}

		header h1 {
			margin: 0 0 10px 0;
			font-size: 2.5rem;
			font-weight: 700;
		}

		header p {
			margin: 0;
			font-size: 1.1rem;
			opacity: 0.9;
		}

		.foto-perfil {
			width: 150px;
			height: 150px;
			border-radius: 50%;
			border: 4px solid #fff;
			box-shadow: 0 4px 20px rgba(0, 0, 0, .25);
			margin: 0 auto 16px auto;
			display: block;
			object-fit: cover;
		}

		.foto-capa {
			background-image: url("https://drive.google.com/thumbnail?id=1GfxoMaXha3CC1EAc6sUkxS2fkLDHMarz&sz=w400");
			background-size: 100%;
			background-position: center;
			background-repeat: no-repeat;
		}

		.principal {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 30px;
			margin-bottom: 30px;
		}

		.conteudo {
			background: white;
			padding: 30px;
			border-radius: 15px;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		}

		.habilidades {
			background: linear-gradient(135deg, #c6d6e7 0%, #a8c8ec 100%);
			padding: 30px;
			border-radius: 15px;
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
			height: fit-content;
		}

		.lista-habilidades {
			display: flex;
			align-items: flex-start;
			margin-bottom: 15px;
			padding: 10px;
			background: rgba(255, 255, 255, 0.7);
			border-radius: 8px;
			transition: transform 0.2s ease;
		}

		.lista-habilidades:hover {
			transform: translateY(-2px);
			background: rgba(255, 255, 255, 0.9);
		}

		.estrela {
			color: #ffd700;
			margin-right: 12px;
			font-size: 1.2rem;
			flex-shrink: 0;
		}

		section {
			margin: 30px 0;
		}

		section:first-child {
			margin-top: 0;
		}

		h2 {
			color: #0073e6;
			border-bottom: 3px solid #0073e6;
			padding-bottom: 8px;
			margin-bottom: 20px;
			font-size: 1.5rem;
			font-weight: 600;
		}

		ul {
			list-style-type: none;
			padding: 0;
		}

		li {
			margin-bottom: 12px;
			padding: 8px 0;
			border-bottom: 1px solid #f0f0f0;
		}

		li:last-child {
			border-bottom: none;
		}

		.item-contato {
			display: flex;
			align-items: center;
			margin-bottom: 15px;
			padding: 10px;
			background: rgba(0, 115, 230, 0.05);
			border-radius: 8px;
			transition: background-color 0.2s ease;
		}

		.item-contato:hover {
			background: rgba(0, 115, 230, 0.1);
		}

		.item-contato a {
			color: #0073e6;
			text-decoration: none;
			font-weight: 500;
			transition: color 0.2s ease;
		}

		.item-contato a:hover {
			color: #0056b3;
			text-decoration: underline;
		}

		.icone-contato {
			font-size: 1.2rem;
			margin-right: 12px;
			width: 24px;
			text-align: center;
		}

		footer {
			text-align: center;
			padding: 20px;
			background: linear-gradient(135deg, #0073e6 0%, #0056b3 100%);
			color: white;
			border-radius: 15px;
			box-shadow: 0 8px 32px rgba(0, 115, 230, 0.3);
		}

		@media (max-width: 768px) {
			.principal {
				grid-template-columns: 1fr;
				gap: 20px;
			}

			cabecalho h1 {
				font-size: 2rem;
			}

			.conteiner {
				padding: 15px;
			}

			.conteudo,
			.habilidades {
				padding: 20px;
			}
		}

		@media (max-width: 480px) {
			cabecalho h1 {
				font-size: 1.8rem;
			}

			cabecalho p {
				font-size: 1rem;
			}
		}
	</style>
</head>

<body>
	<div class="conteiner">
		<header class="foto-capa">
			<img src="https://drive.google.com/thumbnail?id=1fyLAmwKL6oml3fsiZOEPgwarlRui5pWL&sz=w400"
				alt="Foto de perfil de Renato Saldanha" class="foto-perfil">
			<h1>Renato Saldanha</h1>
			<p>Desenvolvedor Delphi e Web Fullstack | ranalisesaldanha@gmail.com | (65) 9 9271-2774</p>
		</header>

		<div class="principal">
			<div class="conteudo">
				<section>
					<h2>Resumo</h2>
					<p>
						Atuação na área de Tecnologia da Informação como suporte a softwares, manutenção e
						desenvolvimento de novos projetos, avaliando e executando os mesmos.

						Experiência na análise e desenvolvimento de sistemas em Delphi.

						Realização de testes para a garantia de que os sistemas estejam sem erros e em conformidade com
						as especificações funcionais levantadas, produzindo assim a documentação de testes.

						Participação de especificações e implementações de novos projetos.
					</p>
				</section>
				<section>
					<h2>Objetivo</h2>
					<p>Busco migrar totalmente para o desenvolvimento web, aplicando minha vivência técnica e visão de
						sistemas corporativos em projetos modernos. Tenho experiência sólida em Delphi e estou
						expandindo para tecnologias web como React, Node.js e desenvolvimento mobile.</p>
				</section>

				<section>
					<h2>Experiência Profissional</h2>
					<ul>
						<li><strong>Duralex Sistemas</strong> - Desenvolvedor Delphi Sênior (2024 - Atual)<br>
							<em>Desenvolvimento e manutenção de sistemas corporativos em Delphi</em>
						</li>
						<li><strong>Vector Infomática</strong> - Programador Delphi Pleno & Fullstack Junior (2021 -
							2022)<br>
							<em>Desenvolvimento fullstack com React+Node.js e manutenção de sistemas Delphi</em>
						</li>
						<li><strong>Bit Line Informática</strong> - Programador Delphi (2018 - 2020)<br>
							<em>Desenvolvimento de aplicações desktop e integração com bancos de dados</em>
						</li>
						<li><strong>MCN Sistemas</strong> - Programador Delphi & Front End (2015 - 2018)<br>
							<em>Desenvolvimento Delphi e frontend com Java+Android Studio</em>
						</li>
					</ul>
				</section>

				<section>
					<h2>Formação Acadêmica</h2>
					<ul>
						<li><strong>CST em Análise e Desenvolvimento de Sistemas</strong> - FATEC Senai (2015 - 2018)
						</li>
						<li><strong>Delphi Beginner</strong> - TDS Cuiabá</li>
						<li><strong>Desenvolvedor Multiplataforma Android/iOS com React e Redux</strong> - Udemy</li>
						<li><strong>React Native: Desenvolva APPs Nativas para Android e iOS</strong> - Udemy</li>
					</ul>
				</section>

				<section>
					<h2>Contato</h2>
					<div class="item-contato">
						<span class="icone-contato">📧</span>
						<a href="mailto:ranalisesaldanha@gmail.com" target="_blank" rel="noopener noreferrer">
							ranalisesaldanha@gmail.com
						</a>
					</div>
					<div class="item-contato">
						<span class="icone-contato">📞</span>
						<a href="https://wa.me/5565992712774" target="_blank" rel="noopener noreferrer">
							(65) 9 9271-2774
						</a>
					</div>
					<div class="item-contato">
						<span class="icone-contato">💼</span>
						<a href="https://www.linkedin.com/in/renato-saldanha-a318067b" target="_blank"
							rel="noopener noreferrer">
							LinkedIn Profile
						</a>
					</div>
					<div class="item-contato">
						<span class="icone-contato">🐙</span>
						<a href="https://github.com/renato-saldanha" target="_blank" rel="noopener noreferrer">
							GitHub Profile
						</a>
					</div>
					<div class="item-contato">
						<span class="icone-contato">🌐</span>
						<a href="https://www.renatosaldanha.com.br" target="_blank" rel="noopener noreferrer">
							Portfolio Website
						</a>
					</div>
				</section>
			</div>

			<div class="habilidades">
				<section>
					<h2>Skills Técnicas</h2>
					<ul>
						<li>
							<div class="lista-habilidades">
								<div class="estrela">★</div>
								<div><strong>Linguagens:</strong> Object Pascal, HTML, CSS, JavaScript, TypeScript,
									Python</div>
							</div>
						</li>
						<li>
							<div class="lista-habilidades">
								<div class="estrela">★</div>
								<div><strong>Frameworks:</strong> Delphi 7→Tokyo(12), ReactJS, React Native</div>
							</div>
						</li>
						<li>
							<div class="lista-habilidades">
								<div class="estrela">★</div>
								<div><strong>Controle de Versão:</strong> Git, GitHub, TortoiseSVN</div>
							</div>
						</li>
						<li>
							<div class="lista-habilidades">
								<div class="estrela">★</div>
								<div><strong>Metodologias:</strong> Design Responsivo, POO, Clean Code, SOLID, API
									RESTful</div>
							</div>
						</li>
						<li>
							<div class="lista-habilidades">
								<div class="estrela">★</div>
								<div><strong>Backend:</strong> Express, JWT, Knex, SQLAlchemy, Django, Node.js</div>
							</div>
						</li>
						<li>
							<div class="lista-habilidades">
								<div class="estrela">★</div>
								<div><strong>Bancos de Dados:</strong> Firebird, PostgreSQL, MySQL, SQL Server</div>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</div>

		<footer>
			<p>© 2024 Renato Saldanha - Todos os direitos reservados</p>
		</footer>
	</div>
</body>

</html>
