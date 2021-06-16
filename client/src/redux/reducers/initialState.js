import { DiceTypes, ScoreTypes } from "../ENUMS";
const initialState = {};

export const userSettings = {
    user: false,
    username: "",
};

export const diceSettings = {
    diceArray: [
        {
            value: 3,
            hold: false,
            type: DiceTypes.DIE_ONE,
            place: 0,
        },
        {
            value: 3,
            hold: false,
            type: DiceTypes.DIE_TWO,
            place: 1,
        },
        {
            value: 3,
            hold: false,
            type: DiceTypes.DIE_THREE,
            place: 2,
        },
        {
            value: 3,
            hold: false,
            type: DiceTypes.DIE_FOUR,
            place: 3,
        },
        {
            value: 3,
            hold: false,
            type: DiceTypes.DIE_FIVE,
            place: 4,
        },
    ],
    roundCount: 13,
    rollCount: 3,
    rolling: false,
    hasYahtzee: false,
    savedYahtzee: false,
};

export const gameSettings = {
    showSave: false,
    scoring: [
        {
            x: 0,
            order: 0,
            type: "upper",
            score: 0,
            saved: false,
            place: 0,
            click: true,
            value: 1,
            name: "Ones",
            testingScore: false,
            scoreSystem: "number",
            scoreType: ScoreTypes.ONES,
        },
        {
            x: 0,
            order: 2,
            type: "upper",
            score: 0,
            saved: false,
            place: 1,
            click: true,
            value: 2,
            name: "Twos",
            testingScore: false,
            scoreSystem: "number",
            scoreType: ScoreTypes.TWOS,
        },
        {
            x: 0,
            order: 4,
            type: "upper",
            score: 0,
            saved: false,
            place: 2,
            click: true,
            value: 3,
            name: "Threes",
            testingScore: false,
            scoreSystem: "number",
            scoreType: ScoreTypes.THREES,
        },
        {
            x: 0,
            order: 6,
            type: "upper",
            score: 0,
            saved: false,
            place: 3,
            click: true,
            value: 4,
            name: "Fours",
            testingScore: false,
            scoreSystem: "number",
            scoreType: ScoreTypes.FOURS,
        },
        {
            x: 0,
            order: 8,
            type: "upper",
            score: 0,
            saved: false,
            place: 4,
            click: true,
            value: 5,
            name: "Fives",
            testingScore: false,
            scoreSystem: "number",
            scoreType: ScoreTypes.FIVES,
        },
        {
            x: 0,
            order: 10,
            type: "upper",
            score: 0,
            saved: false,
            place: 5,
            click: true,
            value: 6,
            name: "Sixes",
            testingScore: false,
            scoreSystem: "number",
            scoreType: ScoreTypes.SIXES,
        },
        {
            x: 0,
            order: 12,
            type: "total",
            score: 0,
            saved: false,
            place: 6,
            click: false,
            value: "upperSubTotal",
            name: "Upper Sub Total",
            testingScore: false,
            scoreSystem: "totalPart",
            scoreType: ScoreTypes.UPPER_SUB_TOTAL,
        },
        {
            x: 0,
            order: 14,
            type: "bonus",
            score: 0,
            saved: false,
            place: 7,
            click: false,
            value: "upperBonus",
            name: "Bonus",
            testingScore: false,
            scoreSystem: "35",
            scoreType: ScoreTypes.UPPER_BONUS,
        },
        {
            x: 0,
            order: 16,
            type: "total",
            score: 0,
            saved: false,
            place: 8,
            click: false,
            value: "upperTotal",
            name: "Upper Total",
            testingScore: false,
            scoreSystem: "totalPart",
            scoreType: ScoreTypes.UPPER_TOTAL,
        },
        {
            x: 0,
            order: 1,
            type: "lower",
            score: 0,
            saved: false,
            place: 9,
            click: true,
            value: "threeKind",
            name: "Three of a kind",
            testingScore: false,
            scoreSystem: "kind",
            scoreType: ScoreTypes.THREE_OF_KIND,
        },
        {
            x: 0,
            order: 3,
            type: "lower",
            score: 0,
            saved: false,
            place: 10,
            click: true,
            value: "fourKind",
            name: "Four of a kind",
            testingScore: false,
            scoreSystem: "kind",
            scoreType: ScoreTypes.FOUR_OF_KIND,
        },
        {
            x: 0,
            order: 5,
            type: "lower",
            score: 0,
            saved: false,
            place: 11,
            click: true,
            value: "fullHouse",
            name: "Full House",
            testingScore: false,
            scoreSystem: "fullHouse",
            scoreType: ScoreTypes.FULL_HOUSE,
        },
        {
            x: 0,
            order: 7,
            type: "lower",
            score: 0,
            saved: false,
            place: 12,
            click: true,
            value: 30,
            name: "Small Straight",
            testingScore: false,
            scoreSystem: "straight",
            scoreType: ScoreTypes.SMALL_STRAIGHT,
        },
        {
            x: 0,
            order: 9,
            type: "lower",
            score: 0,
            saved: false,
            place: 13,
            click: true,
            value: 40,
            name: "Large Straight",
            testingScore: false,
            scoreSystem: "straight",
            scoreType: ScoreTypes.LARGE_STRAIGHT,
        },
        {
            x: 0,
            order: 11,
            type: "lower",
            score: 0,
            saved: false,
            place: 14,
            click: true,
            value: 50,
            name: "Yahtzee",
            testingScore: false,
            scoreSystem: "yahtzee",
            scoreType: ScoreTypes.YAHTZEE,
        },
        {
            x: 0,
            order: 13,
            type: "lower",
            score: 0,
            saved: false,
            place: 15,
            click: true,
            value: "chance",
            name: "Chance",
            testingScore: false,
            scoreSystem: "total",
            scoreType: ScoreTypes.CHANCE,
        },
        {
            x: 0,
            order: 15,
            type: "lower",
            score: 0,
            saved: false,
            place: 16,
            click: true,
            value: "bonusYahtzee",
            name: "Bonus Yahtzee",
            testingScore: false,
            scoreSystem: "bonusYahtzee",
            scoreType: ScoreTypes.BONUS_YAHTZEE,
        },
        {
            x: 0,
            order: 17,
            type: "total",
            score: 0,
            saved: false,
            place: 17,
            click: false,
            value: "lowerTotal",
            name: "Lower Total",
            testingScore: false,
            scoreSystem: "totalPart",
            scoreType: ScoreTypes.LOWER_TOTAL,
        },
        {
            x: 0,
            order: 18,
            type: "total",
            score: 0,
            saved: false,
            place: 18,
            click: false,
            value: "total",
            name: "Total Score",
            testingScore: false,
            scoreSystem: "totalAll",
            scoreType: ScoreTypes.TOTAL,
        },
    ],
    bonusYahtzee: false,
    firstYahtzee: false,
    savedYahtzee: false,
    previousPlace: null,
    ordered: [],
    classes: [
        "dice show-blank",
        "dice show-front",
        "dice show-back",
        "dice show-top",
        "dice show-bottom",
        "dice show-left",
        "dice show-right",
    ],
    rules: false,
    newGame: true,
    load: true,
    endGame: false,
};

export default initialState;
