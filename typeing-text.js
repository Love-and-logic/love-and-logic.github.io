var thingsToType = [
  'Hello.',
  'Hallo.',
  'Kamusta?',
  'Iaorana!',
  'Kia Ora.',
  'Aloha!',
  'Bonjour.',
  'Salve.',
  'Zdravo.',
  'Priviet.',
  'Salam',
  'Marhaba!'
]

var domNode = document.querySelector('.typing-text');
var pauseDelay = 500;

var thingToTypeIndex = 0;
var currentValue = '';
var deleting = false;

function update(){
  var thingToType = thingsToType[thingToTypeIndex];
  if (!deleting && (currentValue.length === thingToType.length)){
    deleting = true;
    setTimeout(update, pauseDelay);
    return;
  }
  if (deleting && (currentValue === "")){
    deleting = false;
    thingToTypeIndex++
    if (thingToTypeIndex >= thingsToType.length){
      thingToTypeIndex = 0;
    }
    setTimeout(update, pauseDelay);
    return;
  }
  if (deleting){
    currentValue = currentValue.slice(0,-1)
    setTimeout(update, getRandomDeletingDelay());
  }else{
    currentValue = thingToType.slice(0,currentValue.length+1)
    setTimeout(update, getRandomTypingDelay());
  }
  domNode.innerText = currentValue;
}

function getRandomDeletingDelay() {
  var min = 50, max = 100;
  return Math.random() * (max - min) + min;
}

function getRandomTypingDelay() {
  var min = 50, max = 400;
  return Math.random() * (max - min) + min;
}

update()
