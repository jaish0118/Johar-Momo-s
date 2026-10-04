(function(){
var b=document.getElementById('burger'),h=document.body;
b.addEventListener('click',function(){var o=h.classList.toggle('menu-open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.querySelectorAll('#nav a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('menu-open');b.setAttribute('aria-expanded',false)})});
document.getElementById('yr').textContent=new Date().getFullYear();
})();

function changeMomo(button, type, mode) {

  // Is option group ke buttons se active class remove karo
  const parent = button.parentElement;

  parent.querySelectorAll(".momo-type").forEach(function (btn) {
    btn.classList.remove("active");
  });

  // Click kiye hue button ko active karo
  button.classList.add("active");


  // Steam aur Fry ke prices
  const prices = {

    veg: {
      steam: "₹74",
      fry: "₹84"
    },

    soya: {
      steam: "₹89",
      fry: "₹99"
    },

    paneer: {
      steam: "₹118",
      fry: "₹129"
    }

  };


  // Veg Momos
  if (type === "veg") {

    const price = document.getElementById("veg-price");

    if (price) {
      price.textContent = prices.veg[mode];
    }

  }


  // Soya Momos
  if (type === "soya") {

    const price = document.getElementById("soya-price");

    if (price) {
      price.textContent = prices.soya[mode];
    }

  }


  // Paneer Momos
  if (type === "paneer") {

    const price = document.getElementById("paneer-price");

    if (price) {
      price.textContent = prices.paneer[mode];
    }

  }

}