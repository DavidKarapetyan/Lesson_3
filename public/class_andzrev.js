class andzrev extends LivingCreature{
    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    die() {
        u[this.y][this.x] = 0;
    }
    ChooseCell(num) {
        this.getNewCoordinates();
        return super.chooseCell(num);
    }
    createGrass() {
        var datarkner = this.chooseCell(0);
        for (var i in datarkner) {
            var x = datarkner[i][0];
            var y = datarkner[i][1];
            u[y][x] = new Grass(x, y, 1);
        }
        this.die();
    }
}