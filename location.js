class Location {
    static streetKey = "street";
    static cityKey = "city";
    static stateKey = "state";
    static postcodeKey = "postcode";
  
    constructor({ street, city, state, postcode }) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.postcode = postcode;
    }
  
    static fromJson(json) {
      return new Location({
        street: json ? json[Location.streetKey] : undefined,
        city: json ? json[Location.cityKey] : undefined,
        state: json ? json[Location.stateKey] : undefined,
        postcode: json ? json[Location.postcodeKey]?.toString() : undefined,
      });
    }
  
    toJson() {
      return {
        [Location.streetKey]: this.street,
        [Location.cityKey]: this.city,
        [Location.stateKey]: this.state,
        [Location.postcodeKey]: this.postcode,
      };
    }
  }
  
  export default Location;
  