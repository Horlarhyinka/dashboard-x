const ctx = document.querySelector("#donut-chart")

console.log(ctx)

new Chart(ctx, {
  type:'doughnut',
  data: {
    label: [],
    datasets: [
      {
        backgroundColor: ["#E9067C", "#E3E0DE", "#F6C263", "#95D1FD", "#9797FC"],
        borderWidth: 10,
        data: [18.5, 3, 18.5, 32, 8],
        borderColor: "#131B3D"
      }
    ],
  },
  options:{
    cutout: "70%"
  }
});