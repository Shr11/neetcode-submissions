class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const alpha: number[] = new Array(26).fill(0);

        for (const char of s) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alpha[index] += 1;
        }

        for (const char of t) {
            const index  = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alpha[index] -= 1;
        }

        return alpha.every(x => x === 0 )
    }
}
