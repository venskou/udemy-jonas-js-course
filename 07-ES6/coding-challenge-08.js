/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees

4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }

  getParkAge() {
    return new Date().getFullYear() - this.buildYear;
  }

  getParkDensity() {
    return (this.trees / this.area).toFixed(2);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 'normal') {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
}

const parks = [
  new Park('Acadia', 1919, 1986, 3242),
  new Park('American Samoa', 1988, 334, 700),
  new Park('Arches', 1971, 3103, 1366),
];

const streets = [
  new Street('Bowery', 1913, 3100, 'huge'),
  new Street('Avenue D', 1854, 1100),
  new Street('FDR Drive', 1956, 800, 'small'),
  new Street('Sixth Avenue', 1980, 600, 'tiny'),
];

class Report {
  constructor(parks, streets) {
    this.parks = parks;
    this.streets = streets;
  }

  getParksTreeDensity() {
    this.parks.forEach(park => {
      console.log(
        `${park.name} has a tree density of ${park.getParkDensity()} trees per square km.`
      );
    });
  }

  getParksAverageAge() {
    let sumAge = 0;
    this.parks.forEach(park => (sumAge += park.getParkAge()));

    return console.log(
      `Our ${this.parks.length} parks have an average age of ${(sumAge / this.parks.length).toFixed(
        2
      )} years.`
    );
  }

  getNormalParks() {
    for (const park of this.parks) {
      if (park.trees > 1000) {
        console.log(`${park.name} park has more than 1000 trees.`);
      } else {
        continue;
      }
    }
  }

  getParksReport() {
    console.log('===== Parks Report =====');
    this.getParksAverageAge();
    this.getParksTreeDensity();
    this.getNormalParks();
  }

  getStreetsAverageLength() {
    let length = 0;
    this.streets.forEach(street => (length += street.length));

    return console.log(
      `Our ${this.streets.length} streets have a total length of ${length.toFixed(
        2
      )}km, with an average of ${(length / this.streets.length).toFixed(2)}km.`
    );
  }

  getStreetsClassifications() {
    this.streets.forEach(street =>
      console.log(`${street.name}, build in ${street.buildYear}, is a ${street.size} street.`)
    );
  }

  getStreetsReport() {
    console.log('===== Streets Report =====');
    this.getStreetsAverageLength();
    this.getStreetsClassifications();
  }

  getReport() {
    this.getParksReport();
    this.getStreetsReport();
  }
}

const endYearReport = new Report(parks, streets);
endYearReport.getReport();
