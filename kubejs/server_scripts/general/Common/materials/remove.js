//priority: 1000
ServerEvents.recipes(event =>{
	event.remove({ id: 'immersiveengineering:smelting/ingot_electrum_from_dust' })
	event.remove({ id: 'thermal:smelting/electrum_ingot_from_dust_smelting' })
	event.remove({ id: 'immersiveengineering:smelting/ingot_electrum_from_dust_from_blasting' })
	event.remove({ id: 'thermal:smelting/electrum_ingot_from_dust_blasting' })
	event.remove({ id: 'thermal:smelting/bronze_ingot_from_dust_smelting' })
	event.remove({ id: 'mekanism:processing/bronze/ingot/from_dust_smelting' })
	event.remove({ id: 'thermal:smelting/bronze_ingot_from_dust_blasting' })
	event.remove({ id: 'mekanism:processing/bronze/ingot/from_dust_blasting' })
	event.remove({ id: 'thermal:machines/smelter/smelter_bronze_dust' })
	event.remove({ id: 'thermal:furnace_1021281172' })
	event.remove({ id: 'thermal:furnace_654290544' })
	event.remove({ id: 'thermal:smelting/lumium_ingot_from_dust_smelting' })
	event.remove({ id: 'thermal:smelting/lumium_ingot_from_dust_blasting' })
	event.remove({ id: 'thermal:furnace_1814036391' })
	event.remove({ id: 'thermal:smelting/invar_ingot_from_dust_smelting' })
	event.remove({ id: 'thermal:smelting/invar_ingot_from_dust_blasting' })
	event.remove({ id: 'thermal:furnace_2092437645' })
	event.remove({ id: 'thermal:machines/smelter/smelter_invar_dust' })
	event.remove({ id: 'thermal:smelting/signalum_ingot_from_dust_smelting' })
	event.remove({ id: 'thermal:smelting/signalum_ingot_from_dust_blasting' })
	event.remove({ id: 'thermal:furnace_2069958301' })
	event.remove({ id: 'thermal:machines/smelter/smelter_signalum_dust' })
	event.remove({ id: 'thermal:smelting/enderium_ingot_from_dust_smelting' })
	event.remove({ id: 'thermal:smelting/enderium_ingot_from_dust_blasting' })
	event.remove({ id: 'thermal:furnace_882765219' })
	event.remove({ id: 'thermal:machines/smelter/smelter_enderium_dust' })
	event.remove({ id: 'thermal:furnace_1441768687' })
	event.remove({ id: 'thermal:smelting/constantan_ingot_from_dust_smelting' })
	event.remove({ id: 'immersiveengineering:smelting/ingot_constantan_from_dust_from_blasting' })
	event.remove({ id: 'thermal:furnace_17379650' })
	event.remove({ id: 'thermal:machines/smelter/smelter_constantan_dust' })
	event.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
	event.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' })
	event.remove({ id: 'immersiveengineering:smelting/ingot_hop_graphite_from_blasting' })
	event.remove({ id: 'immersiveengineering:smelting/ingot_hop_graphite' })
	event.remove({ output: '#forge:gears', type: "minecraft:crafting_shaped"})
	event.remove({ id: 'thermal:fire_charge/constantan_ingot_2'})
	event.remove({ id: 'thermal:fire_charge/enderium_ingot_2'})
	event.remove({ id: 'thermal:fire_charge/electrum_ingot_2'})
	event.remove({ id: 'thermal:fire_charge/lumium_ingot_4'})
	event.remove({ id: 'thermal:fire_charge/bronze_ingot_4'})
	event.remove({ id: 'thermal:fire_charge/signalum_ingot_4'})
	event.remove({ id: 'thermal:fire_charge/invar_ingot_3'})
	event.remove({ id: 'immersiveengineering:crafting/electrum_mix'})
	event.remove({ id: 'immersiveengineering:crafting/constantan_mix'})
	event.remove({ id: 'thermal:bronze_dust_4'})
	event.remove({ id: 'thermal:invar_dust_3'})
	event.remove({ id: 'thermal:invar_dust_3'})
    event.remove({ id: 'thermal:lumium_dust_4'})
    event.remove({ id: 'thermal:signalum_dust_4'})
    event.remove({ id: 'thermal:enderium_dust_2'})
    event.remove({ id: 'thermal:constantan_dust_2'})
})