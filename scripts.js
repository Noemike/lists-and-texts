console.log('Hi,Noemi')

let names=['Levi', '<strong>Noni</strong>', 'Norbi', 'Anya', 'Apa', 'Baba'];



let additionalBlock = {
  title: "<h1>Added with javascript<h1>",
  text: "<p>This block was added using JavaScript's jQuery library. How awesome!<p>",
};

$('body').append(additionalBlock.title)
$('body').append(additionalBlock.text)
