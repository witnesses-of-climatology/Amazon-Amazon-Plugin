
// VARIABLES SHOULD BE PHOTO URL, THE PAGE THE USER WAS TRYING TO GO TO, ATTRIBUTION
// TODO: ATTRIBUTION, CHANGE PHOTOS -> Can just have a long list of photo urls / Attributions?  
// TODO: Get a list of non profits working in the amazong, and circulate through donating with thier pages


const facts = [
"The Amazon hosts at least 427 mammal species including the giant otter",
"The Amazon hosts at least 1300 species of birds",
"The Amazon is home to at least 378 reptile species",
"The Amazon is home to at least 400 amphibian species including the charming dart poison frog",
">3000 species of freshwater fish swim in the Amazon rivers",
"At least 100,000 invertebrate species inhabit the Amazon",
"441 new species were discovered in the Amazon from 2010 to 2013 - we ain't seen nothing yet",
"The Hercules beetle, found in the Amazon, is the strongest creature on earth, capable of carrying 850 times its own body weight",
"In a 60 acre plot in the Amazon scientists found 1,104 different species of trees, just under what is found in Asia, Europe, and North America combined"
"Peru’s Manu national park contains at least 1,307 species of butterfly, twice the number found in the United States",
"There are believed to be 15,000 jaguars alive in the wild today",
"There are 195 known languages spoken within the Amazon Basin",
"Of the 160 societies that live within the Amazon rainforest, nearly 50% have no contact with the outside world",
"20% of the world’s freshwater flows through the Amazon to the sea",
"The Amazon River is over 4,000 miles long forming the largest river basin in the world",
"The river basin covers 2,720,000 square miles and includes over 1,100 tributaries",
"Trees in the Amazon contain nearly 11 years of global carbon emissions",
"Of the 40,000 plants known to exist in the Amazon, 75% are only found in the Amazon",
"The biggest tree of the Amazon rainforest is the Kapok Tree. It can grow to 200 feet tall and the trunk can be 10 or 11 feet in diameter",
"There are more trees in the Amazon than stars in the Milky Way galaxy",
"There are nearly 1 million insects known to science in the Amazon basin",
"A single tree in Peru was found to have more species of ants than found in the entire United Kingdom",

]

// Many of these facts came from Amazon Aid Foundation - attribution by linking to many of their awesome pages in the learn section

const learn = [
"https://www.globalforestwatch.org/dashboards/country/BRA",
"https://en.wikipedia.org/wiki/Amazon_rainforest",
"https://www.wri.org/our-work/topics/forests",
"https://www.ran.org/issue/forests/",
"https://www.worldwildlife.org/places/amazon",
"https://rainforests.mongabay.com/amazon/",
"https://www.conservation.org/where/Pages/amazonia.aspx",
"https://www.conservation.org/projects/Pages/kayapo-stewards-of-the-forests-brazil.aspx",
"https://www.regnskog.no/en/what-we-do/the-amazon",
"https://sciencing.com/ecosystem-amazon-rainforest-6495612.html",
"https://www.nature.org/en-us/get-involved/how-to-help/places-we-protect/amazon-rainforest/",
"https://www.sciencemag.org/news/2015/10/feature-how-amazon-became-crucible-life",
"http://wwf.panda.org/knowledge_hub/where_we_work/amazon/about_the_amazon/wildlife_amazon/",
"http://wwf.panda.org/knowledge_hub/where_we_work/amazon/species/amazon_species_report_2010_2013/",
"https://www.worldwildlife.org/stories/what-animals-live-in-the-amazon-and-8-other-amazon-facts",
"https://www.theguardian.com/environment/gallery/2017/sep/06/upto-381-new-species-discovered-in-the-amazon-in-pictures",
"https://www.worldatlas.com/articles/what-animals-live-in-the-amazon-rainforest.html",
"http://www.bbc.com/earth/story/20150422-the-worlds-most-poisonous-animal",
"https://www.rainforest-alliance.org/species/poison-dart-frog",
"https://www.discoverwildlife.com/animal-facts/mammals/facts-about-jaguars/",
"https://en.wikipedia.org/wiki/Amazon_river_dolphin",
"https://amazonaid.org/species/giant-river-otter/",
"https://amazonaid.org/resources/about-the-amazon/",
"https://amazonaid.org/resources/",
"https://amazonaid.org/birds/",
"https://amazonaid.org/species/giant-waxy-tree-frog/",
"https://amazonaid.org/warrior/why-you-should-care/"

];


