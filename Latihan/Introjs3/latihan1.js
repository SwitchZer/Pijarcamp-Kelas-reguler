function getData(method, url) {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        resolve(result);
      } else {
        reject("ada error bro...");
      }
    };
  });
}

getData("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    res.map((item) => {
      console.log(item.title);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.map((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
