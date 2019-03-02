// Left TODO:
// Witnesses attribution above photo attribution and link to project page (make project page on separate domain)
// Project page should include: About, Inspiration, Feedback Form! Useful Links, Prominent point about "Project by the Witnesses of Climatology with link", The Team: Tilek, Pasha, Olya "girl's gotta code" irzak.
// One page on the site can just be circulating through the options - link a demo. Place to donate? Donate to this project? Hmmm..... guess we can always redonate if we get too much!
// Options regarding timeout from shopping


const facts = [
"The Amazon hosts at least 427 mammal species including the giant otter.",
"The Amazon hosts at least 1300 species of birds.",
"The Amazon is home to at least 378 reptile species.",
"The Amazon is home to at least 400 amphibian species including the charming dart poison frog.",
">3000 species of freshwater fish swim in the Amazon rivers.",
"At least 100,000 invertebrate species inhabit the Amazon.",
"441 new species were discovered in the Amazon from 2010 to 2013 - we ain't seen nothing yet.",
"The Hercules beetle, found in the Amazon, is the strongest creature on earth, capable of carrying 850 times its own body weight.",
"In a 60 acre plot in the Amazon scientists found 1,104 different species of trees, just under what is found in Asia, Europe, and North America combined.",
"Peru’s Manu national park contains at least 1,307 species of butterfly, twice the number found in the United States.",
"There are believed to be 15,000 jaguars alive in the wild today.",
"There are 195 known languages spoken within the Amazon Basin.",
"Of the 160 societies that live within the Amazon rainforest, nearly 50% have no contact with the outside world.",
"20% of the world’s freshwater flows through the Amazon to the sea.",
"The Amazon River is over 4,000 miles long forming the largest river basin in the world.",
"The river basin covers 2,720,000 square miles and includes over 1,100 tributaries.",
"Trees in the Amazon contain nearly 11 years of global carbon emissions.",
"Of the 40,000 plants known to exist in the Amazon, 75% are found only in the Amazon.",
"The biggest tree of the Amazon rainforest is the Kapok Tree. It can grow to 200 feet tall and the trunk can be 10 or 11 feet in diameter.",
"There are more trees in the Amazon than stars in the Milky Way galaxy.",
"There are nearly 1 million insects known to science in the Amazon basin.",
"A single tree in Peru was found to have more species of ants than found in the entire United Kingdom.",
"The Amazon is the world's biggest rainforest, larger than the next two largest rainforests — in the Congo Basin and Indonesia — combined.",
"The Amazon River is by far the world's largest river by volume. It has over 1,100 tributaries, 17 of which are longer than 1000 miles.",
"The Amazon River once flowed west-ward instead of east-ward as it does today. The rise of the Andes caused it to flow into the Atlantic Ocean.",
"The Amazon is estimated to have 16,000 tree species and 390 billion individual trees.",
"The Amazon is thought to have 2.5 million species of insects.",
"Cattle ranching accounts for roughly 70 percent of deforestation in the Amazon.",
"There are approximately 3000 fruits that grow in the rainforest that are edible; of these only 200 are now in use in the Western World. The Indians of the rainforest use over 2000.",
"The toucan is the loudest creature in the Amazon. You can hear it as far as a half mile away.",
"If you were caught in the rain in the Amazon you have about 10 minutes to find your umbrella. The trees are so tightly packed that it can take 10 minutes for the rain to reach the ground below.",
"Amazon natives use rainforest plants regularly but 90% of the ones they use have not been studied by modern science.",
"There are approximately 10 million species of animals, plants and insects known to humanity and more than half of them call the rainforest home.",
"Rainforests once covered 14% of the earth's land surface; now they cover a mere 6%.",
"The Amazon rainforest is also referred to as the ‘Lungs of the Planet' because it produces more than 20% of the world's oxygen.",
"One hectare (2.47 acres) may contain over 750 types of trees and 1500 species of higher plants.",
"Much of our diet originated in the tropical rainforest, a small sampling includes: avocados, bananas, guavas, pineapples, mangos, cayenne, chocolate, ginger, coffee, Brazil nuts and cashews.",
"Vincristine, extracted from the rainforest plant, periwinkle, cures 90% of acute childhood leukemia.",
"The U.S. National Cancer Institute has identified 3000 plants that are active against cancer cells, 70% of which are found in the rainforest.",
"25% of the active ingredients in today's cancer-fighting drugs come from organisms found only in the rainforest.",
"The Amazon is arguably the longest river in the world at 6,992 km, and contains more water than the Mississippi, Nile, and Yangtze combined.",
"The name 'Amazon' was given by Spanish explorer Francisco Orellana, after he was attacked by female warriors named the Icamiabas. He compared them to the Amazons of Greek mythology.",
"The Amazon delivers 55 million gallons of water into the Atlantic ocean every second.",
"The rainforest floor is very dark, with less than 1% of the light making it through the canopy of the trees.",
"The Amazon River’s width varies between 1 and 6.2 miles during the dry season, but but up to 30 miles wide during the rainy season. It is 150 miles wide when it reaches the Atlantic Ocean.",
"The Amazon River Dolphins have traditionally been spared from tribal hunting because they were believed to be magical creatures. They are now threatened by pollution.",
"There are approximately 150 different species of monkeys found in the Amazon.",
"Winds carry mineral-rich dust from the Sahara to the Amazon, depositing over 27 million tons a year. Heavy rains deplete Amazonian phosphorous, while the Sahara replenishes them.",
"The Rio Hamza is a subterranean river underneath the Amazon that is just as long and many times as wide. It runs about 4 kms underground and moves at one millimeter an hour.",
"There are no bridges over the Amazon River because of the dramatic width change in the rainy season.",
"The Amazon is at least 55 million years old. Take that, Pyramids!",
"Norway has donated a billion USD to protect the Amazon rainforest. Thanks Norway! Hey Saudia Arabia...",
"Human settlement in the Amazon dates back to ~11,200 years ago. Studies suggest that the natives of the Amazon were farming the forests to make it more productive.",
"The Amazon's poison dart frog has enough venom that can kill 10 humans.",
"Martin Strel holds the Guinness World Record for swimming the entire length of 5,268 m of the Amazon River for 66 days.",
"In the past years, the Amazon has lost approximately 20% of its extent due to human deforestation."
];

