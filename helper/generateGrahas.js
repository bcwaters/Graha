/*
SU - Sun
MO - Moon
MA - Mars
ME - Mercury
JU - Jupiter
VE - Venus
SA - Saturn
RA - Rahu
KE - Ketu
The longer bold lines on the top of each day
divide the day into four six-hour periods.
0:00
ARI - Aries
TAU - Taurus
GEM - Gemini
CAN - Cancer
LEO - Leo
VIR - Virgo
LIB - Libra
SCO - Scorpio
SAG - Sagittarius
CAP - Capricorn
AQU - Aquarius
PIS - Pisces
*/

import Graha from "../Classes/Graha.js"

let surya = new Graha("Surya", "Sun", "", "SU");
let chandra = new Graha("Chandra", "Moon", "", "MO");
let budha = new Graha("budha", "Mercury", "", "ME");
let shukra = new Graha("Shukra", "Venus", "", "VE");
let mangala = new Graha("Mangala", "Mars", "", "MA");
let guru = new Graha("Guru", "Jupiter", "", "JU");
let shani = new Graha("Shani", "Saturn","", "SA");
let rahu = new Graha("Rahu", "NorthNodeMoon","", "RA");
let ketu = new Graha("Ketu", "SouthNodeMoon","", "KE");

let grahaList = [surya
                 ,chandra
                 ,budha
                 ,shukra
                 ,mangala
                 ,guru
                 ,shani
                 ,rahu
                 ,ketu];


function generate(){
        console.log(grahaList)
        return grahaList;
}

generate();