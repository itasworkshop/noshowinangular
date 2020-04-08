import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Data } from './data';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const dataAll = [
            {
                "Dimension": "Akil Noor Shaikh",
                "Empcount": 1,
                "Chart": 1
            },
            {
                "Dimension": "Deepak Kumar",
                "Empcount": 1,
                "Chart": 1
            },
            {
                "Dimension": "Govindarajan PA",
                "Empcount": 5,
                "Chart": 1
            },
            {
                "Dimension": "MamathaCariappa A",
                "Empcount": 3,
                "Chart": 1
            },
            {
                "Dimension": "Manoj Leelamani",
                "Empcount": 3,
                "Chart": 1
            },
            {
                "Dimension": "Shivakumar N G",
                "Empcount": 2,
                "Chart": 1
            },
            {
                "Dimension": "Sridhar Gopalakrishnan",
                "Empcount": 1,
                "Chart": 1
            },
            {
                "Dimension": "Stanley dominic",
                "Empcount": 1,
                "Chart": 1
            },
            {
                "Dimension": "VIDYA YM",
                "Empcount": 1,
                "Chart": 1
            },
            {
                "Dimension": "BDC 10",
                "Empcount": 13,
                "Chart": 2
            },
            {
                "Dimension": "BDC 13",
                "Empcount": 2,
                "Chart": 2
            },
            {
                "Dimension": "BDC 5",
                "Empcount": 14,
                "Chart": 2
            },
            {
                "Dimension": "BDC 7",
                "Empcount": 7,
                "Chart": 2
            },
            {
                "Dimension": "BDC 9",
                "Empcount": 2,
                "Chart": 2
            },
            {
                "Dimension": "2020-02-13",
                "Empcount": 4,
                "Chart": 3
            },
            {
                "Dimension": "2020-02-14",
                "Empcount": 3,
                "Chart": 3
            },
            {
                "Dimension": "2020-02-17",
                "Empcount": 2,
                "Chart": 3
            },
            {
                "Dimension": "2020-02-18",
                "Empcount": 3,
                "Chart": 3
            },
            {
                "Dimension": "2020-02-19",
                "Empcount": 1,
                "Chart": 3
            },
            {
                "Dimension": "10:00:23.5070000",
                "Empcount": 1,
                "Chart": 4
            },
            {
                "Dimension": "11:00:23.5070000",
                "Empcount": 22,
                "Chart": 4
            },
            {
                "Dimension": "12:00:23.5070000",
                "Empcount": 6,
                "Chart": 4
            },
            {
                "Dimension": "13:00:23.5070000",
                "Empcount": 2,
                "Chart": 4
            },
            {
                "Dimension": "14:00:23.5070000",
                "Empcount": 1,
                "Chart": 4
            }
        ];

        const managerlist = [
            {
                "managername": "Akhil Noor Shaikh"
            },

            {
                "managername": "Deepak Kumar"
            },

            {
                "managername": "Govindarajan PA"
            },

            {
                "managername": "Akhil Noor Shaikh"
            },

            {
                "managername": "Deepak Kumar"
            },

            {
                "managername": "Govindarajan PA"
            },

            {
                "managername": "MamathaCariappa A"
            },

            {
                "managername": "Manoj Leelamani"
            },

            {
                "managername": "Maruthi Prasad"
            },

            {
                "managername": "Meet Vastnt"
            },

            {
                "managername": "Mohammed Afzal Shariff"
            },

            {
                "managername": "Rahil Pasha"
            },

            {
                "managername": "Rajan Kharbanda"
            },

            {
                "managername": "Ravi Sankar Reddy"
            },

            {
                "managername": "Satish Kumar"
            },

            {
                "managername": "Seema Kamat"
            },

            {
                "managername": "Shashanka Aithal"
            },

            {
                "managername": "Shivakumar N G"
            },

            {
                "managername": "Sridhar Gopalakrishnan"
            },

            {
                "managername": "Stanley dominic"
            },

            {
                "managername": "VIDYA YM"
            }
        ];

    const managerdata = [
        {
            "Dimension": "Akil Noor Shaikh",
            "Empcount": 5,
            "Chart": 1
        },
        {
            "Dimension": "BDC 5",
            "Empcount": 8,
            "Chart": 2
        },
        {
            "Dimension": "2020-02-03",
            "Empcount": 1,
            "Chart": 3
        },
        {
            "Dimension": "2020-02-04",
            "Empcount": 1,
            "Chart": 3
        },
        {
            "Dimension": "2020-02-14",
            "Empcount": 1,
            "Chart": 3
        },
        {
            "Dimension": "2020-02-16",
            "Empcount": 1,
            "Chart": 3
        }
    ];


        return { dataAll, managerlist ,managerdata};
    }
}