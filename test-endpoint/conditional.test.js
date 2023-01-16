const assert = require('chai').assert;

describe('My Function', () => {
    it('should return "Lulus" if score is above 50', () => {
        const score = 55;
        const result = checkScore(score);
        assert.equal(result, 'Lulus');
    });

    it('should return "Gagal" if score is below 50', () => {
        const score = 45;
        const result = checkScore(score);
        assert.equal(result, 'Gagal');
    });
});

function checkScore(score) {
    if (score > 50) {
        return 'Lulus';
    } else {
        return 'Gagal';
    }
}
