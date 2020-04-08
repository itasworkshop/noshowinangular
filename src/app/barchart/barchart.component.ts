import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { NsserviceService } from '../nsservice.service';
import { IfStmt } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit,OnChanges{

  @Input() manager;
  data: any = [];
  ManagerName: any = [];
  bEmpcount: any = [];
  barchart: any = [];
  selectedmanager: any = [];

  constructor(private service: NsserviceService) { }


 ngOnChanges() {
    console.log("this is from barchart", this.manager);
    let reqOBJ = { "MangerName": this.manager, }
    console.log(reqOBJ);

    this.service.getamanagerdata().subscribe((result: any) => {
      result.forEach(element => {
        if (this.manager &&element.Chart == 1) {
          this.ManagerName.splice(0, this.ManagerName.length);
          this.bEmpcount.splice(0, this.bEmpcount.length);
          console.log("OnchaneDate barchart", element.Dimension);
          console.log("OnchaneDate barchart", element.Empcount);
          this.ManagerName.push(element.Dimension);
          this.bEmpcount.push(element.Empcount);
          console.log("OnchaneDate", this.ManagerName.length);
          console.log("OnchaneData", this.bEmpcount);
          console.log("lables before ",this.barchart.data.labels)
          //this.barchart.data.labels.push(this.ManagerName);
          console.log("lables after ",this.barchart.data.labels)
          this.barchart.data.datasets.push(this.bEmpcount);
          this.barchart.update();
        }
      });
      console.log("this is from selected person", Response);
    })
  } 

  ngOnInit(){
    this.service.getData().subscribe((result: any) => {
      result.forEach(element => {
        if (element.Chart == 1) {          
          this.ManagerName.push(element.Dimension);
          this.bEmpcount.push(element.Empcount);
        }        
      });
      this
      this.barchart = new Chart('barc', {
        type: 'bar',
        data: {
          labels: this.ManagerName,
          datasets: [
            {
              data: this.bEmpcount,
              borderColor: '#3cba9f',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
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
