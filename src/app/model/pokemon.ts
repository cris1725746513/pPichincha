
export class Pokemon {
	id?: number;
	name?: string;
	image?: string;
	attack?:string;
	defense?: string;
	acciones?: string;


	public constructor(init?: Partial<Pokemon>) {
		Object.assign(this, init);
	}

}
