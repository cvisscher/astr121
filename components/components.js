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
								<a href="marsbound-cards-edited.pdf" target="_blank">Pros and Cons of Components (pdf)</a>
								<a href="https://satellitebuilder.org.uk/index.html" target="_blank">Satellite Builder</a>
								<a href="http://chrisnorth.github.io/design-a-space-telescope/#intro" target="_blank">Space Telescope Designer</a>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		`;
	}
}

customElements.define('nav-menu', NavMenu);

class DesignMenu extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		this.innerHTML = `
			<br>
			<b>Design Steps</b><br>
			<a href="scientific-instruments.html">Scientific Instruments</a><br>
			<a href="components.html">Other Components</a><br>
			<a href="power.html">Power Source</a><br>
			<a href="propulsion.html">Propulsion</a><br>
			<a href="launch-vehicles.html">Launch Vehicle</a><br>
		`;
	}
}

customElements.define('design-menu', DesignMenu);

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
				Last updated: ` + newVal + `
			</address>
			Developed under the  <a href="http://www.ipalgroup.org/oer" target="_blank">Iowa Private Academic Libraries Open Education Research Grant</a>
		</div>
	`;}
  }
}

customElements.define("my-footer", Footer);