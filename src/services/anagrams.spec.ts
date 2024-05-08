import { anagrams } from './anagrams'

describe('Anagrams', () => {
  it('returns anagrams for a given word', async () => {
    const results = await anagrams('crepitus')

    expect(["cuprites","pictures","piecrust"].every((word) => results.includes(word))).toBe(true)
    expect(["foo"].every((word) => results.includes(word))).toBe(false)
  })
})
