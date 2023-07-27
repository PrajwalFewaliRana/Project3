import img1 from "../assets/ppl1.jpg";
import img2 from "../assets/ppl2.jpg";
import img3 from "../assets/ppl3.jpg";
import img4 from "../assets/terrance.jpg";
import img5 from "../assets/ann.jpg";
import img6 from "../assets/baudha.jpg";
import img7 from "../assets/bhaktapur.jpg";
import img8 from "../assets/chandragiri.jpg";
import img9 from "../assets/dhaulagiri.jpg";
import img10 from "../assets/janakpur.jpg";
import img11 from "../assets/namche.jpg";
import img12 from "../assets/pkr.jpg";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

import image1 from "../assets/Paris.jpg";
import image2 from "../assets/Bora Bora.jpg";
import image3 from "../assets/Glacier National Park.jpg";
import image4 from "../assets/rome.jpg";
import image5 from "../assets/Swiss Alps.jpg";
import image6 from "../assets/Maui.jpg";
import image7 from "../assets/London,England.jpg";
import image8 from "../assets/Turks & Caicos.jpg";
import image9 from "../assets/Tokyo.jpg";

export const RecentTrips = [
  {
    img: image1,
    name: "Paris",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "France's magnetic City of Light is a perennial tourist destination, drawing visitors with its iconic attractions, like the Eiffel Tower and the Louvre, and its unmistakable je ne sais quoi. Quaint cafes, trendy shopping districts and Haussmann architecture give Paris its timeless beauty. But the city's best asset is that you're likely to discover something new with each trip or season (read: Paris is always a good idea).",
  },
  {
    img: image2,
    name: "Bora Bora",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "What this 12-square-mile French Polynesian island may lack in size it makes up for in sheer tropical beauty. Here, you'll find picturesque beaches, lush jungles and luxurious resorts set on surrounding islets. The island's extinct volcano, Mount Otemanu, makes for a great photo-op or challenging hike, and the friendly Bora Bora locals can help you catch a glimpse of the island's best sights during an off-road excursion.",
  },
  {
    img: image3,
    name: "Glacier National Park",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "Snow-capped peaks, alpine meadows and azure lakes are just a few reasons why Glacier National Park is one of America's most striking parks. There are more than 700 miles of hiking trails in this Montana crown jewel, plus 13 designated areas for camping. In the winter, travelers can enjoy snowshoeing and skiing, while during the summer vacationers can go swimming in Lake McDonald and whitewater rafting on Flathead River, among other popular activities.",
  },
  {
    img: image4,
    name: "Rome",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "When you visit Italy's capital city, prepare to cross a few must-see landmarks including the Colosseum, the Trevi Fountain and the Pantheon off of your bucket list. Travelers can also see some of Italy's greatest treasures, including St. Peter's Basilica and the Sistine Chapel, in Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere, or head to Mercato Centrale Roma to sample local delicacies like pistachio gelato.",
  },
  {
    img: image5,
    name: "Swiss Alps",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "Snow-covered mountains, charming towns and flower-strewn meadows make the Swiss Alps a year-round fairy tale destination. Visit in the winter for world-class skiing (and après-ski fondue and drinks) in locales such as the exclusive St. Moritz and the picturesque Zermatt, home of the craggy Matterhorn. Opt for warmer months to hike through the verdant valleys of Swiss National Park or attend lively festivals in the foothill city of Montreux.",
  },
  {
    img: image6,
    name: "Maui",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "Whether you're driving along the Road to Hana, enjoying a bird's-eye view of Maui's lush coastline from a helicopter, snorkeling with sea turtles or simply relaxing on white or black sand beaches, you'll find that this Hawaiian island is unlike any other tropical destination. Don't miss a chance to visit Haleakala National Park, which is home to one of the world's largest dormant volcanic craters and boasts surreal sunrises.",
  },
  {
    img: image7,
    name: "London, England",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, join a tour that takes you past top spots like the Tate Modern art institution, Buckingham Palace, the Tower of London, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub for a Sunday roast.",
  },
  {
    img: image8,
    name: "Turks & Caicos",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "Located north of the Dominican Republic, this collection of roughly 100 islands and cays is popular with honeymooners – and for good reason. With sparkling white sand, crystal-clear water and nearly 350 miles of colorful coral reef, the Turks and Caicos Islands are truly a sight to behold. While you'd be remiss to visit this quintessential Caribbean wonder and not spend a day or two lounging on Grace Bay Beach on Providenciales, those seeking a more active getaway will have plenty of opportunities to snorkel, scuba dive and ride horses along the coast. ",
  },
  {
    img: image9,
    name: "Tokyo, Japan",
    icon: <AiFillStar />,
    ratings: "5.0",
    text: "Simply setting foot in Japan's frenetic capital city is an experience. Known for its bustling streets and flashing neon signs, Tokyo has an electric energy and ample top attractions to discover. Foodies won't be let down by Tokyo's fresh sushi and hearty ramen (not to mention more Michelin-starred restaurants than any other city in the world). Shopaholics will find plenty of must-have designer products in Ginza, while those seeking a respite in nature can visit Shinjuku Gyoen or Yoyogi Park. ",
  },
];

export const PopularDestination = [
  {
    img: img1,
    name: "Alhambra",
    icon: <CiLocationOn />,
    location: "Spain",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img2,
    name: "Anse sea beach",
    icon: <CiLocationOn />,
    location: "Seychelles",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img3,
    name: "Cappadocia",
    icon: <CiLocationOn />,
    location: "Turkey",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img4,
    name: "Terrace",
    icon: <CiLocationOn />,
    location: "Bali",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img5,
    name: "Annapurna I",
    icon: <CiLocationOn />,
    location: "Nepal",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img6,
    name: "The Boudhanath Stupa",
    icon: <CiLocationOn />,
    location: "Kathmandu",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img7,
    name: "Bhaktapur",
    icon: <CiLocationOn />,
    location: "Nepal",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img8,
    name: "Chandragiri",
    icon: <CiLocationOn />,
    location: "Nepal",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img9,
    name: "Dhaulagiri",
    icon: <CiLocationOn />,
    location: "Nepal",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img10,
    name: "Janaki Temple",
    icon: <CiLocationOn />,
    location: "Jankpur",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img11,
    name: "Namche Bazar",
    icon: <CiLocationOn />,
    location: "Nepal",
    price: "$350.00",
    btn: "Start trip",
  },
  {
    img: img12,
    name: "Pokhara",
    icon: <CiLocationOn />,
    location: "Nepal",
    price: "$350.00",
    btn: "Start trip",
  },
];
