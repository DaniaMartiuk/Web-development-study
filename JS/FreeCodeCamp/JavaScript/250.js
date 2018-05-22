function defineSuit(card) {
    return {
        '♣' : 'clubs',
        '♦' : 'diamonds',
        '♥' : 'hearts',
        '♠' : 'spades'
    }[card.substr(-1)]
}