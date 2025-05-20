const slides = document.querySelectorAll(".slide"); //associa a variavel slides com imagens dentro de elementos coma a classe slides
let slideIndex = 0;

const slideTexts = [
  {
    text: "Consultas e exames nas áreas de<br>Oftalmologia, Ortopedia e Estética. ",
    buttonText: "Agendar Consulta",
    buttonLink: "https://www.doctoralia.com.br/clinicas/centro-medico-delfes"
  },
  {
    text: "Profissionais de Referência:<br>Agilidade, Integração e Receptividade",
    buttonText: "Agendar Consulta",
    buttonLink: "https://www.doctoralia.com.br/clinicas/centro-medico-delfes"
  },
  {
    text: "Ambiente Desospitalizado<br>Conforto e comodidade para você",
    buttonText: "Agendar Consulta",
    buttonLink: "https://www.doctoralia.com.br/clinicas/centro-medico-delfes"
  }
];

const captionText = document.getElementById("slideCaptionText");
const captionButton = document.getElementById("slideCaptionButton");

const caption = document.getElementById("slideCaption");

document.addEventListener("DOMContentLoaded", initializeSlider); //ao carregar o conteudo do DOM, chama a funcao initializeSlider

function initializeSlider(){
    if(slides.length > 0){ 
    slides[slideIndex].classList.add("displaySlide");  // adiciona a classe displaySlide que faz com que o elemento seja exibido
       updateCaption(slideIndex);    }
}
function showSlide(index){

    if(index >= slides.length){//retorna o valor do index para 0 quando ele ultrapassa o numero de slides
        slideIndex = 0;
    }else if (index < 0){
        slideIndex = slides.length - 1; //atribui o valor do index do ultimo slide quando voltamos um slide durante a exibicao do primeiro slide 
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide"); //remove a classe displaySlide que faz com que o elemento seja exibido
    })
    slides[slideIndex].classList.add("displaySlide");// adiciona a classe displaySlide que faz com que o elemento seja exibido
        updateCaption(slideIndex);

}
function updateCaption(index) {
    captionText.innerHTML = slideTexts[index].text;
    captionButton.textContent = slideTexts[index].buttonText;
    captionButton.onclick = function () {
        window.location.href = slideTexts[index].buttonLink;
    };
}
function prevSlide(){
   
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    
    slideIndex++;
    showSlide(slideIndex);
}


//    setInterval(() => {
//  nextSlide();
//}, 5000)
//