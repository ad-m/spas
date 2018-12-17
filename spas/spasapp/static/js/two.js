function two() {
  var myChart = document.getElementById('myChart').getContext('2d');

  var massPopChart = new Chart(myChart, {
      type:'radar', //bar, horizontalBar, pie, Line, doughnut, radar, polarArea
      data:{
        labels:['John', 'Mic', 'Sara', 'Frank', 'Ann', 'Elsa'],
        datasets:[{
          label:'Students Attendance',
          data:[
            182,
            220,
            120,
            82,
            300,
            420
          ],
          //backgroundColor: ''
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(129, 45, 211, 0.6)',
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#F94388'
        }]
      },
    });
  }
