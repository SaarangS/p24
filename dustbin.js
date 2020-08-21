class dustbin {
    constructor(x,y) {
        this.x = x;
		this.y = y;
		this.width = 200;
        this.height =100;
        
        this.base = Bodies.rectangle(this.x, this.y, this.dustbinWidth, {isStatic:true})
		this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.dustbinHeight, {isStatic:true})
        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.dustbinHeight, {isStatic:true})

        World.add(world, this.base)
        World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody)
    }
    display() {
        rect = (0, 0, this.width, this.height);
        pop()

        rect = (0, 0, this.width, this.height);
        pop()

        rect = (0, 0, this.width, this.height);
        pop()
    }
}