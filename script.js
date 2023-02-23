// Add an event listener to the image
document.getElementById("image").addEventListener("mouseenter", function() {
	this.classList.add("obscured");
});

document.getElementById("image").addEventListener("animationend", function() {
	if (this.classList.contains("obscured")) {
		this.classList.remove("obscured");
		this.classList.add("unobscured");
	}
	else if (this.classList.contains("unobscured")) {
		this.classList.remove("unobscured");
	}
});
