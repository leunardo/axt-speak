const translate = require('../core/translate');

describe("When text contains a keyword", () => {
    it("should translate 'verdade' to 'tru da tru'", () => {        
        expect(translate('verdade')).toBe('tru da tru');
    })

    it("should translate 'VERDADe' to 'tru da tru'", () => {        
        expect(translate('VERDADe')).toBe('tru da tru');
    })

    it("should translate 'tech' to 'tecjonson'", () => {        
        expect(translate('tech')).toBe('tecjonson');
    })

    it("should translate 'x' to 'xqdl'", () => {        
        expect(translate('x')).toBe('xqdl');
    })

    it("should translate 'X' to 'xqdl'", () => {        
        expect(translate('X')).toBe('xqdl');
    })

    it("should translate 'vem' to 'vpp'", () => {        
        expect(translate('vem')).toBe('vpp');
    })

    it("should translate 'VeM' to 'vpp'", () => {        
        expect(translate('VeM')).toBe('vpp');
    })

    it("should translate 'respeita' to 'rx o pai '-'", () => {        
        expect(translate('respeita')).toBe("rx o pai '-'");
    })

});