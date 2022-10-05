import {Component} from "@angular/core";
@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent{
  sobangai = 5;

  tangbangai(){
    if(this.sobangai < 10) {
      this.sobangai++;
    }
  }
  giambangai(){
    if(this.sobangai > 0) {
      this.sobangai--;
    }
  }


}
