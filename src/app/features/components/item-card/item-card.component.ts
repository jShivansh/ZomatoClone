import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BuyPopupComponent } from 'src/app/shared/components/buy-popup/buy-popup.component';
import { PopUpComponent } from 'src/app/shared/components/pop-up/pop-up.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: any;

  randomNumber: number;
  constructor(public dialog: MatDialog) { }

  openDialog(item: any){
    // let dialogRef = 
    this.dialog.open(PopUpComponent, {data: {item: item}});
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result is ${result}`);
    // });
  }

  openBuyDialog(item: any){
    // let buyDialogRef = 
    this.dialog.open(BuyPopupComponent, {data: {item: item}});
    // buyDialogRef.afterClosed().subscribe(result => {
    //   console.log(`You total is ${result}`);
    // });
  }


  ngOnInit(): void {
    this.randomNumber = this.generateRandomNumber(15, 30);
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  

}
