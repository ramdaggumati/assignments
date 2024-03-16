//question4: write a class to calculate the Uber price.
class UberPriceCalculator {
    constructor(distanceInKm, timeInMinutes) {
      this.distanceInKm = distanceInKm;
      this.timeInMinutes = timeInMinutes;
    }

    calculatePrice() {
      var baseFare = 5; // Base fare
      var costPerKm = 1.5; // Cost per kilometer
      var costPerMinute = 0.25; // Cost per minute
      // Calculate the fare
      var fare = baseFare + (this.distanceInKm * costPerKm + this.timeInMinutes * costPerMinute) ;
      return fare.toFixed(2); // Round to two decimal places

    }
  }
  
  // Example usage:
  
  var distance = 10; // Distance in kilometers
  var time = 20; // Time in minutes
  
  var uberTrip = new UberPriceCalculator(distance, time);
  var fare = uberTrip.calculatePrice();
  console.log(`The estimated Uber fare is ${fare}`);