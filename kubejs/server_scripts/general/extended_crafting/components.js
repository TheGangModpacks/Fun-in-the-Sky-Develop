let ext = (id) => `extendedcrafting:${id}`;
ServerEvents.recipes(r =>{
    r.shaped(ext('frame'), ['aba', 'bcb', 'aba'], {a: 'emendatusenigmatica:black_iron_plate', b: ext('black_iron_ingot'), c: 'thermal:obsidian_glass'}).id('fits:shaped/ext/frame')

    r.shaped(ext('basic_component'), ['aac', 'bba', 'bba'], {a: 'emendatusenigmatica:silver_ingot', b: ext('black_iron_ingot'), c: 'thermal:rf_coil'}).id('fits:shaped/ext/basic_component')
    r.shaped(ext('basic_catalyst'), ['aba', 'bcb', 'aba'], {a: 'emendatusenigmatica:black_iron_plate', b: ext('basic_component'), c: 'pneumaticcraft:logistics_core'}).id('fits:shaped/ext/basic_catalyst')

    r.recipes.create.mixing([Fluid.of('thermal:glowstone', 40)], 'minecraft:glowstone_dust').id('fits:mixing/thermal/glowstone').heated()
    r.recipes.create.mixing([ext('luminessence')], [Fluid.of('thermal:glowstone', 340), 'redstone', 'gunpowder', '#forge:dusts/apatite']).heated().id('fits:mixing/ext/luminessence')
    r.shaped(ext('advanced_component'), ['aac', 'bba', 'bba'], {a: 'emendatusenigmatica:lumium_ingot', b: ext('black_iron_ingot'), c: ext('basic_component')}).id('fits:shaped/ext/advanced_component')
    r.shaped(ext('advanced_catalyst'), ['aba', 'bcb', 'aba'], {a: 'emendatusenigmatica:lumium_plate', b: ext('advanced_component'), c: ext('basic_catalyst')}).id('fits:shaped/ext/advanced_catalyst')

    r.shaped(ext('ender_component'), ['aac', 'bba', 'bba'], {a: ext('ender_ingot'), b: ext('black_iron_ingot'), c: ext('advanced_component')}).id('fits:shaped/ext/ender_component')
    r.shaped(ext('ender_catalyst'), ['aba', 'bcb', 'aba'], {a: 'minecraft:ender_eye', b: ext('ender_component'), c: ext('advanced_catalyst')}).id('fits:shaped/ext/ender_catalyst')
})