export default class FligtService {

  static async getAllFlights() {
    const req = await fetch(`http://localhost:8080/flight`, {
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

  static async postFlight(state) {
    const req = await fetch(`http://localhost:8080/flight`, {
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

  static async deleteFlight(flightId) {
    await fetch(`http://localhost:8080/flight/` + flightId, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
  }

  static async getFlight(flightId) {
    const req = await fetch(`http://localhost:8080/flight/` + flightId, {
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

  static async putFlight(flightId, flight) {
    const req = await fetch(`http://localhost:8080/flight/` + flightId, {
      method: "PUT",
      body: JSON.stringify(flight),
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