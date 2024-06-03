export default class AirportService {

 static async getAllAirports() {
    const req = await fetch(`http://localhost:8080/airport`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (req.ok) {
      const res = await req.json();
      return res;
    }
  }

  static async postAirport(state) {
    const req = await fetch(`http://localhost:8080/airport`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (req.ok) {
      const res = await req.json();
      return res;
    }
  }

  static async deleteAirport(airportId) {
    await fetch(`http://localhost:8080/airport/` + airportId, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  }

  static async getAirport(airportId) {
    const req = await fetch(`http://localhost:8080/airport/` + airportId, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (req.ok) {
      const res = await req.json();
      return res;
    }
  }

  static async putAirport(airportId, airport) {
    const req = await fetch(`http://localhost:8080/airport/` + airportId, {
      method: "PUT",
      body: JSON.stringify(airport),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    if (req.ok) {
      const res = await req.json();
      return res;
    }
  }
}