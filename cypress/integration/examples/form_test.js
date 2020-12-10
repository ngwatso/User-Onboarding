describe("Render app on screen", () => {
	it("Renders page", () => {
		cy.visit("http://localhost:3000");
	});
});

describe("Grab name input and type name into it", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Selects name input", () => {
		cy.get("#name");
	});
	it("Enters name into input", () => {
		cy.get("#name")
			.should("have.value", "")
			.type("Jim Halpert")
			.should("have.value", "Jim Halpert");
	});
});

describe("Grab email input and type email into it", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Selects email input", () => {
		cy.get("#email");
	});
	it("Enters email into input", () => {
		cy.get("#email")
			.should("have.value", "")
			.type("jhalpert@dundermifflin.com")
			.should("have.value", "jhalpert@dundermifflin.com");
	});
});

describe("Grab password input and type password into it", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Selects password input", () => {
		cy.get("#password");
	});
	it("Enters password into input", () => {
		cy.get("#password")
			.should("have.value", "")
			.type("thatswhatshesaid")
			.should("have.value", "thatswhatshesaid");
	});
});

describe("Check the Terms of Service box", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Checks TOS checkbox", () => {
		cy.get("#termsOfService").click();
	});
});

describe("Check that form validation is working properly", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Checks that error messages display properly", () => {
		cy.get("#name").type("a").clear().should("have.value", "");

		cy.get('[for="name"] > .error').should(
			"have.text",
			"Name is required"
		);

		cy.get("#email").type("a");

		cy.get('[for="email"] > .error').should(
			"have.text",
			"this must be a valid email"
		);

		cy.get("#email").clear().should("have.value", "");

		cy.get('[for="email"] > .error').should(
			"have.text",
			"Email is required"
		);

		cy.get("#password").type("a").clear().should("have.value", "");

		cy.get("[data-cy=err3]").should("have.text", "Password is required");

		cy.get("#termsOfService").click().click();

		cy.get("[data-cy=err4]").should(
			"have.text",
			"this must be one of the following values: true"
		);
	});
});

describe("Check that the submit button functions properly", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});
	it("Checks that the submit button is disabled until all inputs are filled out", () => {
		cy.get("button").should("be.disabled");

		cy.get("#name")
			.should("have.value", "")
			.type("Jim Halpert")
			.should("have.value", "Jim Halpert");

		cy.get("#email")
			.should("have.value", "")
			.type("jhalpert@dundermifflin.com")
			.should("have.value", "jhalpert@dundermifflin.com");

		cy.get("#password")
			.should("have.value", "")
			.type("thatswhatshesaid")
			.should("have.value", "thatswhatshesaid");

		cy.get("#termsOfService").click();

		cy.get("button").should("not.be.disabled");
	});
});
