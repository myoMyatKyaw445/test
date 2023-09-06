const column1Tag = document.getElementById("column1");
const maincontainerTag = document.getElementsByClassName("maincontainer")[0];
const videoTag1 = document.getElementsByClassName("video")[0];
const videoContainerTag = document.getElementsByClassName("videoContainer")[0];
const containerTag = document.getElementsByClassName("containerTag")[0];
const containerTag1 = document.getElementsByClassName("containerTag1")[0];
const liveGroupTag = document.getElementsByClassName("liveGroup")[0];
const menu = document.getElementById('menu');
const marqueTag = document.getElementsByClassName("marqueClass")[0];



const videos =  [
  {
    id : "0",
    title : "MRTV-4",
    thumbnail : "images/mrtv4.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
},
{
  id : "1",
  title : "MRTV-4",
  thumbnail : "images/mrtv4.png",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "2",
  title : "CHANNEL-7",
  thumbnail : "images/channel7.jpg",
  uploadDate: new Date(2023, 6, 9),
  viewCount: 600,
},
{ 
  id : "3",
  title : "MAHARBAWDI",
  thumbnail : "https://rb.gy/icb2r",
  uploadDate: new Date(2023, 6, 8),
  viewCount: 500,
},
{ 
  id: "4",
  title : "MAHAR",
  thumbnail : "https://rb.gy/891z4",
  uploadDate: new Date(2023, 6, 6),
  viewCount: 500,
},
{
  id : "5",
  title : "FORTUNE TV",
  thumbnail : "https://rb.gy/66zsj",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "6",
  title : "YTV",
  thumbnail : "https://rb.gy/jaz3j",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "7",
  title : "CHANNEL K",
  thumbnail : "https://rb.gy/wx8kg",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "8",
  title : "MNTV",
  thumbnail : "https://shorturl.at/ptAR5",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "9",
  title : "CHANNEL 9",
  thumbnail : "https://shorturl.at/ANRY4",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "10",
  title : "CHANNEL ME",
  thumbnail : "https://rb.gy/zoa7l",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "11",
  title : "5 PLUS",
  thumbnail : "https://rb.gy/63rh2",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "12",
  title : "MRTV",
  thumbnail : "https://rb.gy/je20p",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "13",
  title : "MWD",
  thumbnail : "https://rb.gy/9y3xr",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "14",
  title : "MWD EDUCATION",
  thumbnail : "https://rb.gy/cw2e5",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "15",
  title : "BUDDHA",
  thumbnail : "data:image/png;base64,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",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
{
  id : "16",
  title : "Sport Channel",
  thumbnail : "data:image/png;base64,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",
  uploadDate: new Date(2023, 6, 7),
  viewCount: 500,
},
];




const brestm3u = ["a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911976_lhd.m3u8?auth_key=1691926350-0-0-f264f43b597eb5cade0a8d9b01da8fff&user_session_id=de5085ff71a7da294fd1a6b25407a384&sub_m3u8=true&edge_slice=true","a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911978_lsd.m3u8?sub_m3u8=true&auth_key=1691843070-0-0-7232c73604cd8bdc09efbe9958f826e9&user_session_id=27b750a0ed993d781cf1fff1688b4807&edge_slice=true","a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911976_lsd.m3u8?sub_m3u8=true&auth_key=1691926350-0-0-a9873b1b2f888fa0643aaae87542068d&edge_slice=true&user_session_id=53b9a9419e954b9465519ab8f5995f88",
"1123139281.cdn.khmer-hd.com/may2HD/chunks.m3u8","obevcimanyd179314182.thapcam.link/live/may2SD/chunklist.m3u8",
] 
const spurm3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911956_lhd.m3u8?user_session_id=44750e9b4db361ba50bc25e04ad6e199&auth_key=1691934210-0-0-dc9142676d3fbcd17e9b8a0e68116cf1&edge_slice=true&sub_m3u8=true",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911956_lsd.m3u8?sub_m3u8=true&edge_slice=true&auth_key=1691934270-0-0-00e6a84c55728cc7bfff5abd3efb9b5d&user_session_id=86eaf4e2c8036f994a7f9fbc2776aa11",
  "1123139281.cdn.khmer-hd.com/may1HD/chunks.m3u8","obevcimanyd179314182.thapcam.link/live/may1SD/chunklist.m3u8",
]

const monacom3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-120778_lhd.m3u8?user_session_id=5562b82a7f92e5da7b7d8f2467bfdeda&edge_slice=true&sub_m3u8=true&auth_key=1691934450-0-0-94f116670bc6fa26dd34f15b937c49c3",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-120778_lsd.m3u8?edge_slice=true&auth_key=1691934450-0-0-0dad085a28f5fcb4e58c2cebe76a3d6b&user_session_id=7e4bf7bde99365414a7af5d9fb2a3926&sub_m3u8=true",
]

const montpellim3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911975_lhd.m3u8?edge_slice=true&auth_key=1691934390-0-0-f09a8bc50a6ef7a89c99f3cb66503602&user_session_id=40291b5436719d67a72f3c7cc7b5a43b&sub_m3u8=true",
   "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911975_lsd.m3u8?edge_slice=true&auth_key=1691934390-0-0-d06987909508959a357a0d8c6a970285&user_session_id=2fc7cbd12cd72c758ec851bf6182bade&sub_m3u8=true",

]

const nantesm3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911953_lhd.m3u8?edge_slice=true&user_session_id=4ad558d2c3e8e4a011fdd95bdf47e105&sub_m3u8=true&auth_key=1691934450-0-0-f7ae73702a8c7d04aec016addee363dd",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911953_lsd.m3u8?edge_slice=true&auth_key=1691934450-0-0-c94cb2b76a99651f3b51538b5b22a786&user_session_id=70f10e4ac75f84b770641e49d06dde2e&sub_m3u8=true",
]

