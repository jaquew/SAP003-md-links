const mdLinks = require('../index.js')

describe('mdLinks', () => {
  it('Is function', () => {
    expect(typeof mdLinks).toBe('function')
  })
  it('File path error', () => {
    expect(mdLinks()).rejects.toEqual('File path missing')
  })

  test('returns array of links and titles', () => {
    return mdLinks('lib/__tests__/teste.md').then((result) => {
      expect(result).toEqual([ { href: 'https://www.google.com', texto: 'Link1' }, { href: 'https://nodejs.org/api/fs.html', texto: 'fs' }, { href: 'https://nodejs.org/api/path.html', texto: 'path' }, { href: 'https://www.facebook.com', texto: 'Link2' } ])
    })
  })

  test('No file path', () => {
    return mdLinks('bla')
    .catch((result) => {
      expect(result).toEqual('Md file not found')
    })
  })

  test('No links in file', () => {
    return mdLinks('lib/__tests__/semlink.md')
    .catch((result) => {
      expect(result).toEqual('Links not found in file')
    })
  })

  // it('Not md file', () =>{
  //   expect(mdLinks('bla')).rejects.toEqual('Md file not found')
  //  })
   
  // it('Retorna array', () => {
  //   expect(mdLinks('lib/__tests__/teste.md')).resolves.toEqual([ { href: 'https://www.google.com', texto: 'Link1' },
  //   { href: 'https://nodejs.org/api/fs.html', texto: 'fs' },
  //   { href: 'https://nodejs.org/api/path.html', texto: 'path' },
  //   { href: 'https://www.facebook.com', texto: 'Link2' } ])
  //  })

  //  it('itens da array', () => {
  //    mdLinks('lib/__tests__/teste.md')
  //    expect(myArray).toEqual('s')
  //   })


})