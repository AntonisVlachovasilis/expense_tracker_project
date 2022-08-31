const add = document.querySelector('#add');
const expName = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const table = document.querySelector('#tbody');


add.addEventListener('click', (e => {
    e.preventDefault()
    const body = document.createElement('td');
    const name = expName.value;
    const expDate = date.value;
    const expAmount = amount.value;
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    cell1.innerText = name;
    const cell2 = row.insertCell(1);
    cell2.innerText = expDate;
    const cell3 = row.insertCell(2);
    cell3.innerText = expAmount;

    const xBut = document.createElement('button')
    xBut.classList.add('xBut');
    xBut.innerText = 'X';
    const cell4 = row.insertCell(3);
    cell4.appendChild(xBut);

    xBut.addEventListener('click', () => {
        table.remove(row);
    })
    expName.value = "";
    date.value = "";
    amount.value = "";

}))