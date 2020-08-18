import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

ngOnInit() {

  //findIndex
  const aux = [1,2,3,4,5,6,7,8];

  const index = aux.findIndex(s => s === 3);
  console.log(index)

  //Filter
  const aux2 = aux.filter(s => s%2 === 0);
  console.log(aux2)

  //map recorre un array y devuelve otro
  const aux3 = aux.map(s => s*2);
  console.log(aux3)

  //sort
  const aux4 = [2,5,1,7,4,8,0]
  const aux5 = aux4.sort();
  console.log('sort: ',aux4)

  //spread operator
  const aux6 = [5,2,7,1,8,3,9]
  const aux7 = [6,4,...aux6];
  console.log('spread: ', aux6)

  //spread 2 con JSON
  const aux8 = {
    name: 'mariana',
    lastname: 'carlo'
  }

  const aux9 = {address: 'Miraflores', ...aux8}
  console.log('spread 2 JSON: ', aux9)

  //destructuring
  const persona = {
    data: {
      name: 'mariana',
      response: [1,2,3]
    },
    address: {
      n: 1,
      extra: 'extra'
    }
  }

  const { data, address } = persona;
  console.log('data:', data)
  console.log('address:', address)

  //conditional operator
  if(2 > 1){
    return '2 es mayor que 1'
  } else {
    return '2 es menor que 1'
  }

  2 > 1 ? '2 es mayor que 1' : '2 es memor que 1';


}

}


