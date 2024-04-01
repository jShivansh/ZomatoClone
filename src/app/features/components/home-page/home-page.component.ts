import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foodItems = [
    {
      "id": 1,
      "name": "Pizza",
      "price": 499,
      "rating": 4.5,
      "image" : "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg"
    },
    {
      "id": 2,
      "name": "Burger",
      "price": 99,
      "rating": 4.2,
      "image" : "https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg"
    },
    {
      "id": 3,
      "name": "Pasta",
      "price": 299,
      "rating": 4.4,
      "image" : "https://img.freepik.com/free-photo/gourmet-italian-bolognese-pasta-with-fresh-parmesan-generated-by-ai_188544-9453.jpg"
    },
    {
      "id": 4,
      "name": "Pav Bhaji",
      "price": 199,
      "rating": 4.8,
      "image" : "https://th.bing.com/th/id/OIG3.gN55KDbb9.gYKNRODCBz?pid=ImgGn"
    },
    {
      "id": 5,
      "name": "Tacos",
      "price": 149,
      "rating": 4.3,
      "image" : "https://th.bing.com/th/id/OIG1.bIRiuMhVZ0oGUYMLQMRE?w=1024&h=1024&rs=1&pid=ImgDetMain"
    },
    {
      "id": 6,
      "name": "Ice Cream",
      "price": 99,
      "rating": 4.1,
      "image" : "https://cdn.pixabay.com/photo/2023/06/24/16/17/ai-generated-8085574_1280.jpg"
    },
    // {
    //   "id": 7,
    //   "name": "Gulab Jamun",
    //   "price": 249,
    //   "rating": 4.9,
    //   "image" : "https://cdn.pixabay.com/photo/2023/06/24/16/17/ai-generated-8085574_1280.jpg"
    // }
  ]

}
