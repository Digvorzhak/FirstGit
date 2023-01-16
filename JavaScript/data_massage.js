
const data = {
  "employees": [
    { "firstName": "John", "lastName": "Doe", "age": 35, "city": "New York", "department": "IT" },
    { "firstName": "Anna", "lastName": "Smith", "age": 25, "city": "Los Angeles", "department": "HR" },
    { "firstName": "Peter", "lastName": "Jones", "age": 45, "city": "Chicago", "department": "IT" }
  ],
  "owners": [
    { "firstName": "Jack", "lastName": "Petter", "age": 55, "city": "New York", "investments": ["Real Estate", "Stock Market"] },
    { "firstName": "Jessy", "lastName": "Petter", "age": 35, "city": "Los Angeles", "investments": ["Technology", "Startups"] }
  ]
};

const newData = {};

for (let key in data) {
  newData[key] = {};
  data[key].forEach(item => {
    const name = `${item.firstName} ${item.lastName}`;
    if (newData[key][item.city]) {
      newData[key][item.city].push({ name, department: item.department, investments: item.investments });
    } else {
      newData[key][item.city] = [{ name, department: item.department, investments: item.investments }];
    }
  });
}
console.log(newData);

/* Output:
  {
    employees: {
    'New York': [ [Object] ],
    'Los Angeles': [ [Object] ],
    Chicago: [ [Object] ]
  },
  owners: { 'New York': [ [Object] ], 'Los Angeles': [ [Object] ] }
}
*/

/*
  In this example, we have a complex object data with two properties "employees" and "owners" that contains an array of objects. We use a for-in loop to loop over the properties of the data object, and then use the forEach method to loop over the array of the current property, for each iteration we create a new object based on the city, and in case the city already exist in the newData object we add the new item to it's array, otherwise we create a new array with that item.

  We use the bracket notation to define the keys and values of the new object, and we use template literals to combine the firstname and the lastname of each employee and owner into one property called name.

  This way we can manipulate the data to fit our desired structure, the new data object will have an object with the name of the department with the city as a property, and the value of that property will be an array of objects, each object contains information about the person such as the name, department, and investments.
*/

const inventoryData = {
  "2022-11-09": {
    "mate-2050": 5.4414162274,
    "mate-5629": 6.4463836497,
    "mate-8482": 8.6505816298,
    "mate-9472": 4.4366018348,
    "mate-3809": 4.125228732,
    "mate-5099": 2.752834505,
    "mate-7221": 22.80708424,
    "mate-3563": 15.9867300795,
    "mate-9452": 11.1557561187,
    "mate-7839": 2.7986340701,
    "mate-7320": 1.802404017,
    "mate-1617": 4.4964012667,
    "mate-5601": 10.8326065801,
    "mate-5896": 11.4704652093,
    "mate-4652": 12.1118477559
  },
  "2022-11-10": {
    "mate-2050": 3.2329013933,
    "mate-5629": 6.4463836497,
    "mate-8482": 8.6505816298,
    "mate-9472": 4.4366018348,
    "mate-3809": 4.125228732,
    "mate-5099": 2.752834505,
    "mate-7221": 22.80708424,
    "mate-3563": 15.9867300795,
    "mate-9452": 11.1557561187,
    "mate-7839": -0.5342068858,
    "mate-7320": 1.802404017,
    "mate-1617": 4.4964012667,
    "mate-5601": 10.8326065801,
    "mate-5896": 11.4704652093,
    "mate-4652": 12.1118477559
  },
  "2022-11-11": {
    "mate-2050": 1.0243865593,
    "mate-5629": 6.4463836497,
    "mate-8482": 8.6505816298,
    "mate-9472": 4.4366018348,
    "mate-3809": 21.636281195,
    "mate-5099": 2.752834505,
    "mate-7221": 22.80708424,
    "mate-3563": 15.9867300795,
    "mate-9452": 11.1557561187,
    "mate-7839": -3.8670478416,
    "mate-7320": 1.802404017,
    "mate-1617": 4.4964012667,
    "mate-5601": 10.8326065801,
    "mate-5896": 79.0906482036,
    "mate-4652": 12.1118477559
  },
  "2022-11-12": {
    "mate-2050": -1.1841282748,
    "mate-5629": 6.4463836497,
    "mate-8482": 8.6505816298,
    "mate-9472": 4.4366018348,
    "mate-3809": 21.636281195,
    "mate-5099": 2.752834505,
    "mate-7221": 22.80708424,
    "mate-3563": 15.9867300795,
    "mate-9452": 11.1557561187,
    "mate-7839": -7.1998887975,
    "mate-7320": 1.802404017,
    "mate-1617": 4.4964012667,
    "mate-5601": 10.8326065801,
    "mate-5896": 79.0906482036,
    "mate-4652": 12.1118477559
  },
};

const ganttData = [
  {
    "machine": "mach-5884",
    "recipe": "rec-001",
    "start": "2022-11-09T00:00:00",
    "end": "2022-11-16T23:59:59"
  },
  {
    "machine": "mach-8995",
    "recipe": "rec-004",
    "start": "2022-11-09T00:00:00",
    "end": "2022-11-11T23:59:59"
  },
  {
    "machine": "mach-8995",
    "recipe": "rec-007",
    "start": "2022-11-12T00:00:00",
    "end": "2022-11-16T23:59:59"
  },
  {
    "machine": "mach-1583",
    "recipe": "rec-005",
    "start": "2022-11-13T00:00:00",
    "end": "2022-11-30T23:59:59"
  },
  {
    "machine": "mach-5304",
    "recipe": "rec-009",
    "start": "2022-11-13T00:00:00",
    "end": "2022-11-30T23:59:59"
  }
];

