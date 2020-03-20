const { addonBuilder, getRouter  } = require('stremio-addon-sdk')

const catalog = require('./catalog')

const oneMonth = 2629743

const cacheMaxAge = oneMonth

const genres = ['Entertainment', 'News', 'Sports', 'Kids']

const addonHost = 'https://ustvgo.now.sh'

const evl = require('eval')

const manifest = { 
    id: 'org.stremio.usiptvgo',
    version: '1.0.2',
    name: 'USA IPTV',
    logo: addonHost + '/addon-logo.png',
    description: 'Over 80 channels from the USA. Free!',
    resources: [ 'catalog', 'meta', 'stream' ],
    types: [ 'tv' ],
    catalogs: [
        {
            type: 'tv',
            id: 'ustvgo_cat',
            name: 'USA IPTV',
            genres,
            extra: [
                { name: 'genre' },
//                { name: 'skip' },
                { name: 'search' }
            ]
        }
    ],
    idPrefixes: [ 'ustv:' ]
}

const UAs = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
    'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.83 Safari/537.1',
    'Mozilla/5.0 (Windows NT 5.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
    'Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
]


function posterImage(poster) {
    const filename = poster.split('/').pop()
    return addonHost + '/images/' + filename
}

const builder = new addonBuilder(manifest)

function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}

const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'max-age=0',
    'referer': 'https://ustvgo.tv/',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1'
}

const cloud = require('cloudscraper')

const { proxy } = require('internal')

function getBody(url) {
    headers['user-agent'] = UAs[Math.floor(Math.random()*UAs.length)]
    return cloud({ method: 'GET', uri: url, headers })
}

