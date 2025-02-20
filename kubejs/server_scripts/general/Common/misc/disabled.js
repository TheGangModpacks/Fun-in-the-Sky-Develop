//priority: 1000
ServerEvents.tags('item', event => {
    //Tags for adding to items that will be disabled and hidden from REI.
    const tag = "fits:disabled";
    event.add(tag, "mekanismtools:steel_pickaxe")
    event.add(tag, "mekanismtools:steel_axe")
    event.add(tag, "mekanismtools:steel_hoe")
    event.add(tag, "mekanismtools:steel_shovel")
    event.add(tag, "mekanismtools:steel_sword")
    event.add(tag, "mekanismtools:steel_paxel")
    event.add(tag, "immersiveengineering:pickaxe_steel")
    event.add(tag, "immersiveengineering:axe_steel")
    event.add(tag, "immersiveengineering:hoe_steel")
    event.add(tag, "immersiveengineering:shovel_steel")
    event.add(tag, "immersiveengineering:sword_steel")
    event.add(tag, '/^powah:.*_starter/')
    event.add(tag, '/^powah:.*solar/')
    event.add(tag, '/^exnihilosequentia:.*platinum/')
    event.add(tag, "createaddition:connector")
    event.add(tag, "createaddition:gold_spool")
    event.add(tag, "quark:sturdy_stone")
    event.add(tag, "pickletweaks:iron_paxel")
    event.add(tag, "mekanismtools:iron_paxel")
    event.add(tag, "mekanismtools:steel_paxel")
    event.add(tag, "ad_astra:hammer")
    event.add(tag, "emendatusenigmatica:enigmatic_hammer")
    event.add(tag, "cobblefordays:tier_1")
    event.add(tag, "quark:deepslate_furnace")
    event.add(tag, "quark:blackstone_furnace")
    event.add(tag, 'create:red_sand_paper')
    event.add(tag, 'createaddition:diamond_grit_sandpaper')
})
ServerEvents.recipes(event =>{
    //Recipes that are broken, which can likely be fixed in the future.
    event.remove({ type: 'exnihilosequentia:heat'})
    event.remove({ output: '#fits:disabled'})
    console.log('Excecute Order 66');
})