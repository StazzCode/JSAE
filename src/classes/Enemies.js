import Enemy from "./Enemy.js";

const arachnotronSprite = '';
const zombieSprite = '';
const revenantSprite = '';
const impSprite = '';
const cacodemonSprite = '';

class Zombie extends Enemy{
    constructor(x,y){
        super(x,y,200,200,'white',zombieSprite,false);
    }
}

class Arachnotron extends Enemy{
    constructor(x,y){
        super(x,y,200,200,'white',arachnotronSprite,true);
    }
}

class Revenant extends Enemy{
    constructor(x,y){
        super(x,y,200,200,'white',revenantSprite,true);
    }
}

class Imp extends Enemy{
    constructor(x,y){
        super(x,y,200,200,'white',impSprite,false);
    }
}

class Cacodemon extends Enemy{
    constructor(x,y){
        super(x,y,200,200,'white',cacodemonSprite,true);
    }
}

export {Zombie,Arachnotron,Revenant,Imp,Cacodemon};