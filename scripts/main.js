
Events.on(ClientLoadEvent, () => {
	let serp = Planets.serpulo;
	let modGenerator = extend(SerpuloPlanetGenerator, {
		findLaunchCandidate: function(destination, selected) {
			if (selected != null)
			{
				return selected;
			}
			return this.super$findLaunchCandidate(destination, selected);
		}
	});
	serp.generator = modGenerator;
});
