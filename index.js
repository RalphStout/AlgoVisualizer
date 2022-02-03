const container = document.querySelector(".data_container");

// ---------------Code that creates the bars and values---------------------------//



function generatebars(num = 20){
    for(let i = 0; i < num; i += 1){
        const value = Math.floor(Math.random() * 100) + 1;

        const bar = document.createElement("div");
        bar.classList.add("bar");  
        bar.style.height = `${value * 3}px`;
        bar.style.transform = `translateX(${i * 30}px`;

        const barLabel = document.createElement("label");
        barLabel.classList.add("bar_id");
        barLabel.innerHTML = value;
        barLabel.innerText = value;
        
        bar.appendChild(barLabel);

        container.appendChild(bar);
    }
}

//--------------------code for Selection Sort------------------------------------------//

async function SelectionSort(delay = 300){
    let bars = document.querySelectorAll(".bar");

    var min_idx = 0;
    
    for(var i = 0; i < bars.length; i+= 1){
        min_idx = i;
        
        bars[i].style.backgroundColor = "darkblue";

        for(var j = i + 1; j < bars.length; j += 1){
            bars[j].style.backgroundColor = "red";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            var val1 = parseInt(bars[j].childNodes[0].innerHTML);
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            if(val1 < val2){
                if(min_idx !== i){
                    bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
                }
                min_idx = j;
            }
            else{
                bars[j].style.backgroundColor = "rgb(24, 190, 255)"
            }
        }

        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;

        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );

        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }

    document.getElementById("button1").disabled = false;
    document.getElementById("button1").style.backgroundColor = "#6f459e";

    document.getElementById("button2").disabled = false;
    document.getElementById("button2").style.backgroundColor = "#6f459e";
}

//--------------------code for bubble sort------------------------------------------//

function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;


        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}


async function BubbleSort(delay = 300){
    let bars = document.querySelectorAll(".bar");

    for(var i = 0; i < bars.length-1; i++)
    {
      for(var j = 0; j < bars.length - i - 1; j++)
      {
        bars[j].style.backgroundColor = "darkblue";
        bars[j+1].style.backgroundColor = "red";

        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 250)
        );

        var value1 = Number(bars[j].childNodes[0].innerHTML);
        var value2 = Number(bars[j + 1].childNodes[0].innerHTML);

        if (value1 > value2) 
        {
            await swap(bars[j], bars[j + 1]);
            bars = document.querySelectorAll(".bar");
        }

        bars[j].style.backgroundColor = "rgb(24, 190, 255)";
        bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";

      }

      bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
    }

    document.getElementById("button1").disabled = false;
    document.getElementById("button1").style.backgroundColor = "#6f459e";

    document.getElementById("button2").disabled = false;
    document.getElementById("button2").style.backgroundColor = "#6f459e";
}


//----------------------------------------------------------------------//

generatebars();

function generate(){
  window.location.reload();
}

function disable(){

  document.getElementById("button1").disabled = true;
  document.getElementById("button1").style.backgroundColor = "#d8b6ff";
  
  document.getElementById("button2").disabled = true;
  document.getElementById("button2").style.backgroundColor = "#d8b6ff"; 

  document.getElementById("button3").disabled = true;
  document.getElementById("button3").style.backgroundColor = "#d8b6ff"; 
}

