import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {
ngOnInit(): void {
  this.onload();
}
  
onload() {
  alert(1)
  const c = setTimeout(() => {
    
    clearTimeout(c);
  }, 1000);
};

}
