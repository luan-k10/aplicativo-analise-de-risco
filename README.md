<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=130"/>
</p>

<h1 align="center">ANALISE DE RISCO POR APLICATIVO
<br><br></h1>

<br>

<p align="center">
  Prática de extensão interdisciplinar (PEI) .
</p>

<br>

<div align="center">
  
  ![Angular](https://img.shields.io/badge/-Angular-0D1117?style=for-the-badge&logo=angular&labelColor=0D1117&textColor=0D1117)&nbsp;
  ![TypeScript](https://img.shields.io/badge/-TypeScript-0D1117?style=for-the-badge&logo=typescript&labelColor=0D1117&textColor=0D1117)&nbsp;
  ![HTML](https://img.shields.io/badge/-HTML-0D1117?style=for-the-badge&logo=html5&labelColor=0D1117&textColor=0D1117)&nbsp;
  ![CSS](https://img.shields.io/badge/-CSS-0D1117?style=for-the-badge&logo=css&labelColor=0D1117&textColor=0D1117)&nbsp;  
  
</div>

<div align="center">

  [![GitHub Pages](https://img.shields.io/badge/-GitHub%20Pages%20-000?style=for-the-badge&logo=GITHUB)](https://github.com/luan-k10/aplicativo-analise-de-risco)&nbsp;

</div>

<br>

---

<br>

### 🎯 Objetivo:

<br>

- Desenvolver um software de análise de risco digital compatível com bancos de dados empresariais e funcionalidades de gestão, como criação, alteração e remoção de equipes, autorização de entrada e saída de equipes e personalização na escolha dos riscos enfrentados.

- Construir um protótipo funcional baseado em análises de risco reais, seguindo o padrão estabelecido pelas normas regulamentadoras;

- Tornar o software compatível com bancos de dados previamente construídos pelas empresas.

<br>

---

<br>

### 📱 Funcionalidades:

<br>

- **Login / Cadastro** de usuários (matrícula ou e-mail + senha; "Entrar com Outlook" é simulado).
- **Criar análise de risco**: versão digital do formulário PE-SGS-0028 (Formulário 2 – Análise de Risco Local), com todas as seções (condições especiais, preparação, check-lists, EPI/EPC, emergência, meio ambiente, riscos locais e assinaturas). Cada análise recebe um código (ex.: `1234-569`).
- **Buscar análise de risco** por código, executor ou matrícula e visualizá-la/imprimi-la.
- **Adicionar equipe**: cadastro dos membros usados para preencher as assinaturas.
- **Autorizar análise de risco**: aprovar ou rejeitar análises pendentes.

> Ainda não há backend: os dados ficam no `localStorage` do navegador. Os serviços em `src/app/core` concentram o acesso aos dados para facilitar a troca por uma API.

<br>

### ▶️ Como executar:

<br>

```bash
npm install
npm start        # http://localhost:4200
npm test         # testes unitários (Vitest)
npm run build    # build de produção em dist/
```

<br>

---

<br>

<div align="center">

  <p>
    👨‍💻 Autores:
  </p>

<br>

  <samp>
    <p>
      <b>André Gomes da Silva</b><br>
      <b>João Victor</b><br>
      <b>João Vitor</b><br>
      <b>Leticia Erlacher</b><br>
      <b>Luan Kairo</b><br>
      <b>Marcelo Perovano</b><br>
      <b>Thayno Zayron</b>
    </p>
  </samp>

<br>

<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=130&section=footer"/>