const celtam3u = [
  "pull01.rrwes.live/live/stream-991160_lhd.m3u8?txSecret=4a720023e1e58a418d65fb3dfe03207f&txTime=64d93e7f",
  "pull01.rrwes.live/live/stream-991160_lsd.m3u8?txSecret=a85a6687efd5f4ab5600c29c25457e02&txTime=64d93e92",
  "1123139281.cdn.khmer-hd.com/myHD/chunks.m3u8","obevcimanyd179314182.thapcam.link/live/mySD/chunklist.m3u8",
]

const rennesm3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-991184_lhd.m3u8?auth_key=1691941470-0-0-f16944afac7902e9a21fca34ab8c9b29&user_session_id=781e543f067e2bb7ee7dbc69e274b302&sub_m3u8=true&edge_slice=true",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-991184_lsd.m3u8?edge_slice=true&sub_m3u8=true&auth_key=1691941470-0-0-8920a577bac67fa62f35f02bce99382b&user_session_id=54de54f2e87a7949557d2a492a444cf1",
  "obevcimanyd179314182.thapcam.link/live/may10/chunklist.m3u8",
]
const chelseam3u = [
  "pull01.rrwes.live/live/stream-991121_lhd.m3u8?txSecret=3e9816e997537a917f054cbf516944c0&txTime=64d9464e",
  "pull01.rrwes.live/live/stream-991121_lsd.m3u8?txSecret=4479b52024f4ac9c973ba5352592ce9b&txTime=64d9464e",
  "1123139281.cdn.khmer-hd.com/may3HD/chunks.m3u8","obevcimanyd179314182.thapcam.link/live/may3SD/chunklist.m3u8",
]

const villarealm3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-242744_lhd.m3u8?user_session_id=750cebc8d0c39b36651c21e760be0433&edge_slice=true&auth_key=1691950770-0-0-7839b031936db8a31eb3b13ae032465b&sub_m3u8=true",
   "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-242744_lsd.m3u8?edge_slice=true&auth_key=1691950770-0-0-662b7cefbdc4dff0785de0dfe04d835d&user_session_id=376190b64c8b7254f66a166db6fdb0fc&sub_m3u8=true",
   "obevcimanyd179314182.thapcam.link/live/myFHD/chunklist.m3u8","obevcimanyd179314182.thapcam.link/live/mySD/chunklist.m3u8",
]



const match1m3u = [
"d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-9911983_lhd.m3u8?sub_m3u8=true&auth_key=1693051351-0-0-861cc4dc0d39b12b90873155eb0dfd5b&edge_slice=true&user_session_id=aed450828a55d7cec58234c48bf37f0a",
"d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-9911983_lsd.m3u8?sub_m3u8=true&auth_key=1693051351-0-0-5552a59a3d2c86862a9b91d022a1626e&edge_slice=true&user_session_id=4d82e9e76f7ec02973e6db72ece71810",
"obevcimanyd179314182.thapcam.link/live/may1SD/chunklist.m3u8",
"obevcimanyd179314182.thapcam.link/live/may1FHD/chunklist.m3u8"
]

const match2m3u = [
"a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-427856_lhd.m3u8?edge_slice=true&auth_key=1693058731-0-0-a38d8c4721c995c25b13fcc2cac2de7f&user_session_id=2f7310117d334ee194802ff06d915fa1&sub_m3u8=true",
"a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-427856_lsd.m3u8?edge_slice=true&user_session_id=7ce82470ceae9212bc3801bc4e5a5985&auth_key=1693058731-0-0-1c672efe2d12d468cc95f59e9b9635bf&sub_m3u8=true",
"obevcimanyd179314182.thapcam.link/live/may2SD/chunklist.m3u8",
"obevcimanyd179314182.thapcam.link/live/may2FHD/chunklist.m3u8"
]

const match3m3u = [
"a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-991190_lhd.m3u8?sub_m3u8=true&user_session_id=8a78a68e8e5996846b5e05ec8aeef5eb&auth_key=1693059331-0-0-7a5371b6996d3d27bd87164b9c2303de&edge_slice=true",
"a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-991190_lsd.m3u8?sub_m3u8=true&user_session_id=9b246dcedcd5299922bb57245cc24cc7&auth_key=1693059331-0-0-f97b995495280936aba429ca0eb6100a&edge_slice=true",

]

const match4m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-106737_lhd.m3u8?auth_key=1693058911-0-0-03767d0ae7d38172472ce576c7a560ed&user_session_id=d2e38eaa371619683276256b0acb9512&edge_slice=true&sub_m3u8=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-106737_lsd.m3u8?auth_key=1693058911-0-0-192b468f6473b6cb0a82111806652257&user_session_id=d48543cd8be0dd3d9046b5fc915deb82&edge_slice=true&sub_m3u8=true",

]
 
const match5m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-339549_lhd.m3u8?auth_key=1693058911-0-0-e4764255348869a89ddec8452fdc4c05&user_session_id=87ae0e533c565d5d98121cf60bf22577&edge_slice=true&sub_m3u8=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-339549_lsd.m3u8?auth_key=1693058911-0-0-a6f2cbc360196e354d8ae618c1628431&user_session_id=074d67c857186d1eb4c49bd162c29f07&edge_slice=true&sub_m3u8=true"

]

const match6m3u = [
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-253018_lhd.m3u8?sub_m3u8=true&edge_slice=true&auth_key=1693058971-0-0-ee80721ae9ca810d769ca4cb8e5fd2c2&user_session_id=d5bc46283b93a24fe77f0a7a72075cfd",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-253018_lsd.m3u8?auth_key=1693058971-0-0-4576a2a6f99b48602d34f0224ddb9ef3&user_session_id=e3d666605a419250dedadca5cf59c50d&edge_slice=true&sub_m3u8=true"
]

