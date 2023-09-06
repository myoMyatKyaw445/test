const channelContainerTag = document.getElementsByClassName("channelContainer")[0];
const m3uUrl = [
  "183.89.246.119:8881/play/a07u/index.m3u8","183.89.246.119:8881/play/a07v/index.m3u8",
  "tv.mahar.live/mahar/website.stream/mahar/website1/chunks.m3u8","183.89.246.119:8881/play/a082/index.m3u8",
  "183.89.246.119:8881/play/a081/index.m3u8","183.89.246.119:8881/play/a080/index.m3u8",
  "183.89.246.119:8881/play/a07x/index.m3u8","183.89.246.119:8881/play/a07y/index.m3u8",
  "5a13fe32ef748.streamlock.net/mmplay/mrtv-entertainment/chunklist_w1067780513.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8yLzIwMjMgNTo0NDozNyBQTSZoYXNoX3ZhbHVlPVdtRkx1ZEc1Z2xOMTNHdjRsUDRnV2c9PSZ2YWxpZG1pbnV0ZXM9NjAmc3RybV9sZW49MjU%3D","183.89.246.119:8881/play/a07w/index.m3u8",
  "183.89.246.119:8881/play/a07l/index.m3u8","183.89.246.119:8881/play/a07z/index.m3u8",
  "streammain.myanmartvchannels.com:999/website-channelk-stream/website-channelk-stream/chunks.m3u8?nimblesessionid=604812&wmsAuthSign=c2VydmVyX3RpbWU9OC8yLzIwMjMgNTo0Mzo0MCBQTSZoYXNoX3ZhbHVlPW92SDZhcDVKaWx1V2R1SkV0MUpYQ2c9PSZ2YWxpZG1pbnV0ZXM9NjAmc3RybV9sZW49NDc=",
  
]

