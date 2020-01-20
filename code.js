enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.playMelody("C5 B C5 B F E D C ", 400)
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . .
    . . . . f f e e e e f 2 f . . .
    . . . f f e e e e f 2 2 2 f . .
    . . . f e e e f f e e e e f . .
    . . . f f f f e e 2 2 2 2 e f .
    . . . f e 2 2 2 f f f f e 2 f .
    . . f f f f f f f e e e f f f .
    . . f f e 4 4 e b f 4 4 e e f .
    . . f e e 4 d 4 1 f d d e f . .
    . . . f e e e 4 d d d d f . . .
    . . . . f f e e 4 4 4 e f . . .
    . . . . . 4 d d e 2 2 2 f . . .
    . . . . . e d d e 2 2 2 f . . .
    . . . . . f e e f 4 5 5 f . . .
    . . . . . . f f f f f f . . . .
    . . . . . . . f f f . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e1111111111110e111111111111110e0e0e0e0e1111111111111111110e0e0e0e11110e110e110e0e0e110e1111110e0e0e0e0e0e0e110e1111110e1111110e0e111111110e110e0e0e110e1111110e0e0e110e11111111110e110e1111110e0e11110e0e0e0e0e0e0e111111110e0e0e110e1111111111110e110e110e0e0e0e1111110e0e110e110e1111110e11190e110e110e11110e11111111110e110e0e110e110e110e0e0e0e110e0e11110e0e110e110e110e11110e0e0e11110e0e0e110e0e0e110e110e0e1111110e0e0e0e11111111111111111111111111110e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 . . . . . . 2 . . . . . . . 2
                2 2 2 2 . . . . . . . . . 2 2 2
                2 . . 2 . 2 . 2 2 2 . 2 . . . 2
                2 2 2 2 2 2 . 2 . . . 2 . . . 2
                2 . . . . 2 . 2 2 2 . 2 . . . 2
                2 2 . 2 . . . . . 2 . 2 . . . 2
                2 . . 2 2 2 2 2 2 2 . . . . 2 2
                2 . 2 . . . . . . 2 . 2 . 2 2 2
                2 . . . 2 2 . 2 . 2 . . . 2 . .
                2 . 2 . 2 . . 2 . . . . . 2 . 2
                2 . 2 . 2 . 2 2 2 2 . 2 2 . . 2
                2 . 2 . 2 . 2 . . 2 2 2 . . 2 2
                2 . 2 2 2 . 2 . 2 2 . . . 2 2 2
                2 . . . . . . . . . . . . . . 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.hazardLava1,sprites.dungeon.hazardWater,sprites.dungeon.stairSouth,sprites.dungeon.hazardLava0,sprites.builtin.field0,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTeal,sprites.dungeon.buttonTealDepressed,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.builtin.brick,sprites.dungeon.collectibleInsignia,sprites.builtin.coral1,sprites.castle.tileGrass2,sprites.builtin.forestTiles21,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles26,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundEast,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
scene.cameraFollowSprite(mySprite)
info.startCountdown(45)
game.showLongText("Find the chest hidden in the maze to win!", DialogLayout.Bottom)
