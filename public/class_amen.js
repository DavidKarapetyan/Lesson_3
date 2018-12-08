class amen extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 8;


    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 2]
        ];
    }
    ChooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    mul() {
        var newGe = random(this.chooseCell(0));
        if (newGe && this.multiply >= 20) {
            var newX = newGe[0];
            var newY = newGe[1];
            u[newY][newX] = new gishat(newX, newY, 3);
        }
    }
    die() {

        u[this.y][this.x] = 0;

    }
    eat() {
        if (this.acted == false) {
            var ea = random(this.chooseCell(2));
            if (ea) {
                var newX = ea[0];
                var newY = ea[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 12) {
                    this.mul();
                    this.energy = 6
                }
                this.acted = true;

            }
            else {
                this.move();
            }
        }
    }
    move() {
        if (this.acted == false) {
            var newg = random(this.chooseCell(0));
            var newgi = random(this.chooseCell(1));
            if (newg) {
                var newX = newg[0];
                var newY = newg[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy -= 2;
                if (this.energy <= 0) {
                    this.die();

                }
                this.acted = true
            }
            else if (newgi) {
                var newX = newgi[0];
                var newY = newgi[1];
                u[newY][newX] = u[this.y][this.x];
                u[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.energy -= 2;
                if (this.energy <= 0) {
                    this.die();
                }
                this.acted = true;
            }
        }
    }
}