const match7m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911979_lhd.m3u8?user_session_id=3cd56c545b21dee10e24547709d8e260&auth_key=1693060831-0-0-ce7d2f4b48f15f78b8c604bad91c7e91&sub_m3u8=true&edge_slice=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911979_lsd.m3u8?sub_m3u8=true&auth_key=1693060831-0-0-d80b442f8681445252ccbe3efc3e1a53&edge_slice=true&user_session_id=88529e6d69100f3233fe34280a82ff93",
 "obevcimanyd179314182.thapcam.link/live/may3SD/chunklist.m3u8",
 "obevcimanyd179314182.thapcam.link/live/may3FHD/chunklist.m3u8"
]

const match8m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-279893_lhd.m3u8?user_session_id=f90651f2a1752c4625b6aa23577f2ea6&auth_key=1693061191-0-0-bb8d21fbd660203f855d29adc55019f8&sub_m3u8=true&edge_slice=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-279893_lsd.m3u8?edge_slice=true&user_session_id=117c692b03e2e9a8cddaac7d1871e924&auth_key=1693061191-0-0-407c699aa18d6d0ac66b17d9003b7b61&sub_m3u8=true"
]

const match9m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-242744_lhd.m3u8?edge_slice=true&user_session_id=acf502a82d8609ebe5f9b9bc2e704a88&auth_key=1693061131-0-0-b923a39fa2a66950348dc03515af3969&sub_m3u8=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-242744_lsd.m3u8?edge_slice=true&auth_key=1693061131-0-0-f5b477e62bc091c257646d52bd15d6c9&user_session_id=5b831b4f71886151eb43a7b8a445286b&sub_m3u8=true"
]

const match10m3u = [
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-9911998_lhd.m3u8?auth_key=1693060951-0-0-11ff3fcb3b95f9f496662cdd50c53817&user_session_id=cc0e9cf0c83a85dbe5e636ddf1c23dfd&edge_slice=true&sub_m3u8=true",
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-9911998_lsd.m3u8?auth_key=1693060951-0-0-24419383827bf099b295788cc56169f4&user_session_id=53bd301379f3c559f078ea5eef8ff6b1&edge_slice=true&sub_m3u8=true",
 "obevcimanyd179314182.thapcam.link/live/may1SD/chunklist.m3u8",
 "obevcimanyd179314182.thapcam.link/live/may1FHD/chunklist.m3u8"
]

const match11m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911975_lhd.m3u8?auth_key=1693069651-0-0-91d5464f79897f755be27b8f9ad6a5ae&user_session_id=34dcc86ecb7478e17952b6b1d6c89283&sub_m3u8=true&edge_slice=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911975_lsd.m3u8?auth_key=1693069651-0-0-5ed04cb9707e8b6e280b9e72331c3d8c&user_session_id=e7ec684a1e75bd9c47df3a7a1f058fce&sub_m3u8=true&edge_slice=true",
]

const match12m3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911971_lhd.m3u8?sub_m3u8=true&auth_key=1693070191-0-0-d7fa4363613211d4bf800c3fd4ecca99&edge_slice=true&user_session_id=28f3ccfe73a1ea799a1b978403430551",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911971_lsd.m3u8?sub_m3u8=true&auth_key=1693070191-0-0-78cd2ba420963c1ce765b71fd3c27cee&edge_slice=true&user_session_id=e7554eb10395da52492b9c311e4e3b5a"
]

const match13m3u = [
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-259576_lhd.m3u8?edge_slice=true&sub_m3u8=true&auth_key=1693070071-0-0-f5af3eee71c3b280f5732e8f654207d3&user_session_id=a840d6d8ae538fb505aaf95c9852f29b",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-259576_lsd.m3u8?edge_slice=true&sub_m3u8=true&auth_key=1693070071-0-0-314ea65076155121d783cacbfea9f83c&user_session_id=b2e4221f76c047c975753ad2d3b5bea4"
]

const match14m3u = [
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-9911972_lhd.m3u8?edge_slice=true&auth_key=1693069831-0-0-f46e541fdd6b6f1932f7a2fa82eb0ccf&user_session_id=1199c7c2ee1498cea2a739aa05aa77db&sub_m3u8=true",
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-9911972_lsd.m3u8?edge_slice=true&user_session_id=b9e806f5b234bfcb87f23699606d6e8b&auth_key=1693069831-0-0-652478459b3ae6a313faed46f9171814&sub_m3u8=true"
]

const match15m3u = [
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-381973_lhd.m3u8?edge_slice=true&auth_key=1693072051-0-0-bedae112a49bd8596015d6da3eb22a41&user_session_id=84eea36b3b0513cf7371ccab39d688a8&sub_m3u8=true",
 "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-381973_lsd.m3u8?user_session_id=4f7394d8c58b0652fc3e37184044f53f&sub_m3u8=true&edge_slice=true&auth_key=1693072111-0-0-7c8af4c446cbbfce0a26d32d056b07f9"
]

const match16m3u = [
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-991184_lhd.m3u8?sub_m3u8=true&edge_slice=true&user_session_id=904126d4d5ee11474a40d086d296ed99&auth_key=1693071991-0-0-d4d67ba8cd5e8d1d8fc362b8da52ce03",
 "d83e8dc9b3450f5a2962a7b324817603.livehwc3.cn/pull06.scstream.net/live/stream-991184_lsd.m3u8?sub_m3u8=true&edge_slice=true&user_session_id=594575f5c6af4de46ede503e11c1977b&auth_key=1693071991-0-0-ce59df1ae1222eabebed1ad04d345dcc"
]

