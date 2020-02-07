import romanConverter from './roman-converter'

describe('romanConverter',()=>{
    it('should convert numbers to roman neurmal',()=>{
        expect(romanConverter(1)).toBe('I')
        expect(romanConverter(4)).toBe('IV')
        expect(romanConverter(5)).toBe('V')
        expect(romanConverter(9)).toBe('IX')
        expect(romanConverter(10)).toBe('X')
        expect(romanConverter(40)).toBe('XL')
        expect(romanConverter(50)).toBe('L')
        expect(romanConverter(90)).toBe('XC')
        expect(romanConverter(100)).toBe('C')
        expect(romanConverter(400)).toBe('CD')
        expect(romanConverter(500)).toBe('D')
        expect(romanConverter(900)).toBe('CM')
        expect(romanConverter(1000)).toBe('M')
    })
})