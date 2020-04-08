import { Component } from '@angular/core';
import { NsserviceService } from './nsservice.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noshowinangular';
  ManagerList = [];
  ManagerName = [];
  facility = [];
  bEmpcount = [];
  pEmpcount = [];
  barchart = [];
  piechart = [];
  manager_name: string;
  selectedManager: string;

  constructor(private service: NsserviceService) { console.log("from app construcor"); }

  ngOnInit() {
    this.service.getListofmanagerdata().subscribe((result: any) => {
      this.ManagerList = result;
    });
    /* this.service.getData().subscribe((result: any) => {
      result.forEach(element => {
        if (element.Chart == 1) {
          this.bEmpcount.splice(0, length);
          this.ManagerName.push(element.Dimension);
          this.bEmpcount.push(element.Empcount);
        }
        else if (element.Chart == 2) {
          this.facility.splice(0, length);
          this.pEmpcount.splice(0, length);
          this.facility.push(element.Dimension);
          this.pEmpcount.push(element.Empcount);
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
    }); */
  }

  onSelect(event) {
    this.selectedManager = event.target.value;
    console.log("this is from appcmponent", this.selectedManager)
  }
  
} 