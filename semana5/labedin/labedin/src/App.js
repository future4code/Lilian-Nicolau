import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem=""
          nome="Lilian Nicolau" 
          descricao="Olá, eu sou a Lilian, professora de inglês e estudante de Tecnologia da Informação. Trabalho há mais de dez anos transformando a vida das pessoas através do ensino de língua estrangeira. Agora estou pronta para alçar outros voos através da tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://empresassaolourenco.com.br/imagens/empresa/m/Iso5ZumzKaY2kHfWwSFdyCJ8hvRpLA9B-BE26DTrHnVy4NYGtzC8vfdAcFLaX5IJi.png" 
          nome="Fisk" 
          descricao="Trabalho na Fisk Centro de Ensino dando aulas de inglês. Muitos alunos meus já passaram pelo teste internacional TOEFL iBT, sendo elegíveis para a saudosa bolsa de estudos do Governo Federal, o Ciências sem Fronteiras. Me orgulho de ter feito parte disso."
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg/300px-Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg.png" 
          nome="Pontificia Universidad Católica de Chile" 
          descricao="Tive uma tremenda experiência trabalhando com os alunos de graduação e mestrado da CATO de Santiago, Chile." 
        />

        </div>

        <div className="page-section-endereco">
          <h2>Onde me encontrar</h2>
          <CardPequeno
          imagem="https://www.baitzsolutions.com.br/assets/images/icons/mail.png"
          nome="E-mail e endereço"
          descricao="E-mail: lianicolau@yahoo.com.br/ Endereço: Rua das Petúnias 1990, Nova Mutum-MT"
        />

        </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