const sportm3u = ["clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115758","clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115508",
"clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115513","clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115515",
"starshare.live:8080/live/76547654/76547654/9400.ts","starshare.live:8080/live/76547654/76547654/9401.ts",
"dai.google.com/linear/hls/event/wG75n5U8RrOKiFzaWObXbA/master.m3u8","dai.google.com/linear/hls/event/V9h-iyOxRiGp41ppQScDSQ/master.m3u8",
"dai.google.com/linear/hls/event/ltsCG7TBSCSDmyq0rQtvSA/master.m3u8","dai.google.com/linear/hls/event/smYybI_JToWaHzwoxSE9qA/master.m3u8",
"starshare.live:8080/live/76547654/76547654/9891.ts","live.geoiptv.org:8880/live/tvgp/r050qPk8XT/10126.ts",
"xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/53660.ts","xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/53663.ts",
"109.123.238.74:80/play/gdWLX5L-1xKVBYPffNa4hyqqB9jTow1sJH2BdHgVSC-s7g3VJgwfQ10AuebJk9dA/ts","109.123.238.74:80/play/gdWLX5L-1xKVBYPffNa4hyqqB9jTow1sJH2BdHgVSC_PD8Kq4OOfVr5P0M-WSNBq/ts",
"109.123.238.74:80/play/gdWLX5L-1xKVBYPffNa4hyqqB9jTow1sJH2BdHgVSC9Xgq4doNukwwzy2JJgIC23/ts",
 


]

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
    title : "CHANNEL-7",
    thumbnail : "images/channel7.jpg",
    uploadDate: new Date(2023, 6, 9),
    viewCount: 600,
  },
  
  { 
    id: "2",
    title : "MAHAR",
    thumbnail : "https://rb.gy/891z4",
    uploadDate: new Date(2023, 6, 6),
    viewCount: 500,
  },
  {
    id : "3",
    title : "FORTUNE TV",
    thumbnail : "https://rb.gy/66zsj",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "4",
    title : "YTV",
    thumbnail : "https://rb.gy/jaz3j",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "5",
    title : "CHANNEL K",
    thumbnail : "https://rb.gy/wx8kg",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "6",
    title : "MNTV",
    thumbnail : "https://shorturl.at/ptAR5",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "7",
    title : "CHANNEL 9",
    thumbnail : "https://shorturl.at/ANRY4",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "8",
    title : "CHANNEL ME",
    thumbnail : "https://rb.gy/zoa7l",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "9",
    title : "5 PLUS",
    thumbnail : "https://rb.gy/63rh2",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "10",
    title : "MRTV",
    thumbnail : "https://ln.run/IhhyV",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "11",
    title : "MWD",
    thumbnail : "https://rb.gy/9y3xr",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "12",
    title : "Buddha",
    thumbnail : "https://www.myanmartvchannels.com/assets/images/channeliconb/buddha.jpg",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "13",
    title : "True Premier1",
    thumbnail : "https://cms.dmpcdn.com/livetv/2023/05/03/ba425a00-e966-11ed-be07-cbff4c6d2c94_webp_original.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "14",
    title : "True Premier2",
    thumbnail : "https://cms.dmpcdn.com/livetv/2023/05/03/ba4c4510-e966-11ed-896e-69ce273284a6_webp_original.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "15",
    title : "True Premier3",
    thumbnail : "https://cms.dmpcdn.com/livetv/2019/07/31/d777c947-a608-4d84-b61a-3d1d04d05ba0_original.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "16",
    title : "True Premier4",
    thumbnail : "https://cms.dmpcdn.com/livetv/2019/07/31/75919016-2ada-45ac-8ed5-5ba134c439a9_original.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "17",
    title : "SELECT1 HD",
    thumbnail : "https://tma-live.s3.ap-south-1.amazonaws.com/medias/5989a68c420c3c1917b60295/1600329045685/683_logo.jpg",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "18",
    title : "SELECT2 HD",
    thumbnail : "https://pbs.twimg.com/media/Dm825oUWsAAs1hm.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "19",
    title : "SONY TEN1",
    thumbnail : "https://yt3.googleusercontent.com/LFmcJ26ZKfiWPiHCJ6y505E0VxGlQcj5DLjZDhCsNuc2bNNBoeB7hZVms2e028WwRVno1zp8=s900-c-k-c0x00ffffff-no-rj",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "20",
    title : "SONY TEN2",
    thumbnail : "https://yt3.googleusercontent.com/LFmcJ26ZKfiWPiHCJ6y505E0VxGlQcj5DLjZDhCsNuc2bNNBoeB7hZVms2e028WwRVno1zp8=s900-c-k-c0x00ffffff-no-rj",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "21",
    title : "SONY TEN3",
    thumbnail : "https://yt3.googleusercontent.com/LFmcJ26ZKfiWPiHCJ6y505E0VxGlQcj5DLjZDhCsNuc2bNNBoeB7hZVms2e028WwRVno1zp8=s900-c-k-c0x00ffffff-no-rj",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "22",
    title : "SONY TEN4",
    thumbnail : "https://yt3.googleusercontent.com/LFmcJ26ZKfiWPiHCJ6y505E0VxGlQcj5DLjZDhCsNuc2bNNBoeB7hZVms2e028WwRVno1zp8=s900-c-k-c0x00ffffff-no-rj",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  
  {
    id : "23",
    title : "Sky PREMIER",
    thumbnail : "https://pbs.twimg.com/profile_images/1605131756310614017/05qwHae-_400x400.jpg",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "24",
    title : "Sky FOOTBALL",
    thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDii_218f_9NZesAYRix4wat80OJAJ2uRLke_-mqUwGx82O33zsl6Gfao-g_F076Obb0&usqp=CAU",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "25",
    title : "DAZN 1",
    thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/DAZN_1.svg/800px-DAZN_1.svg.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "26",
    title : "DAZN 2",
    thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DAZN_2.svg/640px-DAZN_2.svg.png",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "27",
    title : "MATH FOT1",
    thumbnail : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVvUYyfgOzWopO3uvXWG-lBDRWt4eIuFA7jLOrBe4nEd56wvdGODmluMLg4txdY-2UQ&usqp=CAU",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "28",
    title : "MATH FOT2",
    thumbnail : "https://rb.gy/pe87s",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "29",
    title : "MATH FOT3",
    thumbnail : "https://rb.gy/pe87s",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  
  {
    id : "30",
    title : "Other Channel",
    thumbnail : "images/Tipster King.jpg",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  ];
  
  const updateSortUI = () => {
    videos.forEach((video, index) => {
      const videoTag = document.createElement('div');
      videoTag.className = 'videoContainer2';
      videoTag.innerHTML = `
        <img src="${video.thumbnail}" class="imgLocal img-fluid"/>
        <h6>${video.title}</h6>
       
      `;
      
     
      channelContainerTag.appendChild(videoTag);
    
    
      
  
      videoTag.addEventListener('click', () => {
        if (index === 0) {
          console.log('hello');
         
          
          const currentplayingIndex = 0; // Change this to the desired m3u8 URL index to play
          console.log(m3uUrl[currentplayingIndex])
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        } else if (index === 1) {
          
         
           // Change this to the desired m3u8 URL index to play
           const currentplayingIndex = 1; // Change this to the desired m3u8 URL index to play
          console.log(m3uUrl[currentplayingIndex])
          videoFun1(m3uUrl[currentplayingIndex]);
          containerTag.style.display = "flex";
        } else if (index === 2) {
          console.log('happy');
        
          const currentplayingIndex = 2; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if (index === 3){
        
          const currentplayingIndex = 3; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if(index === 4){
        
          const currentplayingIndex = 4; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if(index === 5){
        
          const currentplayingIndex = 5; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if (index === 6) {
          console.log('world');
        
          const currentplayingIndex = 6; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         
          containerTag.style.display = "flex";
        } else if (index === 7) {
          console.log('happy');
         
          const currentplayingIndex = 7; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if (index === 8){
        
          const currentplayingIndex = 8; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if(index === 9){
          
          const currentplayingIndex = 9; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if(index === 10){
         
          const currentplayingIndex = 10; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if (index === 11) {
          console.log('world');
         
          const currentplayingIndex = 11; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
          containerTag.style.display = "flex";
        } else if (index === 12) {
          console.log('happy');
          const currentplayingIndex = 12; // Change this to the desired m3u8 URL index to play
          videoFun1(m3uUrl[currentplayingIndex]);
         containerTag.style.display = "flex";
        }else if(index === 13){
          const currentplayingIndex1 = 0;
          videoFun1(sportm3u[currentplayingIndex1]);
          console.log(sportm3u[currentplayingIndex1]);
        }else if(index === 14){
          const currentplayingIndex1 = 1;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 15){
          const currentplayingIndex1 = 2;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 16){
          const currentplayingIndex1 = 3;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 17){
          const currentplayingIndex1 = 4;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 18){
          const currentplayingIndex1 = 5;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 19){
          const currentplayingIndex1 = 6;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 20){
          const currentplayingIndex1 = 7;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 21){
          const currentplayingIndex1 = 8;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 22){
          const currentplayingIndex1 = 9;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 23){
          const currentplayingIndex1 = 10;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 24){
          const currentplayingIndex1 = 11;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 25){
          const currentplayingIndex1 = 12;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 26){
          const currentplayingIndex1 = 13;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 27){
          const currentplayingIndex1 = 14;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 28){
          const currentplayingIndex1 = 15;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else if(index === 29){
          const currentplayingIndex1 = 16;
          videoFun1(sportm3u[currentplayingIndex1]);
        }else{
         window.location.href = "channel1.html";
        }
      });
    });
  }

  updateSortUI();
  
  const videoFun = (currentplayingIndex1) => {
    let m3uUrlTag = sportm3u[currentplayingIndex1];
  
  
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
    const videoFun2 = (m3u8URL2) => {
      console.log("helloWorld");
      const isAndroid = /Android/i.test(navigator.userAgent);
    
      if (isAndroid) {
        const networkStreamPlayerURL = `intent://${m3u8URL2}#Intent;scheme=http;type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end`;
    
        // Try to open the custom URL
        window.location.href = networkStreamPlayerURL;
      } else {
        // Show a message or provide a fallback for non-Android devices
        alert("This feature is only available on Android devices.");
      }
    };
  
  