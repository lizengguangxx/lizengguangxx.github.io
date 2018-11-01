const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: true,
  audio: [
    {
      name: "神话",
      artist: '金莎',
      url: 'http://www.ytmp3.cn/down/36864.mp3',
      cover: 'http://oeff2vktt.bkt.clouddn.com/image/7.jpg',
    },
    {
      name: '9420',
      artist: '麦小兜',
      url: 'http://up.mcyt.net/?down/45967.mp3',
      cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
    },
    {
      name: '风筝误',
      artist: '刘珂矣',
      url: 'http://up.mcyt.net/?down/46644.mp3',
      cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
    }
  ]
});