const match17m3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-280022_lhd.m3u8?sub_m3u8=true&edge_slice=true&auth_key=1692560911-0-0-8f2a26e9ba246b7db97a1a8d03179778&user_session_id=7ab774c3d2769c53519e62bde745985b",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-280022_lhd.m3u8?sub_m3u8=true&edge_slice=true&auth_key=1692560911-0-0-8f2a26e9ba246b7db97a1a8d03179778&user_session_id=7ab774c3d2769c53519e62bde745985b"
]

const match18m3u = [
 "pull01.rrwes.live/live/stream-9911990_lhd.m3u8?txSecret=4ef27ae3330074945964764272ab889d&txTime=64e2b7e3",
 "pull01.rrwes.live/live/stream-9911990_lsd.m3u8?txSecret=cc8e95576e915765d8245300fae45ab9&txTime=64e2b7e3",
 "obevcimanyd179314182.thapcam.link/live/may1FHD/chunklist.m3u8","obevcimanyd179314182.thapcam.link/live/may1SD/chunklist.m3u8"
]

const match19m3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911985_lhd.m3u8?sub_m3u8=true&user_session_id=64da09b2ddce8e6b9ad32ef45eb84402&edge_slice=true&auth_key=1692473851-0-0-63a193b806992256cce720e1c7237384",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911985_lsd.m3u8?sub_m3u8=true&auth_key=1692473911-0-0-148620cc185934d8d7048f5f2c6e2e13&edge_slice=true&user_session_id=df45af9fdf8532d51e1e9a7cfc97dd83",
  "obevcimanyd179314182.thapcam.link/live/may1FHD/chunklist.m3u8","obevcimanyd179314182.thapcam.link/live/may1SD/chunklist.m3u8"
]

const match20m3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911989_lhd.m3u8?user_session_id=36b149f272f2863d5b687f1bcacdf014&edge_slice=true&auth_key=1692473971-0-0-e74b7d6f75f8ad29a6e47740af4955b9&sub_m3u8=true",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911989_lsd.m3u8?auth_key=1692473971-0-0-0f0875a96ffcd45e67935798226b3891&sub_m3u8=true&edge_slice=true&user_session_id=db055eda33a7979eb0fd64edceb82911",
  "obevcimanyd179314182.thapcam.link/live/may3SD/chunklist.m3u8","1123139281.cdn.khmer-hd.com/may3HD/chunks.m3u8"
]

const match21m3u = [
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911973_lhd.m3u8?auth_key=1692476131-0-0-9f480d9ed4ee3f5b9153f15607813b3d&edge_slice=true&sub_m3u8=true&user_session_id=f4af9d1e12e0e428c7fea69b5c90d62d",
  "a0504dae9c72cdb02b00ddedf6df4973.livehwc3.cn/pull06.scstream.net/live/stream-9911973_lsd.m3u8?user_session_id=8675cb462cb90b27940fa5a4a9c69f90&auth_key=1692476131-0-0-e6fcd0bc374bb2cd10b42d79160bdca1&edge_slice=true&sub_m3u8=true",
]
//const tipTable = document.getElementsByClassName("tipTable")[0];
/*const todayTip = document.createElement('div');
todayTip.className = 'tipContainer';

const button = document.createElement('button');
button.className = "tipbtn"
button.textContent = 'ယနေ့ညအတွက် Tip ရွေးချယ်မှုရှိပါမည်..Noti ပို့လျှင် ၀င်ရောက်ကြည့်ရှု့ပေးပါ'; // Tip ရွေးချယ်မှူမရှိသေးပါ..ယနေ့ညအတွက် Tip ကြည့်ရှု့ရန်နှိပ်ပါ..
button.addEventListener('click', () => {
    // Do something when the button is clicked
    console.log("Button clicked!");
    window.location.href = "tip.html"
});

todayTip.appendChild(button);
tipTable.append(todayTip); 
*/


const homeImagesTag = document.getElementsByClassName("homeImages")[0];
 const awayImagesTag = document.getElementsByClassName("awayImages")[0];
 const livecontainer = document.createElement("span");
 livecontainer.classList.add("liveClass");
 const livecontainer1 = document.createElement("span");
 livecontainer.classList.add("liveClass1");
 const livechannel = 
` <div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/bournemouth.jpg" alt=""><figcaption>Bournemouth</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">EPL</button>
<div class="time">6:00PM</div>
<div class="top-right"><img src="images/Spur.png" alt=""><figcaption>Spur</figcaption></div>
<div class="btg">
<button class="btn mt-4 match1">Server1 HD</button>
<button class="btn mt-4 match2">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match3">Server3 SD</button>
<button class="btn mt-4 match4">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel1 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/bochum.png"alt=""><figcaption>Bochum</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">German Bundesliga</button>
<div class="time">8:00PM</div>
<div class="top-right"><img src="images/dortmund.png" alt=""><figcaption>Dortmund</figcaption></div>
<div class="btg">
<button class="btn mt-4 match5">Server1 HD</button>
<button class="btn mt-4 match6">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match7">Server3 SD</button>
<button class="btn mt-4 match8">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel2 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/darmstadt.png"alt=""><figcaption>Darmstadt</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">German Bundesliga</button>
<div class="time">8:00PM</div>
<div class="top-right"><img src="images/unionberlin.png" alt=""><figcaption>Union Berlin</figcaption></div>
<div class="btg">
<button class="btn mt-4 match9">Server1 HD</button>
<button class="btn mt-4 match10">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match11">Server3 SD</button>
<button class="btn mt-4 match12">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel3 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/heidenhein.png"alt=""><figcaption>Heidenhein</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">German Bundesliga</button>
<div class="time">8:00PM</div>
<div class="top-right"><img src="images/hoffeinhein.png" alt=""><figcaption>Hoffenhein</figcaption></div>
<div class="btg">
<button class="btn mt-4 match13">Server1 HD</button>
<button class="btn mt-4 match14">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match15">Server3 SD</button>
<button class="btn mt-4 match16">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel4 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/koln.png"alt=""><figcaption>Konln</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">German Bundesliga</button>
<div class="time">8:00PM</div>
<div class="top-right"><img src="images/wolfsburg.png" alt=""><figcaption>Wolfsburg</figcaption></div>
<div class="btg">
<button class="btn mt-4 match17">Server1 HD</button>
<button class="btn mt-4 match18">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match19">Server3 SD</button>
<button class="btn mt-4 match20">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel5 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/freiburg.png"alt=""><figcaption>Freiburg</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">German Bundesliga</button>
<div class="time">8:00PM</div>
<div class="top-right"><img src="images/werder.png" alt=""><figcaption>Werder Bremen</figcaption></div>
<div class="btg">
<button class="btn mt-4 match21">Server1 HD</button>
<button class="btn mt-4 match22">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match23">Server3 SD</button>
<button class="btn mt-4 match24">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel6 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/Arsenal.png"alt=""><figcaption>Arsenal</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">EPL</button>
<div class="time">8:30PM</div>
<div class="top-right"><img src="images/fulham.png" alt=""><figcaption>Fulham</figcaption></div>
<div class="btg">
<button class="btn mt-4 match25">Server1 HD</button>
<button class="btn mt-4 match26">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match27">Server3 SD</button>
<button class="btn mt-4 match28">Server4 SD</button>
</div>
</li>
</ul>
</div>`



