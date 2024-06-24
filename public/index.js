




fetch('data.json')
.then(response => response.json())
.then(json => {
    const flexContainer = document.querySelector('.flex-container');
    const navLink = document.querySelectorAll('.nav-links');
    const daily = document.querySelector('.daily');
    const weekly = document.querySelector('.weekly');
    const monthly = document.querySelector('.monthly');
    const chosen = document.querySelector('.chosen');

    let realhtml = '';

  //   for (let i = 0; i < navLink.length; i++) {
  //     navLink[i].addEventListener("click", function() {
  //       if(navLink[i].classList.contains('chosen')) {
  //         navLink[i].classList.remove('chosen')
  //       } else {
  //         navLink[i].classList.add('chosen')
  //       }
  //     });
  // }


  function displaycontent(duration) {
    json.forEach(time => {

      let dailyhtml = `
      <div class="body-container">
      <img src="./public/images/icon-${time.img}.svg" alt="an icon representing the event"/>
      <div class="content">
        <div>
          <span class="title">${time.title}</span><img src="./public/images/icon-ellipsis.svg" alt="an ellipsis icon"/>
        </div>
         <div>
          <span class="current">${time.timeframes.daily.current}hrs</span>
         <span class="previous">Previous - ${time.timeframes.daily.previous}hrs</span>
        </div>
      </div>
    </div>`;

        let weeklyhtml = `
        <div class="body-container">
        <img src="./public/images/icon-${time.img}.svg" alt="an icon representing the event"/>
        <div class="content">
          <div>
            <span class="title">${time.title}</span><img src="./public/images/icon-ellipsis.svg" alt="an ellipsis icon"/>
          </div>
           <div>
            <span class="current">${time.timeframes.weekly.current}hrs</span>
           <span class="previous">Previous - ${time.timeframes.weekly.previous}hrs</span>
          </div>
        </div>
      </div>`;


      let monthlyhtml = `
      <div class="body-container">
      <img src="./public/images/icon-${time.img}.svg" alt="an icon representing the event"/>
      <div class="content">
        <div>
          <span class="title">${time.title}</span><img src="./public/images/icon-ellipsis.svg" alt="an ellipsis icon"/>
        </div>
         <div>
          <span class="current">${time.timeframes.monthly.current}hrs</span>
         <span class="previous">Previous - ${time.timeframes.monthly.previous}hrs</span>
        </div>
      </div>
    </div>`;
      
    let html = '';
      if (duration == 'daily') {
         html = dailyhtml; 
      } else if (duration == 'weekly') {
        html = weeklyhtml;
      } else if (duration == 'monthly') {
        html = monthlyhtml;
      }

      realhtml += html;
    // if (daily.classList.contains('chosen')){
    //   realhtml += html;
    // } else if (weekly.classList.contains('chosen')) {
    //   realhtml = html;
    // } else if(monthly.classList.contains('chosen')) {
    //   realhtml += monthlyhtml;
    // };
    })
    flexContainer.innerHTML = realhtml;
    console.log(realhtml)
  }

  displaycontent('weekly');

  daily.addEventListener('click', () => {
    for(let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove('chosen');
      }
      daily.classList.add('chosen');

      realhtml = '';
      displaycontent('daily');
      
  });

  weekly.addEventListener('click', () => {
    for(let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove('chosen');
      }
      weekly.classList.add('chosen');
      realhtml = '';
      displaycontent('weekly');
  });

  monthly.addEventListener('click', () => {
    for(let i = 0; i < navLink.length; i++) {
          navLink[i].classList.remove('chosen');
      }
      monthly.classList.add('chosen')
      realhtml = '';
      displaycontent('monthly');
  })

    })

