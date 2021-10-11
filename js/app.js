const bidArray = [];
const savedBids = retrieve();
if (savedBids) {
    for (let bid of savedBids) {
        bidArray.push(bid)
    }
} else {
    bidArray.push('First Bidder: $5');
    bidArray.push('Second Bidder: $7');
}


function render() {
    let arrayHtml = `<ul class="list-group">`;
    for (let bid of bidArray) {
        arrayHtml += `<li class="list-group-item">${bid}</li>`;
    };
    arrayHtml += `</ul>`;
    document.getElementById('arrayDisplay').innerHTML = arrayHtml;
    document.getElementById('bid1').value = '';
    document.getElementById('bid2').value = '';
};
function addBid() {
    let bidInput1 = document.getElementById('bid1').value;
    let bidInput2 = document.getElementById('bid2').value;
    if (bidInput1) {
        bidArray.push(`First Bidder: $${bidInput1}`);
    } else if (bidInput2) {
        bidArray.push(`Second Bidder: $${bidInput2}`);
    };
    render();
    save();
};

function save() {
    const bidArrayString = JSON.stringify(bidArray);
    localStorage.setItem('bidArray', bidArrayString);
};

function retrieve() {
    const bidArrayString = localStorage.getItem('bidArray');
    const parsedBidArray = JSON.parse(bidArrayString);
    return parsedBidArray;
}
render()