const livechannel7 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/Brentford.png"alt=""><figcaption>Brentford</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">EPL</button>
<div class="time">8:30PM</div>
<div class="top-right"><img src="images/palace.png" alt=""><figcaption>C.Palace</figcaption></div>
<div class="btg">
<button class="btn mt-4 match29">Server1 HD</button>
<button class="btn mt-4 match30">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match31">Server3 SD</button>
<button class="btn mt-4 match32">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel8 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/everton.png"alt=""><figcaption>Everton</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">EPL</button>
<div class="time">8:30PM</div>
<div class="top-right"><img src="images/Wolves.png" alt=""><figcaption>Wolves</figcaption></div>
<div class="btg">
<button class="btn mt-4 match33">Server1 HD</button>
<button class="btn mt-4 match34">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match35">Server3 SD</button>
<button class="btn mt-4 match36">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel9 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/Manu.png"alt=""><figcaption>Man U</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">EPL</button>
<div class="time">8:30PM</div>
<div class="top-right"><img src="images/nottinghan.png" alt=""><figcaption>Nottingham</figcaption></div>
<div class="btg">
<button class="btn mt-4 match37">Server1 HD</button>
<button class="btn mt-4 match38">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match39">Server3 SD</button>
<button class="btn mt-4 match40">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel10 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/brighton.png"alt=""><figcaption>Brighton</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">EPL</button>
<div class="time">11:00PM</div>
<div class="top-right"><img src="images/westham.png" alt=""><figcaption>West Ham</figcaption></div>
<div class="btg">
<button class="btn mt-4 match37">Server1 HD</button>
<button class="btn mt-4 match38">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match39">Server3 SD</button>
<button class="btn mt-4 match40">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel11 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/frosinone.png"alt=""><figcaption>Frosinone</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Italy Serie-A</button>
<div class="time">11:00PM</div>
<div class="top-right"><img src="images/atalanta.png" alt=""><figcaption>Atalanta</figcaption></div>
<div class="btg">
<button class="btn mt-4 match41">Server1 HD</button>
<button class="btn mt-4 match42">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match43">Server3 SD</button>
<button class="btn mt-4 match44">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel12 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/monza.png"alt=""><figcaption>Monza</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Italy Serie-A</button>
<div class="time">11:00PM</div>
<div class="top-right"><img src="images/empoli.jpg" alt=""><figcaption>Empoli</figcaption></div>
<div class="btg">
<button class="btn mt-4 match45">Server1 HD</button>
<button class="btn mt-4 match46">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match47">Server3 SD</button>
<button class="btn mt-4 match48">Server4 SD</button>
</div>
</li>
</ul>
</div>`



const livechannel13 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/gladbach.jpg"alt=""><figcaption>Gladbach</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">German Bundesliga</button>
<div class="time">11:00PM</div>
<div class="top-right"><img src="images/leverkusen.png" alt=""><figcaption>Leverkusen</figcaption></div>
<div class="btg">
<button class="btn mt-4 match49">Server1 HD</button>
<button class="btn mt-4 match50">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match51">Server3 SD</button>
<button class="btn mt-4 match52">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel14 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/Cadiz.png"alt=""><figcaption>Cadiz</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Spain Laliga</button>
<div class="time">11:30AM</div>
<div class="top-right"><img src="images/almeria.png" alt=""><figcaption>Almeria</figcaption></div>
<div class="btg">
<button class="btn mt-4 match53">Server1 HD</button>
<button class="btn mt-4 match54">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match55">Server3 SD</button>
<button class="btn mt-4 match56">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel15 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/marseille.jpg" alt=""><figcaption>Marseille</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">France Ligue</button>
<div class="time">11:30PM</div>
<div class="top-right"><img src="images/brest.png" alt=""><figcaption>Brest</figcaption></div>
<div class="btg">
<button class="btn mt-4 match57">Server1 HD</button>
<button class="btn mt-4 match58">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match59">Server3 SD</button>
<button class="btn mt-4 match60">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel16 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/grananda.png" alt=""><figcaption>Grananda</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Spain Laliga</button>
<div class="time">12:00AM</div>
<div class="top-right"><img src="images/mallorca.jpg" alt=""><figcaption>Mallorca</figcaption></div>
<div class="btg">
<button class="btn mt-4 match61">Server1 HD</button>
<button class="btn mt-4 match62">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match63">Server3 SD</button>
<button class="btn mt-4 match64">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel17 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/verona.png" alt=""><figcaption>Verona</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Italy Serie-A</button>
<div class="time">1:15AM</div>
<div class="top-right"><img src="images/roma.png" alt=""><figcaption>Roma</figcaption></div>
<div class="btg">
<button class="btn mt-4 match65">Server1 HD</button>
<button class="btn mt-4 match66">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match67">Server3 SD</button>
<button class="btn mt-4 match68">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel18 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/acmilan.png" alt=""><figcaption>AC Milan</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Italy Serie-A</button>
<div class="time">1:15AM</div>
<div class="top-right"><img src="images/torino.png" alt=""><figcaption>Torino</figcaption></div>
<div class="btg">
<button class="btn mt-4 match69">Server1 HD</button>
<button class="btn mt-4 match70">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match71">Server3 SD</button>
<button class="btn mt-4 match72">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel19 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/psg.png" alt=""><figcaption>PSG</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">France Ligue</button>
<div class="time">1:30AM</div>
<div class="top-right"><img src="images/Lens.png" alt=""><figcaption>Lens</figcaption></div>
<div class="btg">
<button class="btn mt-4 match73">Server1 HD</button>
<button class="btn mt-4 match74">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match75">Server3 SD</button>
<button class="btn mt-4 match76">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel20 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/Sevilla.png" alt=""><figcaption>Sevilla</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">France Ligue</button>
<div class="time">2:00AM</div>
<div class="top-right"><img src="images/girona.png" alt=""><figcaption>Girona</figcaption></div>
<div class="btg">
<button class="btn mt-4 match77">Server1 HD</button>
<button class="btn mt-4 match78">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match79">Server3 SD</button>
<button class="btn mt-4 match80">Server4 SD</button>
</div>
</li>
</ul>
</div>`

