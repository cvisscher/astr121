class NavMenu extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
			<header>
				<nav>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="about.html">About</a></li>
						<li class="dropdown">
							<a href="javascript:void(0)" class="dropbtn">Resources</a>
							<div class="dropdown-content">
								<a href="mission-planning-calculator.html">Mission Planning Calculator</a>
								<a href="marsbound-cards-edited.pdf" target="_blank">Pros and Cons of Components (pdf)</a>
								<a href="part-descriptions.html">Part Descriptions</a>
								<a href="list-of-launcher-families.html">Launcher Families</a>
							</div>
						</li>
						<li><a href="https://satellitebuilder.org.uk/index.html">Satellite Builder</a></li>
						<li><a href="http://chrisnorth.github.io/design-a-space-telescope/#intro">Space Telescope Designer</a></li>
					</ul>
				</nav>
			</header>
		`;
	}
}

customElements.define('nav-menu', NavMenu);

class Footer extends HTMLElement {
  constructor () {
    super();
  }
  
  static get observedAttributes () { return ["rev-date"]; }
  attributeChangedCallback (name, oldVal, newVal) {
    if (name=="rev-date") { this.innerHTML = `
		<div class="footer">
			<address>
				Elijah Goossen<br>
				<a href="mailto:ljhgssn@dordt.edu">ljhgssn@dordt.edu</a><br>
				Last updated:` + newVal + `
			</address>
			Developed under the  <a href="http://www.ipalgroup.org/oer" target="_blank">Iowa Private Academic Libraries Open Education Research Grant</a>
		</div>
	`;}
  }
}

customElements.define("my-footer", Footer);