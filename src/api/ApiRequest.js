export default new class {

  constructor() {
    this.url = ""
  }

  getCommon() {
    return this.request({
      apikey: "",
    })
  }

  getPage(id) {
    return this.request({
      apikey: "",
      id: id
    })
  }

  async request(parameters) {
    const queryString = Object.keys(parameters).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`
    }).join('&');

    const response = await fetch(`${this.url}/?${queryString}`);
    return await response.json();
  }

}();

