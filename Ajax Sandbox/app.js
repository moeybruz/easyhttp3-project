// document.getElementById('button').addEventListener('click', loadData);

// function loadData(){
//   // Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   // OPEN
//   xhr.open('GET', 'data.txt', true);

//   xhr.onload = function(){
//     if(this.status === 200){
//       // console.log(this.responseText);
//       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
//     }
//   }
//   xhr.send();
// }

document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

//LOAD SINGLE CUSTOMER

function loadCustomer(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customer = JSON.parse(this.response);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
}

// LOAD MULTIPLE CUSTOMERS

function loadCustomers(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customers = JSON.parse(this.response);

      let output = '';

      customers.forEach(function(customer){
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `;
      });

      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}