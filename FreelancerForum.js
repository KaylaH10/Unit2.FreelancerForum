const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const occupations = [ "gardener", "teacher", "programmer", "driver"];
  const maxFreelancers = 10;

  function addFreelancer() {
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  }

  const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

  render();

  function render() {
    const programmers = document.querySelector("#programmer");
    const programmerFreelancer = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add(freelancer.occupation);
      return element;
    });
    programmers.append(...programmerFreelancer);
  }

  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }

  render();