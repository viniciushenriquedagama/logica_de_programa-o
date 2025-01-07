
class hero {
    constructor(name, age, race, type) {
        this.name = name;
        this.age = age;
        this.race = race;
        this.type = type;

        this.force = 0;
        this.powerMagic = 5;
        this.hp = 100
        this.resistance = 0;
        this.stamina = 50;
        this.skill = '';

        switch (this.race) {
            case 'human':
                this.force += 70;
                this.resistance += 50;
                this.stamina += 50;

                break;

            case 'elf':
                this.force += 30;
                this.resistance += 30;
                this.stamina += 80;
                this.powerMagic += 100;
                break;

            case 'dwarf':
                this.force += 40;
                this.resistance += 80;
                this.stamina += 50
        }

        if (this.skill = 'assault') {
            this.stamina -= 35;
            this.powerMagic -= 5;
            this.force += 20;
        } else if (this.skill = 'ballmagic') {
            this.powerMagic -= 50;
            this.force += 70;
        } else if (this.skill = 'tackle') {
            this.force += 40;
            this.stamina -= 15
        } else if (this.skill = 'third eye') {
            this.force += 100
            this.stamina -= 100;
            this.powerMagic -= 100
        }


        switch (this.type) {
            case 'warrior':
                this.force += 100;
                this.resistance += 50;
                this.stamina += 50;
                this.skill = 'tackle';
                break;
            case 'wizand':
                this.force -= 10;
                this.resistance -= 10;
                this.powerMagic += 200;
                this.skill = 'ballmagic';
                break;
            case 'monk':
                this.force +=5;
                this.hp +=20;
                this.powerMagic +=100;
                break;
            case 'vampire':
                this.force +=50;
                this.hp +=100;
                this.powerMagic +=10;
                this.stamina += 50;


        }

    }
    ataque(){
        this.vida = this.force - enemyAdventure.hpboss;
         this.hp = enemyAdventure.ataque
    }
};
class enemy {
    constructor(name, age, race, type) {
        this.name = name;
        this.age = age;
        this.race = race;
        this.type = type;

        this.force = 0;
        this.powerMagic = 5;
        this.hpboss = 100
        this.resistance = 0;
        this.stamina = 50;
        this.skill = '';

        switch (this.race) {
            case 'human':
                this.force += 70;
                this.resistance += 50;
                this.stamina += 50;

                break;

            case 'elf':
                this.force += 30;
                this.resistance += 30;
                this.stamina += 80;
                this.powerMagic += 100;
                break;

            case 'dwarf':
                this.force += 40;
                this.resistance += 80;
                this.stamina += 50
        }

        if (this.skill = 'assault') {
            this.stamina -= 35;
            this.powerMagic -= 5;
            this.force += 20;
            this.hpboss +=20
        } else if (this.skill = 'ballmagic') {
            this.powerMagic -= 50;
            this.force += 70;
        } else if (this.skill = 'tackle') {
            this.force += 40;
            this.stamina -= 15
        } else if (this.skill = 'third eye') {
            this.force += 100
            this.stamina -= 100;
            this.powerMagic -= 100
        }

        switch (this.type) {
            case 'warrior':
                this.force += 100;
                this.resistance += 50;
                this.stamina += 50;
                this.skill = 'tackle';
                break;
            case 'wizand':
                this.force -= 10;
                this.resistance -= 10;
                this.powerMagic += 200;
                this.skill = 'ballmagic';
                break;
            case 'monk':
                this.force +=5;
                this.hpboss +=20;
                this.powerMagic +=100;
                break;
            case 'vampire':
                this.force +=50;
                this.hpboss +=100;
                this.powerMagic +=10;
                this.stamina += 50;
                
            }
        }
        ataque(){    
         this.vida = this.force - heroAdventure.hp;
         this.hpboss = heroAdventure.ataque
        }
    }

let heroAdventure = new hero('Seiya', 21 ,'human', 'warrior');
let enemyAdventure = new enemy('Dracula', 1000, 'desconhecida', 'vampire')
let lifeEnemy = enemyAdventure.hpboss

console.log(heroAdventure)
console.log(enemyAdventure)
console.log(`Seiya pegou a espada e usou ${heroAdventure.skill} no Dracula, Dracula esta com ${lifeEnemy},Dracula sugou seu sangue usando ${enemyAdventure.skill}`)