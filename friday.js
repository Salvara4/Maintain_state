


var currentState = {
  availableGreetings: [
                        {name: 'Jim',
                        image: './james.gif'
                        },
                        {name: 'Jaime',
                        image: 'https://s-media-cache-ak0.pinimg.com/originals/f2/48/dc/f248dc179634535846362b551bb30111.gif'
                        },
                        {name: 'Axel',
                        image: 'http://data.whicdn.com/images/26153365/large.jpg'
                        }
                      ],
  greetingIndex: 0
}

var buttonState = {
  availableGreetings: [ "Jaime" , "Axel" , "Jim" ],
  greetingIndex: 0
}

  var element = document.getElementById('greeting')
  var changeName = document.getElementById('greetB')
  // element.innerHTML = "Hello " + currentState.availableGreetings[currentState.greetingIndex].name;
  //   console.log(currentState.availableGreetings[currentState.greetingIndex].name);
  // changeName.innerHTML = "Greet " + currentState.availableGreetings [currentState.greetingIndex];

function greetings() {
currentState.greetingIndex +=1
buttonState.greetingIndex +=1


  // var cGreeting = element.innerHTML
  if ( currentState.greetingIndex == currentState.availableGreetings.length) {
    currentState.greetingIndex = 0
  }
  var element = document.getElementById('greeting');
  element.innerHTML = "Hello " +currentState.availableGreetings[currentState.greetingIndex].name;
  element.innerHTML = "Hello " +currentState.availableGreetings[currentState.greetingIndex].image;
  if ( buttonState.greetingIndex == buttonState.availableGreetings.length) {
    buttonState.greetingIndex = 0
  }
  var changeName = document.getElementById('greetB');
  changeName.innerHTML = "Greet " +buttonState.availableGreetings[buttonState.greetingIndex];

}

greetings()

// button index for button text

// (buttonState.greetingIndex ===3) {
//   buttonState.greetingIndex = 0
// }

// changeName.innerHTML= "Greet " + buttonState.availableGreetings
// [buttonState.greetingIndex];
// buttonState.greetingIndex +=1
