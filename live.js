const homeImagesTag = document.getElementsByClassName("homeImages")[0];
const livecontainer = document.createElement("span");
 livecontainer.classList.add("liveClass");

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
homeImagesTag.append(livecontainer);

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