const parseMaterialsGraphData = (inventoryData) => {
  let data = [];
  let d = inventoryData;

  Object.entries(d).forEach((timeStamp) => {
    const obj = {};
    Object.assign(obj, { date: timeStamp[0], ...timeStamp[1] });
    data.push(obj);
  });

  return data;
};

const ganttColumns = [
  { type: 'string', label: 'Machine ID' },
  { type: 'string', label: 'Machine Name' },
  { type: 'string', label: 'Recipe' },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
  { type: 'number', label: 'Duration' },
  { type: 'number', label: 'N/A' },
  { type: 'string', label: 'Dependencies' },
];

const parseManufacturingData = (ganttData) => {
  const rows = ganttData.map((d) => {
    return [
      d.machine,
      d.machine,
      d.recipe,
      new Date(d.start),
      new Date(d.end),
      new Date(d.end).getTime() - new Date(d.start).getTime(),
      0,
      null,
    ];
  });

  return [ganttColumns, ...rows];
};

console.log(parseMaterialsGraphData(inventoryData));
/*
  Output:
    
[
  {
    date: '2022-11-09',
    'mate-2050': 5.4414162274,
    'mate-5629': 6.4463836497,
    'mate-8482': 8.6505816298,
    'mate-9472': 4.4366018348,
    'mate-3809': 4.125228732,
    'mate-5099': 2.752834505,
    'mate-7221': 22.80708424,
    'mate-3563': 15.9867300795,
    'mate-9452': 11.1557561187,
    'mate-7839': 2.7986340701,
    'mate-7320': 1.802404017,
    'mate-1617': 4.4964012667,
    'mate-5601': 10.8326065801,
    'mate-5896': 11.4704652093,
    'mate-4652': 12.1118477559
  },
  {
    date: '2022-11-10',
    'mate-2050': 3.2329013933,
    'mate-5629': 6.4463836497,
    'mate-8482': 8.6505816298,
    'mate-9472': 4.4366018348,
    'mate-3809': 4.125228732,
    'mate-5099': 2.752834505,
    'mate-7221': 22.80708424,
    'mate-3563': 15.9867300795,
    'mate-9452': 11.1557561187,
    'mate-7839': -0.5342068858,
    'mate-7320': 1.802404017,
    'mate-1617': 4.4964012667,
    'mate-5601': 10.8326065801,
    'mate-5896': 11.4704652093,
    'mate-4652': 12.1118477559
  },
  {
    date: '2022-11-11',
    'mate-2050': 1.0243865593,
    'mate-5629': 6.4463836497,
    'mate-8482': 8.6505816298,
    'mate-9472': 4.4366018348,
    'mate-3809': 21.636281195,
    'mate-5099': 2.752834505,
    'mate-7221': 22.80708424,
    'mate-3563': 15.9867300795,
    'mate-9452': 11.1557561187,
    'mate-7839': -3.8670478416,
    'mate-7320': 1.802404017,
    'mate-1617': 4.4964012667,
    'mate-5601': 10.8326065801,
    'mate-5896': 79.0906482036,
    'mate-4652': 12.1118477559
  },
  {
    date: '2022-11-12',
    'mate-2050': -1.1841282748,
    'mate-5629': 6.4463836497,
    'mate-8482': 8.6505816298,
    'mate-9472': 4.4366018348,
    'mate-3809': 21.636281195,
    'mate-5099': 2.752834505,
    'mate-7221': 22.80708424,
    'mate-3563': 15.9867300795,
    'mate-9452': 11.1557561187,
    'mate-7839': -7.1998887975,
    'mate-7320': 1.802404017,
    'mate-1617': 4.4964012667,
    'mate-5601': 10.8326065801,
    'mate-5896': 79.0906482036,
    'mate-4652': 12.1118477559
  }
]
*/

console.log(parseManufacturingData(ganttData));

/*
  Output:
    [
    'mach-5884',
    'mach-5884',
    'rec-001',
    2022-11-08T22:00:00.000Z,
    2022-11-16T21:59:59.000Z,
    691199000,
    0,
    null
  ],
  [
    'mach-8995',
    'mach-8995',
    'rec-004',
    2022-11-08T22:00:00.000Z,
    2022-11-11T21:59:59.000Z,
    259199000,
    0,
    null
  ],
  [
    'mach-8995',
    'mach-8995',
    'rec-007',
    2022-11-11T22:00:00.000Z,
    2022-11-16T21:59:59.000Z,
    431999000,
    0,
    null
  ],
  [
    'mach-1583',
    'mach-1583',
    'rec-005',
    2022-11-12T22:00:00.000Z,
    2022-11-30T21:59:59.000Z,
    1555199000,
    0,
    null
  ],
  [
    'mach-5304',
    'mach-5304',
    'rec-009',
    2022-11-12T22:00:00.000Z,
    2022-11-30T21:59:59.000Z,
    1555199000,
    0,
    null
  ]
]
*/