const PANGRAM = [
    { sentence: '', expected: false },
    { sentence: 'abcdefghijklmnopqrstuvwxyz', expected: true },
    { sentence: 'the quick brown fox jumps over the lazy dog', expected: true },
    { sentence: 'a quick movement of the enemy will jeopardize five gunboats', expected: false },
    { sentence: 'five boxing wizards jump quickly at it', expected: false },
    { sentence: 'the_quick_brown_fox_jumps_over_the_lazy_dog', expected: true },
    { sentence: 'the 1 quick brown fox jumps over the 2 lazy dogs', expected: true },
    { sentence: '7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog', expected: false },
    { sentence: '"Five quacking Zephyrs jolt my wax bed."', expected: true },
    { sentence: 'the quick brown fox jumps over with lazy FX', expected: false },      
];

export default PANGRAM;