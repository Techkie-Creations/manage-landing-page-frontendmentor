$(".menu").click(() => {
	$(".nav").addClass("on");
	$(".nav.on").slideDown();
	$(".menu-close").css("display", "block");
	$(".menu").css("display", "none");
	$(".veil").fadeIn();
	$("body").css("overflow", "hidden");
});

$(".menu-close, .veil, .nav.on ul li").click(() => {
	$(".nav.on").slideUp();
	$(".menu-close").css("display", "none");
	$(".menu").css("display", "block");
	$(".veil").fadeOut();
	$("body").css("overflow", "auto");
});

window.addEventListener("resize", () => {
	if (window.innerWidth > 838) {
		$(".menu").css("display", "none");
		$(".menu-close").css("display", "none");
		$(".veil").fadeOut();
		$(".nav").removeClass("on");
		$(".nav").slideDown();
		$("body").css("overflow", "auto");
	} else {
		if ($(".menu-close").css("display") == "none") {
			$(".menu").css("display", "block");
		} else {
			$(".menu").css("display", "none");
		}
	}
});

let News = () => {
	let [state, setState] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let input = $("#inp").val();
		let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!regex.test(input)) {
			setState("is-invalid");
			$("#helper").text("Invalid email address");
		} else {
			setState("");
			$("#inp").val("");
			$("#helper").text("");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div class="form-group">
				<input
					type="email"
					class={`form-control ${state}`}
					id="inp"
					aria-describedby="emailHelp"
					placeholder="Updates in your inbox…"
				/>
				<small id="helper" class="form-text text-muted"></small>
			</div>
			<button type="submit" className="btn cta major lasts">
				Go
			</button>
		</form>
	);
};

ReactDOM.render(<News />, document.getElementById("news"));