builder.defineStreamHandler(args => {
    return new Promise((resolve, reject) => {
        const url = atob(args.id.replace(manifest.idPrefixes[0], ''))
        const opts = { headers: { referer: url.replace('http:', 'https:') } }
        getBody(url.replace('http:', 'https:')).then(body => {
            if (body) {
//                console.log(body)
                if (body.includes(' file: ')) {
                    const part = body.split(' file: ')[1]
                    if (part.includes(',')) {
                        const part2 = part.split(',')[0].split("'").join('')
                        if (part2)
                            resolve({ streams: [{ title: 'Stream', url: proxy.addProxy(part2, opts) }], cacheMaxAge: 60 * 60 }) // 60 min cache
                        else
                            reject('parse error 3')
                    } else
                        reject('parse error 2')
                } else if (body.includes("<iframe src='/player.php?stream=")) {
                    const part = body.split("<iframe src='/player.php?stream=")[1]
                    if (part.includes("'")) {
                        const part2 = part.split("'")[0]
                        getBody('https://ustvgo.tv/player.php?stream=' + part2).then(body => {
                            let scriptPart = body.match(/<script type="text\/javascript">[^<]+<\/script>/gm)
                            let tokenPart = body.match(/document\.getElementById\("[^"]+"\)\.innerHTML/gm)
                            if (scriptPart.length && tokenPart.length) {
                                tokenPart = tokenPart[0].replace('document.getElementById("', '').replace('").innerHTML', '')
                                const tokenRegex = new RegExp("<span style='display:none' id="+tokenPart+">[^<]+", 'g')
                                let resolvedToken = body.match(tokenRegex)
                                if (resolvedToken.length) {
                                    resolvedToken = resolvedToken[0].replace("<span style='display:none' id="+tokenPart+">", '')
                                    scriptPart = scriptPart[0].replace('document.getElementById("'+tokenPart+'").innerHTML', '"' + resolvedToken + '"').replace('<script type="text\/javascript">', '').replace('<\/script>', '')
                                    scriptPart = 'function something() { var url = false; var jwplayer = () => { return { setup: obj => { url = obj.file } } }; ' + scriptPart + ' return url }; something();'
                                    evl(scriptPart).then(resp => {
                                      resolve({ streams: [{ title: 'Stream', url: proxy.addProxy(resp, opts) }], cacheMaxAge: 60 * 60 }) // 60 min cache
                                    }).catch(err => {
                                      reject('parse error 8')
                                    })
                                } else
                                  reject('parse error 7')
                            } else
                                  reject('parse error 6')
                        }).catch(err => {
                            console.error(err)
                            reject(err)
                        })
                    } else
                        reject('parse error 5')
                } else if (body.includes('<iframe src="/player2.php?stream=')) {
                    const part = body.split('<iframe src="/player2.php?stream=')[1]
                    if (part.includes('"')) {
                        const part2 = part.split('"')[0]
                        getBody('https://ustvgo.tv/player2.php?stream=' + part2).then(body => {
                            let scriptPart = body.match(/<script type="text\/javascript">[^<]+<\/script>/gm)
                            let tokenPart = body.match(/document\.getElementById\("[^"]+"\)\.innerHTML/gm)
                            if (scriptPart.length && tokenPart.length) {
                                tokenPart = tokenPart[0].replace('document.getElementById("', '').replace('").innerHTML', '')
                                const tokenRegex = new RegExp("<span style='display:none' id="+tokenPart+">[^<]+", 'g')
                                let resolvedToken = body.match(tokenRegex)
                                if (resolvedToken.length) {
                                    resolvedToken = resolvedToken[0].replace("<span style='display:none' id="+tokenPart+">", '')
                                    scriptPart = scriptPart[0].replace('document.getElementById("'+tokenPart+'").innerHTML', '"' + resolvedToken + '"').replace('<script type="text\/javascript">', '').replace('<\/script>', '')
                                    scriptPart = 'function something() { var url = false; var jwplayer = () => { return { setup: obj => { url = obj.file } } }; ' + scriptPart + ' return url }; something();'
                                    evl(scriptPart).then(resp => {
                                      resolve({ streams: [{ title: 'Stream', url: proxy.addProxy(resp, opts) }], cacheMaxAge: 60 * 60 }) // 60 min cache
                                    }).catch(err => {
                                      reject('parse error 13')
                                    })
                                } else
                                  reject('parse error 12')
                            } else
                                  reject('parse error 11')
                        }).catch(err => {
                            console.error(err)
                            reject(err)
                        })
                    } else
                        reject('parse error 10')                    
                } else
                    reject('parse error 4')
            } else
                reject('parse error 1')
        }).catch(err => {
            console.error(err)
            reject(err)
        })
    })
})

builder.defineMetaHandler(args => {
    return new Promise((resolve, reject) => {
        let meta

        catalog.some(el => {
            if (el.id == args.id) {
                meta = JSON.parse(JSON.stringify(el))
                return true
            }
        })

        if (meta) {
            meta.poster = posterImage(meta.poster)
            meta.posterShape = 'landscape'
            meta.type = 'tv',
            meta.background = meta.poster
            resolve({ meta, cacheMaxAge })
        } else
            reject('could not find meta for id: ' + args.id)
    })
})

builder.defineCatalogHandler(args => {
    return new Promise((resolve, reject) => {
        let temp = JSON.parse(JSON.stringify(catalog))

        temp = temp.map(el => {
            el.poster = posterImage(el.poster)
            el.posterShape = 'landscape'
            el.type = 'tv',
            el.background = el.poster
            return el
        })

        if (args.extra.search) {
            resolve({ metas: temp.filter(el => !!(el.name.toLowerCase().includes(args.extra.search.toLowerCase()))), cacheMaxAge: oneMonth })
        } else if (args.extra.genre) {
            resolve({ metas: temp.filter(el => !!(el.tag == args.extra.genre)), cacheMaxAge: oneMonth })
        } else {
            resolve({ metas: temp, cacheMaxAge: oneMonth })
        }
    })
})

module.exports = getRouter(builder.getInterface())
