// Created by: ????
// Created on: ???? 2019
// This file is the "????" game
//   for CircuitPython

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
    music.playMelody("C5 - C5 - - - - - ", 400)
    game.over(true)
})
info.onCountdownEnd(function () {
    info.changeScoreBy(-5)
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
            hex`100010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e1817171717171a171717171717170e0e1a1a1a1717171a17171717171a1a0e0e171b1a171a171a1717171a1717170e0e1a1a1a1a1a171a1717171a1717170e0e171717171a171a1a1a1a1a1717170e0e1a171a171717171717171a1717170e0e17171a1a1a1a1a1a1a171717171a0e0e171a1b17171717171a171a171a1a0e0e1717171a1a171a171a1717171a17190e171a171a17171a17171717171a170e0e171a171a171a1a1a1a171a1a17170e0e171a171a171a17171a1a1a17171a0e0e171a1a1a1b1a171a1a1717171a1a0e0e17171b1b1b1b1b1717171b1b1b1b0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`,
            img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 . . . . . . 2 . . . . . . . 2
                2 2 2 2 . . . 2 . . . . . 2 2 2
                2 . . 2 . 2 . 2 . . . 2 . . . 2
                2 2 2 2 2 2 . 2 . . . 2 . . . 2
                2 . . . . 2 . 2 2 2 2 2 . . . 2
                2 2 . 2 . . . . . . . 2 . . . 2
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
            [myTiles.tile0,sprites.dungeon.darkGroundCenter,sprites.dungeon.hazardLava1,sprites.dungeon.hazardWater,sprites.dungeon.stairSouth,sprites.dungeon.hazardLava0,sprites.builtin.field0,sprites.dungeon.buttonOrangeDepressed,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTeal,sprites.dungeon.buttonTealDepressed,sprites.dungeon.stairNorth,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.builtin.brick,sprites.dungeon.collectibleInsignia,sprites.builtin.coral1,sprites.castle.tileGrass2,sprites.builtin.forestTiles21,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles26,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundEast,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundEast)
scene.cameraFollowSprite(mySprite)
info.changeScoreBy(11)
info.changeScoreBy(-1)
info.startCountdown(15)
