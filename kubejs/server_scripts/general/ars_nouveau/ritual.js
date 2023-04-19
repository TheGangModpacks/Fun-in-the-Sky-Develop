ServerEvents.recipes(event =>{
    event.recipes.summoningrituals.altar('minecraft:oak_sapling')
    .itemOutput("ars_nouveau:purple_archwood_sapling")
    .weather('rain')
    .sacrifice("ars_nouveau:whirlisprig")
    .blockBelow('botania:alchemy_catalyst')
    event.recipes.summoningrituals.altar('minecraft:spruce_sapling')
    .itemOutput("ars_nouveau:blue_archwood_sapling")
    .weather('rain')
    .sacrifice("ars_nouveau:whirlisprig")
    .blockBelow('botania:alchemy_catalyst')
    event.recipes.summoningrituals.altar('minecraft:birch_sapling')
    .itemOutput("ars_nouveau:green_archwood_sapling")
    .weather('rain')
    .sacrifice("ars_nouveau:whirlisprig")
    .blockBelow('botania:alchemy_catalyst')
    event.recipes.summoningrituals.altar('minecraft:dark_oak_sapling')
    .itemOutput("ars_nouveau:red_archwood_sapling")
    .weather('rain')
    .sacrifice("ars_nouveau:whirlisprig")
    .blockBelow('botania:alchemy_catalyst')
})
SummoningRituals.complete(event =>{
    event.level.addParticle('ars_nouveau:sparkle')
    event.level.addParticle('ars_nouveau:sparkle')
    event.level.addParticle('ars_nouveau:sparkle')
})