const livechannel21 = 
`<div class="scrollmenu">			
<ul>

<li>
<div class="container"> 
<div class="top-left"><img src="images/Osasuna.png" alt=""><figcaption>Osasuna</figcaption></div> 
<button onclick="window.location.href='go:home';"
class="logo">Spain Laliga</button>
<div class="time">2:00AM</div>
<div class="top-right"><img src="images/bibao.png" alt=""><figcaption>Bibao</figcaption></div>
<div class="btg">
<button class="btn mt-4 match81">Server1 HD</button>
<button class="btn mt-4 match82">Server2 SD</button>
</div>
<div class="btg1">
<button class="btn mt-4 match83">Server3 SD</button>
<button class="btn mt-4 match84">Server4 SD</button>
</div>
</li>
</ul>
</div>`













livecontainer.innerHTML = livechannel  + livechannel1 + livechannel2 + livechannel3 + livechannel4 
+livechannel5 + livechannel6 + livechannel7 + livechannel8 + livechannel9 +livechannel10  
+ livechannel11 + livechannel12 + livechannel13 + livechannel14+ livechannel15 +livechannel16  
+ livechannel17 + livechannel18 + livechannel19 + livechannel20; 
//homeImagesTag.append(livecontainer);

const allButtons = document.querySelectorAll(`.match1,.match2,.match3,.match4,.match5,.match6,.match7,.match8,.match9,.match10,.match11,.match12,.match13,.match14,.match15,
.match16,.match17,.match18,.match19,.match20,.match21,.match22,.match23,.match24,.match25,.match26,.match27,.match28,.match29,.match30,.match31,.match32,.match33,.match34,.match35,
.match36,.match37,.match38,.match39,.match40,.match41,.match42,.match43,.match44,.match45,.match46,.match47,.match48,.match49,.match50,.match51,.match52,.match53,.match54,.match55,.match56,.match57,
.match58,.match59,.match60,.match61,.match62,.match63,.match64,.match65,.match66,.match67,.match68,.match69,.match70,.match71,.match72,.match73,.match74,.match75,.match76,.match77,.match78,.match79,.match80,.match81,.match82,.match83,.match84`);

allButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("match1")) {
          const currentplayingIndex = 0;
            videoFun2(match1m3u[currentplayingIndex]);
            console.log((match1m3u[currentplayingIndex]))
        } else if (button.classList.contains("match2")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match1m3u[currentplayingIndex]);
        }else if (button.classList.contains("match3")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match1m3u[currentplayingIndex]);
        }else if (button.classList.contains("match4")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match1m3u[currentplayingIndex]);
        }else if (button.classList.contains("match5")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match2m3u[currentplayingIndex]);
            console.log(match2m3u[currentplayingIndex])
        }else if (button.classList.contains("match6")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match2m3u[currentplayingIndex]);
        }else if (button.classList.contains("match7")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match2m3u[currentplayingIndex]);
        }else if (button.classList.contains("match8")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match2m3u[currentplayingIndex]);
        }else if (button.classList.contains("match9")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match3m3u[currentplayingIndex]);
        }else if (button.classList.contains("match10")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match3m3u[currentplayingIndex]);
        }else if (button.classList.contains("match11")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match3m3u[currentplayingIndex]);
        }else if (button.classList.contains("match12")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match3m3u[currentplayingIndex]);
        }else if (button.classList.contains("match13")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match4m3u[currentplayingIndex]);
        }else if (button.classList.contains("match14")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match4m3u[currentplayingIndex]);
        }else if (button.classList.contains("match15")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match4m3u[currentplayingIndex]);
        }else if (button.classList.contains("match16")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match4m3u[currentplayingIndex]);
        }else if (button.classList.contains("match17")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match5m3u[currentplayingIndex]);
        }else if (button.classList.contains("match18")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match5m3u[currentplayingIndex]);
        }else if (button.classList.contains("match19")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match5m3u[currentplayingIndex]);
        }else if (button.classList.contains("match20")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match5m3u[currentplayingIndex]);
        }else if (button.classList.contains("match21")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match6m3u[currentplayingIndex]);
        }else if (button.classList.contains("match22")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match6m3u[currentplayingIndex]);
        }else if (button.classList.contains("match23")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match6m3u[currentplayingIndex]);
        }else if (button.classList.contains("match24")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match6m3u[currentplayingIndex]);
        }else if (button.classList.contains("match25")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match7m3u[currentplayingIndex]);
        }else if (button.classList.contains("match26")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match7m3u[currentplayingIndex]);
        }else if (button.classList.contains("match27")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match7m3u[currentplayingIndex]);
        }else if (button.classList.contains("match28")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match7m3u[currentplayingIndex]);
        }else if (button.classList.contains("match29")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match8m3u[currentplayingIndex]);
        }else if (button.classList.contains("match30")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match8m3u[currentplayingIndex]);
        }else if (button.classList.contains("match31")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match8m3u[currentplayingIndex]);
        }else if (button.classList.contains("match32")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match8m3u[currentplayingIndex]);
        }else if (button.classList.contains("match33")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match9m3u[currentplayingIndex]);
        }else if (button.classList.contains("match34")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match9m3u[currentplayingIndex]);
        }else if (button.classList.contains("match35")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match9m3u[currentplayingIndex]);
        }else if (button.classList.contains("match36")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match9m3u[currentplayingIndex]);
        }else if (button.classList.contains("match37")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match10m3u[currentplayingIndex]);
        }else if (button.classList.contains("match38")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match10m3u[currentplayingIndex]);
        }else if (button.classList.contains("match39")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match10m3u[currentplayingIndex]);
        }else if (button.classList.contains("match40")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match10m3u[currentplayingIndex]);
        }else if (button.classList.contains("match41")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match11m3u[currentplayingIndex]);
        }else if (button.classList.contains("match42")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match11m3u[currentplayingIndex]);
        }else if (button.classList.contains("match43")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match11m3u[currentplayingIndex]);
        }else if (button.classList.contains("match44")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match11m3u[currentplayingIndex]);
        }else if (button.classList.contains("match45")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match12m3u[currentplayingIndex]);
        }else if (button.classList.contains("match46")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match12m3u[currentplayingIndex]);
        }else if (button.classList.contains("match47")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match12m3u[currentplayingIndex]);
        }else if (button.classList.contains("match48")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match12m3u[currentplayingIndex]);
        }else if (button.classList.contains("match49")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match13m3u[currentplayingIndex]);
        }else if (button.classList.contains("match50")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match13m3u[currentplayingIndex]);
        }else if (button.classList.contains("match51")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match13m3u[currentplayingIndex]);
        }else if (button.classList.contains("match52")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match13m3u[currentplayingIndex]);
        }else if (button.classList.contains("match53")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match14m3u[currentplayingIndex]);
        }else if (button.classList.contains("match54")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match14m3u[currentplayingIndex]);
        }else if (button.classList.contains("match55")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match14m3u[currentplayingIndex]);
        }else if (button.classList.contains("match56")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match14m3u[currentplayingIndex]);
        }else if (button.classList.contains("match57")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match15m3u[currentplayingIndex]);
        }else if (button.classList.contains("match58")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match15m3u[currentplayingIndex]);
        }else if (button.classList.contains("match59")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match15m3u[currentplayingIndex]);
        }else if (button.classList.contains("match60")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match15m3u[currentplayingIndex]);
        }else if (button.classList.contains("match61")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match16m3u[currentplayingIndex]);
        }else if (button.classList.contains("match62")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match16m3u[currentplayingIndex]);
        }else if (button.classList.contains("match63")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match16m3u[currentplayingIndex]);
        }else if (button.classList.contains("match64")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match16m3u[currentplayingIndex]);
        }else if (button.classList.contains("match65")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match17m3u[currentplayingIndex]);
        }else if (button.classList.contains("match66")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match17m3u[currentplayingIndex]);
        }else if (button.classList.contains("match67")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match17m3u[currentplayingIndex]);
        }else if (button.classList.contains("match68")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match17m3u[currentplayingIndex]);
        }else if (button.classList.contains("match69")) {
            console.log("world");
            const currentplayingIndex = 0;
            videoFun2(match18m3u[currentplayingIndex]);
        }else if (button.classList.contains("match70")) {
            console.log("world");
            const currentplayingIndex = 1;
            videoFun2(match18m3u[currentplayingIndex]);
        }else if (button.classList.contains("match71")) {
            console.log("world");
            const currentplayingIndex = 2;
            videoFun2(match18m3u[currentplayingIndex]);
        }else if (button.classList.contains("match72")) {
            console.log("world");
            const currentplayingIndex = 3;
            videoFun2(match18m3u[currentplayingIndex]);
        }else if (button.classList.contains("match73")) {
          console.log("world");
          const currentplayingIndex = 0;
          videoFun2(match19m3u[currentplayingIndex]);
      }else if (button.classList.contains("match74")) {
          console.log("world");
          const currentplayingIndex = 1;
          videoFun2(match19m3u[currentplayingIndex]);
      }else if (button.classList.contains("match75")) {
          console.log("world");
          const currentplayingIndex = 2;
          videoFun2(match19m3u[currentplayingIndex]);
      }else if (button.classList.contains("match76")) {
          console.log("world");
          const currentplayingIndex = 3;
          videoFun2(match19m3u[currentplayingIndex]);
      }else if (button.classList.contains("match77")) {
        console.log("world");
        const currentplayingIndex = 0;
        videoFun2(match20m3u[currentplayingIndex]);
    }else if (button.classList.contains("match78")) {
        console.log("world");
        const currentplayingIndex = 1;
        videoFun2(match20m3u[currentplayingIndex]);
    }else if (button.classList.contains("match79")) {
        console.log("world");
        const currentplayingIndex = 2;
        videoFun2(match20m3u[currentplayingIndex]);
    }else if (button.classList.contains("match80")) {
        console.log("world");
        const currentplayingIndex = 3;
        videoFun2(match20m3u[currentplayingIndex]);
    }else if (button.classList.contains("match81")) {
      console.log("world");
      const currentplayingIndex = 0;
      videoFun2(match21m3u[currentplayingIndex]);
  }else if (button.classList.contains("match82")) {
      console.log("world");
      const currentplayingIndex = 1;
      videoFun2(match21m3u[currentplayingIndex]);
  }else if (button.classList.contains("match83")) {
      console.log("world");
      const currentplayingIndex = 2;
      videoFun2(match21m3u[currentplayingIndex]);
  }else if (button.classList.contains("match84")) {
      console.log("world");
      const currentplayingIndex = 3;
      videoFun2(match21m3u[currentplayingIndex]);
  }
      })
    })


