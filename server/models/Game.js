let allGames = [];
let gameId = 0;

export default class Game {
	constructor() {
		this.id = gameId++;
		this.players = [];
		allGames.push(this);
	}

	addPlayer(player){
		this.players.push(player);
	}

	getAllPlayersData(){
		const res = [];
		this.players.forEach(player => {
			res.push(player.getData());
		})
		return res;
	}

	findPlayer(id){
		this.players.forEach(player => {
			if(player.id === id) return player;
		})
	}
}
