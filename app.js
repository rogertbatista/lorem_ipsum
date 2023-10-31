const text = [
 `O sol brilhava intensamente no céu azul, aquecendo a terra abaixo. As crianças corriam pelo parque, rindo e brincando. O aroma de flores recém-brotadas enchia o ar, criando uma sensação de renovação na primavera. Era um dia perfeito para desfrutar ao ar livre e esquecer as preocupações do mundo.`,
 `Na cidade movimentada, as luzes da rua cintilavam enquanto as pessoas se apressavam para o trabalho. Os carros buzinavam e os pedestres conversavam animadamente. Nas cafeterias, o aroma do café fresco atraía os amantes da cafeína, proporcionando um breve refúgio da agitação da vida urbana. A cidade nunca dormia, sempre pulsando com energia e vida.`,
 `No alto da montanha, o ar era fresco e nítido, e o silêncio reinava, quebrado apenas pelo canto dos pássaros. As árvores balançavam suavemente ao vento, e a vista do vale abaixo era deslumbrante. Era um lugar tranquilo e sereno, perfeito para a reflexão e a contemplação da natureza.`,
 `Na cozinha, o cheiro tentador de um guisado caseiro preenchia o ar. A família se reunia em torno da mesa, ansiosa para compartilhar uma refeição juntos. Risadas ecoavam pela casa enquanto todos compartilhavam histórias do dia. Era um daqueles momentos simples, mas preciosos, que tornavam a vida verdadeiramente especial.`,
 `A chuva caía suavemente do céu, criando um som reconfortante ao bater nas janelas. As folhas das árvores tremiam com a brisa, e o aroma de terra molhada enchia o ar. Era o tipo de dia perfeito para aconchegar-se com um bom livro e uma xícara de chá quente, esquecendo o mundo lá fora.`,
 `No campo aberto, o céu noturno se estendia infinitamente, adornado com estrelas cintilantes. O som suave dos grilos enchia o ar, enquanto uma fogueira crepitava nas proximidades. Amigos se reuniam ao redor, compartilhando histórias e observando o céu estrelado. Era uma noite perfeita para a conexão e a contemplação do universo.`,
 `Na beira da praia, as ondas quebravam suavemente na areia, criando uma trilha de espuma brilhante. O pôr do sol pintava o horizonte com tons de laranja e rosa, enquanto os banhistas desfrutavam das águas refrescantes. Crianças construíam castelos de areia, e os adultos relaxavam sob guarda-sóis. A praia era um refúgio de tranquilidade à beira do oceano.`,
 `Nas ruas movimentadas da cidade, o zumbido constante de conversas e buzinas de carros enchia o ar. Os edifícios altos se erguiam em direção ao céu, criando um horizonte impressionante. As lojas exibiam vitrines tentadoras, atraindo os transeuntes. A cidade pulsava com atividade, oferecendo uma variedade de experiências e oportunidades para quem ousasse explorar.`,
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');
const cleanBtn = document.getElementById('btn-clean');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);
    
    if(isNaN(value) || value < 0 || value > 8){
        result.innerHTML = `<p class="result">${text[random]}</p>`
    }
    else{
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        }).join('');
        result.innerHTML = tempText;
    }
});

cleanBtn.addEventListener('click',function(){
    result.innerHTML = '';
});