// Many facts are from: http://www.rain-tree.com/facts.htm, Motagabay.com, Amazon Aid Foundation, softschools.com, www.rainforestcruises.com, ietravel.com

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
"https://amazonaid.org/warrior/why-you-should-care/",
"https://www.washingtonpost.com/news/energy-environment/wp/2016/12/02/amazon-deforestation-is-increasing-at-a-time-when-the-planet-can-least-afford-it/",
"https://www.washingtonpost.com/news/speaking-of-science/wp/2018/03/27/archaeologists-discover-81-ancient-settlements-in-the-amazon/?utm_term=.30f9d3cffe4a",
"https://nationalzoo.si.edu/animals/exhibits/amazonia",
"https://rainforests.mongabay.com/amazon/deforestation_calculations.html",
"https://www.hbw.com/ibc/photo/hoatzin-opisthocomus-hoazin/hoatzin-opisthocomus-hoazin-also-known-stinkbird-or-canje",
"https://news.nationalgeographic.com/2017/08/amazon-brazil-new-species-discovered-spd/",
"http://www.rain-tree.com/facts.htm",
"http://www.rain-tree.com/plants.htm",
"https://www.wired.com/2015/02/sahara-keeps-amazon-green/",
"https://www.ietravel.com/blog/30-fascinating-facts-about-brazilian-amazon",
"https://www.theguardian.com/environment/2011/aug/26/underground-river-amazon",
"https://www.ietravel.com/blog/10-cool-creepy-crawlies-found-amazon-rainforest",
"https://www.nationalgeographic.com/environment/2018/12/amazon-rain-forest-conservation-chico-mendes-anniversary-jair-bolsanaro/",
"https://www.nationalgeographic.com/travel/countries/peru-amazon-cruise-traveler/",
"https://news.nationalgeographic.com/news/energy/2010/12/101203-amazon-brazil-carbon-market-deforestation/",
"https://yourshot.nationalgeographic.com/tags/amazon_rainforest/#b/popular",
"https://www.nationalgeographic.com/people-and-culture/food/the-plate/2015/06/04/bolivian-amazon-dwellers-eat-all-the-jungle-offers/",
"https://news.nationalgeographic.com/2017/08/saki-vanzolini-monkey-amazon-rainforest-video-spd/",
"https://www.digital-democracy.org/ourwork/waorani/"
];


