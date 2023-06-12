import {RGBot} from 'rg-bot'
import RGCTFUtils, {CTFEvent} from 'rg-ctf-utils'
import {Vec3} from 'vec3'
import {Item} from 'prismarine-item'
import {Entity} from 'prismarine-entity'

const armorManager = require('mineflayer-armor-manager')


/**
 * This capture the flag bot covers most possibilities you could have in a main loop bot.
 * Macro level strategies and tuning are up to you.
 */
export function configureBot(bot: RGBot) {

    // Disable rg-bot debug logging.  You can enable this to see more details about rg-bot api calls
    bot.setDebug(false)

    // Allow parkour so that our bots pathfinding will jump short walls and optimize their path for sprint jumps.
    bot.allowParkour(true)

    // We recommend disabling this on as you can't dig the CTF map.  Turning this on can lead pathfinding to get stuck.
    bot.allowDigWhilePathing(false)

    // Load the armor-manager plugin (https://github.com/PrismarineJS/MineflayerArmorManager)
    bot.mineflayer().loadPlugin(armorManager)

    bot.chat("I'm ready to conquer this dungeon... I think")

}

export async function runTurn(bot: RGBot) {
    try {
        // Find the closest diamond and approach it
        const ids = [bot.mineflayer().registry.blocksByName["diamond_block"].id]
        const diamondBlock = bot.mineflayer().findBlocks({ matching: ids, maxDistance: 32 })[0]
        bot.chat(JSON.stringify(diamondBlock))
        await bot.approachBlock(diamondBlock)
        await bot.waitForMilliseconds(4000)
    } catch(exception) {
        console.warn(exception)
    }
}