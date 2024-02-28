//PLANETARYEVENT object: contains information about a calculated notable alignment
//    - GRAHA[] - a list of influences for the given event
//    - boolean isConjunct
//    - String summary

/*
   GREEN BARS - • When the Moon is applying to a trine, sextile or conjunction with Jupiter or
                Venus, provided neither is debilitated or seriously combust
                • When the Moon is applying to a trine or sextile with the Sun.
   GREEN SHADING -• When an auspicious Pañcāṅga Yoga occurs at the same time as a green bar, thus

   BLUE BARS - • When the Moon is applying to a conjunction, square or opposition with Saturn,
               Mars or the Sun.
               • When the Moon is applying to a conjunction with Rāhu or Ketu, from the time it
               enters the same Nakṣatra as the respective node.
               • Tithi Gaṇḍānta.

   BLUE SHADING - Gaṇḍānta Moon.
                  • Debilitated Moon.
                  • The period from Kṛṣṇa Ekādaśī to Śukla Pratipad.
                  • The period three days before and after an eclipse.
                  • When an inauspicious Pañcāṅga Yoga occurs at the same time as a blue bar, thus
                  forming unfavorable confluence.

                  TRINE angle of 120 degrees (5 - 10 degree of allowance depending on planet)
                  SEXTILE an angle of 60 degrees
                  CONJUNCTION an angle of 0 degrees
                  Square 90 degrees


*/

class PlanetaryEvent{

    //blue bars
    function calculateMoonAndSaturn(){
        return true;
    }

    function calculateMoonAndMars(){
        return true;
    }

    function calculateMoonAndRahu(){
        return true;
    }

    function calculateMoonAndKetu(){
        return true;
    }

    //green bars
    function calculateMoonAndJupiter(){
        return true;
    }

    function calculateMoonAndVenus(){
        return true;
    }

    function calculateMoonAndSun(){
    //note this can be blue or green bar
        return true;
    }
    //green shading
    function calculatePanchangaYoga(){
        return true;
    }





}
