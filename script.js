var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  // Select and cache the <main>element in a variable named mainEl.
  const mainEl = document.querySelector("main");
  
  
  // Set the background color of mainElto the value stored in the --main-bgCSS custom property.
  mainEl.style.backgroundColor = `var(--main-bg)`;
  
  
  // Set the content of mainElto <h1>SEI Rocks!</h1>.
  let headEl = document.createElement("h1");
  
  headEl.textContent = "SEI Rocks!";
  
  mainEl.appendChild(headEl);
  
  
  
  // Add a class of flex-ctr to mainEl.
  mainEl.classList.add("flex-ctr");
  
  // Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
  const topMenuEl = document.querySelector("#top-menu");
  
  // Set the height topMenuElelement to be 100%.
  topMenuEl.style.height = '100%';
  
  
  // Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
  topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
  
  
  // Add a class of flex-aroundto topMenuEl.
  topMenuEl.classList.add("flex-around");
  
  
  
  menuLinks.forEach(function (link) {
    const aEl = document.createElement("a");
    aEl.href = link.href;
    aEl.textContent = link.text;
    topMenuEl.appendChild(aEl);
  });
  
  
  