const videoFun = (currentplayingIndex) => {
  let m3uUrlTag = m3uUrl[currentplayingIndex];


  openNetworkStreamWithM3U(m3uUrlTag);


function openNetworkStreamWithM3U(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

}

const videoFun1 = (m3u8URL) => {
  
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
  
      // Try to open the custom URL
      window.location.href = networkStreamPlayerURL;
    } else {
      // Show a message or provide a fallback for non-Android devices
      alert("This feature is only available on Android devices.");
    }
  };

  const videoFun2 = (m3u8URL) => {
    console.log("helloWorld");
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      const networkStreamPlayerURL = `intent://${m3u8URL}#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
  
      // Try to open the custom URL
      window.location.href = networkStreamPlayerURL;
    } else {
      // Show a message or provide a fallback for non-Android devices
      alert("This feature is only available on Android devices.");
    }
  };






/*const Livebtn1 =document.getElementsByClassName("livebtn1")[0];
Livebtn1.addEventListener("click",() => {
  console.log("hello")
  const currentplayingIndex = 0; // Change this to the desired m3u8 URL index to play
   videoFun2(m3uUrl[currentplayingIndex]);
  homeImagesTag.style.display = "block";
})*/








  


/*var m3uUrlTag = "https://tv.mahar.live:443/mahar/website.stream/mahar/website2/chunks.m3u8";

clickTag.addEventListener('click', () => {
  console.log('helloworld');
  openNetworkStreamWithM3U(m3uUrl);
});

function openNetworkStreamWithM3U(url) {
  var win = window.open(url, '_blank');
  win.focus();
} */



 /*menu.addEventListener('click', (event) => {
  const target = event.target.id;
 // const targetLiTag = document.getElementById(target);
  console.log(target);
  

  if (target.tagName === 'A') {
    // Remove active class from all menu items
    const menuItems = menu.getElementsByTagName('a');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('active');
    }

    // Add active class to the clicked menu item
    target.classList.add('active');
  }
}); 
*/

const homeLink = document.getElementById("0");
const aboutLink = document.getElementById("1");


homeLink.addEventListener("click", () => {
  console.log("hello");
  if(homeImagesTag.style.display === "none"){
   // homeImagesTag.innerHTML = "";
   marqueTag.style.display = "block";
    homeImagesTag.style.display = "block";
  
    containerTag.style.display = "none";
    containerTag1.style.display = "none";
   // liveChannel();
    
  }if(containerTag.style.display === "flex"){
    marqueTag.style.display = "block";
  }
})



/*const sportDiv = document.getElementById("sportId");

async function sportFun() {
  try {
    const response = await fetch('sportchannel.html');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const htmlContent = await response.text();

    // Insert the content into the DOM
    const sportDiv = document.getElementById("sportId");
    sportDiv.innerHTML = htmlContent;
  } catch (error) {
    console.error('Error fetching the HTML file:', error);
  }
}
*/
/*<div class="btg1">


<button class="btn mt-4 livebtn1">Server4 HD</button>
<button onclick="window.location.href='intent://tiphistory.aungaung74.repl.co/live.m3u8#Intent;scheme=https;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end';" class="btn mt-4">Server5 SD</button>
<button onclick="window.location.href='intent://1123139281.cdn.khmer-hd.com/may1HD/chunks.m3u8?|Referer=https://xem2.xoilac12.org/#Intent;action=android.intent.action.VIEW;scheme=https;type=video/mp4;end';" class="btn mt-4">Server6 SD</button></div> 
*/

/*const todayTip = document.createComment("div");
todayTip.classList.add("tipBtn");
todayTip.textContent = "Tip";
tipTable.append(todayTip);
const todayTip = document.createElement('div');
todayTip.className = 'tipContainer';
todayTip.innerHTML = "today history"

tipTable.append(todayTip);
const retrievedText = todayTip.innerHTML;
console.log(retrievedText);*/
/*
const tipTable = document.getElementsByClassName("tipTable")[0];
const todayTip = document.createElement('div');
todayTip.className = 'tipContainer';

const button = document.createElement('button');
button.className = "tipbtn"
button.textContent = 'Tip ရွေးချယ်မှူမရှိသေးပါ..'; // Tip ရွေးချယ်မှူမရှိသေးပါ..ယနေ့ညအတွက် Tip ကြည့်ရှု့ရန်နှိပ်ပါ..
button.addEventListener('click', () => {
    // Do something when the button is clicked
    console.log("Button clicked!");
  // window.location.href = "tip.html"
});

todayTip.appendChild(button);
tipTable.append(todayTip); 

const marque = `<marquee>You connot see my tip..</marquee>`
const marquediv = document.createElement("div");
marquediv.innerHTML = marque;
//todayTip.append(marque);
tipTable.appendChild(marquediv);*/