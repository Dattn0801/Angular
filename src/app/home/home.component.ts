import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Dat';
  public age = 25;
  public traiCay =['Tao','Cam','Nho','Quyt'];
  public traiCay2=[
    {ten:'Nho', gia:12, haGia: true},
    {ten:'Cam', gia: -1, haGia: false},
    {ten:'Oi', gia: -1, haGia: true},

  ];
 
  constructor() { }

  ngOnInit(): void {
    console.log('Trai Cay =',this.traiCay)
  }
  public resetName():void{
    console.log('resetName');
  }
}
