

# Mestre em Café - Mini-Curso Interativo ☕

Bem-vindo ao "Mestre em Café"\! Este é um mini-curso interativo, desenvolvido como um pacote SCORM, que testa os conhecimentos dos usuários sobre café através de um quiz rápido e dinâmico de 3 perguntas.

O projeto foi construído com **React** e é projetado para ser facilmente integrado em qualquer plataforma de aprendizagem (LMS) compatível com SCORM.

## 🚀 Como Testar Localmente

Para executar e testar o projeto em sua máquina, você precisará ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado.

Siga os passos abaixo:

### 1\. Clone o Repositório

Se o projeto estiver em um repositório Git, clone-o. Caso contrário, apenas certifique-se de ter todos os arquivos em uma única pasta.

git clone <url-do-seu-repositorio>
cd <nome-da-pasta-do-projeto>


### 2\. Instale as Dependências

Abra o terminal na pasta raiz do projeto e execute o comando abaixo para instalar todas as bibliotecas necessárias (como o React).


npm install


### 3\. Inicie o Servidor de Desenvolvimento

Após a instalação das dependências, inicie a aplicação com o seguinte comando:


npm run dev


Isso iniciará um servidor de desenvolvimento local e abrirá o projeto no seu navegador, geralmente no endereço `http://localhost:3000` ou similar. Agora você pode interagir com o mini-curso como um usuário final.

-----

## 💻 Telas da Aplicação

O mini-curso é dividido em três telas principais, que guiam o usuário pela experiência de aprendizado.

### 1\. Tela de Boas-Vindas (`BemVindo.jsx`)

  * **Funcionalidade:** Apresenta o título "Mestre em Café" e uma breve descrição do que o usuário pode esperar.

### 2\. Tela do Quiz (`Quiz.jsx` e `Questoes.jsx`)

  * **Funcionalidade:**
      * Exibe uma pergunta por vez, com suas respectivas opções de múltipla escolha.
      * Uma **barra de progresso** no topo da tela mostra o avanço do usuário no quiz.
      * Quando o usuário seleciona uma resposta, o sistema fornece **feedback visual instantâneo**:
          * Verde (`correct`) para a resposta correta.
          * Vermelho (`wrong`) para a resposta incorreta.
      * Após responder, o botão **"Próxima"** (ou **"Enviar"** na última questão) é habilitado.


### 3\. Tela de Conclusão (`Conclusao.jsx`)

A tela final, que apresenta os resultados do usuário e finaliza o curso.

  * **Funcionalidade:**
      * Exibe a mensagem "Parabéns, Barista\!" e a **pontuação final** do usuário em porcentagem.
      * Mostra uma **mensagem de feedback personalizada** com base na pontuação obtida (por exemplo, "Incrível\! Você é um verdadeiro Mestre do Café\!" para 100% de acertos).
      * A cor da pontuação muda para verde se a nota for alta (`high`) ou cinza se for baixa (`low`).

      * O curso é marcado como "concluído" e a pontuação é enviada para a plataforma LMS através da API do SCORM.
      * O usuário tem a opção de clicar no botão **"Refazer Curso"** para reiniciar o quiz desde a tela de boas-vindas.

-----

## 🛠️ Estrutura dos Componentes

  * **`App.jsx`**: O componente principal que controla qual tela (`BemVindo`, `Quiz` ou `Conclusao`) é exibida para o usuário.
  * **`scorm-api-wrapper.js`**: Um wrapper simples que lida com a comunicação com a API do SCORM para inicializar o curso, registrar a pontuação e marcar a conclusão.
  * **`index.css`**: Arquivo de estilos que define toda a aparência visual do projeto, incluindo cores, fontes e layout.

-----

Claro\! É uma ótima ideia adicionar essa parte ao `README.md`. Com base em tudo que fizemos, preparei um texto que você pode copiar e colar no seu arquivo.

Ele explica o método automatizado que configuramos (que é o ideal) e também o método manual como alternativa.

-----

## 🚀 Empacotando e Testando em um Ambiente SCORM

Para que o curso funcione em uma plataforma de ensino (LMS), ele precisa ser "empacotado" como um arquivo `.zip` contendo os arquivos do projeto e um manifesto (`imsmanifest.xml`).


1.  **Gere os arquivos do projeto:**

    npm run build
  
2.  **Copie o manifesto:**
    Copie o arquivo `imsmanifest.xml` da raiz do projeto para **dentro** da pasta `dist` que foi criada.
3.  **Crie o arquivo .zip:**
     Entre na pasta `dist`, selecione todo o conteúdo  (a pasta `assets`, o `index.html` e o `imsmanifest.xml`) e, a partir dos arquivos selecionados, crie o arquivo `.zip`. Não compacte a pasta `dist` por fora.

### Testando o Pacote Gerado

 usando uma plataforma de testes como o **SCORM Cloud**:

1.  Acesse o site [SCORM Cloud](https://cloud.scorm.com/) e crie uma conta de testes gratuita.
2.  Na sua biblioteca, clique em "Add Content" e faça o upload do seu arquivo `.zip` (`curso-scorm.zip`).
3.  Após o processamento, clique em "Launch" para abrir e testar seu curso como se fosse um aluno.
