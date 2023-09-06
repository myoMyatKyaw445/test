const sportClassTag = document.getElementsByClassName("sportClass")[0];
const containerTag1 = document.getElementsByClassName("containerTag")[0];
const buttonContainerTag = document.getElementsByClassName("buttonContainer")[0];
const sportvideos =  [
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
    thumbnail : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAACClBMVEX////TqX//9wD99AD/+ABGAADVq4D9/f+oWAjb2slEAADz6gDGZwmpWwnFaAtCAAD47wDh4NE6AABRAABKAAD/+57s5AD/+B7MxADk3ACjOyH9/fWXkQCrWgi2Rye7YQm/agyzYguXTwpQAAD/9r1eGQDLbAv//+P39rj49qL398H//5j4+OPEvQD4+f/Z0QDr5DP39s+rpACIggCupwCePSIzAAB6MQb09Ojs5Kniz4vewm/Ws1PNp0nZvmDj15fn0nLRqDenawCGPwBoIABtPQBgCwB3OACKTAC2jiXSvE7YuT3YkRfhnxrJihjYhxS7mCK/eRPs3o24iQDaeQ6PWgCaSAqdWw9iHgDBmwDr3bOyVADMdxDgzp2/bx+mdT+ScDZ7bTyaZDFrbzCHgTO2pk2jlDdxXS3PrnJeSx1mYRm+n0vswn//36jUrF2EciJARR9ITgmyizxvTRLqx5BDPAHdzbTVv5tzXVZLKCiefTtENwCHWjn5sFuzdDRXOwAXKwDRpGq4iFdBKgDTkFL/674zNgDEi0v+yJMdIABnMwCygGKtXTCRJADa1VP49FXHwUHEv1SiWkDo43Ll30b39G9IIwC9cD3Gw5SsakytqnWHLhy8km4fLQC5c0mHOiYrQQB/eiRkLSJRRDsxLyR+Z02BXEaGaBJtdj6rpVlmWT/Sto1RLxyfjWKuAeVrAAAJAElEQVR4nO3Zj1cT2RUH8MlMkhmYJAxJyE9CSDBDEhJgkCFR0O5mgIB0t2okBF1X/AEiCK4uQssurGhWXaCisoIFatb1R8tq/8feNwkebLftqaenA8f7OYckL5lwXr7nvps3E4pCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhP5/vMlk0qv1JPYBr3TocHvHkSMdRw//JhrTejZ7WvSTT1NKp81qqLB3dad7eo8dwrz+hUN9qU6DPfTbzz63pT/73YmQvdzWc/wTjOtXSH0pm3IiZfeLltqgv7a2Npj7/ETQnh48qfXM9hz2ZCZUrpwSRbPfUquGFYCbQCBtN/T3YXG9J9nXb88ZfFBUgSwJywc5JcRAIKDkBjpzg6e1nt9ekhxMd4unvlAgrFq4sQTPQGoKBGZOfAHVZcuc1XqGe4d3sNNgIRn5LRaL8uW5ofPnh85dyFqgsKC4zGZDXQZrq4Q9ki63myCn2oT45dDFS8NHQcfIxcsDpLp8EJbNnpnWepZ7xGiPLRskq89ivjI2fnVi4gA4NHF18tpXA37ISgmYlVAmqfU094SyVJ0oioGsKA5cvzE1NTERVR2YmJiaHPs6YE7Xms3mRHpc63nuCb0htaoC2f6xBWMxK2uFBGndnzIaZ28qsBA5s1KewoVIUTMDFQkROpb49c0F3dTU/WhY+r3V+of6aHhiakpnnP0m4OPM5pwh1Kv1TPeAjM0Qyoomkxmy0kFhheulb+fm5qfrw99DWDrj0Hc+czARVOr6sbSm+0OiWKtw4i3Iyjg19X24/vTt+XvnzqphGeG5yz2JIOwfBkI3tJ6r5m6E/LAIxcCdWaMaFlTW6fxcPj9THymGpVu4FYCmxZnrUpVaT1Zj3pTBYoKOVXuX5KIjYUWle/n8vCSRnkWeNA51+TiOM5d3vdF6thqb7qlQROhYXbO6Ylj3D4Sl6XxeF4tI90nPIqX1A3wfBkOGj34dji6Wh5QsZ7q7oOYC6/Dskrw8N3fhj0tTE6WwjGPphBI0p+0p9S3hhkg4HKmKROFxFO7DMXiuqiriDTdUVVU1NESiXvWoXYMYOT7p3XkXxUZWw9p95g+2YM+egh2pclNdhaS0PDUez/KyLNfIb4pZwfahK0CaVme/2rQeOJxOocntdK6wEjx0Oh5QsSbB6ZbIC3w8zjtXwsWj+LgLBlEqSQ7jVyM83LnJ9R6JdjojGn/yD9BbR/ZYpoEhXSmY2x4ge2TZ49GVAtQt3FGbVrq0eXgo0K7GbYeekainbj3/CJ5iXe7T5AXG1ZgccejpKMU+ZBgXVVntoPUSNd1Ek8Me8fqmMvIfwno9Tddr+bk/SMYODYu0rFIwxsckq3tqWI/fhfWNGlaopxjWqkA7qEOC4IpRkoPm1SupzQ5YXz8yTDNFVbpomqdYGLjhXKqJplco1k0zqxQVEWi3+qtRA+9m4On9JmWFc0JRLPV3CAuKquZZfpmEJet2wrqrgFB5z4z6nicM7Wxc1TugViSeFsh6Ypt5CKtZDYtqYmh9kmqmGQe8AAPByzogMkl6QtMOEhbLtA430fp9V1qpCmunomTXSmEZt0hNrefPfQthebbehWWGylIMpbB+ZGhGEBg6wv5qWFBTNC+RAYRFQQnxsUYHvMPh5pliWGHhdKNrH5ZWxqoUK8u4swplWZ7P384XoHEtGd9bhjs9q5mhXU+H3bTzCQmL2R0WTcKCmnLH2FJYEFOTF8ISHj6dfsSrYbErtBRbofdd12J7DWrPCl7bKSzIKD+3fm8uv+nxFN5v8Eq/2p1hgdFuygvNiIlBz6KfkP/jdEjvlqGgF+JqShBWI6MOoAChtZ0U1LAkPc8LvFB8534yaVPD8o+pRWT8E2nvy5DTen5OfrcOZ9c4H2nwpfMd+JgCSYFxJb1xQe+U2MawPp6kWB46OyxNeOGwehQPGzEYPKWS8OUHDX6V1gvw/hV+e2NjA9bhfiut0a6EaPJnleKm1LhU46nZ3CS7Bw+52yquw2tpJaEoOUOKJW+BMAR9uEHPx4cpaqPVQTtXVpzxDTUYxhmNOoX4SHGgj4ZhrwWDJ3r4TojV62lGX8VG9LCZoLwOeH1lf/3INp2y2hKcX+y6UaysmprN7s2QTGx6aoqbh4U/Q1mZlYpc8YqWq6W6uiUebzm4TUYbB6tb463VkJVXfcHlaj0IgxgZtO4MWltaqluiJ1tAfNXV2uryUqvwXEvrA00//H8rmanoPAXr0HedXHTQeeQL+bn83LPN5fXlby8sF/els4tqy+rsL55IJyuLdi7KlwF29ws7A3WsHsLCIXB4ZVlZJctWqo/JXdl+u4xxfJFc+TOJa+MQS4Fs3eGvMJ8n1mUZFuLoT9liWJn99tn+52Z61bCywZ9GdUs1RZ71ufz6skwePTYan3cF06TBL+J1ZXaw7oyJU2rF4JjxMcQjQ4uXny3PX4AeD8PC1jDsG8xKImHNzGg9V+29Od5WoZDi6nr+6ufNwiakJZOcCgW5UCi8HrnlI4swWJEbZLWeqvbYvpwBorKYuLXn51+8fPny7c/kvFCWX7588eLVyF0lq6ZlHcTCAtODVpPatUTl4vDW0iviNblZ2hq9dMfnCyoBODH8y6daz3NvmDwOG9Ms6fNnfrjUPrpzrcE4Onw95/dxvmAiqywOfvRfhUVs37Xuzpxo8ft9We7KX7fb29uvtrdvX/oq7VN8sAZ9Cas1jj8aliT7htoUOEH0J6B1+UOLV3558ctaOmfy+3wJKC0ube372H/Y2aWy7xo5oc5yEBhHbhKi36+cCUDDygZ83BpmtVtl30jnmWwIYvKnyU0CqopToLJ8oc7uK5jV+9jJY2/b7KWc/IFEaQn6OEPbSB/2q380c2zbCj2rWF5qWDmFy9ouH5vEzeg/S44e235rs7ZxFj9XwUHzsrZZzx/tKNN6XntU8k3H8Pariu5QW1tbd+j134Y72jGqf6NyBnZZR8fHx+FudBoX4H/kTe66tIcQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEII7Ut/B1ib5IY4JcQHAAAAAElFTkSuQmCC",
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
  
  sportvideos.forEach((video, index) => {
    const videoTag = document.createElement('div');
    videoTag.className = 'videoContainer';
    videoTag.innerHTML = `
      <img src="${video.thumbnail}" class="imgLocal img-fluid"/>
      <h6>${video.title}</h6>
      
    `;
    sportClassTag.appendChild(videoTag);

  })
  
 
   /* const buttonTag = document.createElement("button");
      buttonTag.className = "buttonClass"
      buttonContainerTag.append(buttonTag);
     buttonContainerTag.addEventListener("click",() => {
      document.getElementsByClassName("containerTag")[0].style.display = "flex";
     })*/
   
  // Loop through sportvideos and create video elements
  
 
buttonContainerTag.addEventListener("click" , () => {
  let lastClickedContainerId = null;

            // Find the last clicked container and store its ID in localStorage
            for (const container of containerTag1) {
                if (container.style.display === "flex") {
                    lastClickedContainerId = container.id;
                    break;
                }
            }

            // Store the last clicked container's ID in localStorage
            localStorage.setItem("lastClickedContainerId", lastClickedContainerId);

            // Redirect to "index.html"
            window.location.href = "index.html";
});
