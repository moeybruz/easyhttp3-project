/** 
 *Easy HTTP Library
 * @version: 2.0.3
 **/


class EasyHTTP {
  // Make a HTTP GET request
  get(url) {
    fatch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
}