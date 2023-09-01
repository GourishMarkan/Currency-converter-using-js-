const populate = async (value, currency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_19AlzsN3y7DrYvQAucSPk7akQi12rUNvowEE7H5s";
  let response = await fetch(url);
  let rJson = await response.json();
  console.log(rJson);
  document.querySelector(".output").style.display = "block";
  for (let key of Object.keys(rJson["data"])) {
    myStr += ` <tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                </tr> 
            `;
  }
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button is clicked");
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});
