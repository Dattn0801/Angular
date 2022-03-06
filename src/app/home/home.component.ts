import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public counter = 0;
  public counterBinhPhuong = 0;
  public name = 'Dat';
  public age = 25;
  public traiCay = ['Tao', 'Cam', 'Nho', 'Quyt'];
  public traiCay2 = [
    { ten: 'Nho', gia: 12, haGia: true },
    { ten: 'Cam', gia: -1, haGia: false },
    { ten: 'Oi', gia: -1, haGia: true },
  ];
  public districts: string[] = [];
  public vietnamData = [
    { city: 'Chon tp', district: [] },
    {
      city: 'An Giang',
      district: [
        'Bà Rịa - Vũng Tàu',
        'Bạc Liêu',
        'Bắc Kạn',
        'Bắc Giang',
        'Bắc Ninh',
        'Bến Tre',
        'Bình Dương',
        'Bình Định',
        'Bình Phước',
        'Bình Thuận',
        'Cà Mau',
        'Cao Bằng',
        'Cần Thơ',
        'Đà Nẵng',
        'Đắk Lắk',
        'Đắk Nông',
        'Đồng Nai',
        'Đồng Tháp',
        'Điện Biên',
        'Gia Lai',
        'Hà Giang',
        'Hà Nam',
        'Hà Nội',
        'Hà Tĩnh',
        'Hải Dương',
        'Hải Phòng',
        'Hòa Bình',
        'Hậu Giang',
        'Hưng Yên',
        'Thành phố Hồ Chí Minh',
        'Khánh Hòa',
        'Kiên Giang',
        'Kon Tum',
        'Lai Châu',
        'Lào Cai',
        'Lạng Sơn',
        'Lâm Đồng',
        'Long An',
        'Nam Định',
        'Nghệ An',
        'Ninh Bình',
        'Ninh Thuận',
        'Phú Thọ',
        'Phú Yên',
        'Quảng Bình',
        'Quảng Nam',
        'Quảng Ngãi',
        'Quảng Ninh',
        'Quảng Trị',
        'Sóc Trăng',
        'Sơn La',
        'Tây Ninh',
        'Thái Bình',
        'Thái Nguyên',
        'Thanh Hóa',
        'Thừa Thiên - Huế',
        'Tiền Giang',
        'Trà Vinh',
        'Tuyên Quang',
        'Vĩnh Long',
        'Vĩnh Phúc',
        'Yên Bái',
      ],
    },
    {
      city: 'Thành phố Long Xuyên',
      district: [
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Thành phố Vũng Tàu',
      district: [
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
  ];

  constructor(private common: CommonService) {}

  ngOnInit(): void {
    console.log('cities = ', this.vietnamData);
    console.log('Trai Cay =', this.traiCay);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.common.counter);
    this.common.counter++;
  }
  public resetName(): void {
    console.log('resetName');
  }
  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }
    //c1
    // const search = this.vietnamData.filter(data=> data.city === city);
    // if(search && search.length>0){
    //   this.districts = search[0].district;
    // }

    //c2
    this.districts =
      this.vietnamData.find((data) => data.city === city)?.district || [];
  }
}
