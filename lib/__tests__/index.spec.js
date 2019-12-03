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

  test('returns array of links, titles and status', () => {
    return mdLinks('lib/__tests__/teste.md', {validate: true}).then((result) => {
      expect(result).toEqual([ { href: 'https://www.google.com', status: 200, texto: 'Link1'}, { href: 'https://nodejs.org/api/fs.html', status: 200, texto: 'fs'}, { href: 'https://nodejs.org/api/path.html', status: 200, texto: 'path'}, { href: 'https://www.facebook.com', status: 200, texto: 'Link2'} ])
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
})