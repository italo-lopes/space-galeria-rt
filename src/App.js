import './styles/estilosGlobais.scss'
import PaginasInicial from "./Pagina/PaginaInicial";
//import { Fragment } from "react";

// 1 PASSO - Limpar deixar apenas -index.html - e limpar conteudo dela - app.js,index.js
// 2 PASSO - Criar uma pasta chamada paginas/PaginasInicial/index.jsx 
// 3 PASSO - Importo a pagina inicial para app
// 4 PASSO - coleção de componente
// 5 PASSO - Separar a UI em componente com uma hieraquia
// 6 PASSO - Criar Componentes em src 
// 7 PASSO - USANDO .jsx consigo crir tag fora do renderizador - integrando (js + jsx)
// 8 PASSO - Importar img com impor varivel from './local'
// 9 PASSO - Sempre que adicionar um css - scss = sass
// 10 PASSO - INSTALAR PACOTE DE STYLE
// 11 PASSO - npm intall --save-dev sass
// 12 POSSO - src-style-
// 13 PASSO - na main tudo q é global import './styles/estilosGlobais.scss'
// 14 PASSO - É MIDULE SASS .cabecalho { &__container {  hieranquia
// 15 Passo  - src nao aceita string tem que importar import
//             search from '../../assets/search.png'; <img src={search}

// 16 Passo - extenção simple react shippets
// 17 Passo - Usar o @import-normalize; - reset css (.vscode {}settings.json {'scss.lint.unknownAtRules':'ignore'})
// 18 Passo - scroll - body::-webkit-scrollbar
// 19 Passo - Arquivo fonte - criando pasta fontem em src e colocando fonte estatico
// 20 Pasoo - assents leva icones e fontes 
// 31 Passo - @fonte-face {configuração} 
//            4 parametros @fonte-face { (font-family)-(src)-(font-weight)-(display)}
// 33 Passo - O react precisa ler o arquivo por isso importamos no index.js onde o app é renderizado
//            A impotanção é igual um css import "url do aquivo" 
//              Aplicação voltada mais pra estilização
// 34 Passo - Quando for salvar arquivos de modo dinamico eu uso a pasta PUBLIC- assets-tipoDeArquivo
// 35 Passo - No projeto adicionano os arquivos de modo estatico mas é ../assets/imagens/galeria/foto-id.png
// 36 Passo - gracas ao jsconfig.json posso tirar os ../.. pq ele explica que src é a minha pasta raiz
// 37 Passo - Adicionando funcionalidade
function App() {
  return (
    <PaginasInicial/>
  );
}
// me fala em qual pagina eu vou renderizar
export default App;
