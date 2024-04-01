import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ItemListService } from 'src/app/core/services/item-list.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  foodItems: any[] = [];
  preference: string = 'any';
  findItem: string = '';
  pageSize: number = 6;
  currentPage: number = 0;

  constructor(public itemService: ItemListService,
              private titleService: Title,
              private authService: UserLoginService
    ) { 
      titleService.setTitle('ZomatoClone | Home')
    }

  userLoggedIn: boolean = false;
  userName: string = '';
  ngOnInit(): void {
    this.itemService.getItem().subscribe(data => this.foodItems = data);
    //For user details
    this.authService.userLoggedIn$.subscribe(loggedIn => {
      this.userLoggedIn = loggedIn;
    });
    this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
  }
  

  get filteredItems(): any[] {
    if (this.preference === 'any' && !this.findItem.trim()) {
      return this.foodItems;
    } else {
      return this.foodItems.filter(item => {
        const preferenceMatch = this.preference === 'any' || this.preference === item.preference;
        const nameMatch = !this.findItem.trim() || item.name.toLowerCase().includes(this.findItem.trim().toLowerCase());
        return preferenceMatch && nameMatch;
      });
    }
  }

  get pagedItems(): any[] {
    const startIndex = this.currentPage * this.pageSize;
    return this.filteredItems.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
  }

}
