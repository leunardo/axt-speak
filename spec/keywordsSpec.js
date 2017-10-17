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

    it("should translate 'que' to 'eoq", () => {
        expect(translate('que')).toBe("eoq");
    })

    it("should translate 'porra' to 'hiiieiieihhieihieieieeieejehiehehieeheie", () => {
        expect(translate('porra')).toBe("hiiieiieihhieihieieieeieejehiehehieeheie");
    })

    it("should translate 'sim' to 'ss fon trab", () => {
        expect(translate('sim')).toBe("ss fon trab");
    })

    it("should translate 'ss' to 'ss fon trab", () => {
        expect(translate('ss')).toBe("ss fon trab");
    })

    it("should translate 'não' to 'nn todeboa", () => {
        expect(translate('não')).toBe("nn todeboa");
    })

    it("should translate 'nao' to 'nn todeboa", () => {
        expect(translate('nao')).toBe("nn todeboa");
    })

    it("should translate 'nn' to 'nn todeboa", () => {
        expect(translate('nn')).toBe("nn todeboa");
    })

    it("should translate 'chupa e engole' to 'chupingole", () => {
        expect(translate('chupa e engole')).toBe("chupingole");
    })

    it("should translate 'cu' to 'cudegualipito", () => {
        expect(translate('cu')).toBe("cudegualipito");
    })

    it("should translate 'eita' to 'meeeeee", () => {
      expect(translate('eita')).toBe("meeeeee");
    })

});
