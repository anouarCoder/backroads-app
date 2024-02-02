import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://fb.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  { id: 1, title: "saving money", icon: "fas fa-wallet fa-fw" },
  { id: 2, title: "endless hiking", icon: "fas fa-tree fa-fw" },
  { id: 3, title: "amazing comfort", icon: "fas fa-socks fa-fw" },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2020",
    name: "tibet adventure",
    location: "China",
    icon: "fas fa-map",
    duration: "6 Days",
    cost: "From $2100",
  },
  {
    id: 2,
    image: tour2,
    date: "October 1th, 2020",
    name: "best of java",
    location: "Indonesia",
    icon: "fas fa-map",
    duration: "11 Days",
    cost: "From $1400",
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2020",
    name: "explore honk kong",
    location: "China",
    icon: "fas fa-map",
    duration: "8 Days",
    cost: "From $2100",
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2019",
    name: "Kenya Highlights",
    location: "Kenya",
    icon: "fas fa-map",
    duration: "20 Days",
    cost: "From $3300",
  },
  {
    id: 5,
    image: tour5,
    date: "December 5th, 2024",
    name: "African Savannah",
    location: "Zanzibar",
    icon: "fas fa-map",
    duration: "10 Days",
    cost: "From $15000",
  },
  {
    id: 6,
    image: tour6,
    date: "March 3rd 2022",
    name: "Taj Mahal Tour",
    location: "India",
    icon: "fas fa-map",
    duration: "1 Days",
    cost: "From $500",
  },
];