const photos = [
  {url:"https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution: "Tim Hill @ Pixabay"},
  {url:"https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Arnie Chou @ Pexels"},
  {url:"https://images.pexels.com/photos/540006/pexels-photo-540006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution: "Chennawit Yulue @ Pexels"},
  {url:"https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", attribution: "Alan Goodfrey @ Unsplash"},
  {url:"https://i.redd.it/72z5zumauy711.jpg", attribution: "valefox @ Reddit"},
  {url:"https://i.imgur.com/3Stiv.jpg", attribution:"Wormholesurfer @ Reddit"},
  {url:"https://i.redd.it/ejxszq33c4401.jpg", attribution: "CaptainGoran @ Reddit"},
  {url:"https://i.imgur.com/7VAyv.jpg", attribution: "Mind_Virus @ Reddit"},
  {url:"https://images.pexels.com/photos/904807/pexels-photo-904807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"icon0 @ pexels"},
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
  {url:"https://images.unsplash.com/photo-1542296803-f4937a45e46b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution:"Nick Fewings @ Unsplash"},
  {url:"https://images.pexels.com/photos/57400/tree-frog-anuran-frog-amphibians-57400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution: "Josch13 @ Pixabay"},
  {url:"https://images.unsplash.com/photo-1520637388405-3a2a895efd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80", attribution: "James Wainscoat @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1504732237180-fec25eb6808c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3151&q=80", attribution:"Stephen Pedersen @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1541897976173-747ef83244b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80", attribution: "John Duncan @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1520636902994-f596446c3728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", attribution: "James Wainscoat @ Unsplash"},
  {url:"https://images.unsplash.com/photo-1529774172307-627a0ae46dae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80", attribution:"Xuan Nguyen @ Unsplash"},
  {url:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", attribution:"Pixabay @ Pexels"}
];



/*
These are all nice, but no hotlinking to pixabay. TODO: Download (be careful to do full res version and store on Wikibabel
  {url:"https://cdn.pixabay.com/photo/2017/09/16/19/33/parrot-2756488_1280.jpg", attribution: "alvaroas8a0 @ Pixabay"},
  {url:"https://cdn.pixabay.com/photo/2013/10/21/15/08/butterfly-199020_1280.jpg", attribution: "stux @ Pixabay"},
  {url:"https://cdn.pixabay.com/photo/2017/09/16/19/34/parrot-2756491_1280.jpg", attribution: "alvaroas8a0 @ Pixabay"} 
  {url:"https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg", attribution:"Sasint @ Pixabay"}, 
  {url:"https://cdn.pixabay.com/photo/2013/09/13/14/18/flower-181984_1280.jpg", attribution:"oom_endro @ Pixabay"},
// background is too light at the top:
https://images.pexels.com/photos/772481/pexels-photo-772481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
*/

// Thanks nice person on Stack overflow - I'm so used to python!
function fillTemplate(str) {
    var args = [].slice.call(arguments, 1), i = 0;
    return str.replace(/%s/g, () => args[i++]);
}

var doc_temp = `
  <html>
    <head>
       <title>Beautiful Amazon Photos</title>
       <script>
          function SetTimeout() {
            // fill in with whatever the the setting was
 	    var shop_time = prompt("Set Minutes of Shopping Time", "%s");
            if (shop_time != null && shop_time != "") {
              var int_shop = Number(shop_time);
  	      if (isNaN(int_shop)) {
                alert("Shopping time must be a number");
              } else {
                console.log("Hello " + shop_time) ;
    		localStorage.setItem("shop_timeout_m", int_shop);
              }
            }
          }
       </script>
    </head>
    <body>
      <div class="fsimg" style="background-image: url('%s');">
      <div class="cent">
      <h2><center><b>%s</b></center></h2>
      </div>
      <div class="left">
          <a href="%s" class="myButton">Keep Shopping</a>
          <a onclick="SetTimeout()" class="myButton">Set Shopping Time</a>
          <a href="%s" class="myButton">Explore</a>
      </div>
      <div class="right">
          <center><img src="%s" width="140" height="54" /></center> 
          <center class="semitrans">Photo by %s</center>
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
}

var shop_timeout_m = 5;
try {
    shop_timeout_m =  localStorage.getItem("shop_timeout_m");
    if (shop_timeout_m == null) {
       shop_timeout_m = 5;
    }
    console.log("shop timeout:" + shop_timeout_m);
} catch (err) {
}


var time_now = new Date().getTime();

const milli_in_s = 1000;
const s_in_m = 60;


if (lasty == 0 || time_now - lasty > milli_in_s * s_in_m * shop_timeout_m) {
   // show photo, update last show timestamp
   localStorage.setItem("last_popup", time_now);
   var target_location = window.location.href;
   var learn_idx = Math.round(Math.random() * (learn.length-1)); 
   var photo_idx = Math.round(Math.random() * (photos.length-1)); 
   var facts_idx = Math.round(Math.random() * (facts.length-1)); 
   console.log(photos[photo_idx].url);
   var our_logo_path = chrome.runtime.getURL("images/blk_reclaim_amazon.png");
   var doc = fillTemplate(doc_temp, shop_timeout_m.toString(), photos[photo_idx].url, facts[facts_idx],
                          target_location, learn[learn_idx], our_logo_path, photos[photo_idx].attribution);
   document.open();
   document.write(doc);
   document.close();
}
// Otherwise continue to page as expected

