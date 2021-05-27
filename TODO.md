### What to do next time on Yahtzee React...

We are going to want to set up a dice object for each die in the game, we are also going to want to have
them saved through redux

something like:

dice1: {
    value: 0,
    hold: false,
    id: "dice1"
} ...

and then the roll dice action will check each dice for their hold value before setting it to a random number