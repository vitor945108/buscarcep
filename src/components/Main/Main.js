import ExibePerfil from '../ExibePerfil/ExibePerfil';
import wolverinePerfil from '../../images/wolverine.jpg';
import xavierPerfil from '../../images/xavier.jpg';
import ciclopePerfil from '../../images/Ciclope.jpg';
import jeanPerfil from '../../images/jean.webp';
import magnetoPerfil from '../../images/magneto.webp';
import pietroPerfil from '../../images/pietro.jpg';
import misticaPerfil from '../../images/mistica.webp'
import fanaPerfil from '../../images/fanatico.jpg';
import Equipe from '../Equipe/Equipe';
import './main.css';


function Main() {
    let caractwolverine = " Talvez a principal habilidade de Wolverine — e aquela que o deixa praticamente imparável — seja seu fator de cura. Este dom mutante é extremamente poderoso e permite que Logan consiga se regenerar em uma velocidade absurda. Funcionando de forma automática e passiva, ou seja, sem que necessite do controle do herói, o poder garante que, independente de quantas vezes o mutante caia, ele conseguirá se levantar e continuar lutando, independente da gravidade dos ferimentos.";
    let caracprof = "Altura: 1,83m Peso: 86 kgs Olhos: Azuis Cabelos: Careca (loiro quando criança) Fator X: Xavier possui vastas habilidades psiônicas. Ele pode criar ilusões, paralizar     Possui também um Fator de Cura que permite a ele regenerar os tecidos de seu corpo em uma velocidade incrível, tornando-o imune a qualquer tipo de doenças e vírus conhecidos temporariamente o corpo ou a mente de uma pessoa, causar uma perda de memória específica ou amnésia total. Causar choque mental no adversário, sentir a presença de mutantes em um determinado raio de distância, ler a mente dos outros, fazer projeções astrais além de possuir habilidades telecinéticas";
    let caracilcope = "Altura: 1,86m Peso: 83,8 kgs Olhos: Vermelhos Cabelos: Castanhos Poderes: Ciclope possui a habilidade mutante de disparar raios de seus olhos, com um alto poder de destruição. Ele não é capaz de controlá-los e precisa usar visores ou óculos com lentes de quartzo-ruby para bloquear a energia. O primeiro X-man e também o mais determinado a levar para frente o sonho de igualdade de Xavier, Ciclope é quem lidera a equipe na ausência do professor";
    let caracjean = " Jean Grey é uma personagem fictícia das histórias em quadrinhos publicadas pela Marvel Comics. Sua estreia nos quadrinhos foi em Uncanny X-Men #1 (1963). Ela não só é um dos membros originais que fundaram os X-Men, como também foi a primeira mulher a integrar a equipe, sendo hoje uma das personagens mais populares e poderosas dos quadrinhos. Além de ser um dos membros mais importantes do time, intitulada por diversas vezes como o coração do grupo,[14] ela também se tornou eventualmente a maior telepata do Universo Marvel. Seu famoso codinome Fênix";

    const equipe7 = [
        {nome: "professor xavier", imagem: xavierPerfil, crt:caracprof ,categoria:"professor"},
        {nome: "ciclope", imagem:ciclopePerfil, crt: caracilcope,categoria:"aluno"},
        {nome: "wolverine", imagem: wolverinePerfil, crt:  caractwolverine},
        {nome: "jean gray", imagem: jeanPerfil, crt: caracjean }
      ]
      let caractmagneto ="Magneto é um personagem fictício do Universo Marvel, um supervilão criado e publicado pela editora Marvel Comics, sendo considerado um dos principais inimigos dos X-Men. Magneto é um mutante com enormes poderes de manipulação de campos magnéticos, além de controlar qualquer tipo de metal, incluindo o Adamantium."
      let caractpietro ="Mercúrio é o alter-ego de Pietro Maximoff, um mutante cuja habilidade é assumir velocidades sobre-humanas, tanto fisica quanto mentalmente. um dos personagens de X-Men (NMU), por vezes um antagonista, opondo-se aos X-Men de Charles Xavier."
      let caractmistica ="Seu nome verdadeiro é Raven Darkhölme e ela possui o poder de transmutação, a capacidade de mudar psiquicamente a formação de suas células biológicas para mudar sua aparência. Dessa forma ela sempre consegue assumir a forma outros seres humanos e animais."
      let caractfanatico ="Juggernaut (O Fanático) é Cain Marko, meio-irmão do Professor Charles Xavier, seus poderes são derivados de uma joia mística chamada O amuleto de Cyttorak, que trouxe a ele habilidades que incluem força sobre-humana, invulnerabilidade e a capacidade de não ser parado quando se coloca em movimento linear."
    
      const equipe8 = [
        {nome: undefined, imagem:magnetoPerfil, crt: caractmagneto,categoria:"professor"},
        {nome: "pietro", imagem:pietroPerfil, crt: caractpietro},
        {nome: "mistica", imagem: misticaPerfil,crt:caractmistica},
        {nome: "juggernaut ", imagem:fanaPerfil, crt: caractfanatico},
      ]
    
    return(
        <main>
            <Equipe titulo={"xmen"} listaP={equipe7}/>
            <Equipe titulo={"irmandade"} listaP={equipe8}/>}
        </main>
    )
}

export default Main;