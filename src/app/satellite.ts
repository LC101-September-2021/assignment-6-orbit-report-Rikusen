export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
    shouldShowWarning(): boolean {
		let item = this.type.toLowerCase();
		if (item === "space debris"){
			return true;
		} else {
			return false;
  		}
	}
}

// TODO 3a: fix isSpaceDebris check
