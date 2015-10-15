// var player = prompt ("You are Bear, a brown 15lb wire-haired daschund with floppy ears, white paws and white tipped tail.  What do you want to do first? (Bark, Sniff, Play, or Nap?)").toUpperCase();

// switch(player) {
// var actions {
//   sniff []
//   }
//   bark
//   play
// //   nap
// function postToPage(text) {
//    var push = (document.getElementById('choice').innerHTM = "(text)"
//  }
// var postToPage(push){
//   var text ="";
//   (push) = document.getElementById('choice').innerHTML = + text;
// }
//FINALLY FIGURED OUT THIS VARIABLE TOWARDS END!
var gameOverJS = document.getElementById('gameOver');
var choice = document.getElementById('choice');
//
function bark(options){
  if (options === 1) {
      document.getElementById('choice').innerHTML = "You hear something and start  barking - mommy tells you to stop, do you? YES or NO?";
      document.getElementById('yesNoBark').style.display="block";
      document.getElementById('actionChoice').style.display="none";
    }
  if (options === 3) {
      document.getElementById('choice').innerHTML = "A piercing sound surrounds you.  Max is holding a small gray box and its pointed at me.  WHAT IS HAPPENING.. TO ... ME..?!!  You stop barking";
      document.getElementById('yesNoBark').style.display="none";
      document.getElementById('gameOver').style.display="block";
      document.getElementById('dazzled').style.display="block";
  }
  if (options === 2) {
    document.getElementById('choice').innerHTML = "You grumble a bit, mommy doesn't understand that you can hear a school on fire and the screaming children and just want to tell her.  You remember that humans are deaf.";
    document.getElementById('gameOver').style.display="block";
    document.getElementById('yesNoBark').style.display="none";
    document.getElementById('lassie').style.display="block";
  }
}
function sniff(options) {
  if (options === 1) {
    document.getElementById('choice').innerHTML = "You come upon the trail of a Badger!  You follow the smell to their den - do you go in?";
    document.getElementById('yesNoSniff').style.display="block";
    document.getElementById('actionChoice').style.display="none";
  }
  if (options === 2) {
    document.getElementById('choice').innerHTML ="You see a family of badgers of having a tea party do you join in? YES or NO?";
  }
  if (options == 2) {
      document.getElementById('choice').innerHTML ="You join them for a cup of tea, have a merry time, and then and then tear them to shreds.";
      document.getElementById('yesNoSniff').style.display="none";
      document.getElementById('gameOver').style.display="block";
      document.getElementById('badgerHunter').style.display="block";
  }
  if (options === 3) {
      document.getElementById('choice').innerHTML = "Ok - you decide to sniff some more and find some poop.  You eat it.";
      document.getElementById('yesNoSniff').style.display="none";
      document.getElementById('gameOver').style.display="block";
      document.getElementById('shitEater').style.display="block";
  }
}
function play(options) {
  if (options === 1) {
    document.getElementById('choice').innerHTML = "You prance through the flowery fields and chase a butterfly, you see your tail, do you chase it? YES or NO?"
    document.getElementById('yesNoPlay').style.display="block";
    document.getElementById('actionChoice').style.display="none";
  }
  if (options === 2) {
    document.getElementById('choice').innerHTML ="You go round and round chasing your tail.  The butterfly finds this amusing and turns into a princess granting you a wish.  You wish for a bone.  Today was a good day";
    document.getElementById('yesNoPlay').style.display="none";
    document.getElementById('gameOver').style.display="block";
    document.getElementById('playDay').style.display="block"
  }
  if (options === 3) {
    document.getElementById('choice').innerHTML ="You catch the butterfly and and you are now laying on it - do you eat it?";
    if (options === 2) {
      document.getElementById('choice').innerHTML ="You eat the butterfly - today was a good day!";
      document.getElementById('gameOver').style.display="block";
      document.getElementById('yesNoPlay').style.display="none";
      document.getElementById('bugEater').style.display="block";

    }
    if (options === 3) {
      document.getElementById('choice').innerHTML="The butterfly flies away and as it does you contemplate the meaning of life and all things, you have an epiphany and suddenly understand life, the universe and everything.  As you are reveling in this heightened state you smell poop and run towards it forgetting everything forever";
      document.getElementById('yesNoPlay').style.display="none";
      document.getElementById('gameOver').style.display="block";
      document.getElementById('enlightment').style.display="block";
    }
  }
}
function nap(options) {
  if (options === 1) {
    document.getElementById('choice').innerHTML ="You lay in a sunny patch roll onto your back and start napping. What do you dream about?";
    document.getElementById('dreamChoice').style.display="block";
    document.getElementById('actionChoice').style.display="none";
  }
  if (options === 4) {
    document.getElementById('choice').innerHTML ="You chase the frisbee everywhere jumping and leaping and tearing it apart! You wake up to belly scritches!";
    document.getElementById('dreamChoice').style.display="none";
    document.getElementById('gameOver').style.display="block";

  }
  if (options === 5) {
      var choice = document.getElementById('choice').innerHTML ="You gnaw on the yummy bone! You wake up to belly scritches!";
      document.getElementById('dreamChoice').style.display="none";
      document.getElementById('gameOver').style.display="block";
    }
  }
  // if (options === 5) {
  //   document.getElementById('choice').innerHTML ="You gnaw on the yummy bone! Frisbee time?";
  //   document.getElementById('dreamChoice').style.display="none";
  //   document.getElementById('yesNoNap').style.display="block";
  // }
  // if (options === 2) {
  //     document.getElementById('choice').innerHTML ="You chase the frisbee everywhere jumping and leaping and tearing it apart! Bone time?";
  //     else if (options === 2) {
  //       document.getElementById('choice').innerHTML ="You gnaw on the yummy bone! Frisbee time?";
  //     }
  //     else if (options == 3) {
  //       document.getElementById('yesNoNap').style.display="none";
  //       document.getElementById('gameOver').style.display="block";
  //       document.getElementById('sweetDreams').style.display="block";
  //     }
  // }
  // if (options === 3) {
  //     document.getElementById('choice').innerHTML ="";
  //     document.getElementById('choice').innerHTML="All your dreams come true!  You wake up to belly scratches.";
  //     document.getElementById('yesNoNap').style.display="none";
  //     document.getElementById('gameOver').style.display="block";
  //     document.getElementById('sweetDreams').style.display="block";
  // }



  // function sniff (){
  //   var hole = prompt ("You come upon the trail of a Badger!  You follow the smell to their den - do you go in? YES or NO?").toUpperCase();
  //   if (hole === "YES") {
  //     var teaParty = prompt("You see a family of badgers of having a tea party do you join in? YES or NO?").toUpperCase();
  //       if (teaParty === "YES") {
  //         alert("You join them for a cup of tea and then tear them to shreds");
  //       }
  //       else if (teaParty === "NO") {
  //         alert("You bark at the hole till its night time and Max comes and finds you!");
  //       }
  //     }
  //     if (hole === "NO") {
  //       alert("Ok - you decide to sniff some more and find some poop.  You eat it.");
  //     }
  //   }
      // break;
    // function bark(){
    //   document.getElementById("choice").innerHTML = "You hear something and start  barking - mommy tells you to stop, do you? YES or NO?";
    //     if (yapper === "NO") {
    //       var yapper2 = prompt ("Bark again and even louder? YES or NO?").toUpperCase();
    //       if (yapper2 === "YES") {
    //         alert("A piercing sound surrounds you.  Max is holding a small gray box and its pointed at me.  WHAT IS HAPPENING.. TO ... ME..?!!  You stop barking");
    //       }
    //       else if (yapper2 === "NO") {
    //           alert("You grumble a bit, mommy doesn't understand that you can hear a school on fire and the screaming children and just want to tell her.  You remember that humans are deaf.");
    //       }
    //     }
    //     if (yapper === 'YES') {
    //     alert("Who cares for barking anyway. You decide to PLAY instead");
    //     player = "PLAY";
    //   }
    // }
      // break;
//       case 'PLAY':
//       var butterfly = prompt ("You prance through the flowery fields and chase a butterfly, you see your tail, do you chase it? YES or NO?").toUpperCase();
// }
