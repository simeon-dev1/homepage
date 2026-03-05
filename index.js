console.log("🚀 Weblate ready!");

const workCards = document.querySelector(".work-cards");

for(let i = 0; i < 6; i++) {
	workCards.innerHTML += `
		<div class="work-card">
			<div class="work-image">
				<h3>Screenshot of Project</h3>
			</div>
			<div class="work-description">
				<div>
					<div class="project-name">
						<h3>Project Name</h3>
					</div>
					<div class="icons">
					    <button><i class="fa-brands fa-github"></i></button>
					    <button><i class="fa-solid fa-arrow-right-to-bracket"></i></button>
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
