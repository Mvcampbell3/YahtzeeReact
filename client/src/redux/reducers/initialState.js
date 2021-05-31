import { DiceTypes } from "../ENUMS";
const initialState = {};

export const userSettings = {
    user: false,
    username: "",
};

export const diceSettings = {
    diceArray: [
        {
            value: 0,
            hold: false,
            type: DiceTypes.DIE_ONE,
            place: 0,
        },
        {
            value: 0,
            hold: false,
            type: DiceTypes.DIE_TWO,
            place: 1,
        },
        {
            value: 0,
            hold: false,
            type: DiceTypes.DIE_THREE,
            place: 2,
        },
        {
            value: 0,
            hold: false,
            type: DiceTypes.DIE_FOUR,
            place: 3,
        },
        {
            value: 0,
            hold: false,
            type: DiceTypes.DIE_FIVE,
            place: 4,
        },
    ],
    roundCount: 13,
    rollCount: 3,
    rolling: false,
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
            scoreSystem: "number",
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
            scoreSystem: "number",
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
            scoreSystem: "number",
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
            scoreSystem: "number",
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
            scoreSystem: "number",
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
            scoreSystem: "number",
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
            scoreSystem: "totalPart",
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
            scoreSystem: "35",
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
            scoreSystem: "totalPart",
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
            scoreSystem: "kind",
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
            scoreSystem: "kind",
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
            scoreSystem: "fullHouse",
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
            scoreSystem: "straight",
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
            scoreSystem: "straight",
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
            scoreSystem: "yahtzee",
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
            scoreSystem: "total",
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
            scoreSystem: "bonusYahtzee",
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
            scoreSystem: "totalPart",
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
            scoreSystem: "totalAll",
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
