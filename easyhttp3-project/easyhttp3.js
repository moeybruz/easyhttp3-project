/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Samuel
 * @license MIT
 * 
 **/

class EasyHTTP {
  // Make a HTTP GET request
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  }

  // Make a HTTP POST request
  async post(url, data) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }

  // Make a HTTP PUT request
  async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const resData = await response.json();
      return resData;
  }

  // Make a HTTP DELETE request
  async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const resData = await 'Resource deleted';
      return resData;
  }
}