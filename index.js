console.log("🚀 Weblate ready!");

const workCards = document.querySelector(".work-cards");

for(let i = 0; i < 6; i++) {
	workCards.innerHTML += `
		<div class="work-card">
			<div class="work-image">
				Screenshot of Project
			</div>
			<div class="work-description">
				<div>
					<div class="project-name">
						<h3>Project Name</h3>
					</div>
					<div class="icons">
						<button>GIT</button>
						<button>ENTER</button>
					</div>
				</div>
				<div class="description-text">
					<p>Short description of your project should be placed here</p>
				</div>
			</div>
		</div>
	`
}

const workDescriptions = []
const workCardImages = document.querySelectorAll(".work-card > .work-image")

const colors = ["pink", "lightblue", "lightgreen", "yellow", "orange", "lightgreen"]

for (let i = 0; i < workCardImages.length; i++) {
	workCardImages[i].style.backgroundColor = colors[i];
}
