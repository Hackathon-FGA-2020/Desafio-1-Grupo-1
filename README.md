# Projeto Dubium
![](Documentos/Dubium.png "Title")
## Hackathon UnB 2020 - soluções para enfrentar a COVID-19
### Desafio 01 - Grupo 01

Nossa proposta visa resolver, ou ao menos amenizar, a problemática da grande incidência de suspeitos de COVID-19 em hospitais, os quais arriscam contaminar-se, caso não o estejam, ou contaminar outros. Também permitirá a coleta de dados essenciais para o mapeamento e rastreamento do contágio e, se possível, até a avaliação com maior precisão do grau de letalidade para diferentes grupos de risco.

O projeto consiste em um aplicativo mobile, que funciona tanto na plataforma android quanto IOS, e sua principal função é realizar uma triagem virtual, para que o usuário, que acredita ser suspeito de COVID-19, não precise se dirigir a uma unidade de saúde precipitadamente, desafogando assim, o sistema de saúde brasiliense.

Com a nossa proposta de triagem virtual, queremos dar ao usuário a opção de escolher locais para atendimendo, dependendo do resultado de seu teste. Essa opções incluem: hospitais de referência para um estado de saúde mais grave; pontos de testagem para quando os sintomas se apresentam mais leves, e mesmo assim a triagem acuse uma possível infecção e; postos de saúde, para que o usuário que tenha resultado negativo ao COVID-19, possa descobrir qual a origem dos sintomas que está sentindo.

O aplicativo consiste em um questionário com diversos sintomas comuns aos de infectados pelo novo Corona Vírus. Cada sintoma possui um determinado peso, e o somatório desses pesos indicam a probalidade de o usuário estar ou não infectado. Logo após o preenchimento dos sintomas, o aplicativo abrirá uma tela indicando a possível ação a ser tomada diante do quadro apresentado. Demos o nome de June a este método de avaliação de sintomas, em homenagem à cientista June Almeida.

June Dalziel Almeida (Glasgow, 5 de outubro de 1930 - Bexhill, 1 de dezembro de 2007) foi uma virologista escocesa que, com pouca educação formal, tornou-se doutora em ciências e pioneira em imagens, identificação e diagnóstico de vírus. Ela descobriu o primeiro coronavírus humano. Em 1979, publicou o Manual para diagnóstico viral laboratorial rápido.

Nos inspirandos nesse grande feito, tentamos com pouco conhecimento ajudar de alguma maneira os moradores do Distrito Federal.


# Tutorial

O aplicativo foi desenvolvido em Angular, utilizando IONIC como framework.

Ao acessar o aplicativo, o usuário será direcionado a uma tela de boas vindas e logo após será exibida uma tela de menu onde haverá três interações disponíveis: 

* Teste COVID-19;
* Unidades de saúde próximas;
* Pontos de testagem próximos.

    
## Teste COVID-19:
O teste é dividido em duas etapas. Na primeira etapa, o usuário fornece seus dados pessoais como nome, faixa etária, entre outras informações.

Na segunda etapa, o usuário fornece informações sobre os sintomas que está sentindo Dependendo das respostas, o usuário será direcionado para uma dessas três telas:

* Resultado negativo: Os sintomas apresentados pelo usuário não indicam que ele é suspeito de COVID-19, ainda assim, será apresentado a ele uma lista de postos de saúde para que ele procure tratar seus sintomas.
* Resultado positivo: com o resultado positivo e apresentando sintomas graves, será apresentado ao usuário uma lista de unidades de saúde próximas à sua localização.
* Resultado inconclusivo: com o resultado incerto, é apresentado uma lista de pontos de testagem rápida próximos ao usuário, para que ele busque fazer o teste para ter certeza que está infectado pelo novo Corona Vírus, antes de procurar uma unidade de saúde.

## Unidades de saúde próximas:
Ao permitir que o app tenha acesso à sua localização atual, o usuário receberá uma lista de unidades de saúde, as quais são referência no tratamento do COVID-19, mais próximas à sua localidade.

## Pontos de testagem próximos:
Com a autorização do usuário, o app receberá sua localização e irá listar os pontos de testagem rápida para o COVID-19 na região em que o usuário se encontra.


# Updates futuros 

* Criar cadastro de usuário para poder validar o resultado de testagem;

* Utilizar localização atual do usuário para determinar unidades de saúde mais próximas;

* Mostrar dados atualizados sobre o COVID-19 diariamente;

* Criar conexão com profissionais de saúde que estão afastados, por pertencerem ao grupo de risco, para tirar dúvidas sobre os sintomas;

* Expandir função de triagem virtual para outras doenças.


# Modo de Execução do Aplicativo

Passo 01: Clonar o repositório do projeto;

Passo 02: Instalar o framework IONIC: $ npm install -g ionic cordova ;

Passo 03: Instalar dependências: $ npm i ;

Passo 04: Entrar na pasta local e iniciar o servidor: $ionic serve -l .

Esse comando dará a opção de simular o ambiente de funcionamento.


