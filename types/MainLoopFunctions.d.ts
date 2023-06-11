import { RGBot } from 'rg-bot';
import { Entity } from 'prismarine-entity';
import RGCTFUtils from 'rg-ctf-utils';
export declare function handleLowHealth(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handleAttackFlagCarrier(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handleAttackNearbyOpponent(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handleScoringFlag(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handleCollectingFlag(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handlePlacingBlocks(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handleLootingItems(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
export declare function handleBotIdlePosition(bot: RGBot, rgctfUtils: RGCTFUtils, opponents: Entity[], teamMates: Entity[]): Promise<boolean>;
