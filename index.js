console.log("🚀 Weblate ready!");

const workCards = document.querySelector(".work-cards");

for(i = 0; i < 6; i++) {
	workCards.innerHTML += `
		<div>
			<div class="image">
				Screenshot of Project
			</div>
			<div class="work-description">
				<div>
					<div class="project-name">
					</div>
					<div class="icons">
						<button>GIT</button>
						<button>ENTER</button>
					</div>
				</div>
				<div class="project-description">
				</div>
			</div>
		</div>
	`
}
