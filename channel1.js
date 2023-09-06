const channelContainerTag = document.getElementsByClassName("channelContainer1")[0];
const m3uUrl = [
  "aanax.com:8080/live/LeCyGodF/thYAg86ShLywX9FL/49539.ts","aanax.com:8080/live/LeCyGodF/thYAg86ShLywX9FL/267542.ts",
  "starshare.live:8080/live/76547654/76547654/9384.ts","starshare.live:8080/live/76547654/76547654/152373.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/99441.ts","live.geoiptv.org:8880/live/tvgp/r050qPk8XT/579510.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/109672.ts","starshare.live:8080/live/76547654/76547654/3360.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/79790.ts","live.geoiptv.org:8880/live/tvgp/r050qPk8XT/117725.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/716491.ts","live.geoiptv.org:8880/live/tvgp/r050qPk8XT/612846.ts",
  "aanax.com:8080/live/LeCyGodF/thYAg86ShLywX9FL/146068.ts","aanax.com:8080/live/LeCyGodF/thYAg86ShLywX9FL/157556.ts",
  "aanax.com:8080/live/LeCyGodF/thYAg86ShLywX9FL/157557.ts","aanax.com:8080/live/LeCyGodF/thYAg86ShLywX9FL/157558.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/688314.ts","live.geoiptv.org:8880/live/tvgp/r050qPk8XT/688316.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/688318.ts","live.geoiptv.org:8880/live/tvgp/r050qPk8XT/136388.ts",
  "live.geoiptv.org:8880/live/tvgp/r050qPk8XT/117660.ts",
]

const sportm3u = ["clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115758","clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115508",
"clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115513","clientsportals.com:80/wP9b1G99m7/gG4GpsN1/115515",
"clientsportals.com:80/wP9b1G99m7/gG4GpsN1/517244","clientsportals.com:80/wP9b1G99m7/gG4GpsN1/517245",
"dai.google.com/linear/hls/event/wG75n5U8RrOKiFzaWObXbA/master.m3u8","dai.google.com/linear/hls/event/V9h-iyOxRiGp41ppQScDSQ/master.m3u8",
"dai.google.com/linear/hls/event/ltsCG7TBSCSDmyq0rQtvSA/master.m3u8","dai.google.com/linear/hls/event/smYybI_JToWaHzwoxSE9qA/master.m3u8",
"xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/36.ts","xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/27.ts",
"xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/53660.ts","xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/53663.ts",
"xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/52559.ts","xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/52560.ts",
"xplatinmedia.com:8080/live/@petrusenko_k/Vsrgz2svDM3T/52561.ts",
 


]

const videos =  [
    {
      id : "0",
      title : "SONY PIX",
      thumbnail : "https://rb.gy/052x0",
      uploadDate: new Date(2023, 6, 7),
      viewCount: 500,
  },
  
  {
    id : "1",
    title : "STARMOVIE SELECT",
    thumbnail : "https://rb.gy/zlmnb",
    uploadDate: new Date(2023, 6, 9),
    viewCount: 600,
  },
  
  { 
    id: "2",
    title : "STARMOVIE",
    thumbnail : "https://rb.gy/h019z",
    uploadDate: new Date(2023, 6, 6),
    viewCount: 500,
  },
  {
    id : "3",
    title : "HBO",
    thumbnail : "https://ln.run/lnVUU",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "4",
    title : "CARTOON NETWORK",
    thumbnail : "https://rb.gy/l7ane",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "5",
    title : "DISNEY+ HD",
    thumbnail : "https://ln.run/AXqu9",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "6",
    title : "DISNEY JR",
    thumbnail : "https://ln.run/AXqu9",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "7",
    title : "NATGEO WILD",
    thumbnail : "https://ln.run/pPvrD",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "8",
    title : "ANIMAL PLANET HD",
    thumbnail : "https://ln.run/-CIAo",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "9",
    title : "NAT Geographic HD",
    thumbnail : "https://ln.run/OcWhy",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "10",
    title : "SuperSport PremierLeague",
    thumbnail : "https://ln.run/jt9MR",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "11",
    title : "Canal+ Sport1 HD",
    thumbnail : "https://ln.run/yE8s-",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "12",
    title : "Astro SuperSport",
    thumbnail : "https://ln.run/yEdAv",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "13",
    title : "Astro SuperSport2",
    thumbnail : "https://ln.run/yEdAv",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "14",
    title : "Astro SuperSport3",
    thumbnail : "https://ln.run/yEdAv",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "15",
    title : "Astro SuperSport4",
    thumbnail : "https://ln.run/yEdAv",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "16",
    title : "BT Sport1",
    thumbnail : "https://ln.run/CNQt4",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "17",
    title : "BT Sport2",
    thumbnail : "https://ln.run/CNQt4",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "18",
    title : "BT Sport3",
    thumbnail : "https://ln.run/CNQt4",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "19",
    title : "MU TV",
    thumbnail : "https://ln.run/bZxXL",
    uploadDate: new Date(2023, 6, 7),
    viewCount: 500,
  },
  {
    id : "20",
    title : "LFC TV",
    thumbnail : "https://ln.run/NaDUA",
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
        <h6 class"h6class">${video.title}</h6>
       
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
          const currentplayingIndex1 = 13;
          videoFun1(m3uUrl[currentplayingIndex1]);
          console.log(sportm3u[currentplayingIndex1]);
        }else if(index === 14){
          const currentplayingIndex1 = 14;
          videoFun1(m3uUrl[currentplayingIndex1]);
        }else if(index === 15){
          const currentplayingIndex1 = 15;
          videoFun1(m3uUrl[currentplayingIndex1]);
        }else if(index === 16){
          const currentplayingIndex1 = 16;
          videoFun1(m3uUrl[currentplayingIndex1]);
        }else if(index === 17){
          const currentplayingIndex1 = 17;
          videoFun1(m3uUrl[currentplayingIndex1]);
        }else if(index === 18){
          const currentplayingIndex1 = 18;
          videoFun1(m3uUrl[currentplayingIndex1]);
        }else if(index === 19){
          const currentplayingIndex1 = 19;
          videoFun1(m3uUrl[currentplayingIndex1]);
        }else if(index === 20){
          const currentplayingIndex1 = 20;
          videoFun1(m3uUrl[currentplayingIndex1]);
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
  
  