//GRAHA is an object representing a planet or influence which is taken into account
//in vedic astrology

class Graha{

    constructor(_name, _englishName, _summary, _symbol){
        this.name = _name;
        this.summary = _summary
        this.englishName = _englishName
        this.symbol = _symbol
    }

}

export default Graha