const photos = [
  {url:"https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution: "Tim Hill @ Pixabay"},
  {url:"https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Arnie Chou @ Pexels"},
  {url:"https://images.pexels.com/photos/540006/pexels-photo-540006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution: "Chennawit Yulue @ Pexels"},
  {url:"https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", attribution: "Alan Goodfrey @ Unsplash"},
  {url:"https://i.redd.it/72z5zumauy711.jpg", attribution: "valefox @ Reddit"},
  {url:"http://i.imgur.com/3Stiv.jpg", attribution:"Wormholesurfer @ Reddit"},
  {url:"https://i.redd.it/ejxszq33c4401.jpg", attribution: "CaptainGoran @ Reddit"},
  {url:"http://i.imgur.com/7VAyv.jpg", attribution: "Mind_Virus @ Reddit"},
  {url:"https://images.pexels.com/photos/904807/pexels-photo-904807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"icon0 @ pexels"},
  {url:"https://images.pexels.com/photos/772481/pexels-photo-772481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Renan Bomtempo @ Pexels"},
  {url:"https://images.pexels.com/photos/1123767/pexels-photo-1123767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Cesar Aguilar @ Pexels"},
  {url:"https://images.pexels.com/photos/1385474/pexels-photo-1385474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Simon Matzinger @ Pexels"},
  {url:"https://images.pexels.com/photos/1385474/pexels-photo-1385474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Mahir Dalloul @ Pexels"},
  {url:"https://images.pexels.com/photos/753250/pexels-photo-753250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Egor Kamelev @ Pexels"},
  {url:"https://images.pexels.com/photos/784602/pexels-photo-784602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Jits @ Pexels"},
  {url:"https://images.pexels.com/photos/927498/pexels-photo-927498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Egor Kamelev @ Pexels"},
  {url:"https://images.pexels.com/photos/753249/pexels-photo-753249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Egor Kamelev @ Pexels"},
  {url:"https://images.pexels.com/photos/57021/pexels-photo-57021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attrbution:"Claire Thibault @ Pexels"},
  {url:"https://images.pexels.com/photos/332153/pexels-photo-332153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Nicholas Santasier @ Pexels"},
  {url:"https://images.pexels.com/photos/819368/pexels-photo-819368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Sebastian Voortman @ Pexels"},
  {url:"https://images.pexels.com/photos/1322599/pexels-photo-1322599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Rajesh Balouria @ Pexels"},
  {url:"https://images.pexels.com/photos/1055379/pexels-photo-1055379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Daniel Frese @ Pexels"},
  {url:"https://images.pexels.com/photos/631909/pexels-photo-631909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Agnieszka Palmowska @ Pexels"},
  {url:"https://cdn.pixabay.com/photo/2013/09/13/14/18/flower-181984_1280.jpg", attribution:"oom_endro @ Pixabay"},
  {url:"https://images.pexels.com/photos/119591/pexels-photo-119591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Joey Kyber @ Pexels"},
  {url:"https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Zaw Win Tun @ Pexels"},
  {url:"https://images.pexels.com/photos/339614/pexels-photo-339614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Nandhu Kumar @ Pexels"},
  {url:"https://images.pexels.com/photos/1591928/pexels-photo-1591928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Ray Bilcliff @ Pexels"},
  {url:"https://images.pexels.com/photos/730905/lily-water-pink-pond-730905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Peter Heeling @ Pexels"},
  {url:"https://images.pexels.com/photos/1481145/pexels-photo-1481145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Felice Cristiano @ Pexels"},
  {url:"https://images.unsplash.com/photo-1530215078880-605aa750b7bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80", attribution:"Paulius Fragunas @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1447957781261-96a39620d6d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80", attribution:"Andrew Coelho @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1451587910776-e7c3c3a94441?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", attribution:"Debora Tingley @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1515632229029-87c6df36a2c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1638&q=80", attribution:"David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1521938739809-0f40f1cfd90c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80", attribution:"Ryan Kosmides @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1512987034533-0170964e02f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", attribution:"Luca Huter @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1537750806518-9779b1aa90d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80", attribution:"Jimmy Chang @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1522783887977-eda9e2e55430?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80", attribution:"Tiago Fioreze @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1544177817-a197b1d0a3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80", attribution:"Agto Nugroho @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1458430447310-8b6c596117a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution:"Steve Bittinger @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1511132972173-58eebd7409d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution:"Conor Luddy @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1523772849-5ffc814469be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "Yunchuan Luo @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1548189936-4c7eedd5edb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "Gabriel Testoni @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1531203586808-3820069c6b96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80", attribution: "Perry Grone @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "veeterzy @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1518707101210-10794fcdc3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3155&q=80", attribution: "Jacob Plumb @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1544119170-f6fbc1f4cfca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "Pascal Debrunner @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1529576123454-a12c036db670?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3155&q=80", attribution: "Mattia Pavesia @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1516540438350-9db0f4e6552f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "Anton Darius @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1511373141981-a14416aef59b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2989&q=80", attribution: "Presian Nedyalkov @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1465125814219-8db953e138c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", attribution:"Erwan Hesry @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1517200578024-62d131797ec8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3102&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1548894817-c0e7f6faaaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3119&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1540772601639-8901c851b2fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3133&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1540772892267-11272e8a9e7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3147&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1538439907460-1596cafd4eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3138&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1526004666140-1863a31e024f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1502780787199-5bdc5502db3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3172&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1502780402662-acc01c084a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3180&q=80", attribution: "David Clode @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1513137389744-267d0b623771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80", attribution: "Atik Sulianami @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1518715179561-57faf0b9fd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3152&q=80", attribution: "Aditya Hermawan @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1542296803-f4937a45e46b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution:"Nick Fewings @ Unsplash"}
];



/*
These are all nice, but no hotlinking to pixabay. TODO: Download (be careful to do full res version and store on Wikibabel
  {url:"https://cdn.pixabay.com/photo/2017/09/16/19/33/parrot-2756488_1280.jpg", attribution: "alvaroas8a0 @ Pixabay"},
  {url:"https://cdn.pixabay.com/photo/2013/10/21/15/08/butterfly-199020_1280.jpg", attribution: "stux @ Pixabay"},
  {url:"https://cdn.pixabay.com/photo/2017/09/16/19/34/parrot-2756491_1280.jpg", attribution: "alvaroas8a0 @ Pixabay"} 
  {url:"https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg", attribution:"Sasint @ Pixabay"}, 
*/

// Thanks nice person on Stack overflow - I'm so used to python!
function fillTemplate(str) {
    var args = [].slice.call(arguments, 1), i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

var target_location="https://www.cnn.com";
var doc_temp = `
  <html>
    <head>
       <title>Beautiful Amazon Photos</title>
    </head>
    <body>
      <img class="fsimg" src="%s">
      <div class="top">
         <div class="left">
             <a href="%s" class="myButton">Keep Shopping</a>
             <a href="%s" class="myButton">Learn Something</a>
         </div>
      </div>
    </body>
  </html>`;


// TODO:  Check support for local storage first!
var lasty = 0;

try {
    lasty =  localStorage.getItem("last_popup");
} catch (err) {
  console.log("First Usage!");
  lasty = 0;
}

var time_now = new Date().getTime();

// Popup Every 5 minutes -> This should probably be a setting
var minutes_between_forests = 1;
const mili_in_s = 1000;
const s_in_m = 60;

if (lasty == 0 || time_now - lasty > 1000 *60*minutes_between_forests) {
   // show photo, update last show timestamp
   localStorage.setItem("last_popup", time_now);
   target_location = window.location.href;
   var learn_idx = Math.round(Math.random() * (learn.length-1)); 
   var photo_idx = Math.round(Math.random() * (photos.length-1)); 
   console.log(photos[photo_idx].url);
   var doc = fillTemplate(doc_temp, photos[photo_idx].url, target_location, learn[learn_idx]);
   //window.open("https://www.pexels.com/search/rainforest/");
   document.open();
   document.write(doc);
   document.close();
}
// Otherwise continue to page as expected

