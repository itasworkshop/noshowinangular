import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NsserviceService } from '../nsservice.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  @Input() manager;
  data: any = [];  
  pEmpcount: any = [];
  piechart: any = [];
  facility = [];
  selectedmanager: any = [];

  constructor(private service: NsserviceService) { }


 ngOnChanges() {
    console.log("this is from piechart", this.manager);
    let reqOBJ = { "MangerName": this.manager, }
    console.log(reqOBJ);

    this.service.getamanagerdata().subscribe((result: any) => {
      result.forEach(element => {
        if (this.manager &&element.Chart == 2) {
          this.facility.splice(0, this.facility.length);
          this.pEmpcount.splice(0, this.pEmpcount.length);
          console.log("OnchaneDate piechart", element.Dimension);
          console.log("OnchaneDate piechart", element.Empcount);
          this.facility.push(element.Dimension);
          this.pEmpcount.push(element.Empcount);
          console.log("OnchaneDate", this.facility.length);
          console.log("OnchaneData", this.pEmpcount);
          console.log("lables before ",this.piechart.data.labels)
          //this.piechart.data.labels.push(this.facility);
          console.log("lables after ",this.piechart.data.labels)
          this.piechart.data.datasets.push(this.pEmpcount);
          this.piechart.update();
        }
      });
      console.log("this is from selected person", Response);
    })
  } 

  ngOnInit(){
    this.service.getData().subscribe((result: any) => {
      result.forEach(element => {
        if (element.Chart == 2) {          
          this.facility.push(element.Dimension);
          this.pEmpcount.push(element.Empcount);
        }        
      });
      this
      this.piechart = new Chart('piec', {
        type: 'pie',
        data: {
          labels: this.facility,
          datasets: [
            {
              data: this.pEmpcount,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red",
                "Blue"
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
        
    });
  }
}
