let tamagotchi = {
    name: 'qqq',
    meal: 1,
    energy: 5,
    mood: 1,
};

tamagotchi.getStatus = function getStatus(){ // полное получение статуса и состояния
    arrayValues = Object.values (this);
    if (arrayValues[1] <= 0 || arrayValues[2] <= 0 || arrayValues[3] <= 0 ){
        console.log(`${arrayValues[0]} умер. Oh my God, they killed Kenny! `);
        return;
    }
    console.log(`Имя: ${arrayValues[0]}`);
    if (arrayValues[1] < 3) {
    console.log(`Еда: Я голоден(${arrayValues[1]})`);
    } else {console.log(`Еда: Я не голоден(${arrayValues[1]})`);}
    if (arrayValues[2] < 3) {
    console.log(`Энергия: Я хочу спать(${arrayValues[2]})`);
    } else {console.log(`Энергия: Я не хочу спать(${arrayValues[2]})`);}
    if (arrayValues[3] < 3) {
    console.log(`Настроение: Мне скучно(${arrayValues[3]})`);
    } else {console.log(`Настроение: Мне весело(${arrayValues[3]})`);}
}

// tamagotchi.getStatus = function getStatus(){  //упрощенное получение статуса
//     one = Object.entries(this);
//     for (let i = 0; i < 4; i++ ) {
//     console.log(one[i]);}
//   }

tamagotchi.getStatus(); // проверка

tamagotchi.setName = function setName(newName){  // изменение имени
this.name = newName;
}

tamagotchi.setName('Kenny'); //
tamagotchi.getStatus();     // проверка

tamagotchi.eatOne = function eatOne(){   // кормление
    if(this.meal < 5){this.meal++;
    this.mood--;}
    }

tamagotchi.sleep = function sleep(){     // сон
    if(this.energy < 5){this.energy++;
    this.meal--;}
    }

tamagotchi.play = function play(){      //  игра
    if(this.mood < 5){this.mood++;
    this.energy--;}
    }

    
tamagotchi.getStatus();