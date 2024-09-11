
const motivation = [
    'https://www.digitalmomblog.com/wp-content/uploads/2023/07/motivation-meme.jpg',
    'https://www.digitalmomblog.com/wp-content/uploads/2023/07/yoda-motivation-meme.jpg',
    'https://www.digitalmomblog.com/wp-content/uploads/2023/07/liquid-motivation-meme.jpg',
    'https://www.digitalmomblog.com/wp-content/uploads/2023/12/monday-meme-work-motivation.jpeg',
    'https://memesbams.com/wp-content/uploads/2017/06/4-Believe-in-Yourself-Motivation-Meme.jpg',
    'https://ebf5836e.rocketcdn.me/blog/wp-content/uploads/2023/09/Hedgehog-motivation-jpg.jpg',
    'https://www.yourtango.com/sites/default/files/2020/motivational-quotes-1.jpg',
    'https://www.yourtango.com/sites/default/files/2020/motivational-quotes-2.jpg',
    'https://www.yourtango.com/sites/default/files/2020/motivational-quotes-4.jpg',
    'https://www.yourtango.com/sites/default/files/2020/motivational-quotes-5.jpg',
    'https://www.yourtango.com/sites/default/files/2020/motivational-quotes-6.jpg',
    'https://www.yourtango.com/sites/default/files/2020/motivational-quotes10.jpg',
    'https://www.brosix.com/wp-content/uploads/61d73e9a85ac6553184805a3_get-back-to-work.jpeg',
    'https://inspirationfeed.com/wp-content/uploads/2020/07/You-Can-Do-It-Meme13.jpg',
    'https://i.kym-cdn.com/photos/images/newsfeed/000/978/925/cc0.png',
    'https://i.kym-cdn.com/photos/images/newsfeed/001/026/151/ab4.jpg',
    'https://media1.tenor.com/m/cNA6ipE2YB0AAAAC/hal-malcolm-in-the-middle.gif',
    'https://media1.tenor.com/m/tiKBthuZBVEAAAAd/motivated-motivation.gif',
    'https://media1.tenor.com/m/i19pIXzX6H0AAAAC/lets-go.gif',
    'https://media1.tenor.com/m/8HmfZ_5Kzs4AAAAC/lets-go-motivation.gif',
    'https://media1.tenor.com/m/zuETIIZUzWMAAAAC/%E3%81%86%E3%81%8A%E3%81%8A%E3%81%8A-%E7%87%83%E3%81%88%E3%82%8B.gif',
    'https://media1.tenor.com/m/uV43r2jjtVcAAAAd/funny-5sf.gif'
]

function getRandomIndex(justdoit) {
    return Math.floor(Math.random() * justdoit.length);
}

let motivationMeme = document.querySelector('.motivation-meme')
motivationMeme.src = motivation[getRandomIndex(motivation)]




