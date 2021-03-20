document.querySelector('button').addEventListener('click', zodiac)

function zodiac(){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var result = " Please enter a valid date. ";


  if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
      ){
          result = ("Aquarius");
        document.getElementById("characteristic").innerHTML="Aquarius: Surround yourself with who you want to be."
      }

      if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
         result = ("Pisces");
        document.getElementById("characteristic").innerHTML="Pisces: Strive for progress, not perfection.";
      }

     if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
         result = ("Aries");
       document.getElementById("characteristic").innerHTML="Aries: Do it for you, not for them."
     }

      if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
          result = ("Taurus");
         document.getElementById("characteristic").innerHTML="Taurus: Good things take time.";
      }

      if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
       ){
          result = ("Gemini");
        document.getElementById("characteristic").innerHTML="Gemini: Don't tell people your plans, show people your results.";
      }

      if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
          result = ("Cancer");
        document.getElementById("characteristic").innerHTML="Cancer: Strength grows in the moments when you think you can't go on but you keep goign anyway.";
      }

      if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
          result = ("Leo");
              document.getElementById("characteristic").innerHTML="Leo: The comeback is always stronger than the setback.";
      }

      if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
          result = ("Virgo");
          document.getElementById("characteristic").innerHTML="Virgo: It always seems impossible until it's done.";
      }

      if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
        result = ("Libra");
          document.getElementById("characteristic").innerHTML="Libra: The moment when you want to quit is the moment when you need to keep pushing.";
      }

      if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
         result = ("Scorpio");
          document.getElementById("characteristic").innerHTML="Scorpio: You have power over your mind - not outside events. Realize this, and you will find strength.";
      }

      if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
          result = ("Sagittarius");
          document.getElementById("characteristic").innerHTML="Sagittarius: Do what you have to do until you can do what you want to do.";
      }

    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
          result = ("Capricorn");
       document.getElementById("characteristic").innerHTML="Capricorn: Your mind will answer most questions if you learn to relax and wait for the answer.";

      }else if (birthmonth>12||birthday>31){
        alert("Please enter an accurate date ! ");


    } else if (birthmonth>12||birthday>31){
      alert("Please enter an accurate date ! ");
   }
document.getElementById("output").innerHTML= result;
}
