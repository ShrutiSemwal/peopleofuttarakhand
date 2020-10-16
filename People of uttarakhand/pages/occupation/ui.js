// Inspired by: https://dribbble.com/shots/3545421-017-Email-receipt

function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "Field Ploughing",
    desc: "Field Ploughing is the most common occupation among people of Uttarakhand. This picture is of Rongkang Village of Vyas Valley. "
  },
  {
    title: "Rung Carpet Making",
    desc: "This picture is of Carpet making in Byam in Runglo. It's an art form surrounded with the auro of mystique. Rung people have a distinctive style of weaving and designs used. But because of certain reasons, the art of carpet weaving could not flourish in the region."
  },
  {
    title: "Knitting Wool and Shawls",
    desc: "Some creative weavers use extra coloured woolen yarns to produce small geometrical motifs like dots, diamond, oval, squares etc. by inserting them with the ground warp and weft yarns along the borders and all over the base of the shawl. Shawls are constructed on hand looms with finer yarns using either twill or plain weave."
  },
  {
    title: "Blanket Making",
    desc: "The Chutka is a woven blanket with a shaggy pile, woven and used by Shauka tribes. It's woven differently in Garhwal and Kumaon. The chutka is very often woven on a floor and horizontal loom is operated on treadle."
  } 
];

$('.content__title').innerHTML = randomText[0].title;
$('.content__desc').innerHTML = randomText[0].desc;